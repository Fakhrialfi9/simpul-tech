import { useState, useEffect, useContext } from "react";
import { ChevronDown, Ellipsis, Clock, Pencil, Trash2 } from "lucide-react";
import { taskManagementData } from "../../data/taskData.js";
import { TaskContext } from "../../context/formNewTask.jsx";
import NavbarTask from "../components/navbarTask.jsx";
import FormNewTask from "./formnewtask.jsx";
import taskStyle from "../../assets/style/view/taskmanagement.module.css";
import Spinner from "../../lib/spinner.jsx";

const TaskManagements = () => {
  const { formNewTask } = useContext(TaskContext);
  const [activeToggles, setActiveToggles] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [selectMenu, setSelectMenu] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleMiniMizeToggle = (index) => {
    setActiveToggles((prevToggles) => ({
      ...prevToggles,
      [index]: !prevToggles[index],
    }));
  };

  const handleCheckboxChange = (index) => {
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [index]: !prevItems[index],
    }));

    if (!activeToggles[index]) {
      setActiveToggles((prevToggles) => ({
        ...prevToggles,
        [index]: !prevToggles[index],
      }));
    }
  };

  const handleSelectMenu = (index) => {
    setSelectMenu((prevItems) => ({
      ...prevItems,
      [index]: !prevItems[index],
    }));
  };

  const menuItems = [
    { label: "Delete Task", icon: <Trash2 size={15} />, action: "delete" },
    { label: "Edit Task", icon: <Pencil size={15} />, action: "edit" },
  ];

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <NavbarTask />
      <section id='home' className={taskStyle.main}>
        <div className={taskStyle.content}>
          <ul>
            {taskManagementData.map((task, index) => (
              <li key={index}>
                <form action=''>
                  <div className={taskStyle.select}>
                    <input type='checkbox' checked={!!checkedItems[index]} onChange={() => handleCheckboxChange(index)} />
                  </div>

                  <div className={taskStyle.information}>
                    <div className={taskStyle.header}>
                      <div className={taskStyle.title}>
                        <h5 className={checkedItems[index] ? taskStyle.strikethrough : ""}>{task.name}</h5>
                      </div>
                      <div className={taskStyle.function}>
                        <h6 className={checkedItems[index] ? taskStyle.hide : ""}>{task.dueDate}</h6>
                        <h6>{task.date}</h6>
                        <span className={`${taskStyle.ChevronDown} ${activeToggles[index] ? taskStyle.active : ""}`}>
                          <ChevronDown onClick={() => handleMiniMizeToggle(index)} size={20} />
                        </span>
                        <span>
                          <Ellipsis onClick={() => handleSelectMenu(index)} size={20} />
                          <div className={`${taskStyle.select} ${selectMenu[index] ? taskStyle.active : ""}`}>
                            <ul onClick={() => handleSelectMenu(index)}>
                              {menuItems.map((item, idx) => (
                                <li key={idx}>
                                  <a>
                                    {item.icon} {item.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className={`${taskStyle.body} ${activeToggles[index] ? taskStyle.active : ""}`}>
                      <span>
                        <Clock size={20} />
                      </span>
                      <input type='date' defaultValue={task.date}></input>
                    </div>
                    <div className={`${taskStyle.footer} ${activeToggles[index] ? taskStyle.active : ""}`}>
                      <span>
                        <Pencil size={20} />
                      </span>
                      <p>{task.description || "No Description"}</p>
                    </div>
                  </div>
                </form>
              </li>
            ))}
            {formNewTask && <FormNewTask />}
          </ul>
        </div>
      </section>
    </>
  );
};

export default TaskManagements;
