import React from 'react';
import './communication.css';
import bluestaticGraph from './Images/static_graph_blue.png';
import purplestaticGraph from './Images/Static_graph_purple.png';
import dotLines from './Images/dotLines.png';
import incrementGraph from './Images/IncreaseStatus.png';
import monthChart from './Images/months_chart.png';

export default function Communication() {
    return (
            <div className='income_communication_Container'>
                <div className='communication_Info'>
                    <div className='communicationTitle'>
                        <div className='incomeTitle'>Income</div>
                        <div className='communicationTitle_details'>Communication</div>
                    </div>
                    <div className='communication_learnMore'>...</div>
                </div>
                <div className='purblebox'></div>

                <div>
                    <button className='all_card'>All Card</button>
                    <button className='accountNumber'>**** 3490</button>
                    <button className='accountNumber'>**** 3321</button>
                </div>

                <div className='Graph_Info'>
                    <img src={dotLines} alt="" className='dotLine_graph' />

                    <div>
                        <img src={bluestaticGraph} alt="" className='blue_static_graph' />

                    </div>
                    <div>
                        <img src={purplestaticGraph} alt="" className='purple_static_graph' />
                    </div>
                    <div>
                        <img src={incrementGraph} alt="" className='increaseStatus_graph' />
                    </div>
                    <div>
                        <img src={monthChart} alt="" className='month_chart' />
                    </div>


                </div>

            </div>
  )
}
