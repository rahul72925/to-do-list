import React, { useState } from "react";
// import uuid from 'node-uuid'
import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodolist] = useState([]);
  function handlesubmit() {
    setTodo(" ");
    setTodolist([...todoList, todo]);
  }
  function taskComplete(index) {
    setTodolist(todoList.filter((_, i) => i !== index));
  }
  return (
    <div className="App">
      <h1>TODO List</h1>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        placeholder="Your todo..."
      />
      <button className="addBtn" onClick={handlesubmit}>
        +
      </button>
      <p>You have {todoList.length} TODO.</p>

      {todoList.map((ele, index) => {
        return (
          <div className="todoListBox" key={`key-${index}`}>
            <ul>
              <li>
                <span>{ele}</span>
                <button onClick={() => taskComplete(index)}>Complete</button>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
