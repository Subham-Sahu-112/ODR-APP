import { Menu, Plus, Paperclip } from "lucide-react";
import { useState } from "react";
import "./NewCase.css";

export default function NewCase() {
  const [formData, setFormData] = useState({
    requestType: "Case",
    title: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add submission logic here
  };

  return (
    <div className="new-case-container">
      {/* Header */}
      <div className="new-case-header">
        <span className="menu-icon">
          <Menu size={24} />
        </span>
        <h2>File New Case / Service Request</h2>
      </div>

      {/* Form Container */}
      <div className="new-case-form-wrapper">
        <form onSubmit={handleSubmit} className="new-case-form">
          {/* Request Type */}
          <div className="form-group">
            <label>Request Type</label>
            <select
              name="requestType"
              value={formData.requestType}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Case">Case</option>
              <option value="Service Request">Service Request</option>
            </select>
          </div>

          {/* Title */}
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter case title"
              value={formData.title}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Enter case description"
              value={formData.description}
              onChange={handleChange}
              className="form-textarea"
              rows="4"
            />
          </div>

          {/* File Attachment */}
          <div className="form-group file-group">
            <div className="file-input-wrapper">
              <Paperclip size={20} />
              <span>No file attached</span>
              <label htmlFor="file-input" className="attach-file-label">
                Attach File
              </label>
              <input
                id="file-input"
                type="file"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
            {formData.file && (
              <p className="file-name">Attached: {formData.file.name}</p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            <Plus size={20} />
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
