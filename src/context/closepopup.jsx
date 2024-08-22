/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [selectMenuTask, setSelectMenuTask] = useState(false);
  const [selectMenuInbox, setSelectMenuInbox] = useState(false);

  const handleSelectMenuTask = () => {
    setSelectMenuInbox(false);
    setSelectMenuTask(!selectMenuTask);
  };

  const handleSelectMenuInbox = () => {
    setSelectMenuTask(false);
    setSelectMenuInbox(!selectMenuInbox);
  };

  return (
    <MenuContext.Provider
      value={{
        selectMenuTask,
        selectMenuInbox,
        handleSelectMenuTask,
        handleSelectMenuInbox,
      }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
