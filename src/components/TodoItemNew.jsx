import CheckBox from '../ui/CheckBox';
import React, {useState} from 'react';
import cn from 'classnames';
import {FaRegTrashAlt} from 'react-icons/fa';
import {FaRegEdit} from 'react-icons/fa';
import {useDispatch} from 'react-redux';
import {deleteTodo, updateTodo} from '../app/features/todosSlice';


const TodoItem = ({todo}) => {
	const [title, setTitle] = useState(todo.title);
	const [isEdit, setEdit] = useState(false)
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()

		if (title.trim().length === 0)
			return;

		dispatch(updateTodo(
			{
				...todo,
				title: title
			}
		));
		setEdit(false)
	}

	if (isEdit)
		return (
			<div className='mb-2 rounded-2xl bg-gray-800 p-5 w-full'>
				<form onSubmit={handleSubmit} className='flex items-center justify-between'>
					<input
						type='text'
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
					<div className='flex space-x-4'>
						<button type="submit">
							{/* icon save */}
							<FaRegTrashAlt
								size={22}
								className='text-gray-900 hover:text-pink-400 transition-colors ease-in-out duration-300'
							/>
						</button>
					</div>
				</form>
			</div>
		);

	return (
		<div className='flex items-center justify-between mb-2 rounded-2xl bg-gray-800 p-5 w-full'>
			<button
				className='flex items-center'
				onClick={() => dispatch(
					updateTodo(
						{
							...todo,
							isCompleted: !todo.isCompleted
						}
					)
				)}
			>
				<CheckBox isCompleted={todo.isCompleted} />
				<span
					className={cn('ml-4 text-lg font-semibold', {
						'line-through': todo.isCompleted
					})}
				>
                    {todo.title}
				</span>
			</button>
			<div className='flex space-x-4'>
				<button
					onClick={() => dispatch(deleteTodo(todo))}>
					<FaRegTrashAlt
						size={22}
						className='text-gray-900 hover:text-pink-400 transition-colors ease-in-out duration-300'
					/>
				</button>
				<button
					onClick={() => setEdit(true)}>
					<FaRegEdit
						size={22}
						className='text-gray-900 hover:text-pink-400
				    transition-colors ease-in-out duration-300'
					/>
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
