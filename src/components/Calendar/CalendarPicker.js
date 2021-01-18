import React, { useState } from 'react';
//import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { useSelector, useDispatch } from 'react-redux';
import { selectDate, selectList } from '../../features/dateSlice';
import { changeDate, filteredList} from '../../features/dateSlice';
import List from '../List/List';
import Item from '../Item/Item';
import FilteredList from '../FilteredList/FilteredList';

function CalendarPicker() {
    const dispatch = useDispatch();
    const date = useSelector(selectDate);
    const list = useSelector(selectList);
    //const dateList = useSelector(selectDateList);
    //const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        dispatch(changeDate(newDate));
        //dispatch(filteredList(newDate))
        //alert(`Clicked day:  ${date}`)
        //console.log('change day list', dateList)
    }
    
    const handleDateSelect = (date,event) => {
        dispatch(filteredList(date))
        //console.log('change day list', dateList)
        //alert(`Clicked day:  ${date}`)
    }


    return (
        <div>
            <DatePicker selected={date} onChange={date => onChange(date)} onSelect={date => handleDateSelect(date)} dateFormat="yyyy/MM/dd"/>
        
      {console.log(date)}
      {console.log(list)}
      <div>
      
        </div>
        </div>
        
    )
}

export default CalendarPicker;
