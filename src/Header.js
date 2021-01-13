import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header-Left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsUT00Mj85NgtgCmrnNw6p2ksIjfTDteGlSQ&usqp=CAU"></img>
      </div>

      <div className="header-mid">
        <SearchIcon />
        <input placeholder="search mail" type="text" />
        <ArrowDropDownIcon className="header-inputcaret" />
      </div>

      <div className="header-right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <Avatar onClick={signOut} src={user?.photoUrl} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
