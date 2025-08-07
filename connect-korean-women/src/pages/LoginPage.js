import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const [email, setEmail] = useState("");      // ✅ email 상태 선언
    const [password, setPassword] = useState(""); // ✅ password 상태 선언
    const navigate = useNavigate();               // ✅ navigate 선언

    const handleLogin = async () => {
        if (!email || !password) {
          alert("이메일과 비밀번호를 입력해주세요.");
          return;
        }
    
        try {
          // 여긴 백엔드 연결 시 수정할 부분
          console.log("로그인 시도:", email, password);
    
          // 로그인 성공 시 토큰 저장
          localStorage.setItem("token", "fake-token");
          navigate("/"); 
        } catch (error) {
          alert("로그인 실패!");
        }
      };
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>로그인</h2>
      <div style={styles.card}>
      <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // ✅ 이메일 입력 시 상태 업데이트
          style={styles.input}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // ✅ 비밀번호 입력 시 상태 업데이트
          style={styles.input}
        />
        <button style={styles.button} onClick={handleLogin}>로그인</button>
        <p style={styles.link}>아직 회원이 아니신가요? 회원가입</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f5f5f5",
    height: "50vh",
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
    maxWidth: "380px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
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

export default LoginPage;
