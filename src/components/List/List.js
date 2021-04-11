import React from 'react';
import './List.css';
import Item from './../Item/Item';
import { selectList } from '../../features/dateSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';

function List() {
	const list = useSelector(selectList);
	return (
		<div className="list">
			<FlipMove>{list.map((item) => <Item key={item.id} title={item.title} id={item.id} item={item} />)}</FlipMove>
		</div>
	);
}

export default List;
