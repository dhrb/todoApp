const API_URL = 'https://67e27b5a97fc65f535364992.mockapi.io/api/todos';

export const fetchTodos = async (filter = 'all') => {
	const url =
		filter === 'all' ? API_URL : `${API_URL}?completed=${filter === 'completed' ? true : false}`;
	const response = await fetch(url);
	if (!response.ok) throw new Error('Error loading todos');
	return response.json();
};

export const addTodo = async (text) => {
	const newTodo = { text, isCompleted: false, createdAt: new Date().toISOString() };
	const response = await fetch(API_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newTodo),
	});
	if (!response.ok) throw new Error('Add error');
	return response.json();
};

export const toggleComplete = async (id, completed) => {
	const response = await fetch(`${API_URL}/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ completed: completed }),
	});
	if (!response.ok) throw new Error('Error updating');
	return response.json();
};

export const deleteTodo = async (id) => {
	const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
	if (!response.ok) throw new Error('Error deleting item: ' + id);
	return response.json();
};
