import CheckBox from './CheckBox';
import React, {useState} from 'react';
import cn from 'classnames';
import {FaRegTrashAlt} from 'react-icons/fa';
import {FaRegEdit} from 'react-icons/fa';
import { IoSaveOutline } from "react-icons/io5";
import {useDispatch} from 'react-redux';
import {deleteTodo, updateTodo} from '../../../../app/features/todosSlice';
import Modal from '../../../modal/Modal'

const TodoItem = ({todo}) => {
	const [title, setTitle] = useState(todo.title);
	const [isEdit, setEdit] = useState(false)
	const dispatch = useDispatch()
	const [modalActive, setModalActive] = useState(true)

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
					<input className='flex items-center justify-between mb-2 bg-gray-800 rounded-2xl px-5 py-3 w-full mr-2'
						   type='text'
						   onChange={(e) => setTitle(e.target.value)}
						   value={title}
					/>
					<div className='flex space-x-4'>
						<button type="submit">
							{/* icon save */}
							<IoSaveOutline
								size={22}
								className='text-gray-900 hover:text-pink-400 transition-colors ease-in-out duration-300'
							/>
						</button>
					</div>
				</form>
			</div>
		);

	return (
		<div>
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
					onClick={() => (setEdit(true))}>
					<FaRegEdit
						size={22}
						className='text-gray-900 hover:text-pink-400
				    transition-colors ease-in-out duration-300'
					/>
				</button>
			</div>
			<Modal
				className='h-max w-max bg-blend-overlay position'
				active={modalActive} setActive={setModalActive}>

			</Modal>
		</div>
		</div>
	);
};

export default TodoItem;
