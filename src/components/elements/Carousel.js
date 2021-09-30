import React from "react";
import OwlCarousel from "react-owl-carousel";
import './Carousel.css'
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import img1 from "../img/ab4.jpeg";
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
        <div className="item c-container">
          <img className="carousel-img" src={img1} title="Title 1" alt={img1} />
          <div class="text-block">
          <p>Importers and distributers of chemical and solvents</p>
          </div>
        </div>
        <div className="item c-container">
          <img className="carousel-img" src={img2} alt={img2} />
          <div class="text-block">
          <p>Drumming facilities  +  storage solutions</p>
          </div>
        </div>
        <div className="item c-container">
          <img className="carousel-img" src={img3} alt={img3} />
          <div class="text-block">
          <p>Industry leaders and service providers since 1990</p>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};
export default App;