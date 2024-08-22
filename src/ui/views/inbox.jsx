import { useState, useEffect } from "react";
import { conversations } from "../../data/inboxData.js";
import { formatDate, formatTime } from "../../utils/formatters.js";
import { User } from "lucide-react";
import Conversation from "./conversation.jsx";
import NavbarInbox from "../components/navbarInbox.jsx";
import inboxStyle from "../../assets/style/view/inbox.module.css";
import Spinner from "../../lib/spinner.jsx";

const Inbox = () => {
  const [conversationsData, setConversationsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeConversation, setActiveConversation] = useState(null);

  useEffect(() => {
    setConversationsData(conversations);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getLastMessage = (messages) =>
    messages.reduce((latest, message) => (new Date(message.timestamp) > new Date(latest.timestamp) ? message : latest), messages[0]);

  const handleConversationClick = (conversation) => {
    setActiveConversation(conversation);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {!activeConversation ? (
        <>
          <NavbarInbox />
          <main className={inboxStyle.main}>
            <div className={inboxStyle.content}>
              <ul>
                {conversationsData.map((conversation) => {
                  const lastMessage = getLastMessage(conversation.messages);
                  const sender = conversation.participants.find((p) => p.id === lastMessage?.senderId);

                  return (
                    <li key={conversation.id}>
                      <a onClick={() => handleConversationClick(conversation)}>
                        <div className={inboxStyle.containeravatar}>
                          {conversation.participants.map((participant) => (
                            <div
                              className={inboxStyle.avatar}
                              key={participant.id}
                              style={{ backgroundColor: localStorage.getItem(`avatar-color-${participant.id}`) }}>
                              <h6>
                                <User size='18' />
                              </h6>
                            </div>
                          ))}
                        </div>
                        <div className={inboxStyle.information}>
                          <div className={inboxStyle.header}>
                            <div className={inboxStyle.headline}>
                              <h5>{conversation.titleMessage}</h5>
                            </div>
                            <div className={inboxStyle.datetime}>
                              <p>{lastMessage ? formatDate(lastMessage.timestamp) : ""}</p>
                              <p>{lastMessage ? formatTime(lastMessage.timestamp) : ""}</p>
                            </div>
                          </div>
                          <div className={inboxStyle.username}>
                            <h5>{sender?.name}:</h5>
                          </div>
                          <div className={inboxStyle.contentmessage}>
                            <h5>{lastMessage?.content}</h5>
                          </div>
                        </div>
                        {conversation.unreadCount > 0 && (
                          <div className={inboxStyle.badge}>
                            <span>{conversation.unreadCount}</span>
                          </div>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </main>
        </>
      ) : (
        <section className={inboxStyle.conversation}>
          <Conversation conversation={activeConversation} onBack={() => setActiveConversation(null)} />
        </section>
      )}
    </>
  );
};

export default Inbox;
