/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [formNewTask, setformNewTask] = useState(false);

  const handleformNewTask = () => {
    setformNewTask(!formNewTask);
  };

  return <TaskContext.Provider value={{ formNewTask, handleformNewTask }}>{children}</TaskContext.Provider>;
};
