import React from "react";
import Select from "react-select";

function FilterDropdown({ label, options, value, onChange }) {
  // 🔥 react-select 스타일 커스터마이징
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "12px",
      border: "1px solid #ddd",
      minHeight: "38px",
      boxShadow: "none",
      "&:hover": { borderColor: "#e91e63" },
      fontSize: "13px",
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "14px",
      cursor: "pointer",
      backgroundColor: state.isSelected
        ? "#e91e63" // ✅ 선택된 빨강
        : state.isFocused
        ? "#fce4ec" // ✅ hover 시 연분홍
        : "#fff",
      color: state.isSelected ? "#fff" : "#333",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#333",
      whiteSpace: "nowrap", // 🔥 줄바꿈 금지
      overflow: "visible",  // 🔥 ... 방지
      textOverflow: "clip",
      fontSize: "14px",
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: "#999",
        paddingRight: "2px",   // 🔥 오른쪽 끝 여백
      }),
      indicatorSeparator: () => ({
        display: "none",       // 🔥 세로 구분선 제거
      }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "12px",
      overflow: "hidden",
      zIndex: 10000,
    }),
  };

  return (
    <div style={styles.group}>
      <span style={styles.label}>{label}</span>
      <Select
        options={options}
        value={options.find((opt) => opt.value === value)}
        onChange={(opt) => onChange(opt.value)}
        styles={customStyles}
        isSearchable={false} // 🔥 검색창 제거
      />
    </div>
  );
}

const styles = {
  group: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  label: {
    fontSize: "12px",
    color: "#888",
    marginBottom: "4px",
  },
};

export default FilterDropdown;
