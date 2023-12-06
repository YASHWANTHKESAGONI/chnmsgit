import React from 'react';
import './OurTeam.css';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';

const Team = () => {
  return (
    <>
    <Logo/>
<Navbar/>
    <div className="part1">
      <h2 style={{ textAlign: 'center' }}>Our Team</h2>

      <div className="row">
        <div className="column">
          <div className="card">
            <img className="img-team" src="./download.jpeg" alt="head"  />
            <div className="container">
              <h2>HEAD</h2>
              <p className="title">Title</p>
              <p>Some text that describes me.</p>
              <p className='email'>email@example.com</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="img-team" src="./d1.jpeg" alt="technician1"  />
            <div className="container">
              <h2>technician1</h2>
              <p className="title">Title</p>
              <p>Some text that describes me.</p>
              <p className='email'>email@example.com</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img className="img-team" src="./d2.jpeg" alt="technician2" />
            <div className="container">
              <h2>technician2</h2>
              <p className="title">Title</p>
              <p>Some text that describes me.</p>
              <p className='email'>email@example.com</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="img-team" src="./d3.jpeg" alt="technician3"  />
            <div className="container">
              <h2>technician3</h2>
              <p className="title">Title</p>
              <p>Some text that describes me.</p>
              <p className='email'>email@example.com</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img className="img-team" src="./d4.jpeg" alt="technician4"  />
            <div className="container">
              <h2>technician4</h2>
              <p className="title">Title</p>
              <p>Some text that describes me.</p>
              <p className='email'>email@example.com</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img className="img-team" src="./d5.jpeg" alt="technician5"  />
            <div className="container">
              <h2>technician5</h2>
              <p className="title">Title</p>
              <p>Some text that describes me.</p>
              <p className='email'>email@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Team;
