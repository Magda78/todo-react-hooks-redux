import React, { useState, useEffect } from 'react';
import Banner from './components/Banner/Banner';
import CalendarPicker from './components/Calendar/CalendarPicker';
import './App.css';
import List from './components/List/List';
import { useSelector, useDispatch } from 'react-redux';
import { selectDate, selectList } from './features/dateSlice';
import { addItem, changeDate } from './features/dateSlice';
import FilteredList from './components/FilteredList/FilteredList';
import Motto from './components/Motto/Motto';

function App() {
  const [ input, setInput ] = useState('');
  const quote = Motto();
	//const [submit, setSubmit] = useState([]);
	const dispatch = useDispatch();
  const date = useSelector(selectDate);
  const list = useSelector(selectList);
  
  
 

  /*useEffect(() => {
    setStorage(localStorage.setItem('list', JSON.stringify(list)))
  },[list])*/

 

	const handleInput = (e) => {
		setInput(e.target.value);
		e.preventDefault();
	};

	const handleSubmit = (e) => {
		dispatch(addItem(input));
    console.log('input from input:', input);
    setInput('');
		e.preventDefault();
	};
	return (
		<div className="app">
			<div className="app__content">
				<Banner />
        <div className='app__motto'>
        <h2>{quote}</h2>
          </div>
        
				<div className="app__calendar">
					<div className="app__calendar__form">
						<input type="text" onChange={handleInput} value={input} placeholder="Add todo....." />
						<button type="submit" onClick={handleSubmit}>
							ADD
						</button>
					</div>
				</div>
				<div className="app__todos">
					<div className="app__todos__list">
						<p>All todos</p>
            	<List /> 
					</div>
					<div className="app__tosos__byDay">
						<p>Todos by date</p>
						<FilteredList />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
