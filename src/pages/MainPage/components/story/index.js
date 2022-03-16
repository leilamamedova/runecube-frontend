import React from "react";
import {Link} from "react-router-dom";

const Story = () => {
    return (
        <div>
            <h1>Story...</h1>
            <Link to='/solver'>
                <button>Start</button> 
            </Link> 
        </div>
    )
}

export default Story;