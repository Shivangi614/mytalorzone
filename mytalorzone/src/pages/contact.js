import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Contact.css";


const Contact = () => {
  // State for form fields and feedback message
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [userType, setUserType] = useState(""); // Could be 'Customer', 'Admin', etc.
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState("success");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedbackMessage("");

    // Prepare data to send to backend
    const complaintData = {
      name,
      email,
      message,
      userType
    };

    try {
      // Post complaint to the backend API
      const response = await axios.post("/api/complaints/post-complaints", complaintData);
      
      // On success, show confirmation message
      if (response.data.success) {
        setFeedbackMessage("Your complaint has been submitted successfully.");
        setFeedbackType("success");
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
        setUserType("");
      }
    } catch (error) {
      // On error, show error message
      setFeedbackMessage("There was an error submitting your complaint. Please try again.");
      setFeedbackType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <Header />
      <hr />
      
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="userType">User Type</label>
            <select
              id="userType"
              name="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <option value="">Select User Type</option>
              <option value="Customer">Customer</option>
              <option value="Admin">Admin</option>
         
            </select>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {feedbackMessage && (
          <div className={`feedback-message ${feedbackType}`}>
            {feedbackMessage}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
