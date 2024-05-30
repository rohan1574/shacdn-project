import React, { useState } from "react";
import Reports from "./components/Pages/Reports";


const App = () => {
  const [tasks, setTasks] = useState([
    // Initial tasks with different statuses
    { id: 1, title: "Task 1", status: "Open" },
    { id: 2, title: "Task 2", status: "Working" },
    { id: 3, title: "Task 3", status: "Completed" },
  ]);
  const [newTaskName, setNewTaskName] = useState(""); // State for new task name

  // Function to add a new task to the "Open" status
  const addTaskToOpenStatus = () => {
    if (newTaskName.trim()) {
      const newTask = {
        id: tasks.length + 1, // Generate a unique ID
        title: newTaskName,
        status: "Open", // Set status to "Open"
      };
      setTasks([...tasks, newTask]); // Add the new task to the tasks array
      setNewTaskName(""); // Clear the input field
    }
  };

  return (
    <div>
      {/* Render Navbar with the input field */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter task name"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button onClick={addTaskToOpenStatus}>Add Task to Open</button>
      </div>
      {/* Render Reports component to display the status cards */}
      <Reports tasks={tasks} />
    </div>
  );
};

export default App;
