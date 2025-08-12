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
    padding: "12px 20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    display: "flex",
    justifyContent: "flex-start",
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    width: "30px",
    height: "30px",
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
