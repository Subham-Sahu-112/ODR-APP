import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./components/Dashboard";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import SubmittedDocuments from "./components/SubmittedDocuments";
import Communication from "./components/Communication";
import NewCase from "./components/NewCase";
import CaseStatusTracking from "./components/CaseStatusTracking";
import SayaAgent from "./components/SayaAgent";
import OnlineHearingAccess from "./components/OnlineHearingAccess";
import PaymentPortal from "./components/PaymentPortal";

export default function Claimant() {
  const [sidebarOpen, setSidebarOpen] = useState();
  const [isMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  const Styles = {
    container: {
      display: "flex",
      height: "100vh",
      width: "100%",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    main: {
      flex: 1,
      marginLeft: isMobile ? "0" : sidebarOpen ? "300px" : "0",
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
          <Route path="documents" element={<SubmittedDocuments />} />
          <Route path="communication" element={<Communication />} />
          <Route path="file-cases" element={<NewCase />} />
          <Route path="online-hearing" element={<OnlineHearingAccess />} />
          <Route path="case-status" element={<CaseStatusTracking />} />
          <Route path="agent" element={<SayaAgent />} />
          <Route path="payment" element={<PaymentPortal />} />

          <Route
            path="*"
            element={
              <div>
                <h1>404</h1>
                <br />
                <p>Page Not Found</p>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
