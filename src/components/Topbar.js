import React, { useState } from 'react';
import './topbar.css';
import Logo from './Img/Logo.png';
import notificationbox from './Img/NotificationIcon.png';
import Avataruser from './Img/avatar.png';
import Category from './Category';
import Decrementratebox from './Decrementratebox';
import Card from './Card';
import Communication from './Communication';
import sun from './Img/sunIcon.png';
import moon from './Img/moonIcon.png';
import Static from './Static';
import Quicktransfer from './Quicktransfer';
import Upgrade from './Upgrade';
import sunsolid from './Images/Sun_solid.png';
import moonsolid from './Images/Moon_solid.png';
import notifdarkmode from './Images/notif_darkmode.png';




export default function Topbar() {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode(true);
    };

    const handleLightMode = () => {
        setDarkMode(false);
    };
    return <>
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
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


                        <div className='modes'>


                            <button onClick={handleLightMode} className='Light_Mode'>
                                <img src={sun} className="sunIcon" alt="" />
                                <img src={sunsolid} className="sunsolidIcon" alt="" />
                                Light</button>
                            <button onClick={handleDarkMode} className='Dark_Mode'>
                                <img src={moon} className="sunIcon" alt="" />
                                <img src={moonsolid} className="sunsolidIcon" alt="" />
                                Dark</button>


                        </div>


                        <div className='notification'>
                            <img src={notificationbox} className="notificationIcon" alt="" />
                            <img src={notifdarkmode} className="notificationIcondark" alt="" />
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
                <div className="homeContainer">
                    <Category />
                    <Decrementratebox />
                    <Card />
                    <Communication />
                </div>

                <div className='Static'>
                    <Static />
                    <Quicktransfer />
                    <Upgrade />

                </div>



            </section>
        </div>





    </>
}
