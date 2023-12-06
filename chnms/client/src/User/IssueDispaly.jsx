import React, { useState } from 'react';
import './IssueDisplay.css' ; // Import the CSS file
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../HomePage/components/Logo';


const IssueDisplay = ({ email, category, labName, status, onStatusChange }) => {
  const [newStatus, setNewStatus] = useState(status);
  const { token, role } = useAuth();
  const navigate = useNavigate();
  if(role!=='studet' && !token){
    return navigate('/login')
  }
  const handleStatusChange = () => {
    onStatusChange(email, newStatus);
  };

  return (
    <>
    <div className="issue-card">
      <h3>Your issue assigned to : {email}</h3>
      <p>Category: {category}</p>
      <p>Lab Name: {labName}</p>
      <div className="status-container">
        <p>Status: {newStatus}</p>
      </div>
      {/* <button onClick={handleStatusChange}>Change Status</button> */}
    </div>
    </>
  );
};

export default IssueDisplay;
