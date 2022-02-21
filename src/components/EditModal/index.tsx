import React, { FC } from "react";
import { useStylesFromThemeFunction } from "./EditModal";
import {
  FormStates,
  TodoSchedules,
  todoSchedules,
  TodoTypes,
  todoTypes,
} from "./interface";

const EditModal: FC<FormStates> = ({
  closeModal,
  editTodo,
  editName,
  setEditName,
  editDate,
  setEditDate,
  editDescription,
  setEditDescription,
  editSchedule,
  setEditSchedule,
  editType,
  setEditType,
}) => {
  const classes = useStylesFromThemeFunction();
  return (
    <div
      className={classes.modalContainer}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className={classes.modalSubContainer}>
        <div className={classes.modalHeaderContainer} aria-hidden="true"></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className={classes.modalContentContainer}>
          <div className={classes.modalMainContentContainer}>
            <div className={classes.todoContainer}>
              <div className={classes.todoLabelInput}>
                <label>Todo: </label>
                <input
                  className={classes.todoInput}
                  placeholder="Todo name ..."
                  onChange={(e) => setEditName(e.target.value)}
                  value={editName}
                  type="text"
                />
              </div>
              <div className={classes.todoLabelInput}>
                <label>Todo Created :</label>
                <input
                  className={classes.todoInput}
                  placeholder="Todo name ..."
                  onChange={(e) => setEditDate(e.target.value)}
                  value={editDate}
                  type="date"
                />
              </div>
            </div>
            <div className={classes.todoContainer}>
              <div className={classes.todoLabelInput}>
                <label>Todo Schedule:</label>
                <select
                  className={classes.todoInput}
                  placeholder="Todo name ..."
                  onChange={(e) => setEditSchedule(e.target.value)}
                  value={editSchedule}
                >
                  <option hidden>Choose schedule</option>
                  {todoSchedules &&
                    todoSchedules.map(
                      (schedule: TodoSchedules, index: number) => (
                        <option value={schedule.value} key={index}>
                          {schedule.label}
                        </option>
                      )
                    )}
                </select>
              </div>
              <div className={classes.todoLabelInput}>
                <label>Todo Types :</label>
                <select
                  className={classes.todoInput}
                  placeholder="Todo name ..."
                  onChange={(e) => setEditType(e.target.value)}
                  value={editType}
                >
                  <option hidden>Choose type</option>
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
                className={classes.todoInput}
                onChange={(e) => setEditDescription(e.target.value)}
                value={editDescription}
                placeholder="Description here ..."
              ></textarea>
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <button
              onClick={() => editTodo()}
              type="button"
              className={classes.editButton}
            >
              Submit
            </button>
            <button
              onClick={() => closeModal()}
              type="button"
              className={classes.closeButton}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
