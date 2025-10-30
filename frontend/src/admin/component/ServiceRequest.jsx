import { Search, Eye, MessageSquare, Trash2, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

export default function ServiceRequest() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // Demo service request data
  const serviceRequests = [
    {
      id: "SR001",
      user: "Monika Singh",
      email: "monika.singh@email.com",
      subject: "Case Document Upload Issue",
      date: "2024-10-25",
      response: "Case filing system not accepting PDF documents",
      status: "Resolved",
      statusColor: "#4caf50",
      priority: "High",
    },
    {
      id: "SR002",
      user: "Ravi Patel",
      email: "ravi.patel@email.com",
      subject: "Login Problems",
      date: "2024-10-24",
      response: "Cannot access account after password reset",
      status: "In Progress",
      statusColor: "#ff9800",
      priority: "Medium",
    },
    {
      id: "SR003",
      user: "Anjali Kumar",
      email: "anjali.kumar@email.com",
      subject: "Payment Refund Request",
      date: "2024-10-23",
      response: "Requesting refund for duplicate transaction",
      status: "Pending",
      statusColor: "#2196f3",
      priority: "High",
    },
    {
      id: "SR004",
      user: "Neha Sharma",
      email: "neha.sharma@email.com",
      subject: "Document Verification Delay",
      date: "2024-10-22",
      response: "Documents stuck in verification queue for 5 days",
      status: "Resolved",
      statusColor: "#4caf50",
      priority: "Medium",
    },
    {
      id: "SR005",
      user: "Vikram Desai",
      email: "vikram.desai@email.com",
      subject: "Feature Request - Email Notifications",
      date: "2024-10-21",
      response: "Requesting SMS and email notification options",
      status: "Pending",
      statusColor: "#2196f3",
      priority: "Low",
    },
  ];

  const filteredRequests = serviceRequests.filter((request) => {
    const matchesSearch =
      request.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterStatus === "All" || request.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  const styles = {
    container: {
      padding: "clamp(1rem, 5vw, 2rem)",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
      maxWidth: "1400px",
      margin: "0 auto",
    },
    headerSection: {
      marginBottom: "2rem",
    },
    heading: {
      fontSize: "clamp(24px, 5vw, 32px)",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "1.5rem",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
    },
    controlsContainer: {
      display: "flex",
      gap: "1rem",
      marginBottom: "2rem",
      flexWrap: "wrap",
      alignItems: "center",
    },
    searchContainer: {
      flex: 1,
      minWidth: "250px",
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    searchInput: {
      width: "100%",
      padding: "0.75rem 1rem 0.75rem 2.5rem",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "14px",
      transition: "all 0.2s ease",
      boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    },
    searchIcon: {
      position: "absolute",
      left: "0.75rem",
      color: "#999",
      pointerEvents: "none",
    },
    filterContainer: {
      display: "flex",
      gap: "0.75rem",
      flexWrap: "wrap",
    },
    filterButton: (isActive) => ({
      padding: "0.75rem 1.25rem",
      border: "1px solid #ddd",
      borderRadius: "6px",
      backgroundColor: isActive ? "#2196f3" : "#fff",
      color: isActive ? "#fff" : "#333",
      cursor: "pointer",
      fontSize: "13px",
      fontWeight: "600",
      transition: "all 0.2s ease",
      boxShadow: isActive ? "0 2px 8px rgba(33,150,243,0.2)" : "0 1px 3px rgba(0,0,0,0.08)",
    }),
    tableContainer: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      overflow: "hidden",
    },
    tableWrapper: {
      overflowX: "auto",
      minWidth: 0,
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: "1100px",
    },
    thead: {
      backgroundColor: "#f5f5f5",
      borderBottom: "2px solid #e0e0e0",
    },
    th: {
      padding: "1rem",
      textAlign: "left",
      fontSize: "13px",
      fontWeight: "600",
      color: "#666",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    tbody: {},
    tr: {
      borderBottom: "1px solid #f0f0f0",
      transition: "background-color 0.2s ease",
    },
    trHover: {
      backgroundColor: "#fafafa",
    },
    td: {
      padding: "1rem",
      fontSize: "14px",
      color: "#333",
    },
    requestIdCell: {
      fontWeight: "600",
      color: "#2196f3",
    },
    userCell: {
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem",
    },
    userName: {
      fontWeight: "600",
      color: "#333",
    },
    userEmail: {
      fontSize: "12px",
      color: "#999",
    },
    subjectCell: {
      fontWeight: "500",
      color: "#555",
      maxWidth: "250px",
    },
    responseCell: {
      fontSize: "13px",
      color: "#777",
      maxWidth: "300px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    statusBadge: (color) => ({
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem 0.75rem",
      borderRadius: "6px",
      backgroundColor: `${color}15`,
      color: color,
      fontSize: "12px",
      fontWeight: "600",
      width: "fit-content",
    }),
    priorityBadge: (priority) => {
      let color = "#ff9800";
      if (priority === "High") color = "#f44336";
      if (priority === "Low") color = "#4caf50";
      return {
        display: "inline-flex",
        alignItems: "center",
        padding: "0.4rem 0.6rem",
        borderRadius: "4px",
        backgroundColor: `${color}15`,
        color: color,
        fontSize: "11px",
        fontWeight: "700",
        textTransform: "uppercase",
        width: "fit-content",
      };
    },
    actionsCell: {
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
    },
    actionButton: (bgColor) => ({
      padding: "0.5rem",
      borderRadius: "6px",
      border: "none",
      backgroundColor: `${bgColor}15`,
      color: bgColor,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.2s ease",
      fontSize: "13px",
    }),
    emptyState: {
      textAlign: "center",
      padding: "3rem 2rem",
      color: "#999",
    },
    emptyStateIcon: {
      fontSize: "48px",
      marginBottom: "1rem",
    },
    emptyStateText: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#666",
      marginBottom: "0.5rem",
    },
    emptyStateSubText: {
      fontSize: "14px",
      color: "#999",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "1rem",
      marginBottom: "2rem",
    },
    statCard: (color) => ({
      backgroundColor: "#fff",
      padding: "1.5rem",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      borderTop: `3px solid ${color}`,
      textAlign: "center",
    }),
    statValue: {
      fontSize: "clamp(24px, 5vw, 32px)",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "0.5rem",
    },
    statLabel: {
      fontSize: "13px",
      color: "#999",
      fontWeight: "600",
    },
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Resolved":
        return <CheckCircle size={16} />;
      case "In Progress":
        return <Clock size={16} />;
      case "Pending":
        return <AlertCircle size={16} />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.headerSection}>
        <div style={styles.heading}>Service Requests</div>

        {/* Search and Filter */}
        <div style={styles.controlsContainer}>
          <div style={styles.searchContainer}>
            <Search size={18} style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by Request ID, User, Subject, or Email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
              onFocus={(e) => {
                e.target.style.boxShadow = "0 2px 12px rgba(33,150,243,0.15)";
                e.target.style.borderColor = "#2196f3";
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = "0 1px 3px rgba(0,0,0,0.08)";
                e.target.style.borderColor = "#ddd";
              }}
            />
          </div>

          <div style={styles.filterContainer}>
            {["All", "Resolved", "In Progress", "Pending"].map((status) => (
              <button
                key={status}
                style={styles.filterButton(filterStatus === status)}
                onClick={() => setFilterStatus(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={styles.tableContainer}>
        {filteredRequests.length > 0 ? (
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead style={styles.thead}>
                <tr style={styles.tr}>
                  <th style={styles.th}>Request ID</th>
                  <th style={styles.th}>User</th>
                  <th style={styles.th}>Subject</th>
                  <th style={styles.th}>Date</th>
                  <th style={styles.th}>Response</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Priority</th>
                  <th style={styles.th}>Actions</th>
                </tr>
              </thead>
              <tbody style={styles.tbody}>
                {filteredRequests.map((request) => (
                  <tr
                    key={request.id}
                    style={styles.tr}
                    onMouseEnter={(e) => {
                      Object.assign(e.currentTarget.style, styles.trHover);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <td style={{ ...styles.td, ...styles.requestIdCell }}>
                      {request.id}
                    </td>
                    <td style={styles.td}>
                      <div style={styles.userCell}>
                        <span style={styles.userName}>{request.user}</span>
                        <span style={styles.userEmail}>{request.email}</span>
                      </div>
                    </td>
                    <td style={{ ...styles.td, ...styles.subjectCell }}>
                      {request.subject}
                    </td>
                    <td style={styles.td}>{request.date}</td>
                    <td style={{ ...styles.td, ...styles.responseCell }} title={request.response}>
                      {request.response}
                    </td>
                    <td style={styles.td}>
                      <div style={styles.statusBadge(request.statusColor)}>
                        {getStatusIcon(request.status)}
                        <span>{request.status}</span>
                      </div>
                    </td>
                    <td style={styles.td}>
                      <div style={styles.priorityBadge(request.priority)}>
                        {request.priority}
                      </div>
                    </td>
                    <td style={styles.td}>
                      <div style={styles.actionsCell}>
                        <button
                          style={styles.actionButton("#2196f3")}
                          title="View Details"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#2196f315";
                            e.currentTarget.style.transform = "scale(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#2196f315";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          style={styles.actionButton("#4caf50")}
                          title="Reply to Request"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#4caf5015";
                            e.currentTarget.style.transform = "scale(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#4caf5015";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          <MessageSquare size={16} />
                        </button>
                        <button
                          style={styles.actionButton("#f44336")}
                          title="Delete Request"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f4433615";
                            e.currentTarget.style.transform = "scale(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#f4433615";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          <Trash2 size={16} />
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
            <div style={styles.emptyStateIcon}>🔍</div>
            <div style={styles.emptyStateText}>No Service Requests Found</div>
            <div style={styles.emptyStateSubText}>
              Try adjusting your search or filter criteria
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
