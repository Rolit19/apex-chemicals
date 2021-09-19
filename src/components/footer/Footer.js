import React,{Component} from 'react'
import { Link } from "react-router-dom";
import './Footer.css'
import HomeIcon from '@material-ui/icons/Home';
import ContactPhoneRoundedIcon from '@material-ui/icons/ContactPhoneRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import MailRoundedIcon from '@material-ui/icons/MailRounded';

class footer extends Component{
    render(){
        return (
            <div>
            <div className="footer">
                <div className="footer-container">
                    <div>
                        <h1 className="heading-h1" style={{marginBottom:"10px"}}>Quick Links</h1><hr style={{width:"100%"}}/>
                        <ul className="footer-quick-links" type="none">
                            <li className="footer-li"> 
                            <Link to="/"><p style={{fontSize:"1.2rem" ,color:"white"}}><HomeIcon style={{fontSize:"1.2rem" ,color:"white"}}/> Home</p></Link>
                            </li>
                            <li className="footer-li">
                            <Link to="/chemicalsandPetrochemicals"><p style={{fontSize:"1.2rem" ,color:"white"}}><ListRoundedIcon style={{fontSize:"large" ,color:"white"}}/> Products</p></Link>
                            </li>
                            <li className="footer-li">
                            <Link to="/aboutUs"><p style={{fontSize:"1.2rem" ,color:"white"}}><InfoRoundedIcon style={{fontSize:"large" ,color:"white"}}/> About Us</p></Link>
                            </li>
                            <li className="footer-li">
                            <Link to="/careers"><p style={{fontSize:"1.2rem" ,color:"white"}}><ContactPhoneRoundedIcon style={{fontSize:"large" ,color:"white"}}/> Careers</p></Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="heading-h1" style={{marginBottom:"10px"}}>Reach Us</h1> <hr style={{width:"100%"}}/>
                        <p className="footer-address"><CallRoundedIcon/> +91 22-49723740
                        <br/><CallRoundedIcon/> +91 22-49743741</p>
                        <h1 className="heading-h1" style={{marginBottom:"10px"}}>Mail Us</h1> <hr style={{width:"100%"}}/>
                        <p className="footer-address"><MailRoundedIcon/> ashish@apexchemicals.in
                        <br/><MailRoundedIcon/> accounts@apexchemicals.in</p>
                    </div>
                    <div>
                        <h1 className="heading-h1" style={{marginBottom:"10px"}}>Address</h1><hr style={{width:"100%"}}/>
                        <p className="footer-address"><BusinessRoundedIcon/> F-501,Remi Bizcourt,9,<br/>Shah Industrial Estate,<br/>Off Veera Desai Road,Andheri( W),<br/>Mumbai-400053
                        <br/></p>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p style={{fontSize:'1.2rem'}}>Copyright @ 2021 | Apex Chemicals</p>
                    <p style={{fontSize:'1.2rem'}}>Devolped by Rolit Trivedi</p>
                </div>
            </div>
            </div>
        );
    }
}

export default footer