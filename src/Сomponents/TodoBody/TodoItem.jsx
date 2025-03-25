import React from 'react';
import completeIcon from './../../assets/img/icon-check.svg';

function TodoItem() {
	return (
		<div className="todoItemWrapper">
			<div className="isCompleteImg">
				<img src={completeIcon} alt="" className="" />
			</div>
			<input value={'task1'} type="text" className="todoItemInput" />
		</div>
	);
}

export default TodoItem;
