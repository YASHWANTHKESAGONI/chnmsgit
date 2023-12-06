import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import IssueDisplay from './IssueDisplay';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../HomePage/components/Logo';

const Technician = () => {
  const { token, role, setRole, setToken } = useAuth();
  const navigate = useNavigate();
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [filterDate, setFilterDate] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const fetchIssues = async () => {
    try {
      const response = await fetch('http://localhost:4500/getissues', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-token': token,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch assigned issues');
      }

      const data = await response.json();
      setIssues(data);
      setFilteredIssues(data); // Initialize filtered issues with the full list
    } catch (error) {
      console.error('Error fetching assigned issues:', error);
      navigate('/login');
    }
  };

  useEffect(() => {
    if (role === 'technician' && token) {
      fetchIssues();
    } else {
      return navigate('/login');
    }
  }, [role, token, navigate]);

  const handleStatusChange = async (issueId, newStatus) => {
    try {
      const response = await fetch(`http://localhost:4500/updatestatus/${issueId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-token': token,
        },
        body: JSON.stringify({ status: newStatus ? 'Solved' : 'Not Solved' }),
      });

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      const updatedIssues = issues.map((issue) =>
        issue._id === issueId ? { ...issue, status: newStatus ? 'Solved' : 'Not Solved' } : issue
      );
      setIssues(updatedIssues);
      setFilteredIssues(updatedIssues); // Update filtered issues when the status changes
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleLogout = () => {
    setToken(null);
    setRole(null);
    navigate('/login');
  };

  const applyFilters = () => {
    let filteredResult = [...issues];

    if (filterDate) {
      filteredResult = filteredResult.filter((issue) => issue.date === filterDate);
    }

    if (filterStatus) {
      filteredResult = filteredResult.filter((issue) => issue.status === filterStatus);
    }

    setFilteredIssues(filteredResult);
  };

  return (
    <div>
      <Logo/>
      <nav>
        <div style={{ backgroundColor: "#385529", borderBottom: "5px solid #a16b15", padding: "10px", display: "flex", justifyContent: "space-between" }}>
          <Link to="/home"> Home </Link>
          <Link to='/changepassword'>Change Password</Link>
          <li onClick={handleLogout}>
            <Link> Logout </Link>
          </li>
        </div>
      </nav>
      <div>
        <label>Date:</label>
        <input type="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} />
        <label>Status:</label>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">All</option>
          <option value="Solved">Solved</option>
          <option value="Not Solved">Not Solved</option>
        </select>
        <button onClick={applyFilters}>Apply Filters</button>
      </div>
      <h2>Assigned Issues</h2>
      {filteredIssues.map((issue) => (
        <IssueDisplay
          key={issue._id}
          email={issue.studentmail}
          category={issue.category}
          labName={issue.labname}
          branch={issue.branch}
          date={issue.date}
          explainissue={issue.explainissue}
          status={issue.status}
          onStatusChange={(newStatus) => handleStatusChange(issue._id, newStatus)}
        />
      ))}
    </div>
  );
};

export default Technician;
