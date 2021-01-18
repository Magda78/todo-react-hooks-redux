import React from 'react';
import Item from './../Item/Item';
import { selectDate, selectList, selectDateList } from '../../features/dateSlice';
import { useSelector, useDispatch } from 'react-redux';

function List({submit}) {
    const date = useSelector(selectDate);
    const list = useSelector(selectList);
    return (
        <div>
            {
                list.map(item => (
                    <Item 
                    title={item.title}
                    />
                ))
            }
            
        </div>
    )
}

export default List
