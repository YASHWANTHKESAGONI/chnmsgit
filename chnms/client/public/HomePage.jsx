import React, { useState , useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import HomeNav from '../../Components/HomeNav';
import './HomePage.css';
import Slider from "react-slick";
import Login from '../../Components/LoginComp'; 
import HomeFoot from '../../Components/HomeFoot';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
  
function Home() {
    const [isModalOpen, setModalOpen] = useState(false);
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    
    return(
      
        <div id="some-unique-id">
         <HomeNav isModalOpen={isModalOpen} setModalOpen={setModalOpen} />


<div className='sliderrr'>
<Slider {...settings}>
            <div className="slide">
                <img src="/news1.png" alt="Description of Image" />
               News Item 1
            </div>
            <div className="slide">
                <img src="/news2.png" alt="Description of Image" />
                News Item 2
            </div>
            <div className="slide">
                <img src="/news3.png" alt="Description of Image" />
                News Item 3
            </div>
</Slider>
</div>

 <div>
<HomeFoot />
</div>
        </div>

    );

}
export default Home;
