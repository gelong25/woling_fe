import React from "react";
import chatData from "../data/chatData";
import ChatCard from "../components/ChatCard";
import { useNavigate } from "react-router-dom";

function ChatPage() {
  const navigate = useNavigate();

  const handleClick = (userId) => {
    navigate(`/chat/${userId}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>채팅</h2>
      <div>
        {chatData.map((chat) => (
          <div key={chat.id} onClick={() => handleClick(chat.id)} style={{ cursor: "pointer" }}>
            <ChatCard chat={chat} />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    paddingBottom: "80px",
    backgroundColor: "#f5f5f5", // 배경색 추가
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
};

export default ChatPage;
