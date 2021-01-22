import React from 'react';
import './List.css';
import Item from './../Item/Item';
import { selectList } from '../../features/dateSlice';
import { useSelector } from 'react-redux';

function List() {
    const list = useSelector(selectList);
    return <div className='list'>{list.map((item) => <Item title={item.title} id={item.id}/>)}</div>;


}

export default List;
