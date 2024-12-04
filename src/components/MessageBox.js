import React from "react";
import "../styles/MessageBox.css";

const MessageBox = ({ message }) => {
  const { sender, content, timestamp } = message;

  const time = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="messageBox">
      <div className="messageHeader">
        <span className="username">{sender}</span>
        <span className="time">{time}</span>
      </div>
      <div className="messageContent">{content}</div>
    </div>
  );
};

export default MessageBox;
