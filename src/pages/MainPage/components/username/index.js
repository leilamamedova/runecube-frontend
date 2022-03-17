import React, {useState} from "react";
import {Link} from "react-router-dom";

const UserName = () => {
    const [username, setUsername] = useState('');

    return (
        <>        
        <h1>Let's find out who you are...</h1>
        <div className="input-holder">
            <input type="text" placeholder="Username" className="input" onChange={(e) => (setUsername(e.target.value))}/>
            {
                username.length>0 ? 
                <Link to='/roles'>
                    <button>Go</button>
                </Link>
                :
                <button disabled>Go</button>                    
            }
        </div>
        </>
    )
}

export default UserName;