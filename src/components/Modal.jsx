import React, { useState, useEffect } from 'react';
import { IoSaveOutline } from 'react-icons/io5';
import { IoCloseOutline } from "react-icons/io5";
import TodoItem from './TodoItem';

const Modal = ({ isOpen, onClose, onSave, todo }) => {
	const [newTitle, setNewTitle] = useState('');

	useEffect(() => {
		if (isOpen) {
			setNewTitle(todo.title)
		}
	}, [isOpen, todo]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (newTitle.trim().length > 0) {
			onSave(newTitle);
			onClose();
		}
	};

	return (
		<div className={`modal ${isOpen ? 'block' : 'hidden'} 
			fixed inset-0 bg-black bg-opacity-50 z-50`}>
			<div className="modal-content mx-auto mt-10 bg-gray-800 rounded-lg p-6 w-1/2">
				<div className=' mt-0 flex justify-end'>
				<IoCloseOutline className="close text-gray-500 cursor-pointer" onClick={onClose}></IoCloseOutline>
					</div>
				<form onSubmit={handleSubmit} className="mt-4">
					<input
						type="text"
						value={newTitle}
						onChange={(e) => setNewTitle(e.target.value)}
						placeholder="Введите новый текст задачи"
						className="border text-white border-gray-300 p-2 w-full rounded bg-gray-800"
					/>
					<div className="mt-2 flex justify-end">
					<button type="submit" className="mt-2 object-right bg-pink-400 text-white py-2 px-4 rounded">
						<IoSaveOutline size={22} />
					</button>
						</div>
				</form>
			</div>
		</div>
	);
};

export default Modal;
