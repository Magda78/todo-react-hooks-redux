import React, { useState } from 'react';
import './Item.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useDispatch } from 'react-redux';
//import { selectDate, selectList } from '../../features/dateSlice';
import { removeItem } from '../../features/dateSlice';

function Item({ id, title }) {
    const dispatch = useDispatch();
    const [done, setDone] = useState(false);

    const toggleHandler = () => {
        setDone(!done)
    }

    const removeHandler = (id) => {
        dispatch(removeItem(id))
        console.log(id)
}
	return (
		<div className="item">
			<div className="item__title">
				<h2>{title}</h2>
			</div>
			<div className="item_icons">
				<CheckCircleOutlineIcon onClick={toggleHandler}/>
                {
                    done === true  ? console.log('t') : console.log('f')
                }
				<DeleteIcon onClick={() => removeHandler(id)}/>
			</div>
		</div>
	);
}

export default Item;
