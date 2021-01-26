import React from 'react';
import './Banner.css';
import CalendarPicker from '../../components/Calendar/CalendarPicker';
import Motto from '../Motto/Motto';

function Banner() {
	const quote = Motto();
	return (
		<div className="banner">
			<div className="banner__left">
				<CalendarPicker />
			</div>
			<div className="banner__right">
				<h2>{quote}</h2>
			</div>
		</div>
	);
}

export default Banner;
