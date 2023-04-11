import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { TodoList } from './list-render'



function App() {

	const [todoItem, setTodoItem] = useState([
		{ id: "1", title: "Html", isDone: true },
		{ id: "2", title: "Js", isDone: true },
		{ id: "3", title: "React", isDone: false }
	])

	return (
		<div className="App">
			<h1>Todo</h1>
			<TodoList title="Todo List" tasks={todoItem}></TodoList>
		</div>
	);
}

export default App;
