import { Menu, TrendingUp } from "lucide-react";
import { useState } from "react";
import "./CaseStatusTracking.css";

export default function CaseStatusTracking() {
  const [cases] = useState([
    {
      id: 1,
      title: "Property Dispute with Neighbor",
      filedDate: "10 Sep 2025",
      status: "Hearing Scheduled",
      statusType: "scheduled",
    },
    {
      id: 2,
      title: "Unpaid Salary Complaint",
      filedDate: "15 Sep 2025",
      status: "Under Review",
      statusType: "under-review",
    },
    {
      id: 3,
      title: "Contract Breach Case",
      filedDate: "05 Sep 2025",
      status: "Closed",
      statusType: "closed",
    },
  ]);

  const getStatusColor = (statusType) => {
    switch (statusType) {
      case "scheduled":
        return "#0066cc";
      case "under-review":
        return "#ff9f1c";
      case "closed":
        return "#48bb78";
      default:
        return "#4a5568";
    }
  };

  return (
    <div className="case-tracking-container">
      {/* Header */}
      <div className="tracking-header">
        <span className="menu-icon">
          <Menu size={24} />
        </span>
        <h2>Case Status Tracking</h2>
      </div>

      {/* Cases List */}
      <div className="cases-wrapper">
        <div className="cases-list">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="case-card">
              {/* Case Title and Date */}
              <div className="case-header">
                <div className="case-info">
                  <h3>{caseItem.title}</h3>
                  <p>Filed On: {caseItem.filedDate}</p>
                </div>
                <TrendingUp size={24} color={getStatusColor(caseItem.statusType)} />
              </div>

              {/* Case Status */}
              <div className="case-footer">
                <span
                  className={`status-badge status-${caseItem.statusType}`}
                  style={{ color: getStatusColor(caseItem.statusType) }}
                >
                  Status: {caseItem.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
