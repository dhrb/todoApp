import { useState, useEffect } from 'react';
import Header from './Сomponents/Header/Header.jsx';
import TodoList from './Сomponents/TodoBody/TodoList.jsx';
import { fetchTodos, addTodo, toggleComplete, deleteTodo } from './api/todoService.js';
function App() {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [filter, setFilter] = useState('all');

	//fetch tasks
	useEffect(() => {
		loadTodos();
	}, [filter]);

	const filterHandler = (filter) => {
		console.log(filter);
		setFilter(filter);
	};
	const loadTodos = async () => {
		setLoading(true);
		try {
			const res = await fetchTodos(filter);
			setTodos(res);
		} catch (error) {
			console.error('Fetching error:', error);
		}
		setLoading(false);
	};

	// complete/incomplete handler to db with getting new data
	const handleToggleComplete = async (id, completed) => {
		try {
			await toggleComplete(id, completed);
			setTodos((prevTodos) =>
				prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: completed } : todo)),
			);
		} catch (error) {
			console.error('Ошибка обновления:', error);
		}
	};
	//new task to db
	const handleAddTodo = async (title, completed) => {
		try {
			const newTodo = await addTodo(title, completed);
			setTodos((prev) => [...prev, newTodo]);
		} catch (error) {
			console.error('Adding err:', error);
		}
	};

	// ddelete task from db
	const handleDeleteTodo = async (id) => {
		try {
			await deleteTodo(id);
			setTodos((prev) => prev.filter((todo) => todo.id !== id));
		} catch (error) {
			console.error('Deleting err', error);
		}
	};

	return (
		<div className="appWrapper">
			<Header />
			<div className="todoListWrapper">
				<TodoList
					todos={todos}
					filter={filter}
					loading={loading}
					filterHandler={filterHandler}
					handleAddTodo={handleAddTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleToggleComplete={handleToggleComplete}
				/>
			</div>
		</div>
	);
}

export default App;
