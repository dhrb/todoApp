import React from 'react';

function TodoController() {
	return (
		<div className="todoControllerWrapper">
			<div className="controllerCounter">
				<span>5 items left</span>
			</div>
			<div className="controllerSorting">
				<ul className="controllerOptions">
					<li className="controllerOption">All</li>
					<li className="controllerOption">Active</li>
					<li className="controllerOption">Completed</li>
				</ul>
			</div>
			<div className="controllerBroom">
				<span className="broomOption">Clean completed</span>
			</div>
		</div>
	);
}

export default TodoController;
