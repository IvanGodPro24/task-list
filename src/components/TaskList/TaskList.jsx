import Task from "../Task/Task";
import css from "./TaskList.module.css";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul className={css.list}>
      {tasks.map(({ id, text }) => (
        <li className={css.item} key={id}>
          <Task id={id} text={text} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
