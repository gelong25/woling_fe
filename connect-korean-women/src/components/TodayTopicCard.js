import React from "react";

function TodayTopicCard() {
  return (
    <div style={styles.card}>
      <div style={styles.icon}>📅</div>
      <div style={styles.content}>
        <div style={styles.header}>
          <span style={styles.tag}>오늘의 주제</span>
          <span style={styles.date}>2024년 1월 10일</span>
        </div>
        <p style={styles.question}>
          한국어를 배울 때 가장 어려운 점은 무엇인가요? 팁이 있다면 공유해주세요!
        </p>
        <p style={styles.comments}>💬 12개의 답변</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff0f5",
    borderRadius: "12px",
    padding: "16px",
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    gap: "12px",
    alignItems: "flex-start",
    border: "1px solid #f8cdda",
  },
  icon: {
    fontSize: "28px",
  },
  content: {
    flex: 1,
  },
  header: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    marginBottom: "8px",
  },
  tag: {
    backgroundColor: "#ef497a",
    color: "#fff",
    borderRadius: "12px",
    padding: "2px 8px",
    fontSize: "12px",
  },
  date: {
    fontSize: "12px",
    color: "#888",
  },
  question: {
    fontWeight: "bold",
    marginBottom: "8px",
  },
  comments: {
    fontSize: "12px",
    color: "#666",
  },
};

export default TodayTopicCard;
