import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'
const Sidebar = () => {
    const recentItem = (topic) =>(
        <div className="sidebar-recentItem">
            <span className='sidebar-hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    const user = useSelector(selectUser)
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="data:image/jpeg;base64,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" 
            alt="" />
            <Avatar className='sidebar__avatar' src={user.photoURL}>
                {user.email[0].toUpperCase()}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>who viewed you</p>
                <p className="sidebar__statNumber">
                    2,524
                </p>
            </div>
            <div className="sidebar__stat">
            <p>Total views</p>
            <p className="sidebar__statNumber">
                    2,524
                </p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("ReactJs")}
            {recentItem("Programming")}
            {recentItem("Software Engineering")}
            {recentItem("Design")}
            {recentItem("Developer")}
        </div>
    </div>
  )
}

export default Sidebar