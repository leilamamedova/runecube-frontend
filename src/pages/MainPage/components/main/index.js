import React from "react";
import {Link} from "react-router-dom";
import Logo from '../../../../assets/images/logo.png';

const Main = () => {
    return (
        <div className="main">
            <img src={Logo} alt='logo'/>
            <Link to='/username'>
                <button>Play</button> 
            </Link>
        </div>
    )
}

export default Main;