import React from 'react';
import TodoAdd from './TodoAdd';
import TodoItem from './TodoItem';
import TodoController from './TodoController';

function TodoList() {
	return (
		<div className="todoList">
			<TodoAdd />
			<div className="todoListBody">
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
			</div>
			<TodoController />
		</div>
	);
}

export default TodoList;
