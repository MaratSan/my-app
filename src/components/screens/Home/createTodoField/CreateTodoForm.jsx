import React, {useState} from 'react';
import {createTodo} from '../../../../app/features/todosSlice';
import {useDispatch} from 'react-redux';

const CreateTodoForm = () => {
	const [title, setTitle] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (title.trim().length === 0)
			return;

		dispatch(createTodo(
			{
				title: title,
				isCompleted: false
			}
		));


		setTitle('');
	};


	return (
		<form
			onSubmit={handleSubmit}
			className='flex items-center justify-between mb-2 rounded-2xl border-gray-800 border-2 px-5 py-3 w-full mt-20'
		>
			<input
				type='text'
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				className='bg-transparent w-full border-none outline-none'
				placeholder=''
			/>
			<input type='submit' className='hidden' />
		</form>
	);
};

export default CreateTodoForm;
