import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Admin from "./admin/admin";
import Claimant from "./claimant/Claimant";
import { useState, useCallback, useEffect } from "react";
import Respondent from "./respondent/Respondent";
import Neutral from "./neutral/Neutral";

function App() {
  const [role, setRole] = useState(null);

  const getRole = useCallback((newRole) => {
    setRole(newRole);
    // Persist role to localStorage for page refresh
    localStorage.setItem("userRole", newRole);
  }, []);

  // Restore role from localStorage on mount
  useEffect(() => {
    const savedRole = localStorage.getItem("userRole");
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login getRole={getRole} role={role} />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/claimant/*" element={<Claimant />} />
        <Route path="/respondent/*" element={<Respondent />} />
        <Route path="/neutral/*" element={<Neutral />} />
      </Routes>
    </Router>
  );
}

export default App;
