import { useState, useContext, useEffect } from 'react';
import Header from './Сomponents/Header/Header.jsx';
import TodoList from './Сomponents/TodoBody/TodoList.jsx';
function App() {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {});
	return (
		<div className="appWrapper">
			<Header />
			<div className="todoListWrapper">
				<TodoList />
			</div>
		</div>
	);
}

export default App;
