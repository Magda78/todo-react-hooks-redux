import React from 'react';
import { selectDate, selectList } from '../../features/dateSlice';
import { useSelector, useDispatch } from 'react-redux';

function Item({id, title}) {
    const date = useSelector(selectDate);
    const list = useSelector(selectList);
    return (
        <div>
            <h2>{title}</h2>

        </div>
    )
}

export default Item