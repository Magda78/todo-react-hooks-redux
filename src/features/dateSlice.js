import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const dateSlice = createSlice({
  name: "date",
  initialState: {
    date: new Date(),
    list: [],
    filtered: []
  },
  reducers: {
    changeDate: (state, action) => {
      state.date = action.payload
      
    },
    addItem: (state, action) => {
        const newItem =  {id: uuid(), date: state.date, title: action.payload};
        state.list.push(newItem);
    },
    filteredList: (state, action) =>  {
            state.filtered = state.list.filter(item => (
                item.date.toString() === action.payload.toString() 
        )
            )
            console.log('filtered from reducer:' , state.filtered)
            console.log('date list from reducer:' ,state.dateList)
            },
        
  }
})

export const { changeDate, addItem, filteredList } = dateSlice.actions;

export const selectDate = state => state.date.date;
export const selectList = state => state.date.list;
export const selectFiltered = state => state.date.filtered;

export default dateSlice.reducer;