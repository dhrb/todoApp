import React, { useState, useEffect } from 'react';
import completeIcon from './../../assets/img/icon-check.svg';
import deleteTaskIcon from './../../assets/img/icon-cross.svg';

function TodoItem({ id, text, completed, handleToggleComplete, handleDeleteTodo }) {
	const [isCompleted, setIsCompleted] = useState(completed);

	useEffect(() => {
		setIsCompleted(completed);
	}, [completed]);

	const completeHandler = async (id) => {
		try {
			await handleToggleComplete(id, !isCompleted);
		} catch (error) {
			console.log('Updating err ' + error.message);
		}
	};
	return (
		<div id={id} className="todoItemWrapper">
			<div
				className={isCompleted ? 'completedTask' : 'isCompleteImg'}
				onClick={() => completeHandler(id)}>
				{isCompleted && <img src={completeIcon} alt="completeicon" className="addTaskIcon" />}
			</div>

			<input
				value={text}
				onChange={() => {
					onTaskChange(text);
				}}
				type="text"
				className="todoItemInput"
			/>
			<img onClick={() => handleDeleteTodo(id)} src={deleteTaskIcon} alt="deletetaskicon" />
		</div>
	);
}

export default TodoItem;
