import React from "react";
import logo from "../assets/logo.png"; // ✅ 이미지 불러오기

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoWrap}>
        <img src={logo} alt="logo" style={styles.logo} />
        <div>
          <h1 style={styles.title}>Woling</h1>
          <p style={styles.subtitle}>Language Exchange</p>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    /*position: "sticky",   // 👈 화면 위에 고정
    top: 0,                  // 👈 이게 꼭 필요함
    zIndex: 100,     
    padding: "12px 20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    display: "flex",
    justifyContent: "flex-start",*/
    position: "fixed",   // ✅ 화면 상단에 고정
    top: 0,
    left: "50%",         // ✅ 가운데 정렬
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "420px",   // ✅ App.js의 inner 폭 맞춤
    height: "60px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd",
    zIndex: 100,
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    width: "35px",
    height: "35px",
    padding: "10px",
  },
  title: {
    margin: 0,
    fontSize: "18px",
    fontWeight: "bold",
    color: "#d81b60",
  },
  subtitle: {
    margin: 0,
    fontSize: "12px",
    color: "#888",
  },
};

export default Header;
