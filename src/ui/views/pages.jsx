import { Inbox, BookOpenCheck, Zap } from "lucide-react";
import { useMenuContext } from "../../context/closepopup.jsx";
import pagesStyle from "../../assets/style/view/pages.module.css";
import Taskmanagement from "./taskmanagement.jsx";
import InboxMessage from "./inbox.jsx";

const Pages = () => {
  const { selectMenuTask, selectMenuInbox, handleSelectMenuTask, handleSelectMenuInbox } = useMenuContext();

  return (
    <main className={pagesStyle.pages}>
      <div className={pagesStyle.content}>
        <div className={pagesStyle.heading}>
          <h3>Simpul Tech</h3>
        </div>
        <section className={pagesStyle.dock}>
          <ul>
            <li>
              <h5>Task</h5>
              <button onClick={handleSelectMenuTask}>
                <BookOpenCheck />
              </button>
              <div className={`${pagesStyle.popupmenu} ${selectMenuTask ? pagesStyle.active : ""}`}>
                <section className={pagesStyle.dockcontent}>
                  <Taskmanagement />
                </section>
              </div>
            </li>
            <li>
              <h5>Inbox</h5>
              <button onClick={handleSelectMenuInbox}>
                <Inbox />
              </button>
              <div className={`${pagesStyle.popupmenu} ${selectMenuInbox ? pagesStyle.active : ""}`}>
                <section className={pagesStyle.dockcontent}>
                  <InboxMessage />
                </section>
              </div>
            </li>
            <li>
              <button>
                <Zap />
              </button>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Pages;
