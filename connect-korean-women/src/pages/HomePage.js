// ✅ 이렇게 한 줄로만!
import React, { useRef } from "react";
import bannerData from "../data/bannerData";
import userProfiles from "../data/userProfiles";
import BannerCard from "../components/BannerCard";
import UserCard from "../components/UserCard";

function HomePage() {
    const bannerRef = useRef(null);
      
    const scrollLeft = () => {
        bannerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };
      
    const scrollRight = () => {
        bannerRef.current.scrollBy({ left: 300, behavior: "smooth" });
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
      {userProfiles.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    paddingBottom: "80px",
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
};

export default HomePage;
