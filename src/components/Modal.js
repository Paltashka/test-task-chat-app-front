import React from "react";
import "../styles/Modal.css";

const Modal = ({ setUsername, startChatting }) => {
  return (
    <div className="modal">
      <h1>Chat App</h1>
      <input
        type="text"
        placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={startChatting}>Start Chatting</button>
    </div>
  );
};

export default Modal;
