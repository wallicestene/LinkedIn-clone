import React, { useEffect, useState } from 'react'
import "./Feed.css"
import BorderColorIcon from '@mui/icons-material/BorderColor';
import InputOption from './InputOption';
import { CalendarViewDay, EventNoteRounded, Image, Subscriptions } from '@mui/icons-material';
import Post from './Post';
import { db } from "./firebase"
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
const Feed = () => {
    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([])
    const user = useSelector(selectUser)

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestap", "desc")
        .onSnapshot((snapshot) => 
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        )
        )
    }, [])

    const sendPost =(e) =>{ 
        e.preventDefault()
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoURL || "",
            timestap: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("")
    }
  return (
    <div className="feed">
        <div className="feed__inputContainer">
        <div className="feed__input">
            <BorderColorIcon/>
            <form>
                <input type="text" onChange={(e) => setInput(e.target.value)} value={input} name='input'/>
                <button onClick={sendPost}>Send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
            <InputOption Icon={Image} title="Photo" color="#70B5F9"/>
            <InputOption Icon={Subscriptions} title="Video" color="#E7A33E"/>
            <InputOption Icon={EventNoteRounded} title="Event" color="#C0CBCD"/>
            <InputOption Icon={CalendarViewDay} title="Write artical" color="#7FC15E"/>
        </div>
    </div>
    {/* posts */}
    <FlipMove>
         {posts.map(({id, data:{name, description, message, photoUrl} } )=>(
     <Post
     key={id}
     name={name}
     description={description}
     message={message}
     photoUrl={photoUrl}
     />
    ))}
    </FlipMove>
    {/* <Post 
     name="Wallace Waweru"
     description="This is a test"
     message="Wow this worked" /> */}
    </div>
  )
}

export default Feed