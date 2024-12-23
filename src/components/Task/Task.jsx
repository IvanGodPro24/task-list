import css from "./Task.module.css";

const Task = ({ id, text, onDelete }) => {
  return (
    <>
      <p>{text}</p>
      <button type="button" className={css["delete-bnt"]} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};

export default Task;
