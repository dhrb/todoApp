import React from 'react';

function TodoController({ filter, todosLength, filterHandler }) {
	console.log(filter);
	return (
		<div className="todoControllerWrapper">
			<div className="controllerCounter">
				<span>{todosLength} items left</span>
			</div>
			<div className="controllerSorting">
				<ul className="controllerOptions">
					<li
						className={filter === 'all' ? 'controllerOptionActive' : 'controllerOption'}
						onClick={() => filterHandler('all')}>
						All
					</li>
					<li
						className={filter === 'active' ? 'controllerOptionActive' : 'controllerOption'}
						onClick={() => filterHandler('active')}>
						Active
					</li>
					<li
						className={filter === 'completed' ? 'controllerOptionActive' : 'controllerOption'}
						onClick={() => filterHandler('completed')}>
						Completed
					</li>
				</ul>
			</div>
		</div>
	);
}

export default TodoController;
