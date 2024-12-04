import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css";
import Chat from "./components/Chat";
import Modal from "./components/Modal";

const socket = io("http://localhost:3000");

function App() {
  const [username, setUsername] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const startChatting = () => {
    if (username.trim() === "") return;
    setIsModalOpen(false);
    setIsChatOpen(true);
  };

  return (
    <div className="App">
      {isModalOpen && (
        <Modal setUsername={setUsername} startChatting={startChatting} />
      )}
      {isChatOpen && <Chat socket={socket} username={username} />}
    </div>
  );
}

export default App;
