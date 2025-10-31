import { Menu, Video,  } from "lucide-react";
import { useState } from "react";
import "./OnlineHearingAccess.css";

export default function OnlineHearingAccess() {
  const [hearings] = useState([
    {
      id: 1,
      caseId: "C-101",
      date: "28 Sep 2025",
      time: "11:00 AM",
      judge: "Justice Arvind Kumar",
      status: "Scheduled",
    },
    {
      id: 2,
      caseId: "C-102",
      date: "01 Oct 2025",
      time: "2:30 PM",
      judge: "Justice Meera Joshi",
      status: "Scheduled",
    },
    {
      id: 3,
      caseId: "C-099",
      date: "15 Sep 2025",
      time: "3:00 PM",
      judge: "Justice Ramesh Patel",
      status: "Completed",
    },
  ]);

  const handleJoinHearing = (caseId) => {
    console.log("Joining hearing for case:", caseId);
    // Add video call logic here
  };

  const getStatusClass = (status) => {
    return status.toLowerCase().replace(" ", "-");
  };

  return (
    <div className="hearing-container">
      {/* Header */}
      <div className="hearing-header">
        <span className="menu-icon">
          <Menu size={24} />
        </span>
        <h2>Online Hearing Access</h2>
      </div>

      {/* Hearings List */}
      <div className="hearings-wrapper">
        <div className="hearings-list">
          {hearings.map((hearing) => (
            <div key={hearing.id} className="hearing-card">
              {/* Hearing Info */}
              <div className="hearing-info">
                <h3>Case: {hearing.caseId}</h3>
                <div className="hearing-details">
                  <p>
                    <strong>Date:</strong> {hearing.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {hearing.time} <strong>AM</strong>
                  </p>
                  <p>
                    <strong>Judge:</strong> {hearing.judge}
                  </p>
                </div>

                {/* Status */}
                <div
                  className={`hearing-status status-${getStatusClass(hearing.status)}`}
                >
                  {hearing.status}
                </div>
              </div>

              {/* Join Button */}
              {hearing.status === "Scheduled" ? (
                <button
                  className="join-hearing-btn"
                  onClick={() => handleJoinHearing(hearing.caseId)}
                >
                  <Video size={18} />
                  Join Now
                </button>
              ) : (
                <button className="join-hearing-btn disabled" disabled>
                  {/* <ButtonIcon size={18} /> */}
                  {hearing.status}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
