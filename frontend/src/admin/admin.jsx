import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./component/Dashboard";
import Notifications from "./component/Notifications";
import Profile from "./component/Profile";
import Users from "./component/Users";
import CaseManagement from "./component/CaseManagement";
import SubmittedDocuments from "./component/SubmittedDocuments";
import AdminControls from "./component/AdminControls";
import Timeline from "./component/Timeline";
import ScheduleHearings from "./component/ScheduleHearings";

export default function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const Styles = {
    container: {
      display: "flex",
      height: "100vh",
      width: "100%",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    main: {
      flex: 1,
      marginLeft: sidebarOpen ? "300px" : "80px",
      overflow: "auto",
      transition: "margin-left 0.3s ease",
      backgroundColor: "#f5f5f5",
    },
  };

  return (
    <div style={Styles.container}>
      <Navbar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <main style={Styles.main}>
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
          <Route path="users" element={<Users />} />
          <Route path="cases" element={<CaseManagement />} />
          <Route path="documents" element={<SubmittedDocuments />} />
          <Route path="controls" element={<AdminControls />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="hearings" element={<ScheduleHearings />} />
        </Routes>
      </main>
    </div>
  );
}
