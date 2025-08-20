// ✅ 이렇게 한 줄로만!
import React, { useRef, useState } from "react";

import bannerData from "../data/bannerData";
import userProfiles from "../data/userProfiles";
import BannerCard from "../components/BannerCard";
import UserCard from "../components/UserCard";
import ProfileModal from "../components/ProfileModal"; // ✅ 새로 추가
import FilterDropdown from "../components/FilterDropdown"; // ✅ 추가

function HomePage() {
  
    const bannerRef = useRef(null);
      
    const scrollLeft = () => {
        bannerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };
      
    const scrollRight = () => {
        bannerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    // ✅ 필터 state
  const [filters, setFilters] = useState({
    nationality: "전체",
    time: "전체",
    language: "전체",
    age: "전체",
  });
  console.log(filters);
  const [selectedUser, setSelectedUser] = useState(null); // ✅ 모달용 상태
  
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>🎁 소식 & 혜택</h2>

      {/* 배너 영역 */}
      <div style={styles.bannerWrap}>
        <button style={styles.arrowLeft} onClick={scrollLeft}>←</button>

        <div ref={bannerRef} style={styles.bannerRow}>
          {bannerData.map((banner) => (
            <BannerCard key={banner.id} banner={banner} />
          ))}
        </div>

        <button style={styles.arrowRight} onClick={scrollRight}>→</button>
      </div>

      <h2 style={styles.sectionTitle}>💬 우링 친구 찾기</h2>
       {/* 필터 박스 */}
       <div style={styles.filterBox}>
        <div style={styles.filterHeader}>
          <span style={styles.filterTitle}>⚙️ 필터를 설정해보세요</span>
          <div style={styles.filterRight}>
            <span>결과: {userProfiles.length}명</span>
            <button style={styles.resetBtn}>초기화</button>
          </div>
        </div>

        {/* ✅ 드롭다운들 */}
        <div style={styles.filterRow}>
                <FilterDropdown
                  label="국적"
                  options={[
                    { value: "전체", label: "전체" },
                    { value: "미국", label: "미국" },
                    { value: "베트남", label: "베트남" },
                    { value: "필리핀", label: "필리핀" },
                    { value: "중국", label: "중국" },
                    { value: "일본", label: "일본" },
                  ]}
                  value={filters.nationality}
                  onChange={(val) => handleFilterChange("nationality", val)}
                />

                <FilterDropdown
                  label="시간대"
                  options={[
                    { value: "전체", label: "전체" },
                    { value: "오전", label: "오전" },
                    { value: "오후", label: "오후" },
                    { value: "저녁", label: "저녁" },
                  ]}
                  value={filters.time}
                  onChange={(val) => handleFilterChange("time", val)}
                />

                <FilterDropdown
                  label="언어"
                  options={[
                    { value: "전체", label: "전체" },
                    { value: "영어", label: "영어" },
                    { value: "일본어", label: "일본어" },
                    { value: "중국어", label: "중국어" },
                  ]}
                  value={filters.language}
                  onChange={(val) => handleFilterChange("language", val)}
                />

                <FilterDropdown
                  label="연령대"
                  options={[
                    { value: "전체", label: "전체" },
                    { value: "10대", label: "10대" },
                    { value: "20대", label: "20대" },
                    { value: "30대", label: "30대" },
                  ]}
                  value={filters.age}
                  onChange={(val) => handleFilterChange("age", val)}
                />
          </div>
        </div>


      {/* 결과 카운트 */}
      <p style={styles.resultCount}>결과: {userProfiles.length}명</p>

       {/* 카드 그리드 */}
       <div style={styles.userGrid}>
        {userProfiles.map((user) => (
          <UserCard 
            key={user.id} 
            user={user} 
            onClick={() => setSelectedUser(user)} // ✅ 클릭 이벤트 추가
          />
        ))}
      </div>

      {/* ✅ 모달 */}
      {selectedUser && (
        <ProfileModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}


const styles = {
  container: {
    padding: "20px",
    paddingBottom: "80px",
    backgroundColor: "#f5f5f5", // 배경색 추가
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  bannerWrap: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginBottom: "24px",
  },
  bannerRow: {
    display: "flex",
    overflowX: "auto",
    marginBottom: "24px",
  },
  arrowLeft: {
    position: "absolute",
    left: "-12px",
    zIndex: 1,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    fontSize: "16px",
    cursor: "pointer",
  },
  arrowRight: {
    position: "absolute",
    right: "-12px",
    zIndex: 1,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    fontSize: "16px",
    cursor: "pointer",
  },
  filterBox: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  filterHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
  },
  filterTitle: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#555",
  },
  filterRight: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    fontSize: "14px",
  },
  resetBtn: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff",
    padding: "4px 10px",
    cursor: "pointer",
    fontSize: "12px",
  },
  filterRow: {
    display: "flex",
    gap: "12px",
  },
  filterGroup: {
    display: "flex",
    flexDirection: "column", // 🔥 세로 배치
    flex: 1,
  },
  filterLabel: {
    fontSize: "12px",
    color: "#888",  // 작은 회색 글씨
    marginBottom: "4px",
  },
  selectBox: {
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "14px",
    backgroundColor: "#fff",
  },
  userGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 🔥 3열 고정
    gap: "14px", // 카드 간격 (사진처럼 조금 넉넉하게)
    marginTop: "12px",
  },


};


export default HomePage;
