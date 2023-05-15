import React, { useState } from 'react'
import "./Login.css"
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

const Login = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [profilePic, setProfilePic] =useState("")
  const dispatch = useDispatch()

  const loginToApp =(e)=>{
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoURL: userAuth.user.profilePic
      }))
    }).catch(error => alert(error))
  }
  const register = ()=>{
    if(!name){
      return alert("please enter a full name")
    }
    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic
      })
      .then(() =>{
        dispatch(
          login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profilePic
        }))
      })
    }).catch(error => alert(error))

  }
  return (
    <div className="login">
      <img src="data:image/png;base64,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" alt="" />
    <form action="">
      <input type="text" 
      placeholder='Full name required if registering'
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <input type="text"
      placeholder='Profile pic URL (optional)'
      value={profilePic}
      onChange={(e) =>setProfilePic(e.target.value)}
      />
      <input type="email"
      placeholder='Email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <input type="password" 
      placeholder='Password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginToApp}>Sign in</button>
    </form>
    <p>Not a member? {" "}
      <span className='login__register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login