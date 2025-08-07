import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// 임시: postId로 더미 데이터 불러오기
const dummyPost = {
  title: "한국어 발음 연습 팁 공유해요!",
  content: "안녕하세요! ... 연습하니까 점점 좋아졌어요!",
};

function PostEditPage() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState(dummyPost.title);
  const [content, setContent] = useState(dummyPost.content);

  const handleUpdate = () => {
    // TODO: 수정 API 호출
    console.log("수정된 값:", { title, content });
    navigate(`/community/${postId}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>게시글 수정</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} style={styles.input} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} style={styles.textarea} />
      <button onClick={handleUpdate} style={styles.submitBtn}>수정 완료</button>
    </div>
  );
}

const styles = {
  input: {
    width: "100%", padding: "10px", marginBottom: "12px", fontSize: "16px",
  },
  textarea: {
    width: "100%", height: "200px", padding: "10px", fontSize: "16px",
  },
  submitBtn: {
    marginTop: "12px", padding: "10px 20px", backgroundColor: "#ef497a", color: "#fff", border: "none", borderRadius: "8px",
  }
};

export default PostEditPage;
