import React, { FC } from "react";
import moment from "moment";
import { Todos } from "./interface";
import { useStylesFromThemeFunction } from "./Todolists";

const TodoLists: FC<Todos> = ({ todoLists, deleteTodo, editModalUI }) => {
  const classes = useStylesFromThemeFunction();

  const typeIcons = (type: string) => {
    if (type === "Washing") {
      return <i className={`fa fa-bath ${classes.bathIcon}`}></i>;
    }
    if (type === "Cooking") {
      return <i className={`fa fa-utensils ${classes.utensilsIcon}`}></i>;
    }
    if (type === "Cleaning") {
      return <i className={`fa fa-broom ${classes.broomIcon}`}></i>;
    }
    if (type === "Playing") {
      return <i className={`fab fa-steam ${classes.steamIcon}`}></i>;
    }
    if (type === "Writing") {
      return <i className={`fa fa-pen ${classes.penIcon}`}></i>;
    }
    if (type === "Reading") {
      return <i className={`fa fa-book ${classes.bookIcon}`}></i>;
    }
    return "";
  };

  return (
    <div className={classes.mainContainer}>
      <h2 className={classes.title}>
        Todo Checklist
        <i className={`fa fa-clipboard-check ${classes.icon}`}></i>
      </h2>
      <div>
        {todoLists && todoLists.length > 0 ? (
          <div className={classes.todosContainer}>
            {todoLists &&
              todoLists.map((todo) => {
                return (
                  <div key={todo.id} className={classes.cardContainer}>
                    <div>
                      {/* HOVER OPTIONS */}
                      <div className={classes.cardContentsContainer}>
                        <div className={classes.cardContent}>
                          <div className={classes.editContainer}>
                            <button
                              onClick={() => editModalUI(todo.id)}
                              className={classes.editButton}
                            >
                              <i
                                className={`fa fa-pen ${classes.editIcon}`}
                              ></i>
                              Edit
                            </button>
                          </div>
                          <div>
                            <button
                              onClick={() => deleteTodo(todo.id)}
                              className={classes.deleteButton}
                            >
                              <i
                                className={`fa fa-trash ${classes.deleteIcon}`}
                              ></i>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1 className={classes.todoName}>{todo.name}</h1>
                      </div>

                      <div className={classes.todoDescription}>
                        {todo.description.length > 10
                          ? todo.description.substring(0, 20) + "..."
                          : todo.description}
                      </div>

                      <div className={classes.todoSchedule}>
                        <div className={classes.todoScheduleWidth}>
                          <i
                            className={`fa fa-calendar ${classes.todoScheduleIcon}`}
                          ></i>
                          {todo.schedule}
                        </div>

                        <div className={classes.todoScheduleWidth}>
                          {typeIcons(todo.type)}
                          {todo.type}
                        </div>
                      </div>
                    </div>

                    <div>
                      <p>
                        <i
                          className={`fa fa-calendar ${classes.todoDateIcon}`}
                        ></i>
                        {moment(todo.date).format("MMM D, YYYY")}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <div className={classes.emptyTodosContainer}>
            <i className={`fa fa-calendar-check ${classes.emptyTodosIcon}`}></i>
            No Todos to show
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoLists;
