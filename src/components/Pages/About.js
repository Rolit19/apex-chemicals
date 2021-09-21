import React from 'react';
import Header from '../header/Navbar';
import Footer from '../footer/Footer';
import './About.css';
import Chem1 from '../img/chem1.jfif';
import doodle from "../img/doodle1.png";
import Chem2 from '../img/chem2.jfif';
import Chem3 from '../img/chem3.jfif';
import Vission from '../elements/Carousel2';
import { GiBubblingFlask } from "react-icons/gi";


const Aboutus = () => {
    return (
        <div>
        <Header/>
        <div className="about-images">
            <img src={Chem1} className="about-img" alt="image1" />
            <img src={Chem2} className="about-img" alt="image2" />
            <img src={Chem3} className="about-img" alt="image3" />
        </div>
        <div className="about-container">
            <h1 className="about-heading"><GiBubblingFlask/> About Us:</h1>
            <p style={{fontSize:"1.5rem"}}>
                At Apex chemicals we are driven to providing our customers with any and all chemical and solvent <br/>
                requirements and offer the best of prices packaged with the best of customer care <br/><br/>
                Established in 1990, Our active networking has let us establish relationships with leading manufacturers <br/>
                across the globe which has led us to expand our business across Indian and international markets.<br/><br/>
                We cater our services to industries like Pharmaceuticals, industrial, Rubber, Paints, resins, Wire Enamels, <br/>
                Electroplating Chemicals, Oil, Fuels, Lubricants, Perfumery (Aromatic) Intermediates, Food, Fertilizers, <br/>
                Polyester, Plastics Textiles, Plywood, Laminated Sheets, Cements, Paper etc.<br/><br/>
            </p>
        </div>
        <center><img className="about-img1" src={doodle} alt={doodle}/></center>
        <hr style={{width:"90%", backgroundColor:"brown",height:"1px"}}/>

        <Vission/>
        <Footer/>
        </div>
    )
}

export default Aboutus;