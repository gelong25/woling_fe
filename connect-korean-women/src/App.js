// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CommunityPage from "./pages/CommunityPage";
import ChatPage from "./pages/ChatPage";
import MyPage from "./pages/MyPage";
import PolicyPage from "./pages/PolicyPage";
import ChatDetailPage from './pages/ChatDetailPage';
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PostDetailPage from "./pages/PostDetailPage";

const isAuthenticated = () => {
  return !!localStorage.getItem("token"); // 간단한 인증 체크
};

function App() {
  return (
    <Router>
      <div style={styles.outer}>
        <div style={styles.inner}>
          <Header />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/community/policy" element={<PolicyPage />} /> 
            <Route path="/community/:postId" element={<PostDetailPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/chat/:userId" element={<ChatDetailPage />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
          <Navbar />
        </div>
      </div>
    </Router>
  );
}

const styles = {
  outer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
  },
  inner: {
    width: "100%",
    maxWidth: "420px",
    minHeight: "100vh",
    backgroundColor: "#fff",
    position: "relative",
  },
};

export default App;
