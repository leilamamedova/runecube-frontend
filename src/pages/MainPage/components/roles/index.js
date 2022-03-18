import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import useStore from "../../../../services/socket";

const data = [
    {
        role: 'explorer',
        roleInfo: 'Explorer is ....',
    },
    {
        role: 'solver',
        roleInfo: 'Solver is ....',
    }
]

const Roles = () => {
    const [roleInfo, setRoleInfo] = useState('');
    
    const socket = useStore(({socket})=>socket);
    const roles = useStore(({roles})=>roles);
    const setRoles = useStore(({setRoles})=>setRoles);  
    const username = useStore(({username})=>username);

    const handleChange =  (event) => {
        setRoles(event.target.value)
    }

    useEffect(() => {
        if(roles === 'explorer') {
            setRoleInfo(data[0].roleInfo)
        }else if(roles === 'solver'){
            setRoleInfo(data[1].roleInfo)
        }else{
            setRoleInfo('Choose a role')
        }
        socket.emit('choose_player', {username: username, role: roles}, (response) => {
            console.log(response);
        })
    },[roles])

    return (
        <div className="roles">
            <div>
                <label className="radio">
                    <input 
                    type="radio"
                    value='explorer'
                    checked={roles === 'explorer'}
                    onChange={handleChange}
                    />
                    <span>Explorer</span>
                </label>                
                <label className="radio">
                    <input 
                    type="radio"
                    value='solver'
                    checked={roles === 'solver'}
                    onChange={handleChange}
                    />
                    <span>Solver</span>
                </label>
            </div>
            <h1>{roleInfo}</h1>
            <Link to='/story'>
                <button className="ready-button">Ready</button> 
            </Link>   
        </div>
    )
}

export default Roles;