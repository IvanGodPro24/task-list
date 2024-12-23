import { useId } from "react";
import css from "./Filter.module.css";

const Filter = ({ value, onFilter }) => {
  const filterId = useId();

  return (
    <div className={css.filter}>
      <label htmlFor={filterId} className={css.label}>
        <p>Search by name</p>
        <input
          type="text"
          name="search"
          id={filterId}
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Filter;
