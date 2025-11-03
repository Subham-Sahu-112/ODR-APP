import {
  FileText,
  Upload,
  Download,
  Trash2,
  Plus,
  ChevronRight,
  Calendar,
  Clock,
  User,
} from "lucide-react";
import { useState } from "react";

export default function CaseDetails() {
  const [isMobile] = useState(window.innerWidth <= 480);
  const [cases] = useState([
    {
      id: "2024-45",
      title: "Smith vs. Johnson",
      status: "Active",
      statusColor: "#22bb33",
      filedDate: "15 Aug 2025",
      dueDate: "25 Sep 2025",
      documents: 5,
      submissions: 2,
    },
    {
      id: "2024-52",
      title: "ABC Corp vs. XYZ Ltd",
      status: "Pending",
      statusColor: "#ff9900",
      filedDate: "20 Aug 2025",
      dueDate: "30 Sep 2025",
      documents: 3,
      submissions: 1,
    },
    {
      id: "2024-48",
      title: "Estate of Brown",
      status: "In Review",
      statusColor: "#2196f3",
      filedDate: "10 Aug 2025",
      dueDate: "28 Sep 2025",
      documents: 8,
      submissions: 3,
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
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#ff9900",
      color: "#fff",
      padding: "1rem 1.5rem",
      borderRadius: "8px",
      marginBottom: isMobile ? "1rem" : "2rem",
      fontSize: "18px",
      fontWeight: "600",
      flexWrap: isMobile ? "wrap" : "nowrap",
      gap: "1rem",
    },
    addButton: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem 1rem",
      backgroundColor: "rgba(255,255,255,0.2)",
      border: "1px solid rgba(255,255,255,0.5)",
      color: "#fff",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "600",
      transition: "all 0.3s ease",
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
    caseMetaGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1rem",
      marginBottom: "1rem",
    },
    metaItem: {
      display: "flex",
      gap: "0.5rem",
      alignItems: "flex-start",
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
      fontSize: "12px",
      color: "#999",
      fontWeight: "600",
    },
    metaValue: {
      fontSize: "14px",
      color: "#333",
      fontWeight: "500",
    },
    documentsSection: {
      display: "flex",
      gap: "1rem",
      padding: "0.75rem",
      backgroundColor: "#f9f9f9",
      borderRadius: "6px",
      marginBottom: "1rem",
    },
    docItem: {
      flex: 1,
      textAlign: "center",
    },
    docNumber: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#0066cc",
    },
    docLabel: {
      fontSize: "12px",
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
    emptyState: {
      textAlign: "center",
      padding: "3rem 1rem",
      color: "#999",
    },
    emptyIcon: {
      fontSize: "48px",
      marginBottom: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <span>📋 Case Details / Submissions</span>
        <button
          style={styles.addButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
          }}
        >
          <Plus size={16} />
          New Case
        </button>
      </div>

      {/* Cases Grid */}
      {cases.length > 0 ? (
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
                {/* Metadata Grid */}
                <div style={styles.caseMetaGrid}>
                  <div style={styles.metaItem}>
                    <Calendar size={16} style={styles.metaIcon} />
                    <div style={styles.metaText}>
                      <div style={styles.metaLabel}>Filed</div>
                      <div style={styles.metaValue}>{caseItem.filedDate}</div>
                    </div>
                  </div>
                  <div style={styles.metaItem}>
                    <Clock size={16} style={styles.metaIcon} />
                    <div style={styles.metaText}>
                      <div style={styles.metaLabel}>Due</div>
                      <div style={styles.metaValue}>{caseItem.dueDate}</div>
                    </div>
                  </div>
                </div>

                {/* Documents Section */}
                <div style={styles.documentsSection}>
                  <div style={styles.docItem}>
                    <div style={styles.docNumber}>{caseItem.documents}</div>
                    <div style={styles.docLabel}>Documents</div>
                  </div>
                  <div style={styles.docItem}>
                    <div style={styles.docNumber}>{caseItem.submissions}</div>
                    <div style={styles.docLabel}>Submissions</div>
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
                    <FileText size={14} />
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
                    <Upload size={14} />
                    Submit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>📁</div>
          <p>No cases found</p>
        </div>
      )}
    </div>
  );
}
