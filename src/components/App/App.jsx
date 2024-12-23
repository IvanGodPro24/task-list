import "./App.css";
import initTasks from "../../tasks.json";
import Filter from "../Filter/Filter";
import Form from "../Form/Form";
import TaskList from "../TaskList/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(initTasks);
  const [filter, setFilter] = useState("");

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
