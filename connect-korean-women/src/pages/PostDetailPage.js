import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const dummyPost = {
  id: "1",
  author: "리나",
  country: "🇻🇳 베트남",
  time: "2시간 전",
  title: "한국어 발음 연습 팁 공유해요!",
  content: `안녕하세요! 한국에 온 지 6개월 된 베트남 출신 리나예요.
한국어 발음이 정말 어려워서 고민이었는데,
매일 아침 뉴스 따라 읽기 연습하니까 점점 좋아졌어요!
혹시 여러분은 어떤 연습 방법 쓰시나요? 댓글로 공유해주세요!`,
  likes: 24,
  comments: 8,
};

const dummyComments = [
    { id: 1, author: "영희", content: "저도 뉴스 따라 읽기 좋아해요!" },
    { id: 2, author: "민수", content: "팁 공유 감사합니다~" },
  ];

const PostDetailPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  // TODO: 나중에 postId 기반으로 실제 API 요청
  const post = dummyPost; // 현재는 더미 데이터
// ✅ 댓글 상태
    const [comments, setComments] = useState(dummyComments);
    const [newComment, setNewComment] = useState("");
    const handleCommentSubmit = () => {
        if (!newComment.trim()) return;
        const next = {
          id: Date.now(),
          author: "익명", // 로그인 기능 연결 전이므로 고정값
          content: newComment.trim(),
        };
        setComments([...comments, next]);
        setNewComment("");
      };

  return (
    
    <div style={styles.container}>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "10px" }}>
            <button style={{ ...styles.button, backgroundColor: "#888" }}>수정</button>
            <button style={{ ...styles.button, backgroundColor: "#ef497a" }}>삭제</button>
        </div>
      <button onClick={() => navigate(-1)} style={styles.backButton}>← 뒤로가기</button>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.avatar}>{post.author.charAt(0)}</div>
          <div>
            <div style={styles.name}>{post.author} <span style={styles.country}>{post.country}</span></div>
            <div style={styles.time}>{post.time}</div>
          </div>
        </div>
        <h2 style={styles.title}>{post.title}</h2>
        <p style={styles.content}>{post.content}</p>
        <div style={styles.footer}>
          <span>❤️ {post.likes}</span>
          <span style={{ marginLeft: 12 }}>💬 {post.comments}</span>
        </div>
      </div>

{/* ✅ 댓글 섹션 */}
<div style={styles.commentSection}>
        <h3 style={styles.commentTitle}>댓글</h3>
        <div style={{
            maxHeight: "300px",  // 높이는 필요에 따라 조절 (ex. 300px ~ 400px 추천)
            overflowY: "auto",
            paddingRight: "8px"  // 스크롤바로 인한 잘림 방지
            }}></div>
        {comments.map((c) => (
        <div key={c.id} style={styles.commentItem}>
            <strong>{c.author}</strong>
            <p>{c.content}</p>
            <div style={{ display: "flex", gap: "8px" }}>
                <button style={{ ...styles.button, backgroundColor: "#ef497a" }}>수정</button>
                <button style={{ ...styles.button, backgroundColor: "#aaa" }}>삭제</button>
            </div>
        </div>
        ))}
        <div style={styles.commentInputArea}>
          <input
            style={styles.commentInput}
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글을 입력하세요"
          />
          <button style={styles.commentButton} onClick={handleCommentSubmit}>
            등록
          </button>
        </div>
      </div>
    </div>
  );
};


const styles = {
  container: {
    padding: "24px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  backButton: {
    background: "none",
    border: "none",
    color: "#f06292",
    fontSize: "15px",
    cursor: "pointer",
    marginBottom: "12px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "20px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  },
  avatar: {
    backgroundColor: "#f06292",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "50%",
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    marginRight: "12px",
  },
  name: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  country: {
    fontSize: "14px",
    color: "#777",
    marginLeft: "4px",
  },
  time: {
    fontSize: "12px",
    color: "#aaa",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  content: {
    fontSize: "15px",
    color: "#333",
    lineHeight: "1.6",
    whiteSpace: "pre-line", // 줄바꿈 유지
  },
  commentSection: {
    marginTop: "32px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  commentTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  commentItem: {
    borderBottom: "1px solid #eee",
    padding: "8px 0",
    fontSize: "14px",
  },
  commentInputArea: {
    display: "flex",
    marginTop: "12px",
    gap: "8px",
  },
  commentInput: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  commentButton: {
    backgroundColor: "#f06292",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  button: {
    padding: "6px 12px",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px"
  }
  
}

export default PostDetailPage;

