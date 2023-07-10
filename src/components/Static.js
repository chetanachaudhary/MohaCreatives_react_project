import React from 'react';
import './static.css';
import staticCycle from './Images/staticCycle.png';

export default function Static() {
    return (
        <div className='static_Container'>
            <div className='coursedetails'>
                <div className='course'>Course Statistic</div>
                <div className='learnMore'>...</div>
            </div>
            <div className='staticGraph'>
                <div>
                    <img src={staticCycle} alt="" className='static_Cycle_image' />
                </div>
                <div className='cycle_Details'>
                    <div className='staticGraph_Info'>
                        <div className='static_color_coordination'></div>
                        <div className='static_Title'>Spending Money</div>
                    </div>
                    <div className='staticGraph_Info'>
                        <div className='static_color_coordination_orange'></div>
                        <div className='static_Title'>Jajan Ofc</div>
                    </div>
                    <div className='staticGraph_Info'>
                        <div className='static_color_coordination_yellow'></div>
                        <div className='static_Title'>Self Reward </div>
                    </div>
                    <div className='staticGraph_Info'>
                        <div className='static_color_coordination_blue'></div>
                        <div className='static_Title'>Wedding Money</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
