import React from 'react';
import './category.css';
import homeIcon from './Images/homeIcon.png';
import market from './Images/marketIcon.png';
import activeBid from './Images/activebidIcon.png';
import portofolioIcon from './Images/userIcon.png';
import favoriteIcon from './Images/favoriteIcon.png';
import balanceGraph from './Images/graph.png';

export default function Category() {
    return (
        <div className='homemenu_Container'>
            <div className='dashboard'>
                <img src={homeIcon} className="homeIcon" alt="" />
                <span className='Titledashboard'>Dashboard</span>
            </div>
            <div className='Market'>
                <img src={market} className="menuIcon" alt="" />
                <span className='menuTitle'>Market</span>
            </div>
            <div className='activeBid'>
                <img src={activeBid} className="menuIcon" alt="" />
                <span className='menuTitle'>Active Bid</span>
            </div>
            <div className='Portofolio'>
                <img src={portofolioIcon} className="menuIcon" alt="" />
                <span className='menuTitle'>Portofolio</span>
            </div>
            <div className='Favorite'>
                <img src={favoriteIcon} className="menuIcon" alt="" />
                <span className='menuTitle'>Favorite</span>
            </div>

            {/* Top-up-balance section */}
            <div className='topup'>
                <div className='Topupbalance_section'>
                    <div className='balanceTitle'> All Balance</div>
                    <div className='balanceAmount'>$968,00</div>
                    <div className='balanceGraph'>
                    <img src={balanceGraph} className="balanceChartGraph" alt="" />
                    </div>
                    <button type='submit' className='topup_button'>Top up blance</button>
                </div>
            </div>
        </div>
    )
}
