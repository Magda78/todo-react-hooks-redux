import React from 'react';
import './FilteredList.css';
import FilteredItem from './../FilteredItem/FilteredItem';
import { selectDate, selectList, selectFiltered } from '../../features/dateSlice';
import { changeDate, filteredList} from '../../features/dateSlice';
import { useSelector, useDispatch } from 'react-redux';

function FilteredList({submit}) {
    const date = useSelector(selectDate);
    const list = useSelector(selectList);
    const filtered = useSelector(selectFiltered);
    return (
        <div className='filteredList'>
            {
                filtered.map(item => (
                    <FilteredItem 
                    title={item.title}
                    
                    />
                ))
                
            }
            
        </div>
    )
}

export default FilteredList