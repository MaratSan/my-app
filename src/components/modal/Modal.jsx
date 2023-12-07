// Modal.jsx
import React, { useState } from 'react';
import { IoSaveOutline } from 'react-icons/io5';

const Modal = ({ isOpen, onClose, onSave }) => {
	const [newTitle, setNewTitle] = useState('');

	const handleSubmit = () => {
		if (newTitle.trim().length > 0) {
			onSave(newTitle);
			onClose();
		}
	};

	return (
		<div className={`modal ${isOpen ? 'open' : ''}`}>
			<div className="modal-content">
				<span className="close" onClick={onClose}>&times;</span>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={newTitle}
						onChange={(e) => setNewTitle(e.target.value)}
						placeholder="Введите новый текст задачи"
					/>
					<button type="submit">
						<IoSaveOutline size={22} />
					</button>
				</form>
			</div>
		</div>
	);
};

export default Modal;
