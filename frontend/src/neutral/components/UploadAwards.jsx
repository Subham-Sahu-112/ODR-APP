import {
  FileUp,
  Plus,
  Download,
  Eye,
  Trash2,
  Upload,
  FileText,
  CheckCircle,
  Clock,
} from "lucide-react";
import { useState } from "react";

export default function UploadAwards() {
  const [isMobile] = useState(window.innerWidth <= 480);
  const [awards] = useState([
    {
      id: 1,
      caseId: "2024-45",
      caseTitle: "Smith vs. Johnson",
      documentType: "Award",
      fileName: "Award_2024-45_Final.pdf",
      uploadedDate: "22 Sep 2025",
      status: "Published",
      statusColor: "#22bb33",
      size: "2.1 MB",
      summary: "Case decision in favor of claimant with partial damages awarded",
    },
    {
      id: 2,
      caseId: "2024-52",
      caseTitle: "ABC Corp vs. XYZ Ltd",
      documentType: "Order",
      fileName: "Order_2024-52_Interim.pdf",
      uploadedDate: "20 Sep 2025",
      status: "Published",
      statusColor: "#22bb33",
      size: "1.8 MB",
      summary: "Interim order issued pending final hearing",
    },
    {
      id: 3,
      caseId: "2024-48",
      caseTitle: "Estate of Brown",
      documentType: "Notes",
      fileName: "Notes_2024-48_Review.pdf",
      uploadedDate: "18 Sep 2025",
      status: "Draft",
      statusColor: "#ff9900",
      size: "0.9 MB",
      summary: "Preliminary notes on case review and observations",
    },
    {
      id: 4,
      caseId: "2024-42",
      caseTitle: "Contract Dispute",
      documentType: "Award",
      fileName: "Award_2024-42_Final.pdf",
      uploadedDate: "15 Sep 2025",
      status: "Published",
      statusColor: "#22bb33",
      size: "1.5 MB",
      summary: "Final award ordering specific performance",
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
    uploadButton: {
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
    statsGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)",
      gap: "1rem",
      marginBottom: "2rem",
    },
    statCard: (color) => ({
      backgroundColor: "#fff",
      padding: "1rem",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      borderLeft: `4px solid ${color}`,
      textAlign: "center",
    }),
    statIcon: {
      fontSize: "24px",
      marginBottom: "0.5rem",
      display: "flex",
      justifyContent: "center",
    },
    statNumber: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "0.25rem",
    },
    statLabel: {
      fontSize: "12px",
      color: "#666",
      fontWeight: "500",
    },
    awardsList: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    awardCard: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      overflow: "hidden",
      transition: "all 0.3s ease",
    },
    awardHeader: {
      padding: "1rem",
      borderBottom: "1px solid #eee",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "1rem",
      flexWrap: isMobile ? "wrap" : "nowrap",
    },
    awardInfo: {
      flex: 1,
    },
    awardTitle: {
      fontSize: "15px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "0.25rem",
    },
    awardMeta: {
      fontSize: "12px",
      color: "#999",
      marginBottom: "0.5rem",
    },
    typeAndStatus: {
      display: "flex",
      gap: "0.5rem",
      flexWrap: "wrap",
    },
    typeBadge: (color) => ({
      display: "inline-block",
      padding: "0.25rem 0.75rem",
      backgroundColor: color + "22",
      color: color,
      borderRadius: "12px",
      fontSize: "11px",
      fontWeight: "600",
    }),
    statusBadge: (color) => ({
      display: "inline-block",
      padding: "0.25rem 0.75rem",
      backgroundColor: color + "22",
      color: color,
      borderRadius: "12px",
      fontSize: "11px",
      fontWeight: "600",
    }),
    awardContent: {
      padding: "1rem",
    },
    awardSummary: {
      fontSize: "13px",
      color: "#666",
      lineHeight: "1.5",
      marginBottom: "0.75rem",
    },
    awardFooter: {
      display: "flex",
      gap: "1rem",
      padding: "0.75rem 1rem",
      backgroundColor: "#f9f9f9",
      borderTop: "1px solid #eee",
      fontSize: "12px",
      color: "#999",
      flexWrap: isMobile ? "wrap" : "nowrap",
    },
    footerItem: {
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
    },
    awardActions: {
      padding: "1rem",
      backgroundColor: "#f9f9f9",
      borderTop: "1px solid #eee",
      display: "flex",
      gap: "0.5rem",
      flexWrap: "wrap",
    },
    actionButton: (bgColor) => ({
      flex: 1,
      minWidth: "80px",
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
      padding: "2rem 1rem",
      color: "#999",
    },
  };

  const publishedCount = awards.filter(a => a.status === "Published").length;
  const draftCount = awards.filter(a => a.status === "Draft").length;

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <FileUp size={24} />
          Upload Orders / Awards / Notes
        </span>
        <button
          style={styles.uploadButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
          }}
        >
          <Plus size={16} />
          Upload Document
        </button>
      </div>

      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard("#22bb33")}>
          <div style={styles.statIcon}>📋</div>
          <div style={styles.statNumber}>{awards.length}</div>
          <div style={styles.statLabel}>Total Documents</div>
        </div>

        <div style={styles.statCard("#22bb33")}>
          <div style={styles.statIcon}>✓</div>
          <div style={styles.statNumber}>{publishedCount}</div>
          <div style={styles.statLabel}>Published</div>
        </div>

        <div style={styles.statCard("#ff9900")}>
          <div style={styles.statIcon}>📝</div>
          <div style={styles.statNumber}>{draftCount}</div>
          <div style={styles.statLabel}>Draft</div>
        </div>
      </div>

      {/* Awards List */}
      {awards.length > 0 ? (
        <div style={styles.awardsList}>
          {awards.map((award) => (
            <div
              key={award.id}
              style={styles.awardCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={styles.awardHeader}>
                <div style={styles.awardInfo}>
                  <div style={styles.awardTitle}>{award.fileName}</div>
                  <div style={styles.awardMeta}>
                    Case #{award.caseId} - {award.caseTitle}
                  </div>
                  <div style={styles.typeAndStatus}>
                    <span style={styles.typeBadge("#0066cc")}>
                      {award.documentType}
                    </span>
                    <span style={styles.statusBadge(award.statusColor)}>
                      {award.status}
                    </span>
                  </div>
                </div>
              </div>

              <div style={styles.awardContent}>
                <div style={styles.awardSummary}>{award.summary}</div>
              </div>

              <div style={styles.awardFooter}>
                <div style={styles.footerItem}>
                  <FileText size={14} />
                  {award.size}
                </div>
                <div style={styles.footerItem}>
                  <Clock size={14} />
                  {award.uploadedDate}
                </div>
              </div>

              <div style={styles.awardActions}>
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
                  Download
                </button>
                <button
                  style={styles.actionButton("#ff9900")}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ff990033";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ff990022";
                  }}
                >
                  <CheckCircle size={14} />
                  Publish
                </button>
                <button
                  style={styles.actionButton("#ff5555")}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ff555533";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ff555522";
                  }}
                >
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.emptyState}>
          <div style={{ fontSize: "48px", marginBottom: "1rem" }}>📁</div>
          <p>No documents uploaded yet</p>
        </div>
      )}
    </div>
  );
}
