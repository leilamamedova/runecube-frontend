import React from "react";
import {Link} from "react-router-dom";

const Roles = () => {
    return (
        <div className="roles">
            <div>
                <button>Solver</button> 
                <button>Explorer</button> 
            </div>
            <Link to='/story'>
                <button className="ready-button">Ready</button> 
            </Link>   
        </div>
    )
}

export default Roles;