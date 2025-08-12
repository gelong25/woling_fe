import React from "react";

function BannerCard({ banner }) {
  return (
    <div style={styles.card}>
      <img src={banner.image} alt="banner" style={styles.image} />
      <div style={styles.textWrap}>
        <p style={styles.title}>{banner.title}</p>
        <p style={styles.subtitle}>{banner.subtitle}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    flex: "0 0 auto",
    width: "280px",
    height: "160px",
    marginRight: "12px",
    borderRadius: "16px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  textWrap: {
    position: "absolute",
    bottom: "0",
    left: "0",
    padding: "12px",
    background: "rgba(0,0,0,0.4)",
    color: "#fff",
  },
  title: {
    fontWeight: "bold",
    fontSize: "14px",
    margin: 0,
  },
  subtitle: {
    fontSize: "12px",
    margin: 0,
  },
};

export default BannerCard;
