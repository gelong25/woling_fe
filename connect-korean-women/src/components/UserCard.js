import React from "react";

function UserCard({ user }) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        {/* 왼쪽 프로필 원 */}
        <div style={styles.avatarWrap}>
          <div style={styles.avatar}>{user.profileInitial}</div>
          {user.isOnline && <span style={styles.onlineDot} />}
        </div>

        {/* 오른쪽 정보 */}
        <div style={styles.info}>
          <div style={styles.nameRow}>
            <strong>{user.name}</strong>
            <span style={styles.countryTag}>{user.country}</span>
          </div>
          <div style={styles.meta}>📅 {user.age}세</div>
          <div style={styles.meta}>📍 {user.region}</div>

          <div style={styles.langRow}>
            {user.languages.map((lang) => (
              <span key={lang} style={styles.lang}>
                {lang}
              </span>
            ))}
          </div>

          <button style={styles.chatBtn}>💬 채팅 시작하기</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: "16px",
    borderRadius: "16px",
    marginBottom: "16px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  },
  header: {
    display: "flex",
    gap: "16px",
    alignItems: "flex-start",
  },
  avatarWrap: {
    position: "relative",
  },
  avatar: {
    width: "48px",
    height: "48px",
    backgroundColor: "#f06292",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "16px",
  },
  onlineDot: {
    position: "absolute",
    bottom: "0",
    right: "0",
    width: "10px",
    height: "10px",
    backgroundColor: "green",
    border: "2px solid white",
    borderRadius: "50%",
  },
  info: {
    flex: 1,
  },
  nameRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "4px",
  },
  countryTag: {
    backgroundColor: "#eee",
    borderRadius: "12px",
    fontSize: "12px",
    padding: "2px 8px",
  },
  meta: {
    fontSize: "14px",
    color: "#444",
    marginBottom: "2px",
  },
  langRow: {
    display: "flex",
    gap: "8px",
    margin: "8px 0",
  },
  lang: {
    padding: "4px 8px",
    backgroundColor: "#f2f2f2",
    borderRadius: "12px",
    fontSize: "12px",
  },
  chatBtn: {
    marginTop: "4px",
    padding: "10px",
    background: "linear-gradient(to right, #f06292, #e91e63)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontWeight: "bold",
    width: "100%",
    cursor: "pointer",
  },
};

export default UserCard;
