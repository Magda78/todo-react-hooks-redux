import React from 'react';
import './FilteredItem.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function FilteredItem({ id, title }) {
	return (
		<div className="filteredItem">
			<div className="filteredItem__title">
				<h2>{title}</h2>
			</div>
			<div className="filteredItem_icons">
				<EditIcon />
				<DeleteIcon />
			</div>
		</div>
	);
}

export default FilteredItem;