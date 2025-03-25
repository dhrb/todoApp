const API_URL = 'https://67e27b5a97fc65f535364992.mockapi.io/api/todos'; // Заменить на свой URL

export const fetchTodos = async () => {
	const response = await fetch(API_URL);
	if (!response.ok) throw new Error('Error loading todos');
	return response.json();
};

export const addTodo = async (title) => {
	const newTodo = { title, isCompleted: false, createdAt: new Date().toISOString() };
	const response = await fetch(API_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newTodo),
	});
	if (!response.ok) throw new Error('Add error');
	return response.json();
};

export const toggleComplete = async (id, isCompleted) => {
	const response = await fetch(`${API_URL}/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ isCompleted }),
	});
	if (!response.ok) throw new Error('Error updating');
	return response.json();
};

export const updateTodo = async (id, newTitle) => {
	const response = await fetch(`${API_URL}/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ title: newTitle }),
	});
	if (!response.ok) throw new Error('Editing error');
	return response.json();
};

export const deleteTodo = async (id) => {
	const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
	if (!response.ok) throw new Error('Deleting error');
	return response.json();
};
