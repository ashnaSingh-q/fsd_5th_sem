import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // CREATE and UPDATE
  function handleSubmit() {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }

    setTask("");
  }

  // EDIT
  function handleEdit(index) {
    setTask(tasks[index]);
    setEditIndex(index);
  }

  // DELETE
  function handleDelete(index) {
    setTasks(tasks.filter((_, i) => i !== index));

    if (editIndex === index) {
      setEditIndex(null);
      setTask("");
    } else if (editIndex !== null && editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  }

  return (
    <div className="container">
      <div className="todo-box">
        <h1>To-Do List</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={handleSubmit}>
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        <ul>
          {tasks.map((item, index) => (
            <li key={index} className="task-item">
              <span>{item}</span>

              <div className="actions">
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="empty">No tasks added yet!</p>
        )}
      </div>
    </div>
  );
}

export default App;