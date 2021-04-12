import React, { useState, forwardRef, useRef } from 'react';
import './Item.css';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import { removeItem, editItem } from '../../features/dateSlice';
import CheckIcon from '@material-ui/icons/Check';

//function Item ({ id, title, item }) {
const Item = forwardRef(({ id, title, item }, ref) => {
	const dispatch = useDispatch();
	const [ done, setDone ] = useState(false);
	const [ edit, setEdit ] = useState(false);
	const [ input, setInput ] = useState(title);
	const inputEdit = useRef('');

	const toggleHandler = () => {
		setDone(!done);
	};

	const removeHandler = (id) => {
		dispatch(removeItem(id));
	};

	const editHandlerOpen = (input) => {
		dispatch(editItem({ ...item, title: input.toUpperCase() }));
		setEdit(!edit);
	};

	const editInputHandler = (e) => {
		setInput(inputEdit.current.value);
		e.preventDefault();
	};

	return (
		<div className="item" ref={ref}>
			<div className={done === false ? 'item__title' : 'item__titleDone'}>
				{edit ? (
					<input
						ref={inputEdit}
						type="text"
						placeholder="click here..."
						onChange={editInputHandler}
						className="item__input"
						value={input}
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
});

export default Item;
