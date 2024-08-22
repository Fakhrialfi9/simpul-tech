import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Inbox, BookOpenCheck, Zap } from "lucide-react";
import { useMenuContext } from "../../context/closepopup.jsx";
import pagesStyle from "../../assets/style/view/pages.module.css";
import Taskmanagement from "./taskmanagement.jsx";
import InboxMessage from "./inbox.jsx";

const Pages = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const { selectMenuTask, selectMenuInbox, handleSelectMenuTask, handleSelectMenuInbox } = useMenuContext();

  const toggleMenuVisibility = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <main className={pagesStyle.pages}>
      <div className={pagesStyle.content}>
        <div className={pagesStyle.heading}>
          <h3>Simpul Tech</h3>
        </div>
        <section className={pagesStyle.dock}>
          <ul>
            <AnimatePresence>
              {isMenuVisible && (
                <>
                  <motion.li
                    className={`${pagesStyle.button} ${selectMenuTask ? pagesStyle.active : ""}`}
                    initial={{ opacity: 0, x: 175 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 175 }}
                    transition={{ duration: 0.75 }}>
                    <h5>Task</h5>
                    <button onClick={handleSelectMenuTask}>
                      <BookOpenCheck />
                    </button>
                    <div className={`${pagesStyle.popupmenu} ${selectMenuTask ? pagesStyle.active : ""}`}>
                      <section className={pagesStyle.dockcontent}>
                        <Taskmanagement />
                      </section>
                    </div>
                  </motion.li>

                  <motion.li
                    className={`${pagesStyle.button} ${selectMenuInbox ? pagesStyle.active : ""}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}>
                    <h5>Inbox</h5>
                    <button onClick={handleSelectMenuInbox}>
                      <Inbox />
                    </button>
                    <div className={`${pagesStyle.popupmenu} ${selectMenuInbox ? pagesStyle.active : ""}`}>
                      <section className={pagesStyle.dockcontent}>
                        <InboxMessage />
                      </section>
                    </div>
                  </motion.li>
                </>
              )}
            </AnimatePresence>

            <li>
              <button className={pagesStyle.floatingbutton} onClick={toggleMenuVisibility}>
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
