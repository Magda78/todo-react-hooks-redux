import React from 'react';
import './Banner.css';
import bannerImg from '../assets/casual-life-3d-likes-1.png';
import CalendarPicker from '../../components/Calendar/CalendarPicker';

function Banner() {
    return (
        <div className='banner'>
            <div className='banner__left'>
                <img src={bannerImg} />
            </div>
            <div className='banner__right'>
                
                <CalendarPicker />
            </div>
        </div>
    )
}

export default Banner
