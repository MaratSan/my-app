import React from 'react';
import TodoItem from '../components/TodoItem';
import {useSelector} from 'react-redux';

const TodoList = () => {
	const todos = useSelector(state => state.todos);

	return (
		<div className="mt-5">
			{todos.map(todo =>
				<TodoItem
					key={todo._id}
					todo={todo}
				/>
			)}
		</div>
	);
};

export default TodoList;
