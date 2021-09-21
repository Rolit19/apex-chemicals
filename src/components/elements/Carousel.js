import React from "react";
import OwlCarousel from "react-owl-carousel";
import './Carousel.css'
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import img1 from "../img/ab4.png";
import img2 from "../img/ab6.jpg";
import img3 from "../img/ab1.jpg";
const App = () => {
  return (
    <div className="Carousel">
      <OwlCarousel
        className="owl-theme"
        autoplay
        loop
        dots
        items={1}
      >
        <div className="item">
          <img className="carousel-img" src={img1} alt={img1} />
        </div>
        <div className="item">
          <img className="carousel-img" src={img2} alt={img2} />
        </div>
        <div className="item">
          <img className="carousel-img" src={img3} alt={img3} />
        </div>
      </OwlCarousel>
    </div>
  );
};
export default App;