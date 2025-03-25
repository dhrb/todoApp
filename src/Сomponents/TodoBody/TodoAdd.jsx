import React from 'react';

function TodoAdd() {
	return (
		<div className="todoAddWrapper">
			<div className="todoAddCompleted">
				<img src={''} alt="" className="" />
			</div>{' '}
			<input className="todoAddInput" type="text" placeholder="Create a new todo..." />
		</div>
	);
}

export default TodoAdd;
