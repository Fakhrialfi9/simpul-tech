/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { Ellipsis, Trash2, Pencil, Share, Reply } from "lucide-react";
import conversationStyle from "../../assets/style/view/conversation.module.css";
import NavbarConversation from "../components/navbarConversation.jsx";
import InputMessage from "../components/inputmessage.jsx";

const Conversation = ({ conversation, onBack }) => {
  const [activeSelectId, setActiveSelectId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dropdownRef = useRef(null);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
  };

  const scrollToElement = (selector) => {
    const element = document.querySelector(selector);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isNewDay = (currentTimestamp, previousTimestamp) => {
    return new Date(currentTimestamp).toDateString() !== new Date(previousTimestamp).toDateString();
  };

  const toggleDropdown = (messageId) => {
    setActiveSelectId(activeSelectId === messageId ? null : messageId);
  };

  const handleClickOutside = (event) => {
    if (!dropdownRef.current?.contains(event.target)) {
      setActiveSelectId(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!conversation) {
    return <p>No conversation data available</p>;
  }

  return (
    <>
      <NavbarConversation conversationId={conversation.id} onBack={onBack} />
      <main className={conversationStyle.main}>
        <div className={conversationStyle.content}>
          <div className={conversationStyle.chat}>
            {conversation.messages.map((message, index) => (
              <div
                key={message.id}
                className={message.senderId === "user1" ? conversationStyle.containerbubblesend : conversationStyle.containerbubblereceive}>
                {(index === 0 || isNewDay(message.timestamp, conversation.messages[index - 1].timestamp)) && (
                  <div className={conversationStyle.newmessage}>
                    <div className={conversationStyle.diver}></div>
                    <h5>
                      {isToday(new Date(message.timestamp))
                        ? "Today, " +
                          new Date(message.timestamp).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : new Date(message.timestamp).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                    </h5>
                    <div className={conversationStyle.diver}></div>
                  </div>
                )}

                {conversation.unreadCount > 0 &&
                  message.senderId !== "user1" &&
                  index === conversation.messages.length - conversation.unreadCount && (
                    <div className={conversationStyle.newmessage}>
                      <div className={conversationStyle.diver}></div>
                      <h5 id='target-element'>New Message</h5>
                      <div className={conversationStyle.diver}></div>
                    </div>
                  )}

                {isLoading && (
                  <code className={conversationStyle.loadingconversation}>
                    <div className={conversationStyle.spinner}></div>
                    <h5>Please wait while we connect you with one of our team...</h5>
                  </code>
                )}

                {conversation.unreadCount > 0 &&
                  message.senderId !== "user1" &&
                  index === conversation.messages.length - conversation.unreadCount && (
                    <div className={conversationStyle.badgenewmessage}>
                      <code onClick={() => scrollToElement("#target-element")}>New Message</code>
                    </div>
                  )}

                <div className={conversationStyle.username}>
                  <h5>{message.senderId === "user1" ? "You" : conversation.participants.find((p) => p.id === message.senderId)?.name}</h5>
                </div>

                <div className={conversationStyle.wrapbubble}>
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(message.id);
                    }}>
                    <Ellipsis size={20} />
                    {activeSelectId === message.id && (
                      <div className={conversationStyle.select} ref={dropdownRef}>
                        <ul>
                          <li>
                            <a href=''>
                              <Pencil size={15} /> Edit Message
                            </a>
                          </li>
                          <li>
                            <a href=''>
                              <Share size={15} /> Share Message
                            </a>
                          </li>
                          <li>
                            <a href=''>
                              <Reply size={15} /> Reply Message
                            </a>
                          </li>
                          <li>
                            <a href=''>
                              <Trash2 size={15} /> Delete Message
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </span>

                  {/* Loading state */}
                  {isLoading && (
                    <div className={conversationStyle.bubble}>
                      <p>...</p>
                    </div>
                  )}

                  {/* Message content */}
                  {!isLoading && (
                    <div className={conversationStyle.bubble}>
                      <h5>{message.content}</h5>
                      <p>{formatTime(message.timestamp)}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <InputMessage />
    </>
  );
};

export default Conversation;
