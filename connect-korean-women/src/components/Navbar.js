// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <NavLink to="/community" style={styles.link}>커뮤니티</NavLink>
      <NavLink to="/" style={styles.link}>홈</NavLink>
      <NavLink to="/chat" style={styles.link}>채팅</NavLink>
      <NavLink to="/mypage" style={styles.link}>마이페이지</NavLink>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",   // ✅ 뷰포트 기준으로 고정
    bottom: 0,
    left: "50%",         // ✅ 화면 중앙에서 시작
    transform: "translateX(-50%)",  // ✅ 정확히 가운데 정렬
    width: "100%",
    maxWidth: "420px",   // ✅ App.js inner랑 똑같이 제한
    height: "60px",
    backgroundColor: "#ffffff",
    borderTop: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 100,
  },
  link: {
    textDecoration: "none",
    color: "#888",
    fontSize: "14px",
  },
};

export default Navbar;
