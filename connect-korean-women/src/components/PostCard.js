// src/components/PostCard.js
import React from "react";

function PostCard({ post }) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.avatar}>{post.profileInitial}</div>
        <div>
          <strong>{post.name}</strong>{" "}
          <span style={{ fontSize: "12px" }}>{post.country}</span> ·{" "}
          <span style={{ fontSize: "12px", color: "#888" }}>{post.time}</span>
        </div>
      </div>
      <h3 style={styles.title}>{post.title}</h3>
      <p style={styles.content}>{post.content}</p>
      <div style={styles.footer}>
        <span>❤️ {post.likes}</span>
        <span style={{ marginLeft: "16px" }}>💬 {post.comments}</span>
      </div>
    </div>
  );
}

const styles = {
    verifiedBadge: {
    backgroundColor: "#e0e7ff",
    color: "#1e40af",
    fontSize: "10px",
    padding: "2px 6px",
    borderRadius: "8px",
    fontWeight: "bold",
      },
  card: {
    backgroundColor: "#fff",
    padding: "16px",
    borderRadius: "12px",
    marginBottom: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "8px",
  },
  avatar: {
    backgroundColor: "#f06292",
    color: "#fff",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "14px",
  },
  title: {
    margin: "4px 0",
    fontSize: "16px",
    fontWeight: "bold",
  },
  content: {
    fontSize: "14px",
    color: "#555",
  },
  footer: {
    marginTop: "8px",
    fontSize: "13px",
    color: "#d81b60",
  },
};

export default PostCard;
