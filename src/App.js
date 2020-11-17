import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import ToDoList from "./Components/ToDoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setToDos] = useState([]);
	return (
		<div className='App'>
			<header>
				<h1>Gabriel's Todo List</h1>
			</header>
			<Form
				inputText={inputText}
				todos={todos}
				setToDos={setToDos}
				setInputText={setInputText}
			/>
			<ToDoList todos={todos} />
		</div>
	);
}

export default App;
