import {
  MessageSquare,
  Eye,
  Download,
  Plus,
  ChevronRight,
  Calendar,
  Users,
} from "lucide-react";
import { useState } from "react";

export default function AssignedCases() {
  const [isMobile] = useState(window.innerWidth <= 480);
  const [cases] = useState([
    {
      id: "2024-45",
      title: "Smith vs. Johnson",
      claimant: "Smith",
      respondent: "Johnson",
      assignedDate: "15 Aug 2025",
      nextHearing: "25 Sep 2025",
      status: "In Progress",
      statusColor: "#22bb33",
      submissionsReceived: 2,
      documentsCount: 5,
    },
    {
      id: "2024-52",
      title: "ABC Corp vs. XYZ Ltd",
      claimant: "ABC Corp",
      respondent: "XYZ Ltd",
      assignedDate: "20 Aug 2025",
      nextHearing: "28 Sep 2025",
      status: "Hearing Scheduled",
      statusColor: "#2196f3",
      submissionsReceived: 2,
      documentsCount: 3,
    },
    {
      id: "2024-48",
      title: "Estate of Brown",
      claimant: "Brown Estate",
      respondent: "Beneficiary",
      assignedDate: "10 Aug 2025",
      nextHearing: "20 Sep 2025",
      status: "Under Review",
      statusColor: "#ff9900",
      submissionsReceived: 1,
      documentsCount: 8,
    },
  ]);

  const styles = {
    container: {
      padding: isMobile ? "1rem" : "2rem",
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
      marginBottom: isMobile ? "1rem" : "2rem",
      fontSize: "18px",
      fontWeight: "600",
    },
    caseGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(350px, 1fr))",
      gap: "1.5rem",
    },
    caseCard: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      overflow: "hidden",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    caseHeader: {
      padding: "1rem",
      borderBottom: "1px solid #eee",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "1rem",
    },
    caseTitle: {
      flex: 1,
    },
    caseName: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "0.25rem",
    },
    caseId: {
      fontSize: "13px",
      color: "#999",
    },
    statusBadge: (color) => ({
      display: "inline-block",
      padding: "0.35rem 0.75rem",
      backgroundColor: color + "22",
      color: color,
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600",
      whiteSpace: "nowrap",
      flexShrink: 0,
    }),
    caseContent: {
      padding: "1rem",
    },
    parties: {
      fontSize: "13px",
      color: "#666",
      marginBottom: "1rem",
      padding: "0.75rem",
      backgroundColor: "#f9f9f9",
      borderRadius: "6px",
    },
    caseMetaGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0.75rem",
      marginBottom: "1rem",
    },
    metaItem: {
      display: "flex",
      gap: "0.5rem",
      alignItems: "flex-start",
      fontSize: "12px",
    },
    metaIcon: {
      color: "#ff9900",
      flexShrink: 0,
      marginTop: "0.2rem",
    },
    metaText: {
      display: "flex",
      flexDirection: "column",
    },
    metaLabel: {
      fontSize: "11px",
      color: "#999",
      fontWeight: "600",
    },
    metaValue: {
      fontSize: "13px",
      color: "#333",
      fontWeight: "500",
    },
    statsSection: {
      display: "flex",
      gap: "1rem",
      padding: "0.75rem",
      backgroundColor: "#f9f9f9",
      borderRadius: "6px",
      marginBottom: "1rem",
    },
    statItem: {
      flex: 1,
      textAlign: "center",
    },
    statNumber: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#0066cc",
    },
    statLabel: {
      fontSize: "11px",
      color: "#666",
    },
    actionButtons: {
      display: "flex",
      gap: "0.5rem",
    },
    actionButton: (bgColor) => ({
      flex: 1,
      padding: "0.5rem",
      backgroundColor: bgColor + "22",
      color: bgColor,
      border: "1px solid " + bgColor + "33",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "12px",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.3rem",
      transition: "all 0.3s ease",
    }),
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <MessageSquare size={24} />
        Assigned Cases Overview
      </div>

      {/* Cases Grid */}
      <div style={styles.caseGrid}>
        {cases.map((caseItem) => (
          <div
            key={caseItem.id}
            style={styles.caseCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={styles.caseHeader}>
              <div style={styles.caseTitle}>
                <div style={styles.caseName}>{caseItem.title}</div>
                <div style={styles.caseId}>Case #{caseItem.id}</div>
              </div>
              <div style={styles.statusBadge(caseItem.statusColor)}>
                {caseItem.status}
              </div>
            </div>

            <div style={styles.caseContent}>
              {/* Parties */}
              <div style={styles.parties}>
                <strong>{caseItem.claimant}</strong> vs <strong>{caseItem.respondent}</strong>
              </div>

              {/* Metadata Grid */}
              <div style={styles.caseMetaGrid}>
                <div style={styles.metaItem}>
                  <Calendar size={14} style={styles.metaIcon} />
                  <div style={styles.metaText}>
                    <div style={styles.metaLabel}>Assigned</div>
                    <div style={styles.metaValue}>{caseItem.assignedDate}</div>
                  </div>
                </div>
                <div style={styles.metaItem}>
                  <Calendar size={14} style={styles.metaIcon} />
                  <div style={styles.metaText}>
                    <div style={styles.metaLabel}>Next Hearing</div>
                    <div style={styles.metaValue}>{caseItem.nextHearing}</div>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div style={styles.statsSection}>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>{caseItem.submissionsReceived}</div>
                  <div style={styles.statLabel}>Submissions</div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>{caseItem.documentsCount}</div>
                  <div style={styles.statLabel}>Documents</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={styles.actionButtons}>
                <button
                  style={styles.actionButton("#0066cc")}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#0066cc33";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#0066cc22";
                  }}
                >
                  <Eye size={14} />
                  View
                </button>
                <button
                  style={styles.actionButton("#22bb33")}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#22bb3333";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#22bb3322";
                  }}
                >
                  <Download size={14} />
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
