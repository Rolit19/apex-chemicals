import React from 'react';
import Header from '../header/Navbar';
import Footer from '../footer/Footer';
import Slideshow from '../elements/Carousel3';
import './Products.css';
import {GiChemicalTank} from 'react-icons/gi'
import { Link } from 'react-router-dom';

const ProductsPage = () => {
    return (
        <div>
            <Header/>
            <center>
                <Slideshow/>
                <div className="Product-content">
                    <p style={{fontSize:"1.5rem",color:"brown",marginBottom:"-20px"}}>VARIETY and RANGE</p>
                    <p style={{fontSize:"2rem",color:"brown",marginBottom:"-60px"}}>OUR</p>
                    <p style={{fontSize:"3rem",color:"brown",fontWeight:"bolder"}}>PRODUCTS</p>
                </div>
                <div className="products-items">
                        <Link to="/chemicalsandPetrochemicals"><h1 className="product-heading">Chemicals and Petrochemicals</h1></Link>
                        <Link to="/polymers"><h1 className="product-heading">Polymers</h1></Link>
                        <Link to="/pharmaceuticalIntermediates"><h1 className="product-heading">Rubbers</h1></Link>
                        <Link to="/pharmaceuticalIntermediates"><h1 className="product-heading">Pharma Intermediates</h1></Link>
                        <Link to="/aromaChemicals"><h1 className="product-heading">Aroma Chemicals</h1></Link>
                </div>
                <div className="Products">
                <p style={{fontSize:"3rem",color:"brown",marginBottom:"20px"}}><GiChemicalTank/> Aroma Chemicals</p>
                <div className="products-items">
                    <div className="product-list">
                        <h1 className="product-heading">Styrene oxide:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Capsules	<br/>
                        Syrups	<br/>
                        Tablets
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Diphenyl oxide:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Washing Detergents<br/>
                        Home Cleaning<br/>
                        Shampoos
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Alpha campholenic aldehyde:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Soap Bars<br/>
                        Incense Sticks<br/>
                        Aroma Oil
                        </p>
                    </div>
                </div>
                <div className="products-items">
                    <div className="product-list">
                        <h1 className="product-heading">Phenyl ethyl alcohol:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Soap Bars<br/>
                        Cosmetics<br/>
                        Reed Sticks Oil
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Styrallyl Acetate:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Soap Bars<br/>
                        Cosmetics<br/>
                        Reed Sticks Oil
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Phenyl Ethyl Methyl Ether:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Soap Bars<br/>
                        Cosmetics<br/>
                        Reed Sticks Oil
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