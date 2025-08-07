import React from "react";
import chatData from "../data/chatData";
import ChatCard from "../components/ChatCard";

function ChatPage() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>채팅</h2>
      <div>
        {chatData.map((chat) => (
          <ChatCard key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    paddingBottom: "80px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
};

export default ChatPage;
