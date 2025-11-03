import { Bell, X, CheckCircle, AlertCircle, Info, Trash2 } from "lucide-react";
import { useState } from "react";

export default function Notifications() {
  const [isMobile] = useState(window.innerWidth <= 480);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "update",
      title: "Case Assignment",
      message: "You have been assigned to case #2024-45 (Smith vs. Johnson).",
      timestamp: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "alert",
      title: "Hearing Alert",
      message: "Hearing scheduled for case #2024-45 on 25 Sep 2025 at 10:30 AM",
      timestamp: "1 day ago",
      read: false,
    },
    {
      id: 3,
      type: "info",
      title: "Submission Received",
      message: "Both claimant and respondent submissions received for case #2024-52",
      timestamp: "3 days ago",
      read: true,
    },
    {
      id: 4,
      type: "update",
      title: "Case Update",
      message: "Case #2024-48 status updated to awaiting judgment.",
      timestamp: "1 week ago",
      read: true,
    },
  ]);

  const getNotificationIcon = (type) => {
    switch (type) {
      case "alert":
        return <AlertCircle size={24} color="#ff6b6b" />;
      case "update":
        return <CheckCircle size={24} color="#22bb33" />;
      case "info":
        return <Info size={24} color="#2196f3" />;
      default:
        return <Bell size={24} color="#ff9900" />;
    }
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

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
    },
    clearButton: {
      padding: "0.5rem 1rem",
      backgroundColor: "rgba(255,255,255,0.2)",
      border: "1px solid rgba(255,255,255,0.5)",
      color: "#fff",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "14px",
      transition: "all 0.3s ease",
    },
    notificationCard: (isRead) => ({
      display: "flex",
      gap: "1rem",
      padding: "1rem",
      backgroundColor: isRead ? "#fff" : "#fffbf5",
      borderRadius: "8px",
      marginBottom: "0.75rem",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      borderLeft: `4px solid ${isRead ? "#ddd" : "#ff9900"}`,
      transition: "all 0.3s ease",
    }),
    iconContainer: {
      width: "50px",
      height: "50px",
      borderRadius: "8px",
      backgroundColor: "rgba(255,153,0,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    notificationContent: {
      flex: 1,
    },
    notificationTitle: (isRead) => ({
      fontSize: "15px",
      fontWeight: isRead ? "500" : "600",
      color: "#333",
      marginBottom: "0.25rem",
    }),
    notificationMessage: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "0.5rem",
    },
    notificationTime: {
      fontSize: "12px",
      color: "#999",
    },
    deleteButton: {
      backgroundColor: "transparent",
      border: "none",
      color: "#999",
      cursor: "pointer",
      padding: "0.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      flexShrink: 0,
    },
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
        <span>🔔 Notifications</span>
        <button
          style={styles.clearButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
          }}
          onClick={() => setNotifications([])}
        >
          Clear All
        </button>
      </div>

      {/* Notifications List */}
      {notifications.length > 0 ? (
        <div>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              style={styles.notificationCard(notification.read)}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.12)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={styles.iconContainer}>
                {getNotificationIcon(notification.type)}
              </div>
              <div style={styles.notificationContent}>
                <div style={styles.notificationTitle(notification.read)}>
                  {notification.title}
                </div>
                <div style={styles.notificationMessage}>
                  {notification.message}
                </div>
                <div style={styles.notificationTime}>
                  {notification.timestamp}
                </div>
              </div>
              <button
                style={styles.deleteButton}
                onClick={() => deleteNotification(notification.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ff5555";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#999";
                }}
              >
                <X size={20} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>📭</div>
          <p>No notifications yet</p>
        </div>
      )}
    </div>
  );
}
