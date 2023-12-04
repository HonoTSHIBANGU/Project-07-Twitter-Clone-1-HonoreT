import React from 'react'
import LogoTwitter from '../images/Twitter.png'
import Accueil from '../images/Home-Fill.png'
import Explore from '../images/Explore.png'
import Notifications from '../images/Notifications.png'
import Messages from '../images/Messages.png'
import Bookmarks from '../images/Bookmarks.png'
import Listes from '../images/Lists.png'
import Profile from '../images/Profile.png'
import More from '../images/More.png'





function SideBar() {
    return (
        <div className='left-sidebar'>
            <img src={LogoTwitter} alt="" />
            <img src={Accueil} alt="" />
            <img src={Explore} alt="" />
            <img src={Notifications} alt="" />
            <img src={Messages} alt="" />
            <img src={Bookmarks} alt="" />
            <img src={Listes} alt="" />
            <img src={Profile} alt="" />
            <img src={More} alt="" />
        </div>

    )
}

export default SideBar