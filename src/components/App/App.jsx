import "./App.css";
// import initTasks from "../../tasks.json";
import Filter from "../Filter/Filter";
import Form from "../Form/Form";
import TaskList from "../TaskList/TaskList";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTask = JSON.parse(localStorage.getItem("saved-task"));

    return savedTask !== null ? savedTask : [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => localStorage.setItem("saved-task", JSON.stringify(tasks)));

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {/* <p>{filter}</p> */}
      <Form onAdd={addTask}></Form>
      <Filter value={filter} onFilter={setFilter}></Filter>
      <TaskList tasks={visibleTasks} onDelete={deleteTask}></TaskList>
    </>
  );
}

export default App;
