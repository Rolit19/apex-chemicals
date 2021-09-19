import React from 'react';
import Header from '../header/Navbar';
import Footer from '../footer/Footer';
import Slideshow from '../elements/Carousel3';
import { Link } from 'react-router-dom';
import './Products.css';
import {GiChemicalTank} from 'react-icons/gi'
import {FaMapMarkedAlt} from "react-icons/fa";
const ProductsPage = () => {
    return (
        <div>
            <Header/>
            <center>
                <h1 className="product-heading" style={{marginTop:"140px",marginBottom:"-60px"}}><FaMapMarkedAlt/> MARKETS</h1>
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
                <p style={{fontSize:"3rem",color:"brown",marginBottom:"20px"}}><GiChemicalTank/> Chemicals and Petrochemicals</p>
                <div className="products-items">
                    <div className="product-list">
                        <h1 className="product-heading">Alcohols:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        2- Ethylhexanol<br/>
                        Isobutanol<br/>
                        Methanol<br/>	
                        n-Butanol<br/>	
                        Isopropyl Alcohol<br/>	
                        Ethanol<br/>
                        Polyvinyl Alcohol<br/>
                        Diacetone Alcohol
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Aromatics:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Benzene	<br/>
                        Toluene	<br/>
                        Xylenes	<br/>
                        Solvent Naphtha
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Glycols / Glycol Ethers:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Monoethylene Glycol	<br/>
                        Polyester Polyols	<br/>
                        Diethylene Glycol	<br/>
                        Mono Propylene Glycol	<br/>
                        Triethylene Glycol	<br/>
                        Butyl Glycol Ether	<br/>
                        Polyethylene Glycols	<br/>
                        Ethyl Glycol Ether
                        </p>
                    </div>
                </div>
                <div className="products-items">
                    <div className="product-list">
                        <h1 className="product-heading">Ketones:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Acetone	<br/>
                        Methyl Ethyl Ketone	<br/>
                        Cyclohexanone	<br/>
                        Methyl Isobutyl Ketone
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Plasticizers:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Dioctyl Phthalate	<br/>
                        Di-isobuttyl Phthalate	<br/>
                        Dibutyl Phthalate	<br/>
                        Di-isononyl Phthalate
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Chlor-Alkalies:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Caustic Soda	<br/>
                        Soda Ash	<br/>
                        Caustic Potash	<br/>
                        Sodium Carbonate
                        </p>
                    </div>
                </div>
                <div className="products-items">
                    <div className="product-list">
                        <h1 className="product-heading">Fiber-Intermediates:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Acrylonitrile	<br/>
                        Purified Terephthalic Acid	<br/>
                        Caprolactum	<br/>
                        Dimethylterephthalate
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Amines:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Monoethanolamine	<br/>
                        Diethylamine	<br/>
                        Diethanolamine	<br/>
                        Triethylamine	<br/>
                        Triethanolamine
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Acetate/Ethers:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Ethyl Acetate	<br/>
                        n-Propyl Acetate	<br/>
                        Methyl Acetate	<br/>
                        Methyl Ester of Fatty Acids	<br/>
                        n-Butyl Acetate	<br/>
                        Butyl Carbitol Acetate	<br/>
                        Butyl Cellosolve Acetate
                        </p>
                    </div>
                </div>
                <div className="products-items">
                    <div className="product-list">
                        <h1 className="product-heading">OleoChemical:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Glycerine	<br/>
                        Palmitic Acid	<br/>
                        Lauric Acid	<br/>
                        Oleic Acid	<br/>
                        Stearic Acid	<br/>
                        Linoleic Acid
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Chlorinated Solvents:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Mono Chloro Acetic Acid	<br/>
                        Ethylene Dichloride	<br/>
                        Epichlorohydrine	<br/>
                        Perchloroethylene	<br/>
                        Methylene Dichloride	<br/>
                        Trichloroethylene
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Intermediates:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Phthalic Anhydride	<br/>
                        Maleic Anhydride	<br/>
                        Bisphenol A	<br/>
                        Pentaerythritol
                        </p>
                    </div>
                </div>
                <div className="products-items">
                    <div className="product-list">
                        <h1 className="product-heading">Acids:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Acetic Acid	<br/>
                        Octoic Acid	<br/>
                        Citric Acid	<br/>
                        Isobutyric Acid	<br/>
                        Formic Acid	<br/>
                        Adipic Acid	<br/>
                        Hydrochloric Acid	<br/>
                        Isophthalic Acid
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Others:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Phenol	<br/>
                        Epoxy Resins	<br/>
                        Nonylphenol	<br/>
                        Acetonitrile	<br/>
                        Gum Rosin	<br/>
                        Paraffin Wax	<br/>
                        Melamine	<br/>
                        Naphthalene	<br/>
                        Sodium Lingosulphonates	<br/>
                        Titanium Dioxide	<br/>
                        Carbon Black	<br/>
                        Tetrahydrofuran
                        </p>
                    </div>
                    <div className="product-list">
                        <h1 className="product-heading">Intermediates:</h1><hr style={{width:"100%", color:"brown"}}/>
                        <p style={{fontSize:"1.5rem"}}>
                        Phthalic Anhydride	<br/>
                        Maleic Anhydride	<br/>
                        Bisphenol A	<br/>
                        Pentaerythritol
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