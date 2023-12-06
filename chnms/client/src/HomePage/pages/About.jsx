import React, { useState,useEffect} from 'react';
import './About.css';
import {Scrollama,Step} from 'react-scrollama';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';


function About() {
  const [selectedOption, setSelectedOption] = useState('about');


  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return ( 
    <>
    <Logo/>
    <Navbar/>

    <div className="about-us">
    <div className="container-about">
    <div className="options-container">
    <ul id="scene" data-friction-x="0.03" data-friction-y="0.05">
      <li className="layer-about" id="specks" data-depth="0.1"></li>
      <li className="layer-about" id="layer-1" data-depth="0.15">
        <div className="img-about" id="img-1"></div>
      </li>
      <li className="layer-about" id="layer-2" data-depth="0.25">
        <div className="img-about" id="img-2"></div>
      </li>
      <li className="layer-about" id="layer-3" data-depth="0.45">
        <div className="img-about" id="img-3"></div>
      </li>
    </ul>
</div>
<div className="bounce-container">
  <div className="part0">
          <h2 className='abt-h'>About Us</h2>
          </div>
          <div className="part2">
          <p className='abt-p'>Thisis just for example.Thisis just for example.Thisis just for example.Thisis just for example.Thisis just for example.Thisis just for example.Thisis just for example.Thisis just for example.Thisis just for example.Thisis just for example.Thisis just for example.Thisis just for example.Thisis just for example.Thisis just for example.Thisis just for example.Thisis just for example.Thisis just for example.Thisis just for example.Thisis just for example.Thisis just for example.</p>
        </div>
        </div>
    </div>
  </div>

  </>
  );
}

export default About;
