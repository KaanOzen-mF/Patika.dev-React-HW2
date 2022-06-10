import React from "react";

function TodoList({ todos, setTodos, todo }) {
	const isCompleted = () =>
		// we checked todo is completed
		setTodos(
			todos.map((item) =>
				item.id === todo.id ? { ...item, completed: !item.completed } : item
			)
		);

	const deleteItem = () =>
		// we checked todo list via filter method
		setTodos(todos.filter((item) => item.id !== todo.id)); // we control item id and todo id

	return (
		<div className="main">
			<li key={todo.id} className={todo.completed ? "completed" : ""}>
				<div className="view">
					<input type="checkbox" className="toggle" onClick={isCompleted} />
					<label> {todo.text} </label>
					<button className="destroy" onClick={deleteItem}></button>
				</div>
			</li>
		</div>
	);
}

export default TodoList;
