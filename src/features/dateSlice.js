import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialList = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

export const dateSlice = createSlice({
	name: 'date',
	initialState: {
		date: new Date(),
		list: [],
		list: initialList,
		filtered: [],
		afterRemove: [],
		editoo: []
	},
	reducers: {
		changeDate: (state, action) => {
			state.date = action.payload;
		},
		addItem: (state, action) => {
			const newItem = { id: uuid(), date: state.date, title: action.payload.toUpperCase() };
			state.list.push(newItem);
			localStorage.setItem('list', JSON.stringify(state.list));
		},
		filteredList: (state, action) => {
			const filtered = state.list.filter((item) => item.date.toString() === action.payload.toString());
			console.log('filtered from reducer:', state.filtered);
			console.log('date list from reducer:', state.dateList);
		},
		removeItem: (state, action) => {
			state.list = state.list.filter((item) => item.id !== action.payload);
			localStorage.setItem('list', JSON.stringify(state.list));
		},
		editItem: (state, action) => {
      console.log('edited from redux', action.payload)
			const find = state.list.find((item) => (
       item.id == action.payload.id ? item.title = action.payload.title: null,
       localStorage.setItem('list', JSON.stringify(state.list))
      ));
			
		}
	}
});

export const { changeDate, addItem, filteredList, removeItem, editItem } = dateSlice.actions;

export const selectDate = (state) => state.date.date;
export const selectList = (state) => state.date.list;
export const selectFiltered = (state) => state.date.filtered;

export default dateSlice.reducer;
