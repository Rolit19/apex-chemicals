import React from 'react';
import Header from '../header/Navbar';
import Footer from '../footer/Footer';
import Slideshow from '../elements/Carousel3';
import { Link } from 'react-router-dom';
import './Products.css';
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
                <p style={{fontSize:"3rem",color:"brown",marginBottom:"20px"}}><GiChemicalTank/> Pharmaceutical Intermediates</p>
                <div className="products-items">
                    <div className="product-list">
                        <p style={{fontSize:"1.5rem"}}>
                        (+/-) 3-Carbamoyl methyl-5-methylhexanoic acid
                        </p>
                    </div>
                    <div className="product-list">
                        <p style={{fontSize:"1.5rem"}}>
                        (R)-3-(Aminomethyl)-5-methylhexanoic acid
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
