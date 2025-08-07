import React from "react";
import { useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const ChatDetailPage = () => {
  const { userId } = useParams(); // URL에서 /chat/:userId 가져옴

  // 더미 유저 및 메시지
  const user = {
    id: "lina",
    name: "리나 (Lina)",
    country: "🇻🇳",
    isOnline: true,
    avatarText: "리",
  };

  const messages = [
    { sender: "lina", text: "안녕하세요! 한국어 공부하고 있는 사라예요", time: "14:30" },
    { sender: "me", text: "안녕하세요 사라! 저는 영어 배우고 싶어요", time: "14:32" },
    { sender: "lina", text: "좋아요! 서로 도와주면 좋겠어요 😊", time: "14:33" },
    { sender: "lina", text: "한국어 문법 질문이 있어요!", time: "14:45" },
  ];

  return (
    <div style={styles.container}>
      {/* 상단 헤더 */}
      <div style={styles.header}>
        <IoArrowBack size={24} style={{ marginRight: 10 }} />
        <div style={styles.avatar}>{user.avatarText}</div>
        <div>
          <div style={styles.nameRow}>
            <span style={styles.name}>{user.name}</span>
            <span style={styles.country}>{user.country}</span>
            {user.isOnline && <span style={styles.onlineDot}>●</span>}
          </div>
        </div>
      </div>

      {/* 메시지 목록 */}
      <div style={styles.messageContainer}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              ...styles.messageBubble,
              ...(msg.sender === "me" ? styles.myMessage : styles.otherMessage),
            }}
          >
            {msg.text}
            <div style={styles.time}>{msg.time}</div>
          </div>
        ))}
      </div>

      {/* 입력창 */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="메시지를 입력하세요..."
          style={styles.input}
        />
        <button style={styles.sendButton}>➤</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f5f5f5",
    minHeight: "100vh", // height → minHeight로 바꿈
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: "16px",
    backgroundColor: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: "#ec407a",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    fontWeight: "bold",
  },
  nameRow: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  name: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  country: {
    fontSize: "14px",
  },
  onlineDot: {
    color: "green",
    fontSize: "12px",
  },
  messageContainer: {
    flex: 1,
    padding: "16px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  messageBubble: {
    maxWidth: "75%",
    padding: "10px 14px",
    borderRadius: "16px",
    fontSize: "15px",
    position: "relative",
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#ec407a",
    color: "#fff",
    borderBottomRightRadius: 0,
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    color: "#000",
    borderBottomLeftRadius: 0,
    border: "1px solid #eee",
  },
  time: {
    fontSize: "11px",
    marginTop: 4,
    textAlign: "right",
    opacity: 0.6,
  },
  inputContainer: {
    padding: "100px 16px",
    backgroundColor: "#f5f5f5",
    display: "flex",
  },
  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  sendButton: {
    marginLeft: 8,
    padding: "0 14px",
    backgroundColor: "#f06292",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default ChatDetailPage;
