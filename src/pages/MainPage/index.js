import React from "react";
import {Link} from "react-router-dom";
import './index.scss';

const MainPage = () => {
    return (
        <div className="main-page">
            <Link to='/solver'>
                <button>Solver</button> 
            </Link>

            <Link to='/explorer'>
                <button>Explorer</button> 
            </Link>          
        </div>
    )
}

export default MainPage;