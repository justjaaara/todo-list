import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskFrom() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        className="bg-slate-800 p-10 mb-4 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-white mb-3">To Do List</h1>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Escribe el título de tu tarea"
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2 rounded-2xl"
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Escribe la descripción de tu tarea"
          value={description}
          className="bg-slate-300 p-3 w-full mb-2 rounded-2xl"
        />
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-2xl ">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskFrom;
