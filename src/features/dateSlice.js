import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialList = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

const initialFilteredList = initialList.filter((item) => {
	return new Date(item.date).toLocaleDateString('en-GB') === new Date().toLocaleDateString('en-GB');
});

export const dateSlice = createSlice({
	name: 'date',
	initialState: {
		date: new Date(),
		list: initialList,
		filtered: initialFilteredList,
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
			state.filtered.push(newItem);
			localStorage.setItem('list', JSON.stringify(state.list));
		},
		filteredList: (state, action) => {
			state.filtered = state.list.filter((item) => {
				return (
					new Date(item.date).toLocaleDateString('en-GB') ===
					new Date(action.payload).toLocaleDateString('en-GB')
				);
			});
		},
		removeItem: (state, action) => {
			state.list = state.list.filter((item) => item.id !== action.payload);
			state.filtered = state.filtered.filter((item) => item.id !== action.payload);
			localStorage.setItem('list', JSON.stringify(state.list));
		},
		editItem: (state, action) => {
			const find = state.list.find(
				(item) => (
					item.id === action.payload.id ? (item.title = action.payload.title) : null,
					localStorage.setItem('list', JSON.stringify(state.list))
				)
			);
			const findFiltered = state.filtered.find(
				(item) => (item.id === action.payload.id ? (item.title = action.payload.title) : null)
			);
		}
	}
});

export const { changeDate, addItem, filteredList, removeItem, editItem } = dateSlice.actions;

export const selectDate = (state) => state.date.date;
export const selectList = (state) => state.date.list;
export const selectFiltered = (state) => state.date.filtered;

export default dateSlice.reducer;
