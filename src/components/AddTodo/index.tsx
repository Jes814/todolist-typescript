import React, { FC } from "react";
import { useStylesFromThemeFunction } from "./AddTodo";
import {
  FormStates,
  TodoSchedules,
  TodoTypes,
  todoTypes,
  todoSchedules,
} from "./interface";

const AddTodo: FC<FormStates> = ({
  name,
  description,
  schedule,
  type,
  date,
  setName,
  setDate,
  setType,
  setSchedule,
  setDescription,
  onSubmit,
}) => {
  const classes = useStylesFromThemeFunction();
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className={classes.todoContainer}>
        <div className={classes.todoLabelInput}>
          <label>Todo: </label>
          <input
            className={classes.todosInput}
            placeholder="Todo name ..."
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          />
        </div>
        <div className={classes.todoLabelInput}>
          <label>Todo Created :</label>
          <input
            className={classes.todosInput}
            placeholder="Todo name ..."
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="date"
          />
        </div>
      </div>
      <div className={classes.todoContainer}>
        <div className={classes.todoLabelInput}>
          <label>Todo Schedule:</label>
          <select
            className={classes.todosInput}
            placeholder="Todo name ..."
            onChange={(e) => setSchedule(e.target.value)}
            value={schedule}
          >
            <option hidden>Choose schedule</option>
            {todoSchedules &&
              todoSchedules.map((schedule: TodoSchedules, index: number) => (
                <option value={schedule.value} key={index}>
                  {schedule.label}
                </option>
              ))}
          </select>
        </div>
        <div className={classes.todoLabelInput}>
          <label>Todo Types :</label>
          <select
            className={classes.todosInput}
            placeholder="Todo name ..."
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option hidden>Choose type depends on todo</option>
            {todoTypes &&
              todoTypes.map((type: TodoTypes, index: number) => (
                <option value={type.value} key={index}>
                  {type.label}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className={classes.descriptionContainer}>
        <label>Todo Description :</label>
        <textarea
          className={classes.todosInput}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Description here ..."
        ></textarea>
      </div>
      <div className={classes.todosButtonContainer}>
        <input type="submit" value="Submit" className={classes.todosButton} />
      </div>
    </form>
  );
};

export default AddTodo;
