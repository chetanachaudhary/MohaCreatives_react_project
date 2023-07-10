import React from 'react';
import './quicktransfer.css';
import ladymusic from './Images/avatar_musicLady.png';
import hatman from './Images/avatar_hatMan.png';
import man from './Images/avatar_Man.png';
import student from './Images/avatar_student.png';
import child from './Images/avatar_child.png';
import sent from './Images/sent_icon.png';

export default function Quicktransfer() {
  return (
    <div className='quick_transfer_Container'>
        <div className='quick_transfer_Title'>Quick Transfer</div>
        <div className='avatar_Container'> 
            <div>
                <img src={ladymusic} alt="" className='Avatars'/>
            </div>
            <div>
            <img src={hatman} alt="" className='Avatars'/>
            </div>
            <div>
            <img src={man} alt="" className='Avatars'/>
            </div>
            <div>
            <img src={student} alt="" className='Avatars'/>
            </div>
            <div>
            <img src={child} alt="" className='Avatars'/>
            </div>
            <div className='addbutton'>
                <button className='buttonAdd' type='submit'>+</button>
            </div>
        </div>
        <div className='amountInfo'>Amount</div>
        <div className='transfer_amount_detail'>
          <div className='transfer_value'>$323.00</div>
          <button className='transfer_button' type='submit'>
          Transfer
          <img src={sent} alt="" className='sent_Icon'/>

          </button>
        </div>
      
    </div>
  )
}
