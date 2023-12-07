import {createSlice} from '@reduxjs/toolkit';

export const todosSlice = createSlice({
	name: 'todos', initialState: [
		{
			_id: 'sdjkhfbv', title: 'Finish', isCompleted: false
		},
		{
			_id: 'bgfd', title: 'Read next', isCompleted: false
		},{
			_id: 'nhgf', title: 'Send the finish', isCompleted: false
		}
	],
	reducers: {
		// todo without id
		// dispatch(createTodo(todo)) => todo = action.payload
		createTodo: (state, action) => {
			state.push({
				...action.payload, _id: Date.now()
			});
			/*
			return [
				...state,
				{
					...action.payload,
					_id: Date.now()
				}
			]
			 */
		},
		// todo with id
		// dispatch(updateTodo(todo)) => todo = action.payload
		updateTodo: (state, action) => {
			return state.map(todo => todo._id === action.payload._id ? action.payload : todo);
		},
		// todo with id
		// dispatch(removeTodo(todo)) => todo = action.payload
		deleteTodo: (state, action) => {
			return state.filter(todo => todo._id !== action.payload._id);
		}
	}
});

export const {createTodo, updateTodo, deleteTodo} = todosSlice.actions;
export default todosSlice.reducer;
