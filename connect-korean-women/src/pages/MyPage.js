import React from "react";
import { FaGlobeAsia, FaSignOutAlt, FaTrashAlt } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";

const MyPage = () => {
  const user = {
    name: "김지영",
    country: "🇰🇷 한국",
    email: "jiyoung@example.com",
    age: "29세",
    region: "서울 강남구",
    joinDate: "2024년 1월 가입",
    languages: ["한국어", "영어"],
    languageSetting: "한국어",
  };

  return (
    <div style={styles.container}>
      {/* 로고 */}
      <div style={styles.header}>
      </div>

      {/* 프로필 카드 */}
      <div style={styles.card}>
        <div style={styles.profileSection}>
          <div style={styles.avatarCircle}>김</div>
          <div>
            <div style={styles.nameRow}>
              <span style={styles.name}>{user.name}</span>
              <span style={styles.countryBadge}>{user.country}</span>
            </div>
            <p style={styles.email}>{user.email}</p>
            <p style={styles.details}>{user.age} · {user.region} · {user.joinDate}</p>
            <div style={styles.languageChips}>
              {user.languages.map(lang => (
                <span key={lang} style={styles.langChip}>{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 메뉴들 */}
      <div style={styles.menuList}>
        <MenuItem icon={<FiEdit3 />} label="프로필 수정" />
        <MenuItem icon={<FaGlobeAsia />} label="언어 설정" value={user.languageSetting} />
        <MenuItem icon={<FaSignOutAlt />} label="로그아웃" type="normal" style={{ marginTop: 12 }} />
        <MenuItem icon={<FaTrashAlt />} label="회원 탈퇴" type="danger" />
      </div>

      {/* 버전 정보 */}
      <div style={styles.footer}>
        <p>우링(Woling) v1.0</p>
        <p>결혼 이주 여성을 위한 우링 서비스</p>
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label, value, type, style }) => (
    <div style={{ 
      ...styles.menuItem, 
      ...(type === "danger" ? styles.dangerItem : {}), 
      ...style // 🔥 추가 스타일 적용
    }}>
      <div style={styles.menuLeft}>
        <span style={styles.menuIcon}>{icon}</span>
        <span>{label}</span>
      </div>
      {value && <span>{value}</span>}
      {!value && <span>›</span>}
    </div>
  );
const styles = {
    container: {
      fontFamily: "sans-serif",
      padding: "16px",
      backgroundColor: "#f5f5f5",
      boxSizing: "border-box",
      minHeight: "90vh", // ⬅️ 이 줄 추가!
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "16px",
    },
    logoCircle: {
      fontSize: "24px",
    },
    logoTitle: {
      margin: 0,
    },
    logoSubtitle: {
      margin: 0,
      fontSize: "12px",
      color: "#888",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "20px", // 더 둥글게
      padding: "24px",
      marginBottom: "12px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
    },
    profileSection: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
    },
    avatarCircle: {
      width: "64px",
      height: "64px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #f06292, #ec407a)",
      color: "#fff",
      fontSize: "24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    nameRow: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    name: {
      fontWeight: "bold",
      fontSize: "20px",
    },
    countryBadge: {
      fontSize: "11px",
      backgroundColor: "#eee",
      borderRadius: "12px",
      padding: "2px 6px",
    },
    email: {
      margin: "4px 0",
      fontSize: "15px",
      color: "#555",
    },
    details: {
      fontSize: "15px",
      color: "#888",
    },
    languageChips: {
      marginTop: "6px 10px",
      display: "flex",
      gap: "6px",
    },
    langChip: {
      fontSize: "11px",
      padding: "4px 8px",
      borderRadius: "10px",
      backgroundColor: "#eee",
    },
    menuList: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    menuItem: {
      backgroundColor: "#fff",
      borderRadius: "16px", // 더 둥글고 통통하게
      padding: "18px 16px", // ⬆️ 기존 12px 14px → 높이 늘리기
      fontSize: "17px", // ⬆️ 기존 15px → 17px
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
    },
    menuLeft: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },
    menuIcon: {
      color: "#888",
    },
    dangerItem: {
      color: "#d32f2f",
    },
    footer: {
      backgroundColor: "#fff",
      borderRadius: "16px", // 더 둥글고 통통하게
      padding: "18px 16px",
      marginTop: "150px",
      textAlign: "center",
      fontSize: "12.5px",
      color: "#888",
    },
  };
  

export default MyPage;
