import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostWritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return alert("제목과 내용을 입력해주세요");
    // TODO: 백엔드 전송
    console.log({ title, content });
    navigate("/community");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>게시글 작성</h2>
      <input
        style={styles.input}
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        style={styles.textarea}
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button style={styles.submitBtn} onClick={handleSubmit}>등록</button>
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

export default PostWritePage;
