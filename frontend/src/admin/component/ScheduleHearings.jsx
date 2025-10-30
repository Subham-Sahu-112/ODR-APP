import { Calendar, Clock, MapPin, Plus, Search, Filter, Edit2, Trash2, Eye, CheckCircle, AlertCircle, Users, FileText, Download } from "lucide-react";
import { useState } from "react";

export default function ScheduleHearings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const hearings = [
    {
      id: "HEAR-2024-001",
      caseId: "CASE-2024-001",
      caseName: "Smith vs. Johnson",
      hearingType: "Initial Hearing",
      date: "25 Nov 2024",
      time: "10:30 AM",
      duration: "1 hour",
      location: "Virtual Courtroom",
      judge: "Hon. Judge Robert Smith",
      parties: 2,
      status: "scheduled",
      participants: 5,
      documents: 3,
    },
    {
      id: "HEAR-2024-002",
      caseId: "CASE-2024-002",
      caseName: "ABC Corp vs. XYZ Ltd",
      hearingType: "Pre-trial Conference",
      date: "30 Nov 2024",
      time: "02:00 PM",
      duration: "1.5 hours",
      location: "District Court - Room 3",
      judge: "Hon. Judge Maria Garcia",
      parties: 3,
      status: "scheduled",
      participants: 7,
      documents: 5,
    },
    {
      id: "HEAR-2024-003",
      caseId: "CASE-2024-004",
      caseName: "Property Dispute - Delhi",
      hearingType: "Evidence Hearing",
      date: "05 Dec 2024",
      time: "11:00 AM",
      duration: "2 hours",
      location: "High Court - Room 5",
      judge: "Hon. Judge Rajesh Kumar",
      parties: 2,
      status: "scheduled",
      participants: 4,
      documents: 8,
    },
    {
      id: "HEAR-2024-004",
      caseId: "CASE-2024-005",
      caseName: "Commercial Contract - Mumbai",
      hearingType: "Final Hearing",
      date: "15 Dec 2024",
      time: "09:00 AM",
      duration: "3 hours",
      location: "Virtual Courtroom",
      judge: "Hon. Judge Priya Singh",
      parties: 2,
      status: "scheduled",
      participants: 6,
      documents: 12,
    },
    {
      id: "HEAR-2024-005",
      caseId: "CASE-2024-001",
      caseName: "Smith vs. Johnson",
      hearingType: "Follow-up Hearing",
      date: "20 Dec 2024",
      time: "03:30 PM",
      duration: "45 minutes",
      location: "Virtual Courtroom",
      judge: "Hon. Judge Robert Smith",
      parties: 2,
      status: "pending",
      participants: 4,
      documents: 2,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "scheduled":
        return { bg: "#e8f5e9", text: "#2e7d32", border: "#4caf50", label: "✓ Scheduled" };
      case "pending":
        return { bg: "#fff3e0", text: "#f57c00", border: "#ff9800", label: "⏳ Pending" };
      case "completed":
        return { bg: "#e3f2fd", text: "#1565c0", border: "#2196f3", label: "✓ Completed" };
      case "cancelled":
        return { bg: "#ffebee", text: "#c62828", border: "#f44336", label: "✕ Cancelled" };
      default:
        return { bg: "#f0f0f0", text: "#666", border: "#ccc", label: "Unknown" };
    }
  };

  const filteredHearings = hearings.filter((hearing) => {
    const matchesSearch =
      hearing.caseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hearing.hearingType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hearing.judge.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hearing.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hearing.caseId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filterStatus === "all" || hearing.status === filterStatus;

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
      backgroundColor: "#2196f3",
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
    scheduleButton: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.75rem 1.25rem",
      backgroundColor: "#fff",
      color: "#2196f3",
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
      backgroundColor: isActive ? "#2196f3" : "#fff",
      color: isActive ? "#fff" : "#666",
      border: `1px solid ${isActive ? "#2196f3" : "#ddd"}`,
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
      minWidth: "1100px",
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
    caseNameCell: {
      fontWeight: "600",
      color: "#2196f3",
    },
    hearingTypeCell: {
      fontSize: "12px",
      color: "#666",
      fontWeight: "500",
    },
    dateTimeCell: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "13px",
    },
    locationCell: {
      display: "flex",
      alignItems: "center",
      gap: "0.35rem",
      fontSize: "12px",
      color: "#666",
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
        whiteSpace: "nowrap",
      };
    },
    infoChip: {
      display: "inline-block",
      padding: "0.3rem 0.6rem",
      backgroundColor: "#f0f0f0",
      color: "#666",
      borderRadius: "4px",
      fontSize: "11px",
      marginRight: "0.3rem",
      whiteSpace: "nowrap",
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
          📅 Schedule Hearings
        </div>
        <button
          style={styles.scheduleButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Plus size={18} />
          New Hearing
        </button>
      </div>

      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard("#2196f3")}>
          <div style={styles.statValue}>{hearings.length}</div>
          <div style={styles.statLabel}>Total Hearings</div>
        </div>
        <div style={styles.statCard("#4caf50")}>
          <div style={styles.statValue}>
            {hearings.filter((h) => h.status === "scheduled").length}
          </div>
          <div style={styles.statLabel}>Scheduled</div>
        </div>
        <div style={styles.statCard("#ff9800")}>
          <div style={styles.statValue}>
            {hearings.filter((h) => h.status === "pending").length}
          </div>
          <div style={styles.statLabel}>Pending</div>
        </div>
        <div style={styles.statCard("#2196f3")}>
          <div style={styles.statValue}>
            {new Set(hearings.map((h) => h.judge)).size}
          </div>
          <div style={styles.statLabel}>Assigned Judges</div>
        </div>
      </div>

      {/* Controls Section */}
      <div style={styles.controlsSection}>
        <div style={styles.searchBox}>
          <Search size={18} color="#999" />
          <input
            type="text"
            placeholder="Search by case, judge, location, or hearing type..."
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
            style={styles.filterButton(filterStatus === "scheduled")}
            onClick={() => setFilterStatus("scheduled")}
          >
            Scheduled
          </button>
          <button
            style={styles.filterButton(filterStatus === "pending")}
            onClick={() => setFilterStatus("pending")}
          >
            Pending
          </button>
        </div>
      </div>

      {/* Hearings Table */}
      {filteredHearings.length > 0 ? (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.tableHeaderCell}>Case Name</th>
                <th style={styles.tableHeaderCell}>Hearing Type</th>
                <th style={styles.tableHeaderCell}>Date & Time</th>
                <th style={styles.tableHeaderCell}>Duration</th>
                <th style={styles.tableHeaderCell}>Location</th>
                <th style={styles.tableHeaderCell}>Judge</th>
                <th style={styles.tableHeaderCell}>Status</th>
                <th style={styles.tableHeaderCell}>Details</th>
                <th style={styles.tableHeaderCell}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredHearings.map((hearing, index) => {
                const statusColors = getStatusColor(hearing.status);
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
                    <td style={{ ...styles.tableCell, ...styles.caseNameCell }}>
                      {hearing.caseName}
                    </td>
                    <td style={{ ...styles.tableCell, ...styles.hearingTypeCell }}>
                      {hearing.hearingType}
                    </td>
                    <td style={styles.tableCell}>
                      <div style={styles.dateTimeCell}>
                        <Calendar size={14} color="#2196f3" />
                        {hearing.date} <Clock size={14} color="#2196f3" /> {hearing.time}
                      </div>
                    </td>
                    <td style={styles.tableCell}>{hearing.duration}</td>
                    <td style={styles.tableCell}>
                      <div style={styles.locationCell}>
                        <MapPin size={12} />
                        {hearing.location}
                      </div>
                    </td>
                    <td style={styles.tableCell}>{hearing.judge}</td>
                    <td style={styles.tableCell}>
                      <span style={styles.statusBadge(hearing.status)}>
                        {statusColors.label}
                      </span>
                    </td>
                    <td style={styles.tableCell}>
                      <div>
                        <span style={styles.infoChip}>
                          <Users size={10} style={{ display: "inline", marginRight: "2px" }} />
                          {hearing.participants}
                        </span>
                        <span style={styles.infoChip}>
                          <FileText size={10} style={{ display: "inline", marginRight: "2px" }} />
                          {hearing.documents}
                        </span>
                      </div>
                    </td>
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
                          title="Cancel"
                        >
                          <AlertCircle size={14} />
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
          <div style={styles.emptyIcon}>📅</div>
          <div>No hearings found matching your search criteria</div>
        </div>
      )}
    </div>
  );
}
