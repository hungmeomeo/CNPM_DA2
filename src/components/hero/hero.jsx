import "./hero.css";
import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="homepageHero ">
      <h1 style={{ fontSize: "64px" }}>
        <span style={{ color: "var(--text-primary)" }}>Intel</span>Home
      </h1>
      <h2
        style={{
          color: "var(--text-primary)",
          textAlign: "center",
          fontSize: "36px",
        }}
      >
        {t("hero.body")}
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.18rem",
          fontWeight: "600",
          marginTop: "20px",
          color: "var(--text-secondary)",
        }}
      >
        Hỗ trợ các hộ gia đình trong việc theo dõi tình trạng nhà cửa từ xa thông qua các thiết bị thông minh
      </p >
    </div>
  );
};
export default Hero;
