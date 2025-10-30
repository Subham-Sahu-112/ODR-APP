import { ChevronRight, Search, Filter, Eye, Edit2, Trash2, Plus } from "lucide-react";
import { useState } from "react";

export default function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");

  const users = [
    {
      id: 1,
      name: "Monika Sahu",
      email: "monika@example.com",
      role: "Admin",
      status: "active",
      joinDate: "15 Oct 2024",
      lastActive: "2 minutes ago",
      cases: 5,
    },
    {
      id: 2,
      name: "Ravi Kumar",
      email: "ravi@example.com",
      role: "Claimant",
      status: "active",
      joinDate: "10 Sep 2024",
      lastActive: "1 hour ago",
      cases: 3,
    },
    {
      id: 3,
      name: "Anjali Verma",
      email: "anjali@example.com",
      role: "Respondent",
      status: "active",
      joinDate: "20 Aug 2024",
      lastActive: "5 hours ago",
      cases: 2,
    },
    {
      id: 4,
      name: "Neha Gupta",
      email: "neha@example.com",
      role: "Neutral",
      status: "inactive",
      joinDate: "01 Jul 2024",
      lastActive: "3 days ago",
      cases: 1,
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram@example.com",
      role: "Admin",
      status: "active",
      joinDate: "05 Jun 2024",
      lastActive: "30 minutes ago",
      cases: 8,
    },
    {
      id: 6,
      name: "Priya Sharma",
      email: "priya@example.com",
      role: "Claimant",
      status: "active",
      joinDate: "12 May 2024",
      lastActive: "10 minutes ago",
      cases: 4,
    },
  ];

  const getRoleColor = (role) => {
    switch (role) {
      case "Admin":
        return { bg: "#e8ebff", text: "#0066cc", border: "#0066cc" };
      case "Claimant":
        return { bg: "#e8f5e9", text: "#2e7d32", border: "#4caf50" };
      case "Respondent":
        return { bg: "#fff3e0", text: "#f57c00", border: "#ff9800" };
      case "Neutral":
        return { bg: "#f3e5f5", text: "#7b1fa2", border: "#9c27b0" };
      default:
        return { bg: "#f0f0f0", text: "#666", border: "#999" };
    }
  };

  const getStatusColor = (status) => {
    return status === "active"
      ? { bg: "#e8f5e9", text: "#2e7d32" }
      : { bg: "#ffebee", text: "#c62828" };
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filterRole === "all" || user.role === filterRole;

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
      backgroundColor: "#ff9900",
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
      color: "#ff9900",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "all 0.3s ease",
      fontSize: "14px",
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
      backgroundColor: isActive ? "#ff9900" : "#fff",
      color: isActive ? "#fff" : "#666",
      border: `1px solid ${isActive ? "#ff9900" : "#ddd"}`,
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
      "@media (max-width: 768px)": {
        overflowX: "auto",
      },
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: "600px",
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
    nameCell: {
      fontWeight: "600",
      color: "#ff9900",
    },
    roleBadge: (role) => {
      const colors = getRoleColor(role);
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
    statusBadge: (status) => {
      const colors = getStatusColor(status);
      return {
        display: "inline-block",
        padding: "0.35rem 0.75rem",
        backgroundColor: colors.bg,
        color: colors.text,
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "600",
        whiteSpace: "nowrap",
        textTransform: "capitalize",
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
      whiteSpace: "nowrap",
    }),
    emptyState: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "3rem 1rem",
      textAlign: "center",
      color: "#666",
    },
  };

  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.status === "active").length;

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerTitle}>
          👥 Users Management
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
          Add User
        </button>
      </div>

      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard("#ff9900")}>
          <div style={styles.statValue}>{totalUsers}</div>
          <div style={styles.statLabel}>Total Users</div>
        </div>
        <div style={styles.statCard("#4caf50")}>
          <div style={styles.statValue}>{activeUsers}</div>
          <div style={styles.statLabel}>Active</div>
        </div>
        <div style={styles.statCard("#2196f3")}>
          <div style={styles.statValue}>{totalUsers - activeUsers}</div>
          <div style={styles.statLabel}>Inactive</div>
        </div>
        <div style={styles.statCard("#f44336")}>
          <div style={styles.statValue}>{users.filter(u => u.role === "Admin").length}</div>
          <div style={styles.statLabel}>Admins</div>
        </div>
      </div>

      {/* Controls Section */}
      <div style={styles.controlsSection}>
        <div style={styles.searchBox}>
          <Search size={18} color="#999" />
          <input
            type="text"
            placeholder="Search by name or email..."
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
            style={styles.filterButton(filterRole === "all")}
            onClick={() => setFilterRole("all")}
          >
            All
          </button>
          <button
            style={styles.filterButton(filterRole === "Admin")}
            onClick={() => setFilterRole("Admin")}
          >
            Admin
          </button>
          <button
            style={styles.filterButton(filterRole === "Claimant")}
            onClick={() => setFilterRole("Claimant")}
          >
            Claimant
          </button>
          <button
            style={styles.filterButton(filterRole === "Respondent")}
            onClick={() => setFilterRole("Respondent")}
          >
            Respondent
          </button>
          <button
            style={styles.filterButton(filterRole === "Neutral")}
            onClick={() => setFilterRole("Neutral")}
          >
            Neutral
          </button>
        </div>
      </div>

      {/* Users Table */}
      {filteredUsers.length > 0 ? (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.tableHeaderCell}>Name</th>
                <th style={styles.tableHeaderCell}>Email</th>
                <th style={styles.tableHeaderCell}>Role</th>
                <th style={styles.tableHeaderCell}>Status</th>
                <th style={styles.tableHeaderCell}>Join Date</th>
                <th style={styles.tableHeaderCell}>Last Active</th>
                <th style={styles.tableHeaderCell}>Cases</th>
                <th style={styles.tableHeaderCell}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
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
                  <td style={{ ...styles.tableCell, ...styles.nameCell }}>
                    {user.name}
                  </td>
                  <td style={styles.tableCell}>{user.email}</td>
                  <td style={styles.tableCell}>
                    <span style={styles.roleBadge(user.role)}>
                      {user.role}
                    </span>
                  </td>
                  <td style={styles.tableCell}>
                    <span style={styles.statusBadge(user.status)}>
                      {user.status}
                    </span>
                  </td>
                  <td style={styles.tableCell}>{user.joinDate}</td>
                  <td style={styles.tableCell}>{user.lastActive}</td>
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
                      {user.cases}
                    </button>
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
                        title="Delete"
                      >
                        <Trash2 size={14} />
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
          <div style={{ fontSize: "48px", marginBottom: "1rem", opacity: 0.5 }}>👥</div>
          <div>No users found matching your search criteria</div>
        </div>
      )}
    </div>
  );
}
