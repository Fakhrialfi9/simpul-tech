import { ChevronDown, Plus, X } from "lucide-react";
import { useState, useContext } from "react";
import { TaskContext } from "../../context/formNewTask.jsx";
import navbarStyle from "../../assets/style/components/navbar.module.css";

const Navbar = () => {
  const { handleformNewTask } = useContext(TaskContext);
  const [isTaskFormActive, setIsTaskFormActive] = useState(false);
  const [selectMenu, setselectMenu] = useState(false);
  const [selectedTask, setSelectedTask] = useState("My Task");

  const handleClick = () => {
    handleformNewTask();
    setIsTaskFormActive(!isTaskFormActive);
  };

  const handleSelectMenu = () => {
    setselectMenu(!selectMenu);
  };

  const handleSelectTask = (task) => {
    setSelectedTask(task);
    setselectMenu(false);
  };

  return (
    <nav className={navbarStyle.navbar}>
      <ul>
        <li>
          <button onClick={handleSelectMenu}>
            {selectedTask} <ChevronDown size={15} />
          </button>

          <div className={`${navbarStyle.selectmenu} ${selectMenu ? navbarStyle.active : ""}`}>
            <ul>
              <li onClick={() => handleSelectTask("Personal Errands")}>
                <a>Personal Errands</a>
              </li>
              <li onClick={() => handleSelectTask("Urgent To-Do")}>
                <a>Urgent To-Do</a>
              </li>
            </ul>
          </div>
        </li>

        <li>
          {isTaskFormActive ? (
            <button onClick={handleClick} className={navbarStyle.cancelButton}>
              Cancel <X size={15} />
            </button>
          ) : (
            <button onClick={handleClick} className={navbarStyle.newTaskButton}>
              New Task <Plus size={15} />
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
