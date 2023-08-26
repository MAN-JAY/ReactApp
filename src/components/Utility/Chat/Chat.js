import React, { useState } from "react";
import "./chat.css";
const Chats = ({ userAccounts, selectedUser }) => {
  const [chatMenu, setChatMenu] = useState(false);
  const [activeUser, setActiveUser] = useState(null);

  // toggle chat menu and set active user to null when chat is closed
  const toggleChat = () => {
    setChatMenu(!chatMenu);
    setActiveUser(null);
  };

  const chatList = userAccounts.filter((user) => user.id !== selectedUser.id);

  // open active user chat
  const openChat = (user) => {
    setActiveUser(user);
  };

  return (
    <div className="chat__section">
      <div className={`chat__container ${chatMenu ? "expanded" : ""}`}>
        <button className="toggle__button" onClick={toggleChat}>
          <div className="btn__text">
            <i class="far fa-comment-alt fa-flip-horizontal"></i> <p>Chats</p>
          </div>

          {chatMenu ? (
            <i class="fas fa-chevron-up fa-flip-vertical"></i>
          ) : (
            <i class="fas fa-chevron-up"></i>
          )}
        </button>
        {/* render chat menu */}
        {chatMenu && (
          <div className="chat__messages">
            {chatList.map((user) => {
              return (
                <div
                  key={user.id}
                  className="user__status"
                  onClick={() => openChat(user)}
                >
                  <div className="user__contact">
                    <img src={user.profilepicture} alt="chat_profile" />
                    <p id="username">{user.name}</p>
                  </div>
                  <div className="status__indicator"></div>
                </div>
              );
            })}
          </div>
        )}
      </div>{" "}
      {/* render active chat */}
      {activeUser && (
        <div className="chat__window ">
          <button
            className="toggle__button"
            onClick={() => setActiveUser(null)}
          >
            <div className="active__btn__text">
              <div className="active__user__info">
                <img src={activeUser.profilepicture} alt="" />
                <p>{activeUser.name}</p>
              </div>
              <i class="fas fa-times"></i>
            </div>
          </button>
          <div className="active__user">
            <input type="text" className="chat__text" placeholder="message" />
            <i class="fas fa-chevron-up fa-rotate-90"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chats;
