import React, { useState } from 'react';
import addIcon from './../../assets/img/plus-icon.png';

function TodoAdd({ handleAddTodo }) {
	const [text, setText] = useState('');
	const addNewTodo = () => {
		if (text.trim().length === 0) return;
		handleAddTodo(text.trim());
		setText('');
	};
	return (
		<div className="todoAddWrapper">
			<div className="todoAddCompleted">
				<img src={''} alt="" className="" />
			</div>
			<input
				className="todoAddInput"
				onChange={(e) => setText(e.target.value)}
				value={text}
				placeholder="Create a new todo..."
			/>
			{text.length > 0 && <img className="addTodoIcon" src={addIcon} onClick={addNewTodo} />}
		</div>
	);
}

export default TodoAdd;
