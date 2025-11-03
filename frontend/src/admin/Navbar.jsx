import {
  Home,
  Bell,
  User,
  HelpCircle,
  Users,
  FileText,
  CheckSquare,
  Settings,
  TrendingUp,
  Calendar,
  BarChart3,
  CreditCard,
  Headphones,
  Lock,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isClick, setIsClick] = useState(false);
  const [isMobile] = useState(window.innerWidth <= 480);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (isClick && isMobile) {
      setIsOpen(false);
      setIsClick(false);
    }
  }, [isClick, isMobile, setIsOpen]);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch("http://localhost:3636/admin/data", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data.success) {
          setData(data.data);
        } else {
          console.error("Failed to fetch admin data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };
    fetchAdminData();
  }, []);

  const menuItems = [
    {
      icon: Home,
      label: "Dashboard / Home",
      path: "/dashboard",
      color: "#0066cc",
    },
    {
      icon: Bell,
      label: "Notifications",
      path: "/notifications",
      color: "#ff6b6b",
    },
    {
      icon: User,
      label: "Profile & Settings",
      path: "/profile",
      color: "#22bb33",
    },
    {
      icon: Users,
      label: "Users Management",
      path: "/users",
      color: "#ff9900",
    },
    {
      icon: FileText,
      label: "Case Management",
      path: "/cases",
      color: "#00bcd4",
    },
    {
      icon: CheckSquare,
      label: "Submitted Documents",
      path: "/documents",
      color: "#4caf50",
    },
    {
      icon: Settings,
      label: "Admin Controls",
      path: "/controls",
      color: "#673ab7",
    },
    {
      icon: TrendingUp,
      label: "Timeline / Events",
      path: "/timeline",
      color: "#ff5722",
    },
    {
      icon: Calendar,
      label: "Schedule Hearings",
      path: "/hearings",
      color: "#2196f3",
    },
    {
      icon: BarChart3,
      label: "Reports & Analytics",
      path: "/reports",
      color: "#ffc107",
    },
    {
      icon: CreditCard,
      label: "Payment Management",
      path: "/payment",
      color: "#e91e63",
    },
    {
      icon: Headphones,
      label: "Service Requests",
      path: "/service",
      color: "#009688",
    },
    { icon: Lock, label: "System Settings", path: "/system", color: "#795548" },
  ];

  const getIsActive = (itemPath) => {
    return location.pathname.includes(itemPath);
  };

  const styles = {
    sidebar: {
      width: isOpen ? "300px" : "0px",
      backgroundColor: "#fff",
      overflow: "hidden",
      transition: "width 0.3s ease",
      display: "flex",
      flexDirection: "column",
      boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
      height: "100vh",
      position: "fixed",
      left: "0",
      top: "0",
      zIndex: "999",
      borderRight: "1px solid #eee",
    },
    header: {
      padding: "1.5rem 1rem",
      borderBottom: "1px solid #eee",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      flexShrink: 0,
    },
    avatar: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#ff9900",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: "20px",
      fontWeight: "bold",
      flexShrink: 0,
    },
    userName: {
      color: "#333",
      fontSize: "14px",
      fontWeight: "600",
    },
    userRole: {
      color: "#666",
      fontSize: "12px",
    },
    menuContainer: {
      flex: 1,
      overflowY: "auto",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
    menuItem: (itemColor, isActive) => ({
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      padding: "0.875rem 1rem",
      color: isActive ? itemColor : "#666",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "14px",
      borderLeft: isActive ? `4px solid ${itemColor}` : "4px solid transparent",
      backgroundColor: isActive ? itemColor + "22" : "transparent",
      transform: isActive ? "scale(1.05)" : "scale(1)",
      margin: "0.25rem 0.5rem",
      borderRadius: "6px",
      fontWeight: isActive ? "600" : "500",
    }),
    logoutSection: {
      borderTop: "1px solid #eee",
      padding: "1rem",
      flexShrink: 0,
    },
    logoutButton: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      padding: "0.875rem 1rem",
      backgroundColor: "#ff5555",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "600",
      transition: "background-color 0.3s ease",
      width: "100%",
    },
    toggleButton: {
      position: "fixed",
      top: "1rem",
      left: "1rem",
      zIndex: 1001,
      backgroundColor: "#ff9900",
      border: "none",
      color: "#fff",
      padding: "0.75rem",
      borderRadius: "8px",
      cursor: "pointer",
      display: isOpen ? "none" : "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      transition: "all 0.3s ease",
    },
  };

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <>
      {/* Hide Scrollbar CSS */}
      <style>{`
        .menu-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Toggle Button */}
      <button style={styles.toggleButton} onClick={() => setIsOpen(true)}>
        <Menu size={20} />
      </button>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.avatar}>👤</div>
          <div style={{ flex: 1 }}>
            <div style={styles.userName}>{data ? data.name : null}</div>
            <div style={styles.userRole}>{data ? data.user : null}</div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: "none",
              border: "none",
              color: "#333",
              cursor: "pointer",
              display: isOpen ? "flex" : "none",
              alignItems: "center",
              justifyContent: "center",
              padding: "0",
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <div style={styles.menuContainer} className="menu-container">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = getIsActive(item.path);
            return (
              <div
                key={index}
                style={styles.menuItem(item.color, isActive)}
                onClick={() => {
                  navigate(`/admin${item.path}`);
                  setIsClick(true);
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = item.color + "11";
                    e.currentTarget.style.color = item.color;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#666";
                  }
                }}
              >
                <IconComponent
                  size={20}
                  style={{ flexShrink: 0, color: item.color }}
                />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Logout Section */}
        <div style={styles.logoutSection}>
          <button
            style={styles.logoutButton}
            onClick={handleLogOut}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ff3333";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ff5555";
            }}
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
