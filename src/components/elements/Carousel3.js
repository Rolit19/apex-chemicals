import React from "react";
import OwlCarousel from "react-owl-carousel";
import './Carousel.css'
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { Link } from 'react-router-dom';
import img1 from "../img/c1.png";
import img2 from "../img/c2.jpg";
import img3 from "../img/c3.jpg";
import img4 from "../img/c4.jpg";
import img5 from "../img/c5.jpg";
import img6 from "../img/c6.jpg";
import img7 from "../img/c7.jpg";
import img8 from "../img/c8.jpg";
const App = () => {
  return (
    <div className="Carousel1">
      <OwlCarousel
        className="owl-theme"
        autoplay
        loop
        dots
        margin={40}
        items={3}
      >
        <div className="item">
          <img className="carousel-img1" src={img7} alt={img1} />
          <center><Link to="/chemicalsandPetrochemicals"><p className="carousel-font">Pharmacy</p></Link><hr style={{width:"100%"}}/></center>
        </div>
        <div className="item">
          <img className="carousel-img1" src={img5} alt={img2} />
          <center><Link to="/chemicalsandPetrochemicals"><p className="carousel-font">Paints</p></Link><hr style={{width:"100%"}}/></center>
        </div>
        <div className="item">
          <img className="carousel-img1" src={img2} alt={img2} />
          <center><Link to="/chemicalsandPetrochemicals"><p className="carousel-font">Fertelizers</p></Link><hr style={{width:"100%"}}/></center>
        </div>
        <div className="item">
          <img className="carousel-img1" src={img3} alt={img3} />
          <center><Link to="/chemicalsandPetrochemicals"><p className="carousel-font">Laminated Sheets</p></Link><hr style={{width:"100%"}}/></center>
        </div>
        <div className="item">
          <img className="carousel-img1" src={img4} alt={img1} />
          <center><Link to="/chemicalsandPetrochemicals"><p className="carousel-font">Lubricants</p></Link><hr style={{width:"100%"}}/></center>
        </div>
        <div className="item">
          <img className="carousel-img1" src={img1} alt={img1} />
          <center><Link to="/chemicalsandPetrochemicals"><p className="carousel-font">Cement</p></Link><hr style={{width:"100%"}}/></center>
        </div>
        <div className="item">
          <img className="carousel-img1" src={img8} alt={img2} />
          <center><Link to="/chemicalsandPetrochemicals"><p className="carousel-font">Textiles</p></Link><hr style={{width:"100%"}}/></center>
        </div>
        <div className="item">
          <img className="carousel-img1" src={img6} alt={img3} />
          <center><Link to="/chemicalsandPetrochemicals"><p className="carousel-font">Perfumery</p></Link><hr style={{width:"100%"}}/></center>
        </div>
      </OwlCarousel>
    </div>
  );
};
export default App;