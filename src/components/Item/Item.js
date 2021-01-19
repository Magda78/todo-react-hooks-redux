import React from 'react';
import './Item.css';
import DeleteIcon from '@material-ui/icons/Delete';

function Item({ id, title }) {
	return (
		<div className="item">
			<div className="item__title">
				<h2>{title}</h2>
			</div>
			<div className="item_icons">
				<DeleteIcon />
			</div>
		</div>
	);
}

export default Item;
