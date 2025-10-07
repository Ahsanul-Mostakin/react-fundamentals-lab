import { useState } from "react";
import "./Todo.css";

export default function Todo() {
  let [todos, setTodos] = useState(["sample-task"]);
  let [newTodo, setNewTodo] = useState("");

  function addNewTask() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }
  function handleEvent(event) {
    setNewTodo(event.target.value);
  }

  return (
    <>
      <div className="todo">
        <div className="todo-1">
          <input
            placeholder="Task add"
            value={newTodo}
            onChange={handleEvent}
          />
          <button onClick={addNewTask}>Task Add</button>
        </div>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
