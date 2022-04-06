import React from "react";
import {Link} from "react-router-dom";
import Logo from '../../../../assets/images/logo.png';

const Main = () => {
    return (
        <div className="main">
            <img src={Logo} alt='logo'/>
            <div>
                <Link to='/username'>
                    <button>Play</button> 
                </Link>
                <Link to='/leaderboard'>
                    <button>Leaderboard</button> 
                </Link>
            </div>
        </div>
    )
}

export default Main;