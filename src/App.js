import React, { useState } from 'react';
import Banner from './components/Banner/Banner';
import './App.css';
import List from './components/List/List';
import { useDispatch } from 'react-redux';
import { addItem } from './features/dateSlice';
//import FilteredList from './components/FilteredList/FilteredList';

function App() {
	const [ input, setInput ] = useState('');
	const dispatch = useDispatch();

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

	const handleAlert = () => {
		alert('Nothing to add');
	};

	return (
		<div className="app">
			<div className="app__content">
				<Banner />
				<div className="app__calendar">
					<div className="app__calendar__form">
						<form className="app__calendar__formTag">
							<input type="text" onChange={handleInput} value={input} placeholder="Add todo....." />
							{input.length === 0 ? (
								<button onClick={handleAlert}>ADD</button>
							) : (
								<button type="submit" onClick={handleSubmit}>
									ADD
								</button>
							)}
						</form>
					</div>
				</div>
				<div className="app__todos">
					<div className="app__todos__list">
						<h2>All todos</h2>
						<List />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
