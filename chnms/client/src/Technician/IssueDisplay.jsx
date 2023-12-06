import React, { useState } from 'react';
import './IssueDisplay.css'; // Import the CSS file
import Logo from '../HomePage/components/Logo';

const IssueDisplay = ({ branch, email, category, labName, date, explainissue, status, onStatusChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStatusChange = () => {
    if (!isSubmitting) {
      setIsSubmitting(true);
      onStatusChange("Solved"); // Pass the opposite of the current status
    }
  };

  return (
    <>
    <div className="issue-card">
      <p>Branch: {branch}</p>
      <h3>Email: {email}</h3>
      <p>Category: {category}</p>
      <p>Lab Name: {labName}</p>
      <p>Date: {date}</p>
      <p>Issue: {explainissue}</p>
      <div className="status-container">
        <p>Status: {status}</p>
      </div>
      <button onClick={handleStatusChange} disabled={isSubmitting}>
        Change Status
      </button>
    </div>
    </>
  );
};

export default IssueDisplay;
