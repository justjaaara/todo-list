import { createContext } from "react";
import { Task } from "../types";

interface TaskContextType {
  tasks: Task[];
  deleteTask: (id: number) => void;
  createTask: (task: Omit<Task, "id">) => void;
}

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  deleteTask: () => {},
  createTask: () => {},
});