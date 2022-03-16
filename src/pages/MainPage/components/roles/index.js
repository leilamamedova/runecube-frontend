import React, {useState, useRef} from "react";
import {Link} from "react-router-dom";

const data = {
    explorerInfo: 'Explorer is ....',
    solverInfo: 'Solver is ....',
}

const Roles = () => {
    const [rolesInfo, setRolesInfo] = useState(data.explorerInfo);

    const handleChange = (event) => {
        setRolesInfo(event.target.value)
    }

    return (
        <div className="roles">
            <div>
                <label className="radio">
                    <input 
                    type="radio"
                    value={data.explorerInfo}
                    checked={rolesInfo === data.explorerInfo}
                    onChange={handleChange}
                    />
                    <span>Explorer</span>
                </label>                
                <label className="radio">
                    <input 
                    type="radio"
                    value={data.solverInfo}
                    checked={rolesInfo === data.solverInfo}
                    onChange={handleChange}
                    />
                    <span>Solver</span>
                </label>
            </div>
            <h1>{rolesInfo}</h1>
            <Link to='/story'>
                <button className="ready-button">Ready</button> 
            </Link>   
        </div>
    )
}

export default Roles;