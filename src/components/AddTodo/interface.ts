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
  name: string;
  description: string;
  schedule: string;
  type: string;
  date: string;
  setName: (e: string) => void;
  setDate: (e: string) => void;
  setType: (e: string) => void;
  setSchedule: (e: string) => void;
  setDescription: (e: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface TodoSchedules {
  label: string;
  value: string;
}

export interface TodoTypes {
  label: string;
  value: string;
}
