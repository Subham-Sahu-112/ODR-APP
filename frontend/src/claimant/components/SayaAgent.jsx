import { Menu, Phone, Mail, CheckCircle, MessageCircle } from "lucide-react";
import { useState } from "react";
import "./SayaAgent.css";

export default function SayaAgent() {
  const [agent] = useState({
    id: 1,
    name: "Anita Sharma",
    specialization: "Family Disputes",
    phone: "+91 98765 43210",
    email: "anita.sharma@saya.org",
    status: "Active",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anita",
  });

  const handleStartChat = () => {
    console.log("Starting chat with", agent.name);
    // Add chat logic here
  };

  return (
    <div className="saya-agent-container">
      {/* Header */}
      <div className="agent-header">
        <span className="menu-icon">
          <Menu size={24} />
        </span>
        <h2>Saya Agent</h2>
      </div>

      {/* Agent Card */}
      <div className="agent-card-wrapper">
        <div className="agent-card">
          {/* Profile Image */}
          <div className="agent-profile-image">
            <img src={agent.profileImage} alt={agent.name} />
          </div>

          {/* Agent Info */}
          <div className="agent-info">
            <h2 className="agent-name">{agent.name}</h2>
            <p className="agent-specialization">{agent.specialization}</p>

            {/* Contact Details */}
            <div className="contact-details">
              {/* Phone */}
              <div className="contact-item">
                <Phone size={18} />
                <span>{agent.phone}</span>
              </div>

              {/* Email */}
              <div className="contact-item">
                <Mail size={18} />
                <span>{agent.email}</span>
              </div>

              {/* Status */}
              <div className="contact-item status">
                <CheckCircle size={18} />
                <span>Status: {agent.status}</span>
              </div>
            </div>

            {/* Start Chat Button */}
            <button onClick={handleStartChat} className="start-chat-btn">
              <MessageCircle size={20} />
              Start Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
