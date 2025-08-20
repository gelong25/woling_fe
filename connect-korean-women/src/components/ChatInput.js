// src/components/ChatInput.js
import React from "react";

const ChatInput = ({ onSend }) => {
  return (
    <div style={styles.wrapper}>
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
  wrapper: {
    //position: "fixed",   // ✅ 뷰포트 기준으로 고정
    //bottom: "60px",      // ✅ 네비바 위에 딱 붙음
    //left: "50%",
    //transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "420px",   // ✅ 동일한 가로폭 제한
    backgroundColor: "#f5f5f5",
    padding: "2px 18px",
    //borderTop: "1px solid #ddd",
    boxSizing: "border-box",
    //zIndex: 90,
  },
  
  inputContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "30px",
    padding: "6px 10px",
    border: "1px solid #ddd",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "14px",
    padding: "8px",
  },
  sendButton: {
    marginLeft: 8,
    width: 32,
    height: 32,
    backgroundColor: "#f06292",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default ChatInput;  // ✅ default export
