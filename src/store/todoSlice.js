import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		list: [],
	},
	reducers: {
		addTodo: (state, action) => {
			state.list.push(action.payload);
		},
		removeTodo: (state, action) => {
			state.list.filter((todo) => todo.id !== action.payload);
		},
		toggleTodo: (state, action) => {
			const todo = state.list.find((todo) => todo.id === action.payload);
			if (todo) todo.completed = !todo.completed;
		},
	},
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
