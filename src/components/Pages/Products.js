import React from 'react';
import Header from '../header/Navbar';
import Footer from '../footer/Footer';
import Slideshow from '../elements/Carousel3';
import './Products.css';

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
            </center>
            <Footer/>
        </div>
    )
}

export default ProductsPage;