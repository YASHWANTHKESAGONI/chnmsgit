
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import IssueDispaly from './IssueDispaly';
import { Link } from 'react-router-dom';
import Logo from '../HomePage/components/Logo';

const Pastissue = () => {
  const { token, role ,setToken,setRole} = useAuth();
  const navigate = useNavigate();
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [filterStatus, setFilterStatus] = useState('');

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch('http://localhost:4500/studentissues', {
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
        setFilteredIssues(data);
      } catch (error) {
        console.error('Error fetching assigned issues:', error);
        navigate('/login');
      }
    };

    if (role === 'student' && token) {
      fetchIssues();
    } else {
      navigate('/login');
    }
  }, [role, token, navigate]);

  const handleLogout = () => {
    // Implement logout logic if needed
    setToken(null);
    setRole(null);
    localStorage.removeItem('lr',role)
    localStorage.removeItem('lt',token)
    navigate('/login');
  };

  const handleChangePassword = () => {
    // Implement change password logic if needed

  };

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  useEffect(() => {
    if (filterStatus === '') {
      setFilteredIssues(issues);
    } else {
      const filtered = issues.filter((issue) => issue.status === filterStatus);
      setFilteredIssues(filtered);
    }
  }, [filterStatus, issues]);

  return (
    <div>
  <Logo/>
      <nav className='navbar' style={{ backgroundColor: "#385529", borderBottom: "5px solid #a16b15", padding: "10px", display: "flex", justifyContent: "space-between" }}>
        <ul>
          <li onClick={handleLogout}> <Link> Logout </Link></li>
          <li>  <Link to='/changepassword'> Change Password</Link></li>
          <li> <Link to='/userpage'>  Raise an Issue  </Link> </li>
        </ul>
      </nav>
      <h2>Raised Issues</h2>

      <div>
        <label>Filter by Status:</label>
        <select onChange={handleFilterChange} value={filterStatus}>
          <option value=''>All</option>
          <option value='Solved'>Solved</option>
          <option value='Not Solved'>Not Solved</option>
        </select>
        
      </div>

      {filteredIssues.map((issue) => (
        <IssueDispaly
          key={issue._id}
          email={issue.assignedto}
          category={issue.category}
          labName={issue.labname}
          status={issue.status}
          // onStatusChange={(newStatus) => {}}
        />
      ))}
    </div>
  );
};

export default Pastissue;



