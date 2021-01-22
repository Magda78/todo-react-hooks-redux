import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const dateSlice = createSlice({
  name: "date",
  initialState: {
    date: new Date(),
    list: [],
    filtered: [],
    afterRemove: []
  },
  reducers: {
    changeDate: (state, action) => {
      state.date = action.payload
      
    },
    addItem: (state, action) => {
        const newItem =  {id: uuid(), date: state.date, title: action.payload.toUpperCase()};
        state.list.push(newItem);
    },
    filteredList: (state, action) =>  {
            const filtered = state.list.filter(item => (
                item.date.toString() === action.payload.toString() 
            )
            )
            console.log('filtered from reducer:' , state.filtered)
            console.log('date list from reducer:' ,state.dateList)
            },
    removeItem: (state, action) => {
        state.list = state.list.filter(item => (
            item.id !==action.payload
        ))
        
    },
  }
})

export const { changeDate, addItem, filteredList, removeItem} = dateSlice.actions;

export const selectDate = state => state.date.date;
export const selectList = state => state.date.list;
export const selectFiltered = state => state.date.filtered;

export default dateSlice.reducer;