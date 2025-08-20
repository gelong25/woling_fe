import React from "react";

const cardStyles = {
  container: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "12px", // 🔥 패딩 줄임
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    cursor: "pointer",
    //width: "100%", 
    height: "130px", // 🔥 높이 늘려서 정사각형 느낌
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#f06292",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px", // 🔥 글자 줄임
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 8px",
    position: "relative",
  },
  onlineDot: {
    position: "absolute",
    bottom: "4px",
    right: "4px",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "green",
    border: "2px solid #fff",
  },
  name: {
    fontWeight: "bold",
    fontSize: "13px",
    marginTop: "4px",
  },
  engName: {
    fontSize: "11px",
    color: "#666",
    marginBottom: "6px",
  },
  teach: {
    fontSize: "11px",
    color: "#e91e63", // 빨간 강조
    marginBottom: "2px",
  },
  learn: {
    fontSize: "13px",
    color: "#333",
  },
};

function UserCard({ user, onClick }) {
  return (
    <div style={cardStyles.container} onClick={onClick}>
      {/* 동그라미 아바타 */}
      <div style={cardStyles.avatar}>
        {user.initial}
        {user.online && <span style={cardStyles.onlineDot}></span>}
      </div>

      {/* 이름 */}
      <div style={cardStyles.name}>
        {user.flag} {user.name}
      </div>
      <div style={cardStyles.engName}>{user.engName}</div>

      {/* 언어 */}
      <div style={cardStyles.teach}>가르쳐줄: {user.teach}</div>
      <div style={cardStyles.learn}>배울: {user.learn}</div>
    </div>
  );
}

export default UserCard;
