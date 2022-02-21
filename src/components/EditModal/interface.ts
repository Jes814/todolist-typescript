export const todoSchedules = [
  {
    label: "Weekdays",
    value: "Weekdays",
  },
  {
    label: "Weekends",
    value: "Weekends",
  },
];

export const todoTypes = [
  {
    label: "Washing",
    value: "Washing",
  },
  {
    label: "Cooking",
    value: "Cooking",
  },
  {
    label: "Cleaning",
    value: "Cleaning",
  },
  {
    label: "Playing",
    value: "Playing",
  },
  {
    label: "Writing",
    value: "Writing",
  },
  {
    label: "Reading",
    value: "Reading",
  },
];

export interface FormStates {
  closeModal: () => void;
  editName: string;
  editDate: string;
  editDescription: string;
  editSchedule: string;
  editType: string;
  setEditName: (e: string) => void;
  setEditDate: (e: string) => void;
  setEditDescription: (e: string) => void;
  setEditSchedule: (e: string) => void;
  setEditType: (e: string) => void;
  editTodo: () => void;
}

export interface TodoSchedules {
  label: string;
  value: string;
}

export interface TodoTypes {
  label: string;
  value: string;
}
