import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import TodayTopicCard from "../components/TodayTopicCard";
import HotPostCard from "../components/HotPostCard";
import LatestPostCard from "../components/LatestPostCard";
import { todayTopic, hotPosts, latestPosts } from "../data/dummyPosts";
// 🔥 임시 데이터 (dummy)

function CommunityPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("전체");

  const categories = ["전체", "오늘의 주제", "육아", "한국어", "문화", "자유"];


  return (
    <div style={styles.container}>
      {/* 상단 타이틀 + 글쓰기 버튼 */}
      <div style={styles.topBar}>
        <h2 style={styles.title}>커뮤니티</h2>
        <button
          style={styles.writeBtn}
          onClick={() => {
            if (!localStorage.getItem("token")) {
              navigate("/login");
            } else {
              navigate("/write");
            }
          }}
        >
          + 글쓰기
        </button>
      </div>

      {/* 탭 */}
      <div style={styles.tabRow}>
        <NavLink
          to="/community"
          style={({ isActive }) =>
            isActive ? styles.activeTab : styles.inactiveTab
          }
        >
          일반 커뮤니티
        </NavLink>
        <NavLink
          to="/community/policy"
          style={({ isActive }) =>
            isActive ? styles.activeTab : styles.inactiveTab
          }
        >
          정책 & 소식
        </NavLink>
      </div>
      {/* ✅ 카테고리 선택 버튼 */}
      <div style={styles.categoryRow}>
        {categories.map((cat) => (
          <button
            key={cat}
            style={activeCategory === cat ? styles.activeCategory : styles.category}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 오늘의 주제 → '오늘의 주제' 선택 시에만 보이게 */}
      {activeCategory === "오늘의 주제" && (
        <div style={{ marginTop: "20px" }}>
          <TodayTopicCard topic={todayTopic} />
        </div>
      )}

      {/* HOT 게시글 */}
      <h3 style={styles.sectionTitle}>🔥 HOT 게시글</h3>
      {hotPosts.map((post) => (
        <div
          key={post.id}
          onClick={() => navigate(`/community/${post.id}`)}
          style={{ cursor: "pointer" }}
        >
          <HotPostCard post={post} />
        </div>
      ))}

      {/* 최신 게시글 */}
      <h3 style={styles.sectionTitle}>🆕 최신 게시글</h3>
      {latestPosts.map((post) => (
        <div
          key={post.id}
          onClick={() => navigate(`/community/${post.id}`)}
          style={{ cursor: "pointer" }}
        >
          <LatestPostCard post={post} />
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    paddingBottom: "80px", // 네비바 가림 방지
    backgroundColor: "#f5f5f5",
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
    textAlign: "center",
    textDecoration: "none",
    color: "#000",
  },
  inactiveTab: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#eee",
    borderRadius: "12px",
    textAlign: "center",
    textDecoration: "none",
    color: "#888",
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "20px 0 12px 0",
  },
  categoryRow: {
    display: "flex",
    gap: "8px",
    marginTop: "16px",
    overflowX: "auto", // 🔥 카테고리 많아지면 스크롤
  },
  category: {
    padding: "6px 10px",
    borderRadius: "20px",
    backgroundColor: "#f1f1f1",
    fontSize: "13px",
    color: "#555",
    border: "none",
    cursor: "pointer",
  },
  activeCategory: {
    padding: "6px 10px",
    borderRadius: "20px",
    background: "linear-gradient(90deg, #ef497a, #f77c9e)",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "13px",   // 🔥 여기도 동일
  },
};

export default CommunityPage;
