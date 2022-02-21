interface TodoListsProps {
  id: string;
  name: string;
  date: string;
  description: string;
  schedule: string;
  type: string;
}

export interface Todos {
  todoLists: TodoListsProps[];
  deleteTodo: (id: string) => void;
  editModalUI: (id: string) => void;
}
