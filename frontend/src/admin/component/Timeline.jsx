import { Clock, FileText, Users, AlertCircle, CheckCircle, Edit, Trash2, Search, Filter, Calendar, MapPin, Eye } from "lucide-react";
import { useState } from "react";

export default function Timeline() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const events = [
    {
      id: "EVENT-001",
      type: "case_filed",
      title: "Case Filed",
      description: "Smith vs. Johnson - Case 2024/45 filed",
      caseId: "CASE-2024-001",
      caseName: "Smith vs. Johnson",
      timestamp: "2024-10-15 09:30 AM",
      date: "15 Oct 2024",
      time: "09:30 AM",
      actor: "John Smith",
      status: "completed",
      icon: FileText,
      color: "#0066cc",
    },
    {
      id: "EVENT-002",
      type: "document_uploaded",
      title: "Document Uploaded",
      description: "Petition document uploaded by John Smith",
      caseId: "CASE-2024-001",
      caseName: "Smith vs. Johnson",
      timestamp: "2024-10-15 10:15 AM",
      date: "15 Oct 2024",
      time: "10:15 AM",
      actor: "John Smith",
      status: "completed",
      icon: FileText,
      color: "#4caf50",
    },
    {
      id: "EVENT-003",
      type: "document_verified",
      title: "Document Verified",
      description: "Petition document verified by Admin",
      caseId: "CASE-2024-001",
      caseName: "Smith vs. Johnson",
      timestamp: "2024-10-15 02:00 PM",
      date: "15 Oct 2024",
      time: "02:00 PM",
      actor: "Admin",
      status: "completed",
      icon: CheckCircle,
      color: "#22bb33",
    },
    {
      id: "EVENT-004",
      type: "hearing_scheduled",
      title: "Hearing Scheduled",
      description: "First hearing scheduled on 25 Nov 2024 at 10:30 AM",
      caseId: "CASE-2024-001",
      caseName: "Smith vs. Johnson",
      timestamp: "2024-10-16 11:00 AM",
      date: "16 Oct 2024",
      time: "11:00 AM",
      actor: "Judge",
      status: "completed",
      icon: Calendar,
      color: "#ff9900",
    },
    {
      id: "EVENT-005",
      type: "case_filed",
      title: "Case Filed",
      description: "ABC Corp vs. XYZ Ltd - Case 2024/46 filed",
      caseId: "CASE-2024-002",
      caseName: "ABC Corp vs. XYZ Ltd",
      timestamp: "2024-10-20 08:45 AM",
      date: "20 Oct 2024",
      time: "08:45 AM",
      actor: "Alice Johnson",
      status: "completed",
      icon: FileText,
      color: "#0066cc",
    },
    {
      id: "EVENT-006",
      type: "party_added",
      title: "Party Added",
      description: "Third party added to case",
      caseId: "CASE-2024-002",
      caseName: "ABC Corp vs. XYZ Ltd",
      timestamp: "2024-10-21 03:30 PM",
      date: "21 Oct 2024",
      time: "03:30 PM",
      actor: "Alice Johnson",
      status: "completed",
      icon: Users,
      color: "#2196f3",
    },
    {
      id: "EVENT-007",
      type: "document_uploaded",
      title: "Document Uploaded",
      description: "Evidence report uploaded",
      caseId: "CASE-2024-002",
      caseName: "ABC Corp vs. XYZ Ltd",
      timestamp: "2024-10-22 10:00 AM",
      date: "22 Oct 2024",
      time: "10:00 AM",
      actor: "Bob Wilson",
      status: "pending",
      icon: FileText,
      color: "#ff9900",
    },
    {
      id: "EVENT-008",
      type: "alert",
      title: "Document Review Alert",
      description: "Evidence report pending verification",
      caseId: "CASE-2024-002",
      caseName: "ABC Corp vs. XYZ Ltd",
      timestamp: "2024-10-22 11:30 AM",
      date: "22 Oct 2024",
      time: "11:30 AM",
      actor: "System",
      status: "pending",
      icon: AlertCircle,
      color: "#f44336",
    },
    {
      id: "EVENT-009",
      type: "hearing_scheduled",
      title: "Hearing Scheduled",
      description: "Pre-trial hearing scheduled on 30 Nov 2024",
      caseId: "CASE-2024-004",
      caseName: "Property Dispute - Delhi",
      timestamp: "2024-10-23 02:00 PM",
      date: "23 Oct 2024",
      time: "02:00 PM",
      actor: "Judge",
      status: "completed",
      icon: Calendar,
      color: "#ff9900",
    },
    {
      id: "EVENT-010",
      type: "case_filed",
      title: "Case Filed",
      description: "Property Dispute - Delhi - Case 2024/48 filed",
      caseId: "CASE-2024-004",
      caseName: "Property Dispute - Delhi",
      timestamp: "2024-10-22 09:00 AM",
      date: "22 Oct 2024",
      time: "09:00 AM",
      actor: "Charlie Brown",
      status: "completed",
      icon: FileText,
      color: "#0066cc",
    },
  ];

  const getStatusBadge = (status) => {
    return status === "completed"
      ? { bg: "#e8f5e9", text: "#2e7d32", label: "✓ Completed" }
      : { bg: "#fff3e0", text: "#f57c00", label: "⏳ Pending" };
  };

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.caseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.actor.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === "all" || event.type === filterType;

    return matchesSearch && matchesType;
  });

  // Sort events by timestamp (newest first)
  const sortedEvents = [...filteredEvents].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );

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
      backgroundColor: "#ff5722",
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
    exportButton: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.75rem 1.25rem",
      backgroundColor: "#fff",
      color: "#ff5722",
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
      backgroundColor: isActive ? "#ff5722" : "#fff",
      color: isActive ? "#fff" : "#666",
      border: `1px solid ${isActive ? "#ff5722" : "#ddd"}`,
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
    timelineContainer: {
      position: "relative",
    },
    timelineItem: {
      display: "flex",
      gap: "1.5rem",
      marginBottom: "2rem",
      position: "relative",
    },
    timelineMarker: (color) => ({
      width: "50px",
      height: "50px",
      backgroundColor: color + "22",
      border: `2px solid ${color}`,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: color,
      flexShrink: 0,
      position: "relative",
      zIndex: 2,
    }),
    timelineLine: {
      position: "absolute",
      left: "24px",
      top: "50px",
      width: "2px",
      height: "100%",
      backgroundColor: "#ddd",
    },
    timelineContent: {
      flex: 1,
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "1.5rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      transition: "all 0.2s ease",
    },
    timelineHeader: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginBottom: "0.75rem",
    },
    timelineTitle: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#333",
      marginBottom: "0.25rem",
    },
    timelineDescription: {
      fontSize: "13px",
      color: "#666",
      marginBottom: "0.75rem",
      lineHeight: "1.5",
    },
    timelineMetadata: {
      display: "flex",
      gap: "1rem",
      fontSize: "12px",
      color: "#999",
      flexWrap: "wrap",
    },
    metadataItem: {
      display: "flex",
      alignItems: "center",
      gap: "0.35rem",
    },
    statusBadge: (status) => {
      const colors = getStatusBadge(status);
      return {
        display: "inline-block",
        padding: "0.35rem 0.75rem",
        backgroundColor: colors.bg,
        color: colors.text,
        borderRadius: "4px",
        fontSize: "11px",
        fontWeight: "600",
      };
    },
    actionButtons: {
      display: "flex",
      gap: "0.5rem",
      marginTop: "1rem",
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
      padding: "3rem",
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
          📅 Timeline / Events
        </div>
        <button
          style={styles.exportButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          📥 Export
        </button>
      </div>

      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard("#ff5722")}>
          <div style={styles.statValue}>{events.length}</div>
          <div style={styles.statLabel}>Total Events</div>
        </div>
        <div style={styles.statCard("#4caf50")}>
          <div style={styles.statValue}>
            {events.filter((e) => e.status === "completed").length}
          </div>
          <div style={styles.statLabel}>Completed</div>
        </div>
        <div style={styles.statCard("#ff9800")}>
          <div style={styles.statValue}>
            {events.filter((e) => e.status === "pending").length}
          </div>
          <div style={styles.statLabel}>Pending</div>
        </div>
        <div style={styles.statCard("#2196f3")}>
          <div style={styles.statValue}>{new Set(events.map((e) => e.caseId)).size}</div>
          <div style={styles.statLabel}>Cases Involved</div>
        </div>
      </div>

      {/* Controls Section */}
      <div style={styles.controlsSection}>
        <div style={styles.searchBox}>
          <Search size={18} color="#999" />
          <input
            type="text"
            placeholder="Search by title, description, actor, or case name..."
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
            style={styles.filterButton(filterType === "all")}
            onClick={() => setFilterType("all")}
          >
            All
          </button>
          <button
            style={styles.filterButton(filterType === "case_filed")}
            onClick={() => setFilterType("case_filed")}
          >
            Cases
          </button>
          <button
            style={styles.filterButton(filterType === "document_uploaded")}
            onClick={() => setFilterType("document_uploaded")}
          >
            Documents
          </button>
          <button
            style={styles.filterButton(filterType === "hearing_scheduled")}
            onClick={() => setFilterType("hearing_scheduled")}
          >
            Hearings
          </button>
        </div>
      </div>

      {/* Timeline */}
      {sortedEvents.length > 0 ? (
        <div style={styles.timelineContainer}>
          {sortedEvents.map((event, index) => {
            const IconComponent = event.icon;
            const isLast = index === sortedEvents.length - 1;
            const statusColors = getStatusBadge(event.status);

            return (
              <div key={event.id} style={styles.timelineItem}>
                {/* Timeline Line */}
                {!isLast && <div style={styles.timelineLine} />}

                {/* Marker */}
                <div style={styles.timelineMarker(event.color)}>
                  <IconComponent size={24} />
                </div>

                {/* Content */}
                <div
                  style={styles.timelineContent}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.12)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 8px rgba(0,0,0,0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={styles.timelineHeader}>
                    <div style={{ flex: 1 }}>
                      <div style={styles.timelineTitle}>{event.title}</div>
                      <div style={styles.timelineDescription}>
                        {event.description}
                      </div>
                    </div>
                    <span
                      style={styles.statusBadge(event.status)}
                    >
                      {statusColors.label}
                    </span>
                  </div>

                  <div style={styles.timelineMetadata}>
                    <div style={styles.metadataItem}>
                      <Calendar size={14} />
                      {event.date}
                    </div>
                    <div style={styles.metadataItem}>
                      <Clock size={14} />
                      {event.time}
                    </div>
                    <div style={styles.metadataItem}>
                      <Users size={14} />
                      <strong>By:</strong> {event.actor}
                    </div>
                    <div style={styles.metadataItem}>
                      <FileText size={14} />
                      <strong>Case:</strong> {event.caseName} ({event.caseId})
                    </div>
                  </div>

                  <div style={styles.actionButtons}>
                    <button
                      style={styles.actionButton("#2196f3")}
                      title="View Details"
                    >
                      <Eye size={14} />
                      Details
                    </button>
                    <button
                      style={styles.actionButton("#ff9800")}
                      title="Edit"
                    >
                      <Edit size={14} />
                      Edit
                    </button>
                    <button
                      style={styles.actionButton("#f44336")}
                      title="Delete"
                    >
                      <Trash2 size={14} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>📅</div>
          <div>No events found matching your search criteria</div>
        </div>
      )}
    </div>
  );
}
