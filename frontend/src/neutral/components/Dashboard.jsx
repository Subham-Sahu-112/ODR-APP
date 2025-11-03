import {
  FileCheck,
  Clock,
  CheckCircle,
  AlertCircle,
  UserCircle,
  Briefcase,
  ClipboardClock,
} from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [isMobile] = useState(window.innerWidth <= 480);
  const assignedCases = [
    {
      id: "2024-45",
      title: "Smith vs. Johnson",
      claimant: "Smith",
      respondent: "Johnson",
      assignedDate: "20 Aug 2025",
      status: "In Progress",
    },
    {
      id: "2024-52",
      title: "ABC Corp vs. XYZ Ltd",
      claimant: "ABC Corp",
      respondent: "XYZ Ltd",
      assignedDate: "25 Aug 2025",
      status: "Hearing Scheduled",
    },
  ];

  const styles = {
    container: {
      padding: isMobile ? "1rem" : "2rem",
      backgroundColor: "#f5f5f5",
    },
    welcomeCard: {
      backgroundColor: "#ff9900",
      color: "#fff",
      padding: isMobile ? "1.3rem 1.8rem" : "2rem",
      borderRadius: "12px",
      marginBottom: isMobile ? "1rem" : "2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
    },
    welcomeIcon: {
      fontSize: "40px",
      backgroundColor: "rgba(255,255,255,0.2)",
      width: isMobile ? "50px" : "60px",
      height: isMobile ? "50px" : "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
    },
    iconWrapper: {
      display: "flex",
      alignItems: "center",
    },
    welcomeContent: {
      flex: 1,
      textAlign: "center",
    },
    welcomeTitle: {
      fontSize: isMobile ? "22px" : "24px",
      fontWeight: "bold",
      marginBottom: "0.25rem",
    },
    welcomeSubtitle: {
      fontSize: isMobile ? "17px" : "16px",
      opacity: 0.9,
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr 1fr" : "repeat(auto-fit, minmax(200px, 1fr))",
      gap: isMobile ? "0.5rem" : "1.5rem",
      marginBottom: isMobile ? "1rem" : "2rem",
    },
    statCard: {
      backgroundColor: "#fff",
      padding: isMobile ? "1rem" : "2rem",
      borderRadius: "12px",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "0.2rem",
    },
    statIcon: {
      color: "#0066cc",
      display: "flex",
      alignItems: "center",
    },
    statDetail: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    statNumber: {
      fontSize: isMobile ? "20px" : "24px",
      fontWeight: "bold",
      color: "#333",
    },
    statLabel: {
      fontSize: "14px",
      color: "#666",
    },
    casesSection: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "1.5rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    },
    casesHeader: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "1.5rem",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
    },
    casesIcon: {
      color: "#ff5555",
      fontSize: "22px",
    },
    caseCard: {
      display: "flex",
      gap: "1rem",
      padding: "1rem",
      backgroundColor: "#f9f0ff",
      borderRadius: "8px",
      marginBottom: "1rem",
      transition: "background-color 0.2s ease",
    },
    caseIcon: {
      fontSize: "32px",
      color: "#ff9900",
      flexShrink: 0,
    },
    caseInfo: {
      flex: 1,
    },
    caseTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "0.25rem",
    },
    caseMeta: {
      fontSize: "13px",
      color: "#666",
      lineHeight: "1.5",
    },
  };

  return (
    <div style={styles.container}>
      {/* Welcome Card */}
      <div style={styles.welcomeCard}>
        <div style={styles.welcomeIcon}>
          <span style={styles.iconWrapper}>
            <UserCircle size={35} />
          </span>
        </div>
        <div style={styles.welcomeContent}>
          <div style={styles.welcomeTitle}>Welcome, User</div>
          <div style={styles.welcomeSubtitle}>Neutral Dashboard</div>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statIcon}>
            <Briefcase size={isMobile ? 25 : 40} color="#0066cc" />
          </div>
          <div style={styles.statDetail}>
            <div style={styles.statNumber}>8</div>
            <div style={styles.statLabel}>Assigned Cases</div>
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statIcon}>
            <ClipboardClock size={isMobile ? 25 : 40} color="#ff9900" />
          </div>
          <div style={styles.statDetail}>
            <div style={styles.statNumber}>3</div>
            <div style={styles.statLabel}>In Progress</div>
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statIcon}>
            <CheckCircle size={isMobile ? 25 : 40} color="#22bb33" />
          </div>
          <div style={styles.statDetail}>
            <div style={styles.statNumber}>5</div>
            <div style={styles.statLabel}>Resolved</div>
          </div>
        </div>
      </div>

      {/* Assigned Cases Section */}
      <div style={styles.casesSection}>
        <div style={styles.casesHeader}>
          <AlertCircle size={24} style={styles.casesIcon} />
          Recent Assigned Cases
        </div>

        {assignedCases.map((caseItem, index) => (
          <div
            key={index}
            style={styles.caseCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f0e8ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f9f0ff";
            }}
          >
            <div style={styles.caseIcon}>⚖️</div>
            <div style={styles.caseInfo}>
              <div style={styles.caseTitle}>Case {caseItem.id}</div>
              <div style={styles.caseMeta}>
                <div>{caseItem.title}</div>
                <div>
                  {caseItem.claimant} vs {caseItem.respondent}
                </div>
                <div>
                  Assigned: {caseItem.assignedDate} · {caseItem.status}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
