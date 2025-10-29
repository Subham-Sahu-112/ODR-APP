import { Settings, Users, Lock, Database, Bell, AlertTriangle } from "lucide-react";
import { useState } from "react";

export default function AdminControls() {
  const [toggleStates, setToggleStates] = useState({
    emailNotifications: true,
    smsAlerts: false,
    systemMaintenance: false,
    userRegistration: true,
    documentVerification: true,
    caseAssignment: true,
    automaticBackup: true,
    debugMode: false,
  });

  const controlSections = [
    {
      id: 1,
      title: "User Management Controls",
      icon: Users,
      color: "#0066cc",
      controls: [
        {
          id: "user-1",
          name: "Enable/Disable User Registration",
          description: "Allow or block new users from registering",
          key: "userRegistration",
        },
        {
          id: "user-2",
          name: "Reset User Passwords",
          description: "Force password reset for all or selected users",
          hasButton: true,
          buttonText: "Reset Passwords",
        },
        {
          id: "user-3",
          name: "Manage User Roles",
          description: "Assign and modify user roles and permissions",
          hasButton: true,
          buttonText: "Manage Roles",
        },
        {
          id: "user-4",
          name: "View User Activity Logs",
          description: "Monitor user login and activity history",
          hasButton: true,
          buttonText: "View Logs",
        },
      ],
    },
    {
      id: 2,
      title: "Security & Access Control",
      icon: Lock,
      color: "#673ab7",
      controls: [
        {
          id: "sec-1",
          name: "Two-Factor Authentication (2FA)",
          description: "Enable/disable 2FA for all users",
          key: "twoFactorAuth",
        },
        {
          id: "sec-2",
          name: "IP Whitelist Management",
          description: "Configure allowed IP addresses",
          hasButton: true,
          buttonText: "Configure IPs",
        },
        {
          id: "sec-3",
          name: "Session Management",
          description: "Set session timeout and termination policies",
          hasButton: true,
          buttonText: "Session Settings",
        },
        {
          id: "sec-4",
          name: "Audit Logs",
          description: "View detailed system audit trail",
          hasButton: true,
          buttonText: "View Audit",
        },
      ],
    },
    {
      id: 3,
      title: "System Configuration",
      icon: Settings,
      color: "#ff9900",
      controls: [
        {
          id: "sys-1",
          name: "Enable/Disable Case Submission",
          description: "Allow or block new case submissions",
          key: "caseAssignment",
        },
        {
          id: "sys-2",
          name: "Document Verification Requirements",
          description: "Configure mandatory document verification",
          key: "documentVerification",
        },
        {
          id: "sys-3",
          name: "Automatic Backup Settings",
          description: "Schedule and manage automatic backups",
          key: "automaticBackup",
        },
        {
          id: "sys-4",
          name: "System Maintenance Mode",
          description: "Enable maintenance mode for system updates",
          key: "systemMaintenance",
        },
      ],
    },
    {
      id: 4,
      title: "Notification Settings",
      icon: Bell,
      color: "#4caf50",
      controls: [
        {
          id: "notif-1",
          name: "Email Notifications",
          description: "Enable/disable system email notifications",
          key: "emailNotifications",
        },
        {
          id: "notif-2",
          name: "SMS Alerts",
          description: "Send SMS alerts for critical events",
          key: "smsAlerts",
        },
        {
          id: "notif-3",
          name: "Configure Email Templates",
          description: "Customize email notification templates",
          hasButton: true,
          buttonText: "Edit Templates",
        },
        {
          id: "notif-4",
          name: "Notification Schedule",
          description: "Set quiet hours and delivery times",
          hasButton: true,
          buttonText: "Schedule",
        },
      ],
    },
    {
      id: 5,
      title: "Data Management",
      icon: Database,
      color: "#f44336",
      controls: [
        {
          id: "data-1",
          name: "Database Maintenance",
          description: "Perform database optimization and cleanup",
          hasButton: true,
          buttonText: "Run Maintenance",
        },
        {
          id: "data-2",
          name: "Export System Data",
          description: "Export cases, documents, and user data",
          hasButton: true,
          buttonText: "Export Data",
        },
        {
          id: "data-3",
          name: "Purge Old Records",
          description: "Delete archived and old records",
          hasButton: true,
          buttonText: "Purge Records",
        },
        {
          id: "data-4",
          name: "Restore from Backup",
          description: "Restore system from backup files",
          hasButton: true,
          buttonText: "Restore",
        },
      ],
    },
  ];

  const toggleSwitch = (key) => {
    setToggleStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#673ab7",
      color: "#fff",
      padding: "1.5rem",
      borderRadius: "8px",
      marginBottom: "2rem",
    },
    headerTitle: {
      fontSize: "22px",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
    },
    warningBanner: {
      backgroundColor: "#fff3cd",
      border: "1px solid #ffc107",
      borderRadius: "8px",
      padding: "1rem",
      marginBottom: "2rem",
      display: "flex",
      alignItems: "flex-start",
      gap: "0.75rem",
    },
    warningIcon: {
      color: "#ff6b6b",
      flexShrink: 0,
      marginTop: "0.25rem",
    },
    warningText: {
      fontSize: "13px",
      color: "#856404",
      lineHeight: "1.5",
    },
    section: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "1.5rem",
      marginBottom: "2rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      borderLeft: (color) => `4px solid ${color}`,
    },
    sectionHeader: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "1.5rem",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
    },
    controlItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem",
      backgroundColor: "#f9f9f9",
      borderRadius: "6px",
      marginBottom: "0.75rem",
      borderLeft: "3px solid transparent",
      transition: "all 0.2s ease",
    },
    controlItemHover: {
      backgroundColor: "#f0f0f0",
      borderLeft: "3px solid #ddd",
    },
    controlContent: {
      flex: 1,
    },
    controlName: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#333",
      marginBottom: "0.25rem",
    },
    controlDescription: {
      fontSize: "12px",
      color: "#999",
    },
    toggleButton: (isActive) => ({
      width: "50px",
      height: "28px",
      borderRadius: "14px",
      backgroundColor: isActive ? "#4caf50" : "#ddd",
      border: "none",
      cursor: "pointer",
      position: "relative",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      padding: "0 3px",
      boxShadow: isActive ? "0 2px 6px rgba(76,175,80,0.3)" : "none",
    }),
    toggleDot: (isActive) => ({
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      transition: "transform 0.3s ease",
      transform: isActive ? "translateX(22px)" : "translateX(0)",
    }),
    actionButton: (color) => ({
      padding: "0.5rem 1rem",
      backgroundColor: color,
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "12px",
      fontWeight: "600",
      transition: "all 0.2s ease",
    }),
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "1rem",
      marginBottom: "2rem",
    },
    statCard: (color) => ({
      backgroundColor: "#fff",
      padding: "1rem",
      borderRadius: "8px",
      textAlign: "center",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      borderTop: `3px solid ${color}`,
    }),
    statValue: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "0.25rem",
    },
    statLabel: {
      fontSize: "12px",
      color: "#999",
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerTitle}>
          ⚙️ Admin Controls
        </div>
      </div>

      {/* Warning Banner */}
      <div style={styles.warningBanner}>
        <AlertTriangle size={20} style={styles.warningIcon} />
        <div style={styles.warningText}>
          <strong>Important:</strong> Admin controls affect the entire system. Changes made here will impact all users and system operations. Please exercise caution when modifying settings.
        </div>
      </div>

      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard("#673ab7")}>
          <div style={styles.statValue}>847</div>
          <div style={styles.statLabel}>Total Users</div>
        </div>
        <div style={styles.statCard("#0066cc")}>
          <div style={styles.statValue}>156</div>
          <div style={styles.statLabel}>Active Sessions</div>
        </div>
        <div style={styles.statCard("#ff9900")}>
          <div style={styles.statValue}>23</div>
          <div style={styles.statLabel}>Failed Logins</div>
        </div>
        <div style={styles.statCard("#f44336")}>
          <div style={styles.statValue}>2</div>
          <div style={styles.statLabel}>Security Alerts</div>
        </div>
      </div>

      {/* Control Sections */}
      {controlSections.map((section) => {
        const IconComponent = section.icon;
        return (
          <div
            key={section.id}
            style={{
              ...styles.section,
              borderLeft: `4px solid ${section.color}`,
            }}
          >
            <div style={styles.sectionHeader}>
              <IconComponent size={24} color={section.color} />
              <span>{section.title}</span>
            </div>

            {section.controls.map((control) => (
              <div
                key={control.id}
                style={styles.controlItem}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, styles.controlItemHover);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f9f9f9";
                  e.currentTarget.style.borderLeft = "3px solid transparent";
                }}
              >
                <div style={styles.controlContent}>
                  <div style={styles.controlName}>{control.name}</div>
                  <div style={styles.controlDescription}>
                    {control.description}
                  </div>
                </div>

                {control.key ? (
                  <button
                    style={styles.toggleButton(toggleStates[control.key])}
                    onClick={() => toggleSwitch(control.key)}
                    title={toggleStates[control.key] ? "Disable" : "Enable"}
                  >
                    <div style={styles.toggleDot(toggleStates[control.key])} />
                  </button>
                ) : (
                  <button
                    style={styles.actionButton(section.color)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "0.9";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "1";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {control.buttonText}
                  </button>
                )}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
