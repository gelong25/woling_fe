import React from "react";

function ChatCard({ chat }) {
  return (
    <div style={styles.card}>
      <div style={styles.avatarWrap}>
        <div style={styles.avatar}>{chat.profileInitial}</div>
        <span
          style={{
            ...styles.dot,
            backgroundColor: chat.isOnline ? "green" : "#bbb",
          }}
        />
      </div>

      <div style={styles.info}>
        <div style={styles.nameRow}>
          <strong>{chat.name}</strong>
          <span style={styles.country}>{chat.country}</span>
        </div>
        <div style={styles.message}>{chat.message}</div>
      </div>

      <div style={styles.right}>
        <div style={styles.time}>{chat.time}</div>
        {chat.unread > 0 && (
          <div style={styles.unread}>{chat.unread}</div>
        )}
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    marginBottom: "12px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  avatarWrap: {
    position: "relative",
  },
  avatar: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    backgroundColor: "#f06292",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "15px",
  },
  dot: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    border: "2px solid white",
  },
  info: {
    flex: 1,
    marginLeft: "12px",
  },
  nameRow: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    marginBottom: "2px",
  },
  country: {
    backgroundColor: "#eee",
    borderRadius: "8px",
    fontSize: "12px",
    padding: "2px 6px",
  },
  message: {
    fontSize: "14px",
    color: "#444",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "6px",
  },
  time: {
    fontSize: "12px",
    color: "#888",
  },
  unread: {
    backgroundColor: "#f06292",
    color: "#fff",
    fontSize: "12px",
    fontWeight: "bold",
    borderRadius: "12px",
    padding: "4px 8px",
  },
};

export default ChatCard;
