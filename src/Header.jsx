import React from 'react'
import"./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { BusinessCenter, MessageRounded, Notifications } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

const Header = () => {
  const dispatch = useDispatch()
  const logOutOfApp =()=> {
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div className='header'>
        <div className="header__left">
            <img
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" 
             alt="" />
            <div className="header__search">
                <SearchIcon/>
                <input type="text"
                placeholder='Search'
                />
            </div>
        </div>
        <div className="header__right">
            <HeaderOption  Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenter} title="Jobs"/>
            <HeaderOption Icon={MessageRounded} title="Messaging"/>
            <HeaderOption Icon={Notifications} title="Notifications"/>
            <HeaderOption avatar={true} title="me"
            onClick={logOutOfApp}
            />
        </div>
    </div>
  )
}

export default Header