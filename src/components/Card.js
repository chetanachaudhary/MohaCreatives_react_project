import React from 'react';
import './card.css';
import bluecard from './Images/blue_card.png';
import purpleCard from './Images/purple_card.png';

export default function Card() {
  return (
    <div className='myCard_container'>
      <div className='myCard_details'>
        <div className='cardTitle'>My card</div>
        <div className='card_learnMore'>...</div>
      </div>
      <div className='cardAmount'>$968,00</div>
      <div className='blueCardsInfo'>

        <div className='balance_mycard_Info'>
          <img src={bluecard} alt="" className='cardImage' />
          <div className='balance_mycard_details'>
            <div className='balanceTitles'>Your Balance</div>
            <div className='amount_info_MyCard'>$568,00</div>
            <div className='pinNumber'>.... 3490</div>
            <div className='card_Date'>32/12</div>
          </div>
        </div>


      </div>
      <div className='purpleCardsInfo'>
      <div className='balance_mycard_Info'>
          <img src={purpleCard} alt="" className='cardImage_purple' />
          <div className='balance_mycard_details_purpleCard'>
            <div className='balanceTitles'>Your Balance</div>
            <div className='amount_info_MyCard'>$400,00</div>
            <div className='pinNumber'>.... 3321</div>
            <div className='card_Date'>32/12</div>
          </div>
        </div>

      </div>


    </div>
  )
}
