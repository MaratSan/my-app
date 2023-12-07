import React, {useState} from 'react';
import TodoItem from './item/TodoItem';
import CreateTodoForm from './createTodoField/CreateTodoForm';
import {useSelector} from 'react-redux';

const Home = () => {
	const todos = useSelector(state => state.todos);

	return (
		<div className='text-white w-4/5 mx-auto'>
			<h1 className='font-bold text-center mb-8'>
				Todo Marat
			</h1>
			<CreateTodoForm />
			<div className="mt-5">
				{todos.map(todo =>
					<TodoItem
						key={todo._id}
						todo={todo}
					/>
				)}
			</div>
		</div>
	);
};

export default Home;
