import { createUseStyles } from "react-jss";

export const useStylesFromThemeFunction = createUseStyles({
  mainContainer: {
    border: "1px solid #6ee7b7",
  },
  title: {
    textAlign: "center",
    fontSize: "2.25rem",
    paddingBottom: "1.25rem",
  },
  icon: {
    color: "#6ee7b7",
    paddingLeft: "1rem",
  },
  todosContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "1rem",
  },
  cardContainer: {
    border: "2px solid #e5e7eb",
    margin: "1rem",
    padding: "0.75rem",
    borderRadius: "0.5rem",
    position: "relative",
  },
  cardContentsContainer: {
    cursor: "pointer",
    position: "absolute",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    zIndex: 10,
    backgroundColor: "rgba(165, 243, 252, 1)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    opacity: 0,
    "&:hover": {
      opacity: 1,
    },
    transitionDuration: "300ms",
  },
  cardContent: {
    display: "flex",
  },
  editContainer: {
    paddingRight: "1.25rem",
  },
  editButton: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    color: "#fff",
    backgroundColor: "#3b82f6",
    borderRadius: "0.5rem",
    "&:hover": {
      backgroundColor: "#1e3a8a",
      cursor: "pointer",
    },
    border: "1px solid #3b82f6",
  },
  editIcon: {
    paddingRight: "0.5rem",
  },
  deleteButton: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    color: "#fff",
    backgroundColor: "#ef4444",
    borderRadius: "0.5rem",
    "&:hover": {
      backgroundColor: "#7f1d1d",
      cursor: "pointer",
    },
    border: "1px solid #ef4444",
  },
  deleteIcon: {
    paddingRight: "0.5rem",
  },
  todoName: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: 700,
  },
  todoDescription: {
    paddingTop: "1.25rem",
    paddingBottom: "1.25rem",
    fontWeight: 600,
    marginBottom: "5rem",
  },
  todoSchedule: {
    display: "flex",
    marginBottom: "1.25rem",
  },
  todoScheduleWidth: {
    width: "50%",
  },
  todoScheduleIcon: {
    marginRight: "0.5rem",
    color: "#3b82f6",
  },
  todoDateIcon: {
    marginRight: "0.5rem",
    color: "#6ee7b7",
  },
  emptyTodosContainer: {
    textAlign: "center",
    paddingTop: "5rem",
    paddingBottom: "5rem",
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
    color: "#e5e7eb",
  },
  emptyTodosIcon: {
    paddingRight: "0.5rem",
  },
  bathIcon: {
    marginRight: "0.5rem",
    fill: "currentcolor",
    color: "#f472b6",
  },
  utensilsIcon: {
    marginRight: "0.5rem",
    fill: "currentcolor",
    color: "#d1d5db",
  },
  broomIcon: {
    marginRight: "0.5rem",
    fill: "currentcolor",
    color: "#78350f",
  },
  steamIcon: {
    marginRight: "0.5rem",
    fill: "currentcolor",
    color: "#1e3a8a",
  },
  penIcon: {
    marginRight: "0.5rem",
  },
  bookIcon: {
    marginRight: "0.5rem",
    fill: "currentcolor",
    color: "#a78bfa",
  },
});
