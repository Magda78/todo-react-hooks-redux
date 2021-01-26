import React from 'react';
import './FilteredList.css';
import FilteredItem from './'
import { selectList } from '../../features/dateSlice';
import { useSelector } from 'react-redux';

function FilteredList() {
    return (
        <div>
            const list = useSelector(selectList);
    return <div className='list'>{list.map((item) => <Item title={item.title} id={item.id} item={item}/>)}</div>;
        </div>
    )
}

export default FilteredList

