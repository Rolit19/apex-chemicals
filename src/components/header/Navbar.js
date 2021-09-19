import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
import Logo from '../img/ApexLogo.jpg';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import IconButton from '@material-ui/core/IconButton';
import Sidedrawer from './SideDrawer';

const Navbar =() =>{
    const [scrolled, setScrolled] = useState(false);
    const [showSidedrawer, setShowSidedrawer] = useState(false);
    window.onscroll = () => {
        if(window.scrollY) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    const closeShowSidedrawer = () => {
        setShowSidedrawer(false);
    }
    return(
        <div>
        {
            showSidedrawer ? <Sidedrawer show={showSidedrawer} closeSidedrawer={closeShowSidedrawer} /> : null
        }
        <div className={"Header " + (scrolled ? "Header_BoxShadow" : "")}>
                <div className="Header_Container">
                    <div className="Header_Logo">
                        <img src={Logo} className="navbar-logo" alt="Logo" />
                    </div>
                    <div className="Header_SideMenuBtn">
                        <IconButton onClick={() => setShowSidedrawer(true)}>
                            <MenuRoundedIcon style={{color:"white"}} />
                        </IconButton>
                    </div>
                    <div className="Header_LinksContainer">
                        <ul className="Header_Links">
                            <li>
                            <Link to="/"><p className="Header_Links">HOME</p></Link>
                            </li>
                            <li>
                            <Link to="/chemicalsandPetrochemicals"><p className="Header_Links">PRODUCTS</p></Link>
                            </li>
                            <li>
                            <Link to="/aboutUs"><p className="Header_Links">ABOUT US</p></Link>
                            </li>
                            <li>
                            <Link to="/careers"><p className="Header_Links">CAREERS</p></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;