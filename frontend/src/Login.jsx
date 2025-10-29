import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, CircleUserRound, ChevronDown } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Select Role");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const roles = ["admin", "claimant", "respondent", "neutral"];

  const Styles = {
    container: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
    logo: {
      textAlign: "center",
    },
    logoTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#0066cc",
      margin: "0.5rem 0 0 0",
    },
    logoSubtitle: {
      fontSize: "14px",
      color: "#666",
      margin: "0.25rem 0 0 0",
    },
    formContainer: {
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      padding: "2.5rem",
      borderRadius: "12px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "350px",
    },
    heading: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#333",
      marginBottom: "1.5rem",
      textAlign: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    inputContainer: {
      display: "flex",
      alignItems: "center",
      border: "1px solid #ddd",
      borderRadius: "6px",
      padding: "0.75rem",
      backgroundColor: "#fff",
      transition: "border-color 0.3s ease",
    },
    inputIcon: {
      display: "flex",
      alignItems: "center",
      color: "#999",
      marginRight: "0.75rem",
      flexShrink: 0,
    },
    input: {
      border: "none",
      outline: "none",
      flex: 1,
      fontSize: "14px",
      color: "#333",
      backgroundColor: "transparent",
      fontFamily: "inherit",
      padding: "0",
    },
    input_placeholder: {
      color: "#999",
    },
    dropdownContainer: {
      position: "relative",
      width: "100%",
    },
    dropdownToggle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: "1px solid #ddd",
      borderRadius: "6px",
      padding: "0.75rem",
      backgroundColor: "#fff",
      cursor: "pointer",
      transition: "border-color 0.3s ease",
    },
    dropdownLeft: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      flex: 1,
    },
    dropdownText: {
      fontSize: "14px",
      color: "#333",
    },
    dropdownIcon: {
      display: "flex",
      alignItems: "center",
      color: "#999",
      transition: "transform 0.3s ease",
      transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
    },
    dropdownContent: {
      position: "absolute",
      top: "100%",
      left: "0",
      right: "0",
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      borderTop: "none",
      borderRadius: "0 0 6px 6px",
      marginTop: "-1px",
      zIndex: 1000,
      maxHeight: isDropdownOpen ? "200px" : "0",
      overflow: "hidden",
      transition: "max-height 0.3s ease",
    },
    dropdownOption: {
      padding: "0.75rem 1rem",
      cursor: "pointer",
      fontSize: "14px",
      color: "#333",
      textTransform: "capitalize",
      borderBottom: "1px solid #f0f0f0",
      transition: "background-color 0.2s ease",
    },
    button: {
      backgroundColor: "#0066cc",
      color: "#fff",
      border: "none",
      padding: "0.875rem",
      borderRadius: "6px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "1rem",
      transition: "background-color 0.3s ease",
    },
    link: {
      textAlign: "center",
      marginTop: "1rem",
      fontSize: "14px",
    },
    linkAnchor: {
      color: "#0066cc",
      textDecoration: "none",
      cursor: "pointer",
    },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/admin/dashboard');
  }

  return (
    <div style={Styles.container}>
      <div style={Styles.wrapper}>
        {/* Logo Section */}
        <div style={Styles.logo}>
          <div style={{ fontSize: "48px" }}>⚖️</div>
          <h1 style={Styles.logoTitle}>UC ADR</h1>
          <p style={Styles.logoSubtitle}>Resolve disputes online</p>
        </div>

        {/* Login Form */}
        <div style={Styles.formContainer}>
          <h2 style={Styles.heading}>Sign In</h2>
          <form style={Styles.form} onSubmit={handleLogin}>
            {/* Email Input */}
            <div style={Styles.inputContainer}>
              <span style={Styles.inputIcon}>
                <Mail size={20} />
              </span>
              <input
                style={Styles.input}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div style={Styles.inputContainer}>
              <span style={Styles.inputIcon}>
                <Lock size={20} />
              </span>
              <input
                style={Styles.input}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Role Dropdown */}
            <div style={Styles.dropdownContainer}>
              <div
                style={Styles.dropdownToggle}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span style={Styles.dropdownLeft}>
                  <span style={Styles.inputIcon}>
                    <CircleUserRound size={20} />
                  </span>
                  <span style={Styles.dropdownText}>{selectedRole}</span>
                </span>
                <span style={Styles.dropdownIcon}>
                  <ChevronDown size={18} />
                </span>
              </div>
              <div style={Styles.dropdownContent}>
                {roles.map((role, index) => (
                  <div
                    key={index}
                    style={Styles.dropdownOption}
                    onClick={() => {
                      setSelectedRole(role);
                      setIsDropdownOpen(false);
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#f0f0f0";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#fff";
                    }}
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              style={Styles.button}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#0052a3";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#0066cc";
              }}
              onClick={handleLogin}
            >
              Login
            </button>
          </form>

          {/* Create Account Link */}
          <div style={Styles.link}>
            <span style={{ color: "#666" }}>Don't have an account? </span>
            <a style={Styles.linkAnchor}>Create an account</a>
          </div>
        </div>
      </div>
    </div>
  );
}
