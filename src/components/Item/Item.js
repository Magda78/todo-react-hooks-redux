import React, { useState, forwardRef } from 'react';
import './Item.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { useDispatch } from 'react-redux';
//import { selectDate, selectList } from '../../features/dateSlice';
import { removeItem } from '../../features/dateSlice';
import { Spring } from 'react-spring/renderprops';
import FlipMove from 'react-flip-move';

function Item({ id, title }) {
	const dispatch = useDispatch();
    const [ done, setDone ] = useState(false);
    

	const toggleHandler = () => {
		setDone(!done);
	};

	const removeHandler = (id) => {
		dispatch(removeItem(id));
		console.log(id);
	};
	return (
        
            <div className="item">
            
            <div className={done === false ? 'item__title' : 'item__titleDone'}>
              <h2>{title}</h2>
          </div>
          <div className="item_icons">
              {done === false ? (
                  <CheckBoxOutlineBlankIcon onClick={toggleHandler} />
              ) : (
                  <CheckBoxIcon onClick={toggleHandler} />
              )}
              <DeleteIcon onClick={() => removeHandler(id)} />
          </div>
        
          
      </div>
		
	);
}

export default Item;
