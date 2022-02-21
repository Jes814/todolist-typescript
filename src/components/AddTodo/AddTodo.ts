import { createUseStyles } from "react-jss";

export const useStylesFromThemeFunction = createUseStyles({
  todoContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.25rem",
  },
  todoLabelInput: {
    width: "40%",
  },
  todosInput: {
    borderBottomColor: "#93c5fd",
    width: "100%",
    outline: "0",
    borderWidth: "0 0 2px",
    paddingTop: "1rem",
  },
  descriptionContainer: {
    padding: "1.25rem",
  },
  todosButtonContainer: {
    padding: "1.25rem",
    display: "flex",
    justifyContent: "flex-end",
  },
  todosButton: {
    borderWidth: "1px",
    borderRadius: "0.75rem",
    backgroundColor: "#6ee7b7",
    fontWeight: "bold",
    border: "1px solid #6ee7b7",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    color: "#fff",
    cursor: "pointer",
  },
});
