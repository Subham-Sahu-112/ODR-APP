import { Search, Upload, Download, Trash2, Eye, FileText, Filter, CheckCircle, Clock, AlertCircle, FileIcon } from "lucide-react";
import { useState } from "react";

export default function SubmittedDocuments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const documents = [
    {
      id: "DOC-2024-001",
      name: "Petition_Smith_vs_Johnson.pdf",
      caseId: "CASE-2024-001",
      caseName: "Smith vs. Johnson",
      type: "Petition",
      status: "verified",
      uploadDate: "15 Oct 2024",
      uploadedBy: "John Smith",
      size: "2.4 MB",
      fileType: "PDF",
    },
    {
      id: "DOC-2024-002",
      name: "Evidence_Report_ABC_Corp.pdf",
      caseId: "CASE-2024-002",
      caseName: "ABC Corp vs. XYZ Ltd",
      type: "Evidence",
      status: "pending",
      uploadDate: "18 Oct 2024",
      uploadedBy: "Alice Johnson",
      size: "5.1 MB",
      fileType: "PDF",
    },
    {
      id: "DOC-2024-003",
      name: "Agreement_Property_Dispute.docx",
      caseId: "CASE-2024-004",
      caseName: "Property Dispute - Delhi",
      type: "Agreement",
      status: "verified",
      uploadDate: "22 Oct 2024",
      uploadedBy: "Bob Wilson",
      size: "1.8 MB",
      fileType: "DOCX",
    },
    {
      id: "DOC-2024-004",
      name: "Witness_Statement_Brown_Estate.pdf",
      caseId: "CASE-2024-003",
      caseName: "Estate Settlement - Brown",
      type: "Statement",
      status: "rejected",
      uploadDate: "10 Oct 2024",
      uploadedBy: "Emma Davis",
      size: "3.2 MB",
      fileType: "PDF",
    },
    {
      id: "DOC-2024-005",
      name: "Contract_Terms_Mumbai.pdf",
      caseId: "CASE-2024-005",
      caseName: "Commercial Contract - Mumbai",
      type: "Contract",
      status: "pending",
      uploadDate: "25 Oct 2024",
      uploadedBy: "Charlie Brown",
      size: "4.5 MB",
      fileType: "PDF",
    },
    {
      id: "DOC-2024-006",
      name: "Invoice_Payment_Receipt.pdf",
      caseId: "CASE-2024-002",
      caseName: "ABC Corp vs. XYZ Ltd",
      type: "Receipt",
      status: "verified",
      uploadDate: "20 Oct 2024",
      uploadedBy: "Diana Prince",
      size: "1.2 MB",
      fileType: "PDF",
    },
    {
      id: "DOC-2024-007",
      name: "Medical_Report_Amendment.pdf",
      caseId: "CASE-2024-001",
      caseName: "Smith vs. Johnson",
      type: "Report",
      status: "pending",
      uploadDate: "23 Oct 2024",
      uploadedBy: "Frank Miller",
      size: "2.9 MB",
      fileType: "PDF",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "verified":
        return { bg: "#e8f5e9", text: "#2e7d32", border: "#4caf50", icon: "✓" };
      case "pending":
        return { bg: "#fff3e0", text: "#f57c00", border: "#ff9800", icon: "⏳" };
      case "rejected":
        return { bg: "#ffebee", text: "#c62828", border: "#f44336", icon: "✕" };
      default:
        return { bg: "#f0f0f0", text: "#666", border: "#ccc", icon: "?" };
    }
  };

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case "PDF":
        return "#f44336";
      case "DOCX":
        return "#2196f3";
      case "XLSX":
        return "#4caf50";
      default:
        return "#999";
    }
  };

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.caseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.caseId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.uploadedBy.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterStatus === "all" || doc.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

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
      backgroundColor: "#4caf50",
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
    uploadButton: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.75rem 1.25rem",
      backgroundColor: "#fff",
      color: "#4caf50",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "all 0.3s ease",
    },
    controlsSection: {
      display: "flex",
      gap: "1rem",
      marginBottom: "2rem",
      flexWrap: "wrap",
    },
    searchBox: {
      flex: 1,
      minWidth: "250px",
      padding: "0.75rem 1rem",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      backgroundColor: "#fff",
    },
    filterContainer: {
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
    },
    filterButton: (isActive) => ({
      padding: "0.75rem 1rem",
      backgroundColor: isActive ? "#4caf50" : "#fff",
      color: isActive ? "#fff" : "#666",
      border: `1px solid ${isActive ? "#4caf50" : "#ddd"}`,
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "13px",
      fontWeight: "500",
      transition: "all 0.3s ease",
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
      borderLeft: `4px solid ${color}`,
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
    documentsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "1.5rem",
    },
    documentCard: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "1.5rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      border: "1px solid #eee",
    },
    docHeader: {
      display: "flex",
      alignItems: "flex-start",
      gap: "1rem",
      marginBottom: "1rem",
    },
    docIconWrapper: (color) => ({
      width: "50px",
      height: "50px",
      borderRadius: "8px",
      backgroundColor: color + "22",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      color: color,
    }),
    docTitle: {
      flex: 1,
      fontSize: "14px",
      fontWeight: "600",
      color: "#333",
      wordBreak: "break-word",
      lineHeight: "1.4",
    },
    docMetaInfo: {
      marginBottom: "1rem",
    },
    docMetaRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "0.5rem",
      fontSize: "12px",
    },
    docMetaLabel: {
      color: "#999",
    },
    docMetaValue: {
      color: "#333",
      fontWeight: "500",
    },
    statusBadge: (status) => {
      const colors = getStatusColor(status);
      return {
        display: "inline-block",
        padding: "0.4rem 0.75rem",
        backgroundColor: colors.bg,
        color: colors.text,
        border: `1px solid ${colors.border}`,
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "600",
        textTransform: "capitalize",
        marginBottom: "1rem",
      };
    },
    actionButtons: {
      display: "flex",
      gap: "0.5rem",
      marginTop: "1rem",
      flexWrap: "wrap",
    },
    actionButton: (bgColor) => ({
      flex: "1",
      minWidth: "60px",
      padding: "0.5rem",
      backgroundColor: bgColor,
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "12px",
      transition: "opacity 0.2s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.25rem",
    }),
    emptyState: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "3rem",
      textAlign: "center",
      color: "#666",
    },
    emptyIcon: {
      fontSize: "48px",
      marginBottom: "1rem",
      opacity: 0.5,
    },
    tableWrapper: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      overflow: "hidden",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    tableHeader: {
      backgroundColor: "#f5f5f5",
      borderBottom: "2px solid #ddd",
    },
    tableHeaderCell: {
      padding: "1rem",
      textAlign: "left",
      fontSize: "13px",
      fontWeight: "600",
      color: "#666",
      textTransform: "uppercase",
    },
    tableRow: {
      borderBottom: "1px solid #eee",
      transition: "background-color 0.2s ease",
    },
    tableCell: {
      padding: "1rem",
      fontSize: "13px",
      color: "#333",
    },
    docNameCell: {
      fontWeight: "500",
      color: "#4caf50",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerTitle}>
          📄 Submitted Documents
        </div>
        <button
          style={styles.uploadButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Upload size={18} />
          Upload Document
        </button>
      </div>

      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard("#4caf50")}>
          <div style={styles.statValue}>{documents.filter(d => d.status === "verified").length}</div>
          <div style={styles.statLabel}>Verified</div>
        </div>
        <div style={styles.statCard("#ff9800")}>
          <div style={styles.statValue}>{documents.filter(d => d.status === "pending").length}</div>
          <div style={styles.statLabel}>Pending Review</div>
        </div>
        <div style={styles.statCard("#f44336")}>
          <div style={styles.statValue}>{documents.filter(d => d.status === "rejected").length}</div>
          <div style={styles.statLabel}>Rejected</div>
        </div>
        <div style={styles.statCard("#2196f3")}>
          <div style={styles.statValue}>{documents.length}</div>
          <div style={styles.statLabel}>Total Documents</div>
        </div>
      </div>

      {/* Controls Section */}
      <div style={styles.controlsSection}>
        <div style={styles.searchBox}>
          <Search size={18} color="#999" />
          <input
            type="text"
            placeholder="Search by document name, case ID, or uploader..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontSize: "14px",
            }}
          />
        </div>

        <div style={styles.filterContainer}>
          <Filter size={18} color="#666" />
          <button
            style={styles.filterButton(filterStatus === "all")}
            onClick={() => setFilterStatus("all")}
          >
            All
          </button>
          <button
            style={styles.filterButton(filterStatus === "verified")}
            onClick={() => setFilterStatus("verified")}
          >
            Verified
          </button>
          <button
            style={styles.filterButton(filterStatus === "pending")}
            onClick={() => setFilterStatus("pending")}
          >
            Pending
          </button>
          <button
            style={styles.filterButton(filterStatus === "rejected")}
            onClick={() => setFilterStatus("rejected")}
          >
            Rejected
          </button>
        </div>
      </div>

      {/* Documents Table View */}
      {filteredDocuments.length > 0 ? (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.tableHeaderCell}>Document Name</th>
                <th style={styles.tableHeaderCell}>Case ID</th>
                <th style={styles.tableHeaderCell}>Type</th>
                <th style={styles.tableHeaderCell}>Status</th>
                <th style={styles.tableHeaderCell}>Uploaded By</th>
                <th style={styles.tableHeaderCell}>Upload Date</th>
                <th style={styles.tableHeaderCell}>Size</th>
                <th style={styles.tableHeaderCell}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocuments.map((doc, index) => {
                const statusColors = getStatusColor(doc.status);
                return (
                  <tr
                    key={index}
                    style={styles.tableRow}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#f9f9f9";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <td style={styles.tableCell}>
                      <div style={styles.docNameCell}>
                        <FileText size={16} color={getFileIcon(doc.fileType)} />
                        {doc.name}
                      </div>
                    </td>
                    <td style={styles.tableCell}>{doc.caseId}</td>
                    <td style={styles.tableCell}>{doc.type}</td>
                    <td style={styles.tableCell}>
                      <span style={styles.statusBadge(doc.status)}>
                        {statusColors.icon} {doc.status}
                      </span>
                    </td>
                    <td style={styles.tableCell}>{doc.uploadedBy}</td>
                    <td style={styles.tableCell}>{doc.uploadDate}</td>
                    <td style={styles.tableCell}>{doc.size}</td>
                    <td style={styles.tableCell}>
                      <div style={styles.actionButtons}>
                        <button
                          style={styles.actionButton("#2196f3")}
                          title="View"
                        >
                          <Eye size={14} />
                        </button>
                        <button
                          style={styles.actionButton("#4caf50")}
                          title="Download"
                        >
                          <Download size={14} />
                        </button>
                        {doc.status === "pending" && (
                          <button
                            style={styles.actionButton("#f44336")}
                            title="Reject"
                          >
                            <AlertCircle size={14} />
                          </button>
                        )}
                        <button
                          style={styles.actionButton("#9c27b0")}
                          title="Delete"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>📄</div>
          <div>No documents found matching your search criteria</div>
        </div>
      )}
    </div>
  );
}
