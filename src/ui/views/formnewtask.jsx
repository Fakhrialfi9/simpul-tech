import taskStyle from "../../assets/style/view/taskmanagement.module.css";
import { ChevronDown, Ellipsis, Clock, Pencil } from "lucide-react";

const FormNewTask = () => {
  return (
    <li>
      <form action='' className={taskStyle.newtaskform}>
        <div className={taskStyle.select}>
          <input type='checkbox' />
        </div>

        <div className={taskStyle.information}>
          <div className={taskStyle.header}>
            <div className={taskStyle.title}>
              <input type='text' name='name' placeholder='Type New Task Title' />
            </div>
            <div className={taskStyle.function}>
              <span>
                <ChevronDown size={20} />
              </span>
              <span>
                <Ellipsis size={20} />
              </span>
            </div>
          </div>
          <div className={taskStyle.body}>
            <span>
              <Clock size={20} />
            </span>
            <input type='date'></input>
          </div>
          <div className={taskStyle.footer}>
            <span>
              <Pencil size={20} />
            </span>
            <input type='text' name='name' placeholder='Type News Task Description' />
          </div>
        </div>
      </form>
    </li>
  );
};

export default FormNewTask;
