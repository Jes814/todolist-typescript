import { createUseStyles } from "react-jss";

export const useStylesFromThemeFunction = createUseStyles({
  modalContainer: {
    position: "fixed",
    zIndex: 10,
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    overflowY: "auto",
  },
  modalSubContainer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    minHeight: "100vh",
    paddingTop: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "5rem",
    textAlign: "center",
  },
  modalHeaderContainer: {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    backgroundColor: "#6b7280",
    opacity: 0.75,
    transitionProperty: "opacity",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
  },
  modalContentContainer: {
    position: "absolute",
    left: "50%",
    top: "50%",
    display: "inline-block",
    verticalAlign: "bottom",
    backgroundColor: "#ffffff",
    borderRadius: "0.5rem",
    textAlign: "left",
    overflow: "hidden",
    transform: "translate(-50%, -50%)",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
  },
  modalMainContentContainer: {
    backgroundColor: "#ffffff",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "1.25rem",
    paddingBottom: "1rem",
  },
  todoContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.25rem",
  },
  todoLabelInput: {
    width: "40%",
  },
  todoInput: {
    borderBottomColor: "#93c5fd",
    width: "100%",
    outline: "0",
    borderWidth: "0 0 2px",
    paddingTop: "1rem",
  },
  descriptionContainer: {
    padding: "1.25rem",
  },
  buttonContainer: {
    backgroundColor: "#f9fafb",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
  },
  editButton: {
    marginTop: "0.75rem",
    width: "100%",
    display: "inline-flex",
    justifyContent: "center",
    borderRadius: "0.375rem",
    border: "1px solid #6ee7b7",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    backgroundColor: "#6ee7b7",
    fontSize: "1rem",
    lineHeight: "1.5rem",
    fontWeight: "semibold",
    color: "#ffffff",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#10b981",
    },
    "&:focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px",
    },
  },
  closeButton: {
    marginTop: "0.75rem",
    width: "100%",
    display: "inline-flex",
    justifyContent: "center",
    borderRadius: "0.375rem",
    border: "1px solid #d1d5db",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    backgroundColor: "#ffffff",
    fontSize: "1rem",
    lineHeight: "1.5rem",
    fontWeight: "semibold",
    color: "#374151",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f9fafb",
    },
    "&:focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px",
    },
  },
});
