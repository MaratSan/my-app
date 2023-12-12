import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
	name: 'todos',
	initialState: [
	  {
		_id: 'sdjkhfbv',
		title: 'Finish',
		isCompleted: false
	  },
	  {
		_id: 'bgfd',
		title: 'Read next',
		isCompleted: false
	  },
	  {
		_id: 'nhgf',
		title: 'Send the finish',
		isCompleted: false
	  }
	],
	reducers: {
		createTodo: (state, action) => {
			return [
			  {
				_id: Date.now(),
				...action.payload,
			  },
			  ...state
			];
		  },
	  updateTodo: (state, action) => {
		return state.map((todo) =>
		  todo._id === action.payload._id ? action.payload : todo
		);
	  },
	  deleteTodo: (state, action) => {
		return state.filter((todo) => todo._id !== action.payload._id);
	  }
	}
  });
  
  export const { createTodo, updateTodo, deleteTodo } = todosSlice.actions;
  export default todosSlice.reducer;
  