import React from "react";
import OwlCarousel from "react-owl-carousel";
import './Carousel.css'
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { BsFillEyeFill } from "react-icons/bs";
import { GiBullseye,GiBubblingFlask } from "react-icons/gi";

const App = () => {
  return (
    <div className="Carousel">
      <OwlCarousel
        className="owl-theme"
        autoplay
        loop
        dots={false}
        items={1}
      >
        <div className="item car-card">
            <center><h1 className="car-heading"><GiBullseye/> Mission</h1></center>
            <center><p style={{fontSize:"1.5rem"}}>With the expansion of business, in trading and related activities keeping in view of the objective of concentrating on market development of agency products, enlarging the range of trading items and strengthening the import, export & indenting facility</p></center>
        </div>
        <div className="item car-card">
            <center><h1 className="car-heading"><BsFillEyeFill/> Vision</h1></center>
            <center><p style={{fontSize:"1.5rem"}}>To be a one-stop shop that cater to all industries across the spectrum.</p></center>
        </div>
      </OwlCarousel>
    </div>
  );
};
export default App;