import React from "react";
import { Link } from "react-router-dom";

/**
 * Footer — shown on every page (homepage + About/Contact/Privacy).
 * Light text on the site's purple gradient background. Uses react-router
 * <Link> for client-side navigation, so it must render inside <BrowserRouter>.
 */
const linkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.92)",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "0.95rem",
};

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "36px 16px 28px",
        marginTop: "3vw",
        textAlign: "center",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
          marginBottom: 14,
        }}
      >
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
        <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>
        <Link to="/privacy" style={linkStyle}>
          Privacy Policy
        </Link>
      </nav>
      <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.72)" }}>
        © 2026 WhosFake Insights
      </div>
    </footer>
  );
}
