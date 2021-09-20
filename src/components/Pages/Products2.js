import React from 'react';
import Header from '../header/Navbar';
import Footer from '../footer/Footer';
import Slideshow from '../elements/Carousel3';
import './Products.css';
import { Link } from 'react-router-dom';
import {GiChemicalTank} from 'react-icons/gi'

const ProductsPage = () => {
    return (
        <div>
            <Header/>
            <center>
                <Slideshow/>
                <div className="Product-content">
                    <p style={{fontSize:"1.5rem",color:"brown",marginBottom:"-20px"}}>VARIETY and RANGE</p>
                    <p style={{fontSize:"2rem",color:"brown",marginBottom:"-60px",fontWeight:"bolder"}}>OUR</p>
                    <p style={{fontSize:"3rem",color:"brown",fontWeight:"bolder"}}>PRODUCTS</p>
                </div>
                <div className="products-items">
                        <Link to="/chemicalsandPetrochemicals"><h1 className="product-heading">Chemicals and Petrochemicals</h1></Link>
                        <Link to="/polymers"><h1 className="product-heading">Polymers</h1></Link>
                        <Link to="/rubber"><h1 className="product-heading">Rubbers</h1></Link>
                        <Link to="/pharmaceuticalIntermediates"><h1 className="product-heading">Pharma Intermediates</h1></Link>
                        <Link to="/aromaChemicals"><h1 className="product-heading">Aroma Chemicals</h1></Link>
                </div>
                <div className="Products">
                <p style={{fontSize:"3rem",color:"brown",marginBottom:"20px"}}><GiChemicalTank/> Polymers</p>
                <div className="products-items">
                    <div className="product-list">
                        <h1 className="product-heading">Alcohols:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        PP Hompolymers	<br/>
                        PP Impact copolymers	<br/>
                        PP Copolymers
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Polyproplylene (PP):</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        High Density Polyethylene (HDPE)	<br/>
                        Low Density Polyethylene (LDPE)	<br/>
                        Linear Low Density Polyethylene (LLDPE)	<br/>
                        Medium Density Polyethylene (MDPE)
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Polyeythelene Chlorate (PP):</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Bottle Grade	<br/>
                        Fiber Grade	<br/>
                        Film Grade
                        </p>
                    </div>
                </div>
                <div className="products-items">
                    <div className="product-list">
                        <h1 className="product-heading">Polyethylene Terephthalte (PET):</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Acetone	<br/>
                        Methyl Ethyl Ketone	<br/>
                        Cyclohexanone	<br/>
                        Methyl Isobutyl Ketone
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Polyvinyl Chloride:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Suspension	<br/>
                        Paste
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Ethyl Vinyl Acetate (EVA):</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        EVA - 18%	<br/>
                        EVA - 28%
                        </p>
                    </div>
                </div>
                <div className="products-items">
                    <div className="product-list">
                        <h1 className="product-heading">Polystyrene (PS):</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        General Purpose Polystyrene (GPPS)	<br/>
                        High Impact Polystyrene (HIPS)
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Expanded Polystyrene (EPS):</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Fast Cycle Grades	<br/>
                        High Expansion/Low Energy Grades	<br/>
                        Regular Grades	<br/>
                        Cup Grades	<br/>
                        Flame Retardant Grades<br/>
                        Acrylonitrile Butadiene Styrene(ABS)	<br/>
                        Styrene Acrylonitrile (SAN)	<br/>
                        Unsaturated Polyester Resin (UPR)
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Other Polymers:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Polycarbonates	<br/>
                        Polyamides
                        </p>
                    </div>
                </div>
                </div>
            </center>
            <Footer/>
        </div>
    )
}

export default ProductsPage;