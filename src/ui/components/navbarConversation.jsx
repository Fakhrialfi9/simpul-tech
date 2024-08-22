/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { ArrowLeft, X } from "lucide-react";
import navbarStyle from "../../assets/style/components/navbar.module.css";
import { useMenuContext } from "../../context/closepopup.jsx";
import { conversations } from "../../data/inboxData.js";

const Navbar = ({ conversationId, onBack }) => {
  const { handleSelectMenuInbox } = useMenuContext();
  const conversation = conversations.find((convo) => convo.id === conversationId);

  const titleMessage = conversation?.titleMessage || "No Title";
  const participants = conversation?.participants || [];

  return (
    <nav className={navbarStyle.navbar}>
      <ul>
        <li>
          <span onClick={onBack}>
            <ArrowLeft />
          </span>
          <div className={navbarStyle.headline}>
            <h5>{titleMessage}</h5>
            <p>{participants.length} participants</p>
          </div>
        </li>
        <li>
          <span onClick={handleSelectMenuInbox}>
            <X />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
