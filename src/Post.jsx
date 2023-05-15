import React, {forwardRef} from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import { ChatOutlined, Send, Share, ThumbUpAltOutlined } from '@mui/icons-material'
const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className="post">
        <div className="post__Header">
            <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlined} title="Like"/>
            <InputOption Icon={ChatOutlined} title="Comment"/>
            <InputOption Icon={Share} title="Share"/>
            <InputOption Icon={Send} title="Send"/>
        </div>
    </div>
  )
})

export default Post