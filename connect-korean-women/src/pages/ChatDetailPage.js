import React from "react";
import { useParams } from "react-router-dom";
import ChatInput from "../components/ChatInput";


const ChatDetailPage = () => {
  const { userId } = useParams();

  const messages = [
    { sender: "lina", text: "안녕하세요! 한국어 공부하고 있는 사라예요", time: "14:30" },
    { sender: "me", text: "안녕하세요 사라! 저는 영어 배우고 싶어요", time: "14:32" },
    { sender: "lina", text: "좋아요! 서로 도와주면 좋겠어요 😊", time: "14:33" },
    { sender: "lina", text: "한국어 문법 질문이 있어요!", time: "14:45" },
  ];

  return (
    <div style={styles.container}>
      {/* 메시지 영역 */}
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

      {/* ✅ 입력창 (이 페이지만 고정됨) */}
      // src/pages/ChatDetailPage.js
      <div style={styles.inputWrapper}>
        <div style={styles.inputInner}>
          <ChatInput onSend={() => console.log("메시지 전송!")} />
        </div>
      </div>

    </div>
  );
};
const styles = {
  container: {
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  messageContainer: {
    flex: 1,
    padding: "16px",
    paddingBottom: "80px", // 네비바+입력창 공간 확보
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
    border: "1px solid #eee",
    borderBottomLeftRadius: 0,
  },
  time: {
    fontSize: "11px",
    marginTop: 4,
    textAlign: "right",
    opacity: 0.6,
  },

  // ✅ 여기서만 fixed 처리
  inputWrapper: {
    position: "fixed",
    bottom: "60px", // 네비바 위
    left: 0,
    right: 0,
    zIndex: 100,
  },
  inputInner: {
    maxWidth: "420px", // App.js inner랑 동일
    margin: "0 auto",
    padding: "8px 12px",
  },
};


export default ChatDetailPage;
