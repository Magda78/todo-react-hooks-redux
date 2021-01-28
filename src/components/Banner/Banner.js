import React from 'react';
import './Banner.css';
import CalendarPicker from '../../components/Calendar/CalendarPicker';
import Motto from '../Motto/Motto';

function Banner() {
    const quote = Motto();
    //const title = Motto();
    //const author = Motto()
	return (
		<div className="banner">
			<div className="banner__left">
				<CalendarPicker />
			</div>
			<div className="banner__right">
				<h2>{quote[0]}</h2>
                <h2>{quote[1]}</h2>
			</div>
		</div>
	);
}

export default Banner;
