import React from "react";

const TaskList = ({ tasks, show, setShow, handleDelete }) => {
  return (
    <>
      <h1>Task List</h1>
      <button className="trigger" onClick={() => setShow(!show)}>
        Toggle
      </button>
      <ul>
        {show &&
          tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "completed" : "incomplete"}
            >
              <span>
                {task.id} - {task.name}
              </span>
              <button onClick={() => handleDelete(task.id)} className="delete">
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default TaskList;
