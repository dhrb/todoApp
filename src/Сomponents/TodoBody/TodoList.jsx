import React from 'react';
import TodoAdd from './TodoAdd';
import TodoItem from './TodoItem';
import TodoController from './TodoController';

function TodoList({
	todos,
	filter,
	loading,
	handleAddTodo,
	filterHandler,
	handleDeleteTodo,
	handleToggleComplete,
}) {
	const todosLength = todos.length;
	return (
		<div className="todoList">
			<TodoAdd handleAddTodo={handleAddTodo} />
			<div className="todoListBody">
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						id={todo.id}
						text={todo.text}
						completed={todo.completed}
						handleDeleteTodo={handleDeleteTodo}
						handleToggleComplete={handleToggleComplete}
					/>
				))}
			</div>
			<TodoController filter={filter} filterHandler={filterHandler} todosLength={todosLength} />
		</div>
	);
}

export default TodoList;
