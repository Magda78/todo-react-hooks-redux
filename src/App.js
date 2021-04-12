import React, { useState, useRef } from 'react';
import Banner from './components/Banner/Banner';
import './App.css';
import List from './components/List/List';
import { useDispatch } from 'react-redux';
import { addItem } from './features/dateSlice';
import Warning from './components/Warning/Warning';

function App() {
	const [ input, setInput ] = useState('');
	const [ error, setError ] = useState(false);
	const dispatch = useDispatch();
	const userInput = useRef('');

	const handleInput = (e) => {
		setInput(userInput.current.value);
		e.preventDefault();
	};

	const handleSubmit = (e) => {
		if (input.length === 0) {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 2000);
		} else {
			dispatch(addItem(input));
			console.log('input from input:', input);
		}
		setInput('');
		e.preventDefault();
	};

	return (
		<div className="app">
			
			<div className="app__content">
				<Banner />
				<div className="app__calendar">
					<div className="app__calendar__form">
						<form className="app__calendar__formTag">
							<input
								type="text"
								onChange={handleInput}
								value={input}
								placeholder="Add todo....."
								ref={userInput}
							/>
							<button type="submit" onClick={handleSubmit}>
								ADD
							</button>
						</form>
						{error && <Warning />}
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
