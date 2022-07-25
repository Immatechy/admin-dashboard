import React from 'react';
import "./topbar.css";
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">TPadmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />    
                </div>
               <img src='https://i.pinimg.com/474x/17/f1/09/17f109316ad50298002f2ca7bcefc7a6.jpg' alt='' className='topAvatar' />
            </div>
        </div>
    </div>
  )
}

