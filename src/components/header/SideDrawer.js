import React, { useState, useEffect } from 'react';
import './Sidedrawer.css';
import Backdrop from './Backdrop';
import Logo from '../img/ApexLogo.jpg';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const Sidedrawer = ({show, closeSidedrawer}) => {
    const [closing, setClosing] = useState(false);
    const closeSidedrawerUtil = () => {
        setClosing(true);
        setTimeout(() => closeSidedrawer(), 300);
    }

    useEffect(() => {
        return () => {
            setClosing(false);
        }
        
    }, [show])

    return (
        <div>
            <Backdrop closeSidedrawer={closeSidedrawerUtil} />
            <div className={"Sidedrawer " + (closing ? "Sidedrawer_Close" : "Sidedrawer_Open")}>
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column p-1 flex-end">
                        <IconButton onClick={closeSidedrawerUtil}>
                            <CloseIcon style={{fontSize:"2.5rem",fontWeight:"bold",color:"white"}}/>
                        </IconButton>
                    </div>
                    <div className="Sidedrawer_Logo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                </div>
                <ul className="d-flex flex-column mt-3 Sidedrawer_Links">
                    <li className="sidedrawer-menu">
                    <Link to="/"><p className="Header_Links">HOME</p></Link>
                    </li>
                    <li className="sidedrawer-menu">
                    <Link to="/products"><p className="Header_Links">PRODUCTS</p></Link>
                    </li>
                    <li className="sidedrawer-menu">
                    <Link to="/aboutUs"><p className="Header_Links">ABOUT US</p></Link>
                    </li>
                    <li className="sidedrawer-menu">
                    <Link to="/careers"><p className="Header_Links">CAREERS</p></Link>
                    </li>
                    <br/>
                </ul>
            </div>
        </div>
    )
}

export default Sidedrawer;