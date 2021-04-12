import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectDate } from '../../features/dateSlice';
import { changeDate, filteredList } from '../../features/dateSlice';

function CalendarPicker() {
	const dispatch = useDispatch();
	const date = useSelector(selectDate);

	const onChange = (newDate) => {
		dispatch(changeDate(newDate));
	};

	const handleDateSelect = (date) => {
		dispatch(filteredList(date));
	};

	return (
		<div>
			<Calendar onChange={onChange} onClickDay={handleDateSelect} className="calendar" value={date} />
			<div />
		</div>
	);
}

export default CalendarPicker;
