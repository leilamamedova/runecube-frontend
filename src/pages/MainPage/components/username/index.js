import React, {useState} from "react";
import {Link} from "react-router-dom";

const UserName = () => {
    const [username, setUsername] = useState(null);

    return (
        <>        
        <h1>Let's find out who you are...</h1>
        <div className="input-holder">
            <input type="text" placeholder="Username" className="input" onChange={(e) => (setUsername(e.target.value))}/>
            <Link to='/roles'>
                <button>Go</button>
            </Link>
        </div>
        </>
    )
}

export default UserName;