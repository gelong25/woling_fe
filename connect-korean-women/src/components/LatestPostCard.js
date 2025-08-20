import React from "react";

function LatestPostCard({ post }) {
  return (
    <div style={styles.card}>
      {/* 작성자 */}
      <div style={styles.header}>
        <div style={styles.avatar}>{post.author[0]}</div>
        <span style={styles.name}>{post.author}</span>
        <span style={styles.flag}>{post.flag}</span>
        <span style={styles.time}>{post.time}</span>
      </div>

      {/* 카테고리 */}
      <div style={styles.category}>{post.category}</div>

      {/* 제목 */}
      <h4 style={styles.title}>{post.title}</h4>

      {/* 내용 */}
      <p style={styles.content}>{post.content}</p>

      {/* 좋아요/댓글 */}
      <div style={styles.footer}>
        <span>♡ {post.likes}</span>
        <span>💬 {post.comments}</span>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)", // 🔥 HOT보다 가볍게
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    marginBottom: "6px",
  },
  avatar: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    backgroundColor: "#ef497a",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: "28px",
    fontSize: "14px",
  },
  name: { fontWeight: "bold" },
  flag: { fontSize: "16px" },
  time: { color: "#999", fontSize: "12px" },
  category: {
    display: "inline-block",
    fontSize: "12px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    padding: "2px 6px",
    marginBottom: "6px",
    color: "#555",
  },
  title: {
    fontWeight: "bold",
    fontSize: "15px",
    margin: "4px 0",
  },
  content: { fontSize: "14px", color: "#333", marginBottom: "10px" },
  footer: {
    display: "flex",
    gap: "12px",
    fontSize: "13px",
    color: "#555",
  },
};

export default LatestPostCard;
