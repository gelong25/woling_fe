import React from "react";

const SignupPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>회원가입</h2>
      <div style={styles.card}>
        <input type="text" placeholder="이름" style={styles.input} />
        <input type="email" placeholder="이메일" style={styles.input} />
        <input type="password" placeholder="비밀번호" style={styles.input} />
        <input type="text" placeholder="국가 (예: 한국)" style={styles.input} />
        <input type="number" placeholder="나이" style={styles.input} />
        <input type="text" placeholder="언어 (예: 한국어)" style={styles.input} />
        <input type="text" placeholder="프로필 이미지 URL (선택)" style={styles.input} />
        <button style={styles.button}>회원가입</button>
        <p style={styles.link}>이미 계정이 있으신가요? 로그인</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f5f5f5",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  title: {
    position: "absolute",
    top: "60px",
    fontSize: "22px",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    padding: "32px",
    borderRadius: "20px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  input: {
    padding: "14px",
    fontSize: "15px",
    borderRadius: "12px",
    border: "1px solid #ddd",
  },
  button: {
    backgroundColor: "#f06292",
    color: "#fff",
    padding: "14px",
    fontSize: "15px",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
  },
  link: {
    fontSize: "13px",
    color: "#666",
    textAlign: "center",
  },
};

export default SignupPage;
