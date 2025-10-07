import { useState } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  function addNewTask() {
    setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
    setNewTodo("");
  }

  function handleEvent(event) {
    setNewTodo(event.target.value);
  }

  function deleteBtn(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function updateAllCases() {
    setTodos((todos) =>
      todos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  }

  function updateOne(id) {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  }

  function markAsDone(id) {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      })
    );
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
            <span
              style={
                todo.isDone
                  ? { textDecoration: "line-through", color: "gray" }
                  : undefined
              }
            >
              {todo.task}
            </span>
            <button className="deletebtn" onClick={() => deleteBtn(todo.id)}>
              Delete
            </button>
            <button className="updateOne" onClick={() => updateOne(todo.id)}>
              UpdateOne
            </button>
            <button className="markAsDone" onClick={() => markAsDone(todo.id)}>
              {todo.isDone ? "Undo" : "Mark As Done"}
            </button>
          </li>
        ))}
      </ul>

      <button className="updateAll" onClick={updateAllCases}>
        Update All Cases
      </button>
    </>
  );
}
