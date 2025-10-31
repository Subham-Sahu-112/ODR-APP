import { Menu, CreditCard } from "lucide-react";
import { useState } from "react";
import "./PaymentPortal.css";

export default function PaymentPortal() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const handlePayment = (e) => {
    e.preventDefault();
    console.log("Payment initiated:", { amount, paymentMethod });
    // Add payment logic here
  };

  return (
    <div className="payment-container">
      {/* Header */}
      <div className="payment-header">
        <span className="menu-icon">
          <Menu size={24} />
        </span>
        <h2>Payment Portal</h2>
      </div>

      {/* Payment Form Wrapper */}
      <div className="payment-form-wrapper">
        <form onSubmit={handlePayment} className="payment-form">
          {/* Amount Input */}
          <div className="form-group">
            <label>Enter Amount (INR)</label>
            <input
              type="number"
              placeholder="e.g. 1500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="form-input"
              min="0"
              step="0.01"
              required
            />
          </div>

          {/* Payment Method Selection */}
          <div className="form-group">
            <label>Select Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="form-select"
            >
              <option value="UPI">UPI</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Net Banking">Net Banking</option>
              <option value="Wallet">Wallet</option>
            </select>
          </div>

          {/* Payment Summary */}
          <div className="payment-summary">
            <div className="summary-header">
              <CreditCard size={20} />
              <span>Payment Summary</span>
            </div>
            <div className="summary-content">
              <div className="summary-item">
                <span>Method:</span>
                <span>{paymentMethod}</span>
              </div>
              <div className="summary-item">
                <span>Amount:</span>
                <span>₹{amount || "0"}</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="pay-btn" disabled={!amount}>
            <CreditCard size={20} />
            Make Payment
          </button>
        </form>
      </div>
    </div>
  );
}
