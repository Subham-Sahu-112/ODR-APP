import { Search, Eye, Download, MoreVertical, CheckCircle, Clock, XCircle } from "lucide-react";
import { useState } from "react";

export default function PaymentManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // Demo payment data
  const paymentsData = [
    {
      id: "TXN001",
      user: "Monika Singh",
      email: "monika.singh@email.com",
      amount: "$150.00",
      method: "Credit Card",
      date: "2024-10-25",
      status: "Completed",
      statusColor: "#4caf50",
    },
    {
      id: "TXN002",
      user: "Ravi Patel",
      email: "ravi.patel@email.com",
      amount: "$200.00",
      method: "Debit Card",
      date: "2024-10-24",
      status: "Pending",
      statusColor: "#ff9800",
    },
    {
      id: "TXN003",
      user: "Anjali Kumar",
      email: "anjali.kumar@email.com",
      amount: "$100.00",
      method: "Net Banking",
      date: "2024-10-23",
      status: "Completed",
      statusColor: "#4caf50",
    },
    {
      id: "TXN004",
      user: "Neha Sharma",
      email: "neha.sharma@email.com",
      amount: "$250.00",
      method: "UPI",
      date: "2024-10-22",
      status: "Failed",
      statusColor: "#f44336",
    },
    {
      id: "TXN005",
      user: "Vikram Desai",
      email: "vikram.desai@email.com",
      amount: "$175.50",
      method: "Credit Card",
      date: "2024-10-21",
      status: "Completed",
      statusColor: "#4caf50",
    },
  ];

  const filteredPayments = paymentsData.filter((payment) => {
    const matchesSearch =
      payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterStatus === "All" || payment.status === filterStatus;

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
      minWidth: "1000px",
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
    txnIdCell: {
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
      case "Completed":
        return <CheckCircle size={16} />;
      case "Pending":
        return <Clock size={16} />;
      case "Failed":
        return <XCircle size={16} />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.headerSection}>
        <div style={styles.heading}>Payment Management</div>

        {/* Search and Filter */}
        <div style={styles.controlsContainer}>
          <div style={styles.searchContainer}>
            <Search size={18} style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by Transaction ID, User, or Email..."
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
            {["All", "Completed", "Pending", "Failed"].map((status) => (
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
        {filteredPayments.length > 0 ? (
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead style={styles.thead}>
                <tr style={styles.tr}>
                  <th style={styles.th}>Txn ID</th>
                  <th style={styles.th}>User</th>
                  <th style={styles.th}>Amount</th>
                  <th style={styles.th}>Method</th>
                  <th style={styles.th}>Date</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Actions</th>
                </tr>
              </thead>
              <tbody style={styles.tbody}>
                {filteredPayments.map((payment) => (
                  <tr
                    key={payment.id}
                    style={styles.tr}
                    onMouseEnter={(e) => {
                      Object.assign(e.currentTarget.style, styles.trHover);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <td style={{ ...styles.td, ...styles.txnIdCell }}>
                      {payment.id}
                    </td>
                    <td style={styles.td}>
                      <div style={styles.userCell}>
                        <span style={styles.userName}>{payment.user}</span>
                        <span style={styles.userEmail}>{payment.email}</span>
                      </div>
                    </td>
                    <td style={{ ...styles.td, fontWeight: "600", color: "#2196f3" }}>
                      {payment.amount}
                    </td>
                    <td style={styles.td}>{payment.method}</td>
                    <td style={styles.td}>{payment.date}</td>
                    <td style={styles.td}>
                      <div style={styles.statusBadge(payment.statusColor)}>
                        {getStatusIcon(payment.status)}
                        <span>{payment.status}</span>
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
                          title="Download Receipt"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#4caf5015";
                            e.currentTarget.style.transform = "scale(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#4caf5015";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          <Download size={16} />
                        </button>
                        <button
                          style={styles.actionButton("#ff9800")}
                          title="More Options"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#ff980015";
                            e.currentTarget.style.transform = "scale(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#ff980015";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          <MoreVertical size={16} />
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
            <div style={styles.emptyStateText}>No Payments Found</div>
            <div style={styles.emptyStateSubText}>
              Try adjusting your search or filter criteria
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
