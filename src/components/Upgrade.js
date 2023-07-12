import React from 'react';
import './upgrade.css';
import upgrade_background from './Images/upgrade_background.png'
import { Link } from 'react-router-dom';

export default function Upgrade() {
  return (
    <div className='upgrade_container'>
        <div>
            <img src={upgrade_background} alt="" className='upgrade_background' />
        </div>
        <div className='upgrade_Details'>
            <div className='upgrade_title'>Upgarde Now</div>
            <div className='upgrade_Info'>To get a better experience from us, let's upgrade now</div>
            <Link to='/Transfer'>
            <div>
                <button className='upgradeButton'>Upgrade</button>
            </div>
            </Link>
        </div>
      
    </div>
  )
}
