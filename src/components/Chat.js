import React, { useState, useEffect, useRef } from "react";
import MessageBox from "./MessageBox";
import "../styles/Chat.css";

const Chat = ({ socket, username }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      if (Array.isArray(data)) {
        setMessages(data);
      } else {
        setMessages((prevMessages) => [...prevMessages, data]);
      }
    });

    socket.emit("getMessages", (messages) => {
      setMessages(messages);
    });

    socket.on("errorMessage", (errorMessage) => {
      setError(errorMessage);
      setTimeout(() => setError(""), 5000);
    });

    return () => {
      socket.off("receiveMessage");
      socket.off("errorMessage");
    };
  }, [socket]);

  const sendMessage = () => {
    if (message.trim() === "") return;
    setError("");
    socket.emit("sendMessage", { sender: username, content: message });
    setMessage("");
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat">
      <h2>Welcome, {username}</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <MessageBox key={index} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      {error && <p className="error">{error}</p>}
      <div className="inputBox">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
