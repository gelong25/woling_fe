// src/pages/PolicyPage.js
import React from "react";
import policyPosts from "../data/policyPosts";
import PostCard from "../components/PostCard";
import { NavLink } from "react-router-dom";

function PolicyPage() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>커뮤니티</h2>

      <div style={styles.tabRow}>
      <NavLink to="/community" style={({ isActive }) => isActive ? styles.activeTab : styles.inactiveTab}>
            일반 커뮤니티
        </NavLink>
        <NavLink to="/community/policy" style={({ isActive }) => isActive ? styles.activeTab : styles.inactiveTab}>
            정책 & 소식
        </NavLink>
      </div>

      <div style={{ marginTop: "20px" }}>
        {policyPosts.map((post) => (
          <PostCard key={post.id} post={post} />
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

export default PolicyPage;
