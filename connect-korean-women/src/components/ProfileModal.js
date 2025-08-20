// src/components/ProfileModal.js
import React from "react";

function ProfileModal({ user, onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {/* 닫기 버튼 */}
        <button style={styles.closeBtn} onClick={onClose}>✕</button>

        {/* 이름 */}
        <h2 style={styles.name}>
          {user.name} <span style={styles.engName}>({user.engName})</span>
        </h2>
        <p style={styles.subText}>프로필 상세 정보와 채팅을 시작해보세요.</p>

        {/* 아바타 + 국적/나이 */}
        <div style={styles.header}>
          <div style={styles.avatar}>
            {user.initial}
            {user.isOnline && <span style={styles.onlineDot}></span>}
          </div>
          <div>
            <div style={styles.infoRow}>
              <span>{user.flag} {user.country}</span>
              <span>📅 {user.age}세</span>
            </div>
            <p style={styles.location}>📍 {user.region}</p>
          </div>
        </div>

        {/* ✅ 가운데 정렬된 본문 */}
        <div style={styles.body}>
          <div style={styles.section}>
            <p style={styles.label}>내가 가르쳐줄 수 있는 언어:</p>
            <span style={styles.teachBadge}>{user.teach}</span>
          </div>

          <div style={styles.section}>
            <p style={styles.label}>내가 배우고 싶은 언어:</p>
            <span style={styles.learnBadge}>{user.learn}</span>
          </div>

          <div style={styles.section}>
            <p style={styles.label}>⏰ 가능한 시간대:</p>
            <div style={styles.badgeRow}>
              {user.available?.map((time, idx) => (
                <span key={idx} style={styles.badge}>{time}</span>
              ))}
            </div>
          </div>

          <p style={styles.recommend}>👍 추천받은 횟수: {user.recommendCount}회</p>
        </div>

        {/* 버튼 */}
        <div style={styles.buttonRow}>
          <button style={styles.btn}>추천</button>
          <button style={styles.btnDanger}>신고</button>
          <button style={styles.btnChat}>채팅</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#fff",
    borderRadius: "16px",
    padding: "18px 24px",  
    width: "500px",
    maxWidth: "90%",
    position: "relative",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    fontFamily: "Noto Sans KR, sans-serif",
  },
  closeBtn: {
    position: "absolute",
    top: "12px",
    right: "16px",
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    color: "#555",
  },
  name: { margin: 0, fontSize: "20px", fontWeight: "bold", color: "#222" },
  engName: { fontWeight: "normal", color: "#666" },
  subText: { fontSize: "14px", color: "#777", margin: "4px 0 10px" },

  header: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "12px",
  },
  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#e91e63",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  onlineDot: {
    position: "absolute",
    bottom: "6px",
    right: "6px",
    width: "10px",
    height: "10px",
    background: "#4caf50",
    borderRadius: "50%",
    border: "2px solid #fff",
  },
  infoRow: {
    display: "flex",
    gap: "12px",
    fontSize: "12px",
    marginBottom: "2px",
  },
  location: { fontSize: "13px", color: "#444" },

  // ✅ 이 body 덕분에 중앙에 딱 들어감
  body: {
    width: "70%",
    margin: "0 auto", // 가운데 배치
    textAlign: "left", // 글자는 왼쪽 정렬
  },

  section: { marginBottom: "10px" },
  label: { fontSize: "13px", fontWeight: "bold", marginBottom: "4px" },
  teachBadge: {
    display: "inline-block",
    background: "#fce4ec",
    color: "#e91e63",
    borderRadius: "16px",
    padding: "4px 9px", 
    fontSize: "12px",
    fontWeight: "bold",
  },
  learnBadge: {
    display: "inline-block",
    background: "#f5f5f5",
    borderRadius: "16px",
    padding: "6px 12px",
    fontSize: "12px",
  },
  badgeRow: { display: "flex", gap: "8px", marginTop: "4px" },
  badge: {
    background: "#f5f5f5",
    borderRadius: "16px",
    padding: "6px 12px",
    fontSize: "13px",
  },
  recommend: {
    fontSize: "13px",
    margin: "8px 0",
  },

  buttonRow: { display: "flex", gap: "10px", marginTop: "16px" },
  btn: {
    flex: 1,
    padding: "10px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    background: "#fff",
    cursor: "pointer",
    fontSize: "13px",
  },
  btnDanger: {
    flex: 1,
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid #e53935",
    color: "#e53935",
    background: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
  btnChat: {
    flex: 1,
    padding: "12px",
    borderRadius: "12px",
    background: "linear-gradient(90deg, #e91e63, #f06292)",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
};

export default ProfileModal;
