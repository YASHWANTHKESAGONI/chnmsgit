import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import IssueDisplay from './IssueDisplay';
import axios from 'axios';
import Logo from '../HomePage/components/Logo';

const Adminpage = () => {
  const { token, role, setToken, setRole } = useAuth();
  const navigate = useNavigate();
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [dateFilter, setDateFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [assignedToFilter, setAssignedToFilter] = useState('');
  const [raisedByFilter, setRaisedByFilter] = useState('');

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get('http://localhost:4500/getallissues', {
          headers: {
            'Content-Type': 'application/json',
            'x-token': token,
          },
        });

        setIssues(response.data.issues);
        setFilteredIssues(response.data.issues);
      } catch (error) {
        console.error('Error fetching all issues:', error);
        navigate('/login');
      }
    };

    if (role === 'admin' && token) {
      fetchIssues();
    } else {
      navigate('/login');
    }
  }, [role, token, navigate]);

  // Filter function based on date, status, assignedto, and raisedby
  const handleFilter = () => {
    // Apply filters and set the filtered issues
    const filtered = issues.filter(issue =>
      (!dateFilter || issue.date === dateFilter) &&
      (!statusFilter || issue.status === statusFilter) &&
      (!assignedToFilter || issue.assignedto.includes(assignedToFilter)) &&
      (!raisedByFilter || issue.raisedby.includes(raisedByFilter))
    );
    setFilteredIssues(filtered);
  };
  const handleLogout=()=>{
    setToken(null)
    setRole(null)
    navigate('/login')
  }

  return (
    <div>
    
    <Logo/>
       
      <nav className='navbar'>
        <ul>
          <li onClick={handleLogout} > <Link> Logout </Link> </li>
     <li>    <Link to='/changepassword' >ChangePassword</Link> </li> 
       <li>  <Link to='/register'>Add a User</Link> </li>
        </ul>
      </nav>

      <h2>Admin Page</h2>

      {/* Filter options go here */}
      <div>
        <label>Date:</label>
        <input type="text" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} />
      </div>
      <div>
        <label>Status:</label>
        <input type="text" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} />
      </div>
      <div>
        <label>Assigned To:</label>
        <input type="text" value={assignedToFilter} onChange={(e) => setAssignedToFilter(e.target.value)} />
      </div>
      <div>
        <label>Raised By:</label>
        <input type="text" value={raisedByFilter} onChange={(e) => setRaisedByFilter(e.target.value)} />
      </div>
      <button onClick={handleFilter}>
        Apply Filters
      </button>

      {/* Display filtered issues */}
      {Array.isArray(filteredIssues) && filteredIssues.map((issue) => (
        <IssueDisplay
          key={issue._id}
          branch={issue.branch}
          email={issue.assignedto}
          category={issue.category}
          labName={issue.labname}
          date={issue.date}
          raisedby={issue.raisedby}
          explainissue={issue.explainissue}
          status={issue.status}
        />
      ))}
    </div>
  );
};

export default Adminpage;
