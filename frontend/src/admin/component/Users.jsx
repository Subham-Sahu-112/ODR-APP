import { ChevronRight, Globe, Mail, MessagesSquare, Phone } from "lucide-react";

export default function Profile() {
  const helpOptions = [
    {
      id: 1,
      icon: Mail,
      label: "Email Us",
      desc: "support@odrcourtapp.com",
      color: "#0066cc",
    },
    {
      id: 2,
      icon: Phone,
      label: "Call Us",
      desc: "+91 9876543210",
      color: "#0066cc",
    },
    {
      id: 3,
      icon: Globe,
      label: "Visit Website",
      desc: "www.odrcourtapp.com/help",
      color: "#0066cc",
    },
    {
      id: 4,
      icon: MessagesSquare,
      label: "FAQs",
      desc: "Find answers to common questions",
      color: "#0066cc",
    },
  ];

  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      backgroundColor: "#ff9900",
      color: "#fff",
      padding: "1rem 1.5rem",
      borderRadius: "8px",
      marginBottom: "2rem",
      fontSize: "18px",
      fontWeight: "600",
    },
    sectionTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#333",
      marginTop: "2rem",
      marginBottom: "1rem",
    },
    settingItem: (bgColor) => ({
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      padding: "1rem",
      backgroundColor: "#fff",
      borderRadius: "8px",
      marginBottom: "0.75rem",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      cursor: "pointer",
      transition: "all 0.3s ease",
      borderLeft: `4px solid ${bgColor}22`,
    }),
    settingIcon: (bgColor) => ({
      width: "45px",
      height: "45px",
      borderRadius: "8px",
      backgroundColor: bgColor + "22",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: bgColor,
      flexShrink: 0,
    }),
    settingContent: {
      flex: 1,
    },
    settingLabel: {
      fontSize: "15px",
      fontWeight: "600",
      color: "#333",
    },
    settingDescription: {
      fontSize: "13px",
      color: "#999",
      marginTop: "0.25rem",
    },
    toggleSwitch: (isActive) => ({
      width: "50px",
      height: "28px",
      borderRadius: "14px",
      backgroundColor: isActive ? "#ff9900" : "#ddd",
      border: "none",
      cursor: "pointer",
      position: "relative",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      padding: "0 3px",
    }),
    toggleDot: (isActive) => ({
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      transition: "transform 0.3s ease",
      transform: isActive ? "translateX(22px)" : "translateX(0)",
    }),
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>☰ Profile & Settings</div>
      <div>
        <div style={styles.sectionTitle}>Help and Support</div>
        {helpOptions.map((option) => {
          const IconComponent = option.icon;
          return (
            <div
              key={option.id}
              style={styles.settingItem(option.color)}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.12)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={styles.settingIcon(option.color)}>
                <IconComponent size={22} />
              </div>
              <div style={styles.settingContent}>
                <div style={styles.settingLabel}>{option.label}</div>
                <div style={styles.settingLabel}>{option.desc}</div>
              </div>
              <ChevronRight size={20} color="#999" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
