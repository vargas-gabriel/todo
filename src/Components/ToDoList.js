import React from "react";
import ToDo from "./Todo";
const ToDoList = ({ todos }) => {
	return (
		<div className='todo-container'>
			<ul classname='todo-list'>
				{todos.map((todo) => (
					<ToDo text={todo.text} key={todo.id} />
				))}
			</ul>
		</div>
	);
};
export default ToDoList;
