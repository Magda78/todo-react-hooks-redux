import React, { useState, forwardRef } from 'react';
import './Item.css';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import { removeItem, editItem } from '../../features/dateSlice';
import { useSpring, animated } from 'react-spring';
import CheckIcon from '@material-ui/icons/Check';

//function Item ({ id, title, item }) {
	const Item = forwardRef(({id, title, item}, ref) => {	
const dispatch = useDispatch();
	const [ done, setDone ] = useState(false);
	const [ edit, setEdit ] = useState(false);
	const [ input, setInput ] = useState('');

	const toggleHandler = () => {
		setDone(!done);
	};

	const removeHandler = (id) => {
		dispatch(removeItem(id));
		console.log(id);
	};

	const itemAdd = useSpring({
		from: { marginTop: -100 },
		to: { marginTop: 0 }
	});

	const editHandlerOpen = (input) => {
		setEdit(!edit);
		console.log('item', item);
		dispatch(editItem({ ...item, title: input.toUpperCase() }));
		console.log(item);
	};

	const editInputHandler = (e) => {
		setInput(e.target.value);
		e.preventDefault();
	};

	return (
		<div className="item" style={itemAdd} ref={ref}>
			<div className={done === false ? 'item__title' : 'item__titleDone'}>
				{edit ? (
					<input
						type="text"
						placeholder="click here..."
						onChange={editInputHandler}
						className="item__input"
					/>
				) : (
					<h2>{title}</h2>
				)}
			</div>
			<div className="item__icons">
				<button>
					{done === false ? (
						<CheckBoxOutlineBlankIcon onClick={toggleHandler} />
					) : (
						<CheckBoxIcon onClick={toggleHandler} />
					)}
				</button>
				{done === false ? (
					<button onClick={() => editHandlerOpen(input)}>{edit ? <CheckIcon /> : <EditIcon />}</button>
				) : (
					<button disabled="true">
						<EditIcon />
					</button>
				)}

				<button>
					<DeleteIcon onClick={() => removeHandler(id)} />
				</button>
			</div>
		</div>
	);
}
	)

export default Item;
