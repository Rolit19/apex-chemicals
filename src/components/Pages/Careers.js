import React from 'react';
import Header from '../header/Navbar';
import Footer from '../footer/Footer';
import ContactForm from '../Pages/Form';
import './Careers.css';
import {FcManager} from "react-icons/fc";
import {MdEmail} from "react-icons/md";
import {RiQuestionAnswerFill} from "react-icons/ri";

const CareersPage = () => {
    return (
        <div>
            <Header/>
            <div className="Career-content">
                <h1 className="Career-heading"><FcManager/> CAREERS WITH US:<br/></h1>
                <p className="Career-font">Interested applicants are invited to apply via email with full resume, 
                a recent photograph, and current / expected salary to accounts@apexchemicals.in or ashish@apexchemicals.in
                Only short-listed candidates will be notified.</p>
                <p className="Career-font">
                Currently available openings <br/>
                Accounts <br/>
                Marketing <br/>
                Sales
                </p>
                <h1 className="Career-heading"><RiQuestionAnswerFill/> QUERIES:<br/></h1>
                <p className="Career-font">For and queries or support fill the form below.</p>
            </div>
            <ContactForm/>
            <div className="Career-content">
                <h1 className="Career-heading"><MdEmail/> EMAIL SUPPORT:<br/></h1>
                <p className="Career-font">accounts@apexchemicals.in <br/>
                sales@apexchemicals.in </p>
            </div>
            <Footer/>
        </div>
    )
}

export default CareersPage;