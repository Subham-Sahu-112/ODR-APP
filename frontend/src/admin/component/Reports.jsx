import { BarChart3, TrendingUp, Users, FileText, Clock } from "lucide-react";
import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

export default function Reports() {
  const [activeTab, setActiveTab] = useState("overview");

  // Pie chart data for Users by Role
  const usersByRole = [
    { name: "Admin", value: 45, color: "#9c27b0", percentage: 15 },
    { name: "Claimant", value: 135, color: "#2196f3", percentage: 45 },
    { name: "Respondent", value: 90, color: "#ff9800", percentage: 30 },
    { name: "Neutral", value: 30, color: "#4caf50", percentage: 10 },
  ];

  // Bar chart data for Cases by Status
  const casesByStatus = [
    { label: "Open", value: 10, color: "#ff9800" },
    { label: "In Progress", value: 6, color: "#2196f3" },
    { label: "Resolved", value: 8, color: "#4caf50" },
    { label: "Closed", value: 4, color: "#f44336" },
  ];

  // Pie chart data for Documents Status
  const documentsStatus = [
    { name: "Approved", value: 240, color: "#4caf50", percentage: 60 },
    { name: "Rejected", value: 80, color: "#f44336", percentage: 20 },
    { name: "Pending", value: 80, color: "#ff9800", percentage: 20 },
  ];

  // Monthly activity data
  const monthlyActivity = [
    { month: "Jan", cases: 12, documents: 45, users: 23 },
    { month: "Feb", cases: 15, documents: 52, users: 28 },
    { month: "Mar", cases: 18, documents: 61, users: 35 },
    { month: "Apr", cases: 14, documents: 48, users: 30 },
    { month: "May", cases: 20, documents: 70, users: 42 },
    { month: "Jun", cases: 25, documents: 85, users: 51 },
  ];

  const styles = {
    container: {
      padding: "clamp(1rem, 5vw, 2rem)",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
      maxWidth: "1400px",
      margin: "0 auto",
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      backgroundColor: "#ff9800",
      color: "#fff",
      padding: "clamp(1rem, 3vw, 1.5rem)",
      borderRadius: "8px",
      marginBottom: "2rem",
      flexWrap: "wrap",
    },
    headerTitle: {
      fontSize: "clamp(18px, 5vw, 24px)",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
    },
    tabsContainer: {
      display: "flex",
      gap: "0.5rem",
      marginBottom: "2rem",
      flexWrap: "wrap",
    },
    tab: (isActive) => ({
      padding: "0.75rem 1.5rem",
      border: "none",
      borderRadius: "6px",
      backgroundColor: isActive ? "#ff9800" : "#fff",
      color: isActive ? "#fff" : "#666",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "600",
      transition: "all 0.2s ease",
      boxShadow: isActive ? "0 2px 8px rgba(255,152,0,0.2)" : "0 1px 3px rgba(0,0,0,0.08)",
    }),
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
    chartsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
      marginBottom: "2rem",
    },
    chartCard: {
      backgroundColor: "#fff",
      padding: "clamp(1.5rem, 3vw, 2rem)",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    },
    chartTitle: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#333",
      marginBottom: "1.5rem",
    },
    pieChart: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "200px",
      position: "relative",
    },
    pieSvg: {
      width: "180px",
      height: "180px",
    },
    legendContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "1rem",
      marginTop: "1.5rem",
    },
    legendItem: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      fontSize: "13px",
    },
    legendColor: (color) => ({
      width: "12px",
      height: "12px",
      borderRadius: "3px",
      backgroundColor: color,
      flexShrink: 0,
    }),
    barChart: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      gap: "2rem",
      height: "220px",
      padding: "1rem 0",
      position: "relative",
    },
    barContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
      flex: 1,
    },
    bar: (height, color) => ({
      width: "50px",
      height: `${height}px`,
      backgroundColor: color,
      borderRadius: "6px 6px 0 0",
      transition: "all 0.3s ease",
      cursor: "pointer",
      minHeight: "20px",
    }),
    barLabel: {
      fontSize: "12px",
      fontWeight: "600",
      color: "#333",
      textAlign: "center",
    },
    trendChart: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    },
    trendLine: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
    trendDot: (color) => ({
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      backgroundColor: color,
      flexShrink: 0,
    }),
    trendLabel: {
      fontSize: "13px",
      fontWeight: "600",
      color: "#333",
      minWidth: "100px",
    },
    trendBars: {
      display: "flex",
      gap: "0.5rem",
      flex: 1,
    },
    trendBar: (value, maxValue, color) => ({
      height: "30px",
      flex: 1,
      backgroundColor: `${color}30`,
      borderRadius: "4px",
      border: `2px solid ${color}`,
      transition: "all 0.2s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "11px",
      fontWeight: "600",
      color: color,
    }),
    monthGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
      gap: "0.75rem",
      marginTop: "1rem",
    },
    monthItem: {
      textAlign: "center",
      fontSize: "12px",
      color: "#666",
      fontWeight: "600",
    },
  };

  // Helper function to create pie chart
  // Removed - using Recharts now

  // Helper function for bar chart with axis
  // Removed - using Recharts now

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <BarChart3 size={24} />
        <span style={styles.headerTitle}>Reports & Analytics</span>
      </div>

      {/* Tabs */}
      <div style={styles.tabsContainer}>
        <button
          style={styles.tab(activeTab === "overview")}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          style={styles.tab(activeTab === "detailed")}
          onClick={() => setActiveTab("detailed")}
        >
          Detailed
        </button>
        <button
          style={styles.tab(activeTab === "trends")}
          onClick={() => setActiveTab("trends")}
        >
          Trends
        </button>
      </div>

      {/* Stats Cards */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard("#ff9800")}>
          <div style={styles.statValue}>300</div>
          <div style={styles.statLabel}>Total Cases</div>
        </div>
        <div style={styles.statCard("#2196f3")}>
          <div style={styles.statValue}>400</div>
          <div style={styles.statLabel}>Documents</div>
        </div>
        <div style={styles.statCard("#4caf50")}>
          <div style={styles.statValue}>847</div>
          <div style={styles.statLabel}>Active Users</div>
        </div>
        <div style={styles.statCard("#f44336")}>
          <div style={styles.statValue}>92%</div>
          <div style={styles.statLabel}>Completion Rate</div>
        </div>
      </div>

      {/* Charts Grid */}
      {activeTab === "overview" && (
        <div style={styles.chartsGrid}>
          {/* Users by Role - Pie Chart */}
          <div style={styles.chartCard}>
            <div style={styles.chartTitle}>Users by Role</div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={usersByRole}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {usersByRole.map((item, index) => (
                    <Cell key={`cell-${index}`} fill={item.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "6px" }}
                  formatter={(value) => [value, "Count"]}
                />
              </PieChart>
            </ResponsiveContainer>
            <div style={styles.legendContainer}>
              {usersByRole.map((item) => (
                <div key={item.name} style={styles.legendItem}>
                  <div style={styles.legendColor(item.color)} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cases by Status - Bar Chart */}
          <div style={styles.chartCard}>
            <div style={styles.chartTitle}>Cases by Status</div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={casesByStatus} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "6px" }}
                  cursor={{ fill: "rgba(0,0,0,0.05)" }}
                />
                <Bar dataKey="value" fill="#2196f3" radius={[8, 8, 0, 0]}>
                  {casesByStatus.map((item, index) => (
                    <Cell key={`cell-${index}`} fill={item.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Documents Status - Pie Chart */}
          <div style={styles.chartCard}>
            <div style={styles.chartTitle}>Documents Status</div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={documentsStatus}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {documentsStatus.map((item, index) => (
                    <Cell key={`cell-${index}`} fill={item.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "6px" }}
                  formatter={(value) => [value, "Count"]}
                />
              </PieChart>
            </ResponsiveContainer>
            <div style={styles.legendContainer}>
              {documentsStatus.map((item) => (
                <div key={item.name} style={styles.legendItem}>
                  <div style={styles.legendColor(item.color)} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Detailed Tab */}
      {activeTab === "detailed" && (
        <div style={styles.chartCard}>
          <div style={styles.chartTitle}>System Statistics</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            <div>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#999", marginBottom: "0.5rem" }}>Cases Overview</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <span>Open Cases</span>
                  <span style={{ fontWeight: "bold", color: "#333" }}>45</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <span>In Progress</span>
                  <span style={{ fontWeight: "bold", color: "#333" }}>78</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <span>Resolved</span>
                  <span style={{ fontWeight: "bold", color: "#333" }}>120</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <span>Closed</span>
                  <span style={{ fontWeight: "bold", color: "#333" }}>57</span>
                </div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "#999", marginBottom: "0.5rem" }}>Documents Overview</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <span>Total Submitted</span>
                  <span style={{ fontWeight: "bold", color: "#333" }}>400</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <span>Approved</span>
                  <span style={{ fontWeight: "bold", color: "#4caf50" }}>240</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <span>Pending</span>
                  <span style={{ fontWeight: "bold", color: "#ff9800" }}>80</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <span>Rejected</span>
                  <span style={{ fontWeight: "bold", color: "#f44336" }}>80</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Trends Tab */}
      {activeTab === "trends" && (
        <div style={styles.chartCard}>
          <div style={styles.chartTitle}>Monthly Activity Trend</div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={monthlyActivity} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "6px" }}
                cursor={{ stroke: "#ccc" }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="cases" 
                stroke="#ff9800" 
                strokeWidth={3}
                dot={{ fill: "#ff9800", r: 5 }}
                activeDot={{ r: 7 }}
              />
              <Line 
                type="monotone" 
                dataKey="documents" 
                stroke="#2196f3" 
                strokeWidth={3}
                dot={{ fill: "#2196f3", r: 5 }}
                activeDot={{ r: 7 }}
              />
              <Line 
                type="monotone" 
                dataKey="users" 
                stroke="#4caf50" 
                strokeWidth={3}
                dot={{ fill: "#4caf50", r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
