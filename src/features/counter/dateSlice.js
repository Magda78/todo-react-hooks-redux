import { createSlice } from '@reduxjs/toolkit';

export const dateSlice = createSlice({
  name: 'date',
  initialState: {
    date: new Date(),
  },
  reducers: {
    changeDate: (state, action) => {
      
      state.date = action;
    },
  }
});

export const { changeDate } = dateSlice.actions;


export const selectDate = state => state.cdate.value;

export default dateSlice.reducer;
