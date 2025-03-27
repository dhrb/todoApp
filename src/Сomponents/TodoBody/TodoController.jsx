import React from 'react';

function TodoController({ todosLength, filterHandler }) {
	return (
		<div className="todoControllerWrapper">
			<div className="controllerCounter">
				<span>{todosLength} items left</span>
			</div>
			<div className="controllerSorting">
				<ul className="controllerOptions">
					<li className="controllerOption" onClick={() => filterHandler('all')}>
						All
					</li>
					<li className="controllerOption" onClick={() => filterHandler('active')}>
						Active
					</li>
					<li className="controllerOption" onClick={() => filterHandler('completed')}>
						Completed
					</li>
				</ul>
			</div>
		</div>
	);
}

export default TodoController;
