import React, { useState, FC } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./components/AddTodo";
import EditModal from "./components/EditModal";
import TodoLists from "./components/TodoLists";

const App: FC = () => {
  const [todoLists, setTodoLists] = useState([
    {
      id: uuidv4(),
      name: "Tester",
      date: "January 30, 2022",
      description: "TesterTESTER",
      schedule: "Weekdays",
      type: "Washing",
    },
    {
      id: uuidv4(),
      name: "Tester2",
      date: "January 31, 2022",
      description: "TesterTESTER2",
      schedule: "Weekdays",
      type: "Cooking",
    },
  ]);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [schedule, setSchedule] = useState("");
  const [type, setType] = useState("");

  // Edit
  const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState("");
  const [editName, setEditName] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editSchedule, setEditSchedule] = useState("");
  const [editType, setEditType] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      name !== "" &&
      date !== "" &&
      description !== "" &&
      schedule !== "" &&
      type !== ""
    ) {
      const addNewTodo = {
        id: uuidv4(),
        name: name,
        date: date,
        description: description,
        schedule: schedule,
        type: type,
      };
      setTodoLists([...todoLists, addNewTodo]);
      setName("");
      setDate("");
      setDescription("");
      setSchedule("");
      setType("");
      Swal.fire({
        title: "Success!",
        text: "Todo added successfully!",
        icon: "success",
        confirmButtonText: "Close",
        confirmButtonColor: "#3085d6",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Fields are required!",
        icon: "error",
        confirmButtonText: "Close",
        confirmButtonColor: "#3085d6",
      });
    }
  };

  const deleteTodo = (id: string) => {
    const newList = todoLists.filter((todo) => {
      return todo.id !== id;
    });
    setTodoLists(newList);
    Swal.fire({
      title: "Deleted!",
      text: "Todo deleted successfully!",
      icon: "success",
      confirmButtonText: "Close",
      confirmButtonColor: "#3085d6",
    });
  };

  const editModalUI = (id: string) => {
    setEditModal(true);
    setEditId(id);
  };

  const closeModal = () => {
    setEditModal(false);
  };

  const editTodo = () => {
    const updatedTodos = todoLists.map((todo) => {
      if (todo.id === editId) {
        if (
          editName !== "" &&
          editDate !== "" &&
          editDescription !== "" &&
          editSchedule !== "" &&
          editType !== ""
        ) {
          todo.name = editName;
          todo.date = editDate;
          todo.description = editDescription;
          todo.schedule = editSchedule;
          todo.type = editType;
          setEditModal(false);
          setEditName("");
          setEditDate("");
          setEditDescription("");
          setEditSchedule("");
          setEditType("");
          Swal.fire({
            title: "Success!",
            text: "Todo updated successfully!",
            icon: "success",
            confirmButtonText: "Close",
            confirmButtonColor: "#3085d6",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Fields are required!",
            icon: "error",
            confirmButtonText: "Close",
            confirmButtonColor: "#3085d6",
          });
        }
      }
      return todo;
    });
    setTodoLists(updatedTodos);
  };

  return (
    <div className="m-5 border-2 border-gray-100">
      <AddTodo
        name={name}
        date={date}
        description={description}
        schedule={schedule}
        type={type}
        setName={setName}
        setDate={setDate}
        setDescription={setDescription}
        setSchedule={setSchedule}
        setType={setType}
        onSubmit={onSubmit}
      />
      <TodoLists
        todoLists={todoLists}
        deleteTodo={deleteTodo}
        editModalUI={editModalUI}
      />
      {editModal ? (
        <EditModal
          closeModal={closeModal}
          editTodo={editTodo}
          editName={editName}
          setEditName={setEditName}
          editDate={editDate}
          setEditDate={setEditDate}
          editDescription={editDescription}
          setEditDescription={setEditDescription}
          editSchedule={editSchedule}
          setEditSchedule={setEditSchedule}
          editType={editType}
          setEditType={setEditType}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
