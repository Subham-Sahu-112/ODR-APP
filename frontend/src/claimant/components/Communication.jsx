import { Menu, Send } from "lucide-react";
import { useState } from "react";

export default function Communication() {
  const [isMobile] = useState(window.innerWidth <= 480);

  const Styles = {
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: isMobile ? "10px" : "20px",
    },
    header: {
      width: "100%",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "orange",
      display: "flex",
      alignItems: "center",
      gap: isMobile ? "5px" : "10px",
      padding: isMobile ? "5px 10px" : "10px 20px",
      marginBottom: isMobile ? "10px" : "15px",
    },
    iconWrapper: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    messagesContainer: {
      width: "100%",
      height: isMobile ? "60vh" : "75vh",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
      padding: isMobile ? "10px" : "20px",
    },
    adminMessage: {
      width: "max-content",
      backgroundColor: "#e0e0e0",
      padding: isMobile ? "5px" : "10px",
      borderRadius: "8px",
      marginBottom: isMobile ? "5px" : "10px",
    },
    claimantMessage: {
      width: "max-content",
      borderRadius: "8px",
      backgroundColor: "#d1ffd6",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      alignSelf: "flex-end",
      padding: isMobile ? "5px" : "10px",
      marginBottom: isMobile ? "5px" : "10px",
    },
    inputContainer: {
      width: "100%",
      marginTop: isMobile ? "10px" : "20px",
      display: "flex",
      gap: isMobile ? "5px" : "10px",
    },
    inputWrapper: {
      width: "100%",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#fff",
      flex: 1,
      display: "flex",
      gap: isMobile ? "5px" : "10px",
      padding: isMobile ? "5px" : "10px",
    },
    input: {
      flex: 1,
    },
    sendButton: {
      border: "none",
      borderRadius: "8px",
      backgroundColor: "orange",
      display: "flex",
      alignItems: "center",
      padding: isMobile ? "5px 20px" : "10px 50px",
      cursor: "pointer",
    },
  };

  return (
    <div style={Styles.container}>
      {/* Header */}
      <div style={Styles.header}>
        <span style={Styles.iconWrapper}>
          <Menu size={isMobile ? 20 : 25} />
        </span>
        <h2>Communication</h2>
      </div>

      {/* Messages Container */}
      <div style={Styles.messagesContainer}>
        <div style={Styles.adminMessage}>
          <span>Admin</span>
          <p>Welcome to the case communication channel</p>
        </div>

        <div style={Styles.claimantMessage}>
          <span>Claimant</span>
          <p>Thank you. I wanted to confirm my next hearing date.</p>
        </div>

        <div style={Styles.adminMessage}>
          <span>Admin</span>
          <p>Your next hearing is scheduled for 28th Sep 2025 at 11:00 AM.</p>
        </div>
      </div>

      {/* Input Container */}
      <div style={Styles.inputContainer}>
        <div style={Styles.inputWrapper}>
          <input
            type="text"
            placeholder="Type your message..."
            style={Styles.input}
          />
          <button style={Styles.sendButton}>
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
}
