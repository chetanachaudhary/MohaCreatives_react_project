import React from 'react';
import './decrementratebox.css';
import expendituregraph from './Images/Expenditure_graph.png';
import shadowgraph from './Images/Expenditure_graph_shadow.png';
import incomegraph from './Images/Income_graph.png';
import savingraph from './Images/saving_Graph.png';

export default function Decrementratebox() {
    return (
        <div className='decrement_rate_box'>
            <div className='expenditureContainer'>
                <div className='expenditureTitle'>Expenditure</div>
                <div className='expenditureDetails'>
                    <div className='expenditureAmount'>
                        <span className='values'>-0,2%</span>
                        <p className='downRate'>Down 10%</p>
                    </div>
                    <div className='expenditureGraph'>
                        <img src={expendituregraph} className="graphExpenditure" alt="" />
                        <img src={shadowgraph} className="shadowGraph" alt="" />

                    </div>
                </div>


            </div>
            <div className='expenditureContainer'>
                <div className='expenditureTitle'>Income</div>
                <div className='expenditureDetails'>
                    <div className='expenditureAmount'>
                        <span className='values'>+5%</span>
                        <p className='downRate'>Up 17%</p>
                    </div>
                    <div className='incomeGraph'>
                        <img src={incomegraph} className="incomeExpenditure" alt="" />
                    </div>
                </div>


            </div>
            <div className='expenditureContainer'>
                <div className='expenditureTitle'>Saving</div>
                <div className='expenditureDetails'>
                    <div className='expenditureAmount'>
                        <span className='values'>-2,7%</span>
                        <p className='downRate'>Down 20%</p>
                    </div>
                    <div className='savingGraph'>
                        <img src={savingraph} className="savingExpenditure" alt="" />
                    </div>
                </div>


            </div>

        </div>
    )
}
