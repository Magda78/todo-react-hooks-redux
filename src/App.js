import React, { useState, useEffect } from 'react'; 
import { v4 as uuid } from 'uuid';
import CalendarPicker from './components/Calendar/CalendarPicker'
import './App.css';
import List from './components/List/List'

function App() {
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState([]);
  

  useEffect(() => {
    console.log('input: ' , input)
    console.log('submit', submit)
    
  })

  const handleInput = (e) => {
    setInput(e.target.value);
    e.preventDefault()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newInput =  {id: uuid, title: input};
    setSubmit([...submit, newInput])
    setInput("");
  }

  

  return (
    <div className="App">
      <CalendarPicker />
      <h2>LIST OF THINGS TO DO</h2>
      <form> 
      <input type='text' onChange={handleInput} value={input}/>
      <button type ='submit' onClick={handleSubmit}>ADD</button>
      </form>
      <List submit={submit} />
    </div>
  );
}

export default App;
