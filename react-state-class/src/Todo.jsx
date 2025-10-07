import { useState } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [todos, setTodos] = useState([]);
  let [newTodo, setNewTodo] = useState("");

  function addNewTask() {
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setNewTodo("");
  }

  function handleEvent(event) {
    setNewTodo(event.target.value);
  }

  function deleteBtn(id) {
    // ✅ fixed function name
    setTodos(todos.filter((todo) => todo.id !== id));
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
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            <button className="deletebtn" onClick={() => deleteBtn(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
