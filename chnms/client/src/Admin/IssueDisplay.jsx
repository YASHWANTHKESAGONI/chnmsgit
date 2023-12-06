import React, { useState } from 'react';


const IssueDisplay = ({ branch, email, category, labName, date, explainissue, status,raisedby, onStatusChange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);


  return (
    <div className="issue-card">
      <p>Branch: {branch}</p>
      <h3>Email: {email}</h3>
      <p>Category: {category}</p>
      <p>Lab Name: {labName}</p>
      <p>Date: {date}</p>
      <p>Raisedby:{raisedby}</p>
      <p>Issue: {explainissue}</p>
      <div className="status-container">
        <p>Status: {status}</p>
      </div>
      
    </div>
  );
};

export default IssueDisplay;
