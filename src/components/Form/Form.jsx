import { useId } from "react";
import css from "./Form.module.css";

const Form = ({ onAdd }) => {
  const addId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({
      text: e.target.add.value,
      id: Date.now(),
    });

    e.target.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={addId} />
        <input type="text" name="add" id={addId} />
        <button type="submit">Add task</button>
      </form>
    </>
  );
};

export default Form;
