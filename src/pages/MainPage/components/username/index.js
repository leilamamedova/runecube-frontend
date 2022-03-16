import React from "react";
import {Link} from "react-router-dom";

const UserName = () => {
    return (
        <div className="input-holder">
            <input type="text" placeholder="Username" className="input"/>
            <Link to='/roles'>
                <button>Send</button>
            </Link>
        </div>
    )
}

export default UserName;