import React from 'react';
import './topbar.css';
import Logo from './Img/Logo.png';
import notificationbox from './Img/NotificationIcon.png';
import Avataruser from './Img/avatar.png'


export default function Topbar() {
    return (
        <section>
            <div className='navbar'>
                <div className='logoFormat'>
                    <img src={Logo} className="dashboardlogo" alt="logo" />
                </div>
                <div className='iconCategory'>
                    <div className='searchMenu'>
                        <i class="fa-solid fa-magnifying-glass"></i>

                        <div className='searchbar'><input type="text"
                            placeholder=" Search"
                            name="search" className='search' /></div>
                    </div>
                    <div className='modes'></div>
                    <div className='notification'>
                        <img src={notificationbox} className="notificationIcon" alt="" />
                    </div>
                </div>
                <div className='userInfo'>
                    <div className='userdescription'>
                        <p className='avatarName'>Mas Poci</p>
                        <p className='avater-version'>Trial</p>
                    </div>
                    <div>
                    <img src={Avataruser} className="avatar" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
