import React from "react";
import dummyPosts from "../data/dummyPosts";
import PostCard from "../components/PostCard";
import { NavLink } from "react-router-dom";

function CommunityPage() {
  return (
    
    <div style={styles.container}>
      <div style={styles.topBar}>
        <h2 style={styles.title}>커뮤니티</h2>
        <button style={styles.writeBtn}>+ 글쓰기</button>
      </div>

      <div style={styles.tabRow}>
      <NavLink to="/community" style={({ isActive }) => isActive ? styles.activeTab : styles.inactiveTab}>
            일반 커뮤니티
        </NavLink>
        <NavLink to="/community/policy" style={({ isActive }) => isActive ? styles.activeTab : styles.inactiveTab}>
            정책 & 소식
        </NavLink>
      </div>

      <div style={{ marginTop: "20px" }}>
        {dummyPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    paddingBottom: "80px", // 네비바 가리기 방지
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  writeBtn: {
    backgroundColor: "#ef497a",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "12px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  tabRow: {
    display: "flex",
    gap: "8px",
    marginTop: "16px",
  },
  activeTab: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#f8f8f8",
    borderRadius: "12px",
    fontWeight: "bold",
    border: "none",
    textAlign: "center",
    textDecoration: "none",
    color: "#000",
  },
  inactiveTab: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#eee",
    borderRadius: "12px",
    color: "#888",
    border: "none",
    textAlign: "center",
    textDecoration: "none",
  },
};

export default CommunityPage;
