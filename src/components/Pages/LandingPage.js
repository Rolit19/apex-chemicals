import React from 'react';
import './LandingPage.css';
import Header from '../header/Navbar';
import Footer from '../footer/Footer';
import Slideshow from '../elements/Carousel';
import img1 from '../img/card1.png';
import img2 from '../img/card2.jpg';
import Slideshow1 from '../elements/Carousel3';
import { GiPathDistance } from "react-icons/gi";
import { FcServices,FcImport,FcExport} from "react-icons/fc";
import { FaIndent,FaMapMarkedAlt} from "react-icons/fa";

const LandingPage = () => {
    return (
        <div>
            <Header/>
            <Slideshow/>
            <div className="Landing-content">
                <div className="Landing-services">
                    <h1 className="Landing-heading"><FcServices/> WE OFFER FOLLOWING <br/>SERVICES:<br/></h1>
                    <p className="Landing-font">Our experience and proven ability
                    to progress within industries and
                    services is a well given advantage 
                    for your requisite.</p>
                </div>
                <div className="Landing-content-div">
                    <div className="Content-card">
                        <h1 className="Landing-heading"><FcImport/> IMPORT<br/></h1>
                        <p className="Landing-font">Our global reach has helped us to import
                        products all over the world in a cost <br/>
                        effective manner.</p>
                    </div>
                    <div className="Content-card">
                        <h1 className="Landing-heading"><GiPathDistance/> DISTRIBUTION<br/></h1>
                        <p className="Landing-font">We are a Customer Centric Organisation.
                        We are known for providing all kind of chemical
                        products as per the emerging requirements of the
                        industry.</p>
                    </div>
                </div>
                <div className="Landing-content-div">
                    <div className="Content-card">
                        <h1 className="Landing-heading"><FcExport/> EXPORT<br/></h1>
                        <p className="Landing-font">Our vast reach in the Indian manufacturing
                        market helps us export high quality and wide
                        range of products across the globe.</p>
                    </div>
                    <div className="Content-card">
                        <h1 className="Landing-heading"><FaIndent/> INDENTING<br/></h1>
                        <p className="Landing-font">We provide Indent services and help connect
                        manufactures and  users in the Indian market
                        as well as international market.</p>
                    </div>
                </div>
            </div>
            <hr style={{width:"90%", backgroundColor:"brown",height:"1px"}}/>
            <center><h1 className="Landing-heading" style={{marginBottom:"-40px"}}><FaMapMarkedAlt/> MARKETS<br/></h1></center>
            <Slideshow1/>
            <hr style={{width:"90%", backgroundColor:"brown",height:"1px"}}/>
            <center><h1 className="Landing-heading" style={{marginBottom:"40px"}}>Apex group<br/></h1></center>
            <div className="card-container">
                <div className="card">
                    <h1 className="Landing-heading"> Human Resource Value<br/></h1>
                    <img className="landing-card-img" src={img1} alt={img1} />
                    <p className="Landing-font">A company relies on talents to sustain; a business depends on talents to boom.
                     Talents are fundamental for enterprise development, and the first productive force to promote the business
                     to have a great-leap-forward development.</p>
                </div>
                <div className="card">
                    <h1 className="Landing-heading"> Recruitment<br/></h1>
                    <img className="landing-card-img" src={img2} alt={img2} />
                    <p className="Landing-font">Apex chemicals provides professional and all-round talent development mechanism
                     for fresh college graduates with competitive salary and benefits.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default LandingPage;