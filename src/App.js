import React, { useState, useEffect } from 'react'; 
//import { v4 as uuid } from 'uuid';
import Banner from './components/Banner/Banner'
import CalendarPicker from './components/Calendar/CalendarPicker'
import './App.css';
import List from './components/List/List';
import { useSelector, useDispatch } from 'react-redux';
import { selectDate } from './features/dateSlice';
import { addItem, changeDate } from './features/dateSlice';
import FilteredList from './components/FilteredList/FilteredList';

function App() {
  const [input, setInput] = useState("");
  //const [submit, setSubmit] = useState([]);
  const dispatch = useDispatch();
  const date = useSelector(selectDate);

  useEffect(() => {
    console.log('input: ' , input)
    //console.log('submit', submit)
    
  })

  const handleInput = (e) => {
    setInput(e.target.value);
    e.preventDefault()
  }

  const handleSubmit = (e) => {
    dispatch(addItem(input))
    console.log('input from input:',input)
    e.preventDefault()
    //const newInput =  {id: uuid(), date: date, title: input};
    //setSubmit([...submit, newInput])
    //setInput("");
  }
  return (
    <div className="app">
      <div className="app__content">
      <Banner />
        <div className='app__calendar'>
          <div className='app__calendar__dataPicker'>
            <CalendarPicker />
          </div>
          <div className='app__clendar__form'>
          
      
      <input type='text' onChange={handleInput} value={input} placeholder='Add todo.....'/>
      <button type ='submit' onClick={handleSubmit}>ADD</button>
      
          </div>
        
        </div>
      <div className='app__todos'>
        <h2>List todos</h2>
      <List />
      <h2>Things to do on: </h2>
      <FilteredList />
      </div>
      
      </div>
    </div>
  );
}

export default App;
