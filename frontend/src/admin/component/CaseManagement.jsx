import { Search, Plus, Edit2, Trash2, Eye, ChevronRight, Filter, Download, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function CaseManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const cases = [
    {
      id: "CASE-2024-001",
      caseNumber: "2024/45",
      title: "Smith vs. Johnson",
      status: "active",
      date: "15 Oct 2024",
      parties: "2",
      documents: "5",
      nextHearing: "25 Nov 2024",
    },
    {
      id: "CASE-2024-002",
      caseNumber: "2024/46",
      title: "ABC Corp vs. XYZ Ltd",
      status: "pending",
      date: "20 Oct 2024",
      parties: "3",
      documents: "8",
      nextHearing: "30 Nov 2024",
    },
    {
      id: "CASE-2024-003",
      caseNumber: "2024/47",
      title: "Estate Settlement - Brown",
      status: "closed",
      date: "10 Sep 2024",
      parties: "4",
      documents: "12",
      nextHearing: "N/A",
    },
    {
      id: "CASE-2024-004",
      caseNumber: "2024/48",
      title: "Property Dispute - Delhi",
      status: "active",
      date: "22 Oct 2024",
      parties: "2",
      documents: "3",
      nextHearing: "05 Dec 2024",
    },
    {
      id: "CASE-2024-005",
      caseNumber: "2024/49",
      title: "Commercial Contract - Mumbai",
      status: "pending",
      date: "25 Oct 2024",
      parties: "2",
      documents: "6",
      nextHearing: "15 Dec 2024",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return { bg: "#e8f5e9", text: "#2e7d32", border: "#4caf50" };
      case "pending":
        return { bg: "#fff3e0", text: "#f57c00", border: "#ff9800" };
      case "closed":
        return { bg: "#ffebee", text: "#c62828", border: "#f44336" };
      default:
        return { bg: "#f0f0f0", text: "#666", border: "#ccc" };
    }
  };

  const filteredCases = cases.filter((caseItem) => {
    const matchesSearch =
      caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.caseNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterStatus === "all" || caseItem.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  const styles = {
    container: {
      padding: "clamp(1rem, 5vw, 2rem)",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#00bcd4",
      color: "#fff",
      padding: "clamp(1rem, 3vw, 1.5rem)",
      borderRadius: "8px",
      marginBottom: "2rem",
      flexWrap: "wrap",
      gap: "1rem",
    },
    headerTitle: {
      fontSize: "clamp(18px, 5vw, 24px)",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
    },
    addButton: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.75rem 1.25rem",
      backgroundColor: "#fff",
      color: "#00bcd4",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "all 0.3s ease",
      fontSize: "14px",
      whiteSpace: "nowrap",
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
      flexWrap: "wrap",
    },
    filterButton: (isActive) => ({
      padding: "0.75rem 1rem",
      backgroundColor: isActive ? "#00bcd4" : "#fff",
      color: isActive ? "#fff" : "#666",
      border: `1px solid ${isActive ? "#00bcd4" : "#ddd"}`,
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "13px",
      fontWeight: "500",
      transition: "all 0.3s ease",
      whiteSpace: "nowrap",
    }),
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
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
      fontSize: "clamp(20px, 4vw, 28px)",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "0.25rem",
    },
    statLabel: {
      fontSize: "12px",
      color: "#999",
    },
    tableWrapper: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      overflow: "auto",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: "900px",
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
      whiteSpace: "nowrap",
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
    caseIdCell: {
      fontWeight: "600",
      color: "#00bcd4",
    },
    statusBadge: (status) => {
      const colors = getStatusColor(status);
      return {
        display: "inline-block",
        padding: "0.35rem 0.75rem",
        backgroundColor: colors.bg,
        color: colors.text,
        border: `1px solid ${colors.border}`,
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "600",
        textTransform: "capitalize",
        whiteSpace: "nowrap",
      };
    },
    actionButtons: {
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
      flexWrap: "wrap",
    },
    actionButton: (bgColor) => ({
      padding: "0.5rem 0.75rem",
      backgroundColor: bgColor,
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "12px",
      transition: "opacity 0.2s ease",
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
    }),
    emptyState: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "3rem 1rem",
      textAlign: "center",
      color: "#666",
    },
    emptyIcon: {
      fontSize: "48px",
      marginBottom: "1rem",
      opacity: 0.5,
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerTitle}>
          📋 Case Management
        </div>
        <button
          style={styles.addButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Plus size={18} />
          New Case
        </button>
      </div>

      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard("#4caf50")}>
          <div style={styles.statValue}>{cases.filter(c => c.status === "active").length}</div>
          <div style={styles.statLabel}>Active Cases</div>
        </div>
        <div style={styles.statCard("#ff9800")}>
          <div style={styles.statValue}>{cases.filter(c => c.status === "pending").length}</div>
          <div style={styles.statLabel}>Pending Cases</div>
        </div>
        <div style={styles.statCard("#f44336")}>
          <div style={styles.statValue}>{cases.filter(c => c.status === "closed").length}</div>
          <div style={styles.statLabel}>Closed Cases</div>
        </div>
        <div style={styles.statCard("#2196f3")}>
          <div style={styles.statValue}>{cases.length}</div>
          <div style={styles.statLabel}>Total Cases</div>
        </div>
      </div>

      {/* Controls Section */}
      <div style={styles.controlsSection}>
        <div style={styles.searchBox}>
          <Search size={18} color="#999" />
          <input
            type="text"
            placeholder="Search by case ID, number, or title..."
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
            style={styles.filterButton(filterStatus === "active")}
            onClick={() => setFilterStatus("active")}
          >
            Active
          </button>
          <button
            style={styles.filterButton(filterStatus === "pending")}
            onClick={() => setFilterStatus("pending")}
          >
            Pending
          </button>
          <button
            style={styles.filterButton(filterStatus === "closed")}
            onClick={() => setFilterStatus("closed")}
          >
            Closed
          </button>
        </div>
      </div>

      {/* Cases Table */}
      {filteredCases.length > 0 ? (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.tableHeaderCell}>Case ID</th>
                <th style={styles.tableHeaderCell}>Title</th>
                <th style={styles.tableHeaderCell}>Status</th>
                <th style={styles.tableHeaderCell}>Date Filed</th>
                <th style={styles.tableHeaderCell}>Parties</th>
                <th style={styles.tableHeaderCell}>Documents</th>
                <th style={styles.tableHeaderCell}>Next Hearing</th>
                <th style={styles.tableHeaderCell}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCases.map((caseItem, index) => (
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
                  <td style={{ ...styles.tableCell, ...styles.caseIdCell }}>
                    {caseItem.caseNumber}
                  </td>
                  <td style={styles.tableCell}>{caseItem.title}</td>
                  <td style={styles.tableCell}>
                    <span style={styles.statusBadge(caseItem.status)}>
                      {caseItem.status}
                    </span>
                  </td>
                  <td style={styles.tableCell}>{caseItem.date}</td>
                  <td style={styles.tableCell}>{caseItem.parties}</td>
                  <td style={styles.tableCell}>
                    <button
                      style={{
                        backgroundColor: "#e0e0e0",
                        color: "#333",
                        border: "none",
                        padding: "0.3rem 0.7rem",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "12px",
                      }}
                    >
                      {caseItem.documents}
                    </button>
                  </td>
                  <td style={styles.tableCell}>{caseItem.nextHearing}</td>
                  <td style={styles.tableCell}>
                    <div style={styles.actionButtons}>
                      <button
                        style={styles.actionButton("#2196f3")}
                        title="View"
                      >
                        <Eye size={14} />
                      </button>
                      <button
                        style={styles.actionButton("#ff9800")}
                        title="Edit"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        style={styles.actionButton("#f44336")}
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                      <button
                        style={styles.actionButton("#4caf50")}
                        title="Download"
                      >
                        <Download size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>📁</div>
          <div>No cases found matching your search criteria</div>
        </div>
      )}
    </div>
  );
}
