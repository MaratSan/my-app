import React from 'react';
import CreateTodoForm from '../modules/CreateTodoForm';
import TodoList from '../modules/TodoList';

const Home = () => {
	return (
		<div className='text-white w-4/5 mx-auto'>
			<h1 className='font-bold text-center mb-8'>
				Todo Marat, better work
			</h1>
			<CreateTodoForm />
			<TodoList/>
		</div>
	);
};

export default Home;
