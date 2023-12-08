import CheckBox from './CheckBox';
import React, { useState } from 'react';
import cn from 'classnames';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../../../app/features/todosSlice';
import Modal from '../../../modal/Modal';

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();
	const [isModalOpen, setModalOpen] = useState(false);
	const [newTitle, setNewTitle] = useState(todo.title);

	const handleEditClick = () => {
		setModalOpen(true);
	};

	const handleEditSave = (title) => {
		dispatch(updateTodo({
			...todo,
			title: title,
		}));
	};

	const handleEditClose = () => {
		setModalOpen(false);
	};

	return (
		<div className='flex items-center justify-between mb-2 rounded-2xl bg-gray-800 p-5 w-full'>
			<button
				className='flex items-center'
				onClick={() => dispatch(
					updateTodo(
						{
							...todo,
							isCompleted: !todo.isCompleted,
						}
					)
				)}
			>
				<CheckBox isCompleted={todo.isCompleted} />
				<span
					className={cn('ml-4 text-lg font-semibold', {
						'line-through': todo.isCompleted,
					})}
				>
          {todo.title}
        </span>
			</button>
			<div className='flex space-x-4'>
				<button onClick={() => dispatch(deleteTodo(todo))}>
					<FaRegTrashAlt
						size={22}
						className='text-gray-900 hover:text-pink-400 transition-colors ease-in-out duration-300'
					/>
				</button>
				<button onClick={handleEditClick}>
					<FaRegEdit
						size={22}
						className='text-gray-900 hover:text-pink-400
            transition-colors ease-in-out duration-300'
					/>
				</button>
			</div>

			<Modal
				isOpen={isModalOpen}
				onClose={handleEditClose}
				onSave={handleEditSave}
				todo={todo}
			/>
		</div>
	);
};

export default TodoItem;
