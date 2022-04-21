import React from "react";
import {Link} from "react-router-dom";
import Logo from '../../assets/images/logo.png';
import './index.scss';

const MainPage = () => {
    return (
        <div className="main-page">
            <img src={Logo} alt='logo'/>
            <div>
                <Link to='/login'>
                    <button>Play</button> 
                </Link>
                <Link to='/leaderboard'>
                    <button>Leaderboard</button> 
                </Link>
            </div>      
        </div>
    )
}

export default MainPage;