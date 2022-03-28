import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import useStore from "../../../../services/store";

const data = [
    {
        role: 'explorer',
        roleInfo: 'Explore the world around in search of adventure.',
    },
    {
        role: 'solver',
        roleInfo: 'Solve the mission and open the key to unraveling.',
    }
]

const Roles = () => {
    const [roleInfo, setRoleInfo] = useState('');
    const [ready, setReady] = useState(false);
    
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
            setReady(response);
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
            {
                ready ?
                    <Link to='/story'>
                        <button className="ready-button">Ready</button> 
                    </Link>   
                :
                <Link to='/story'>
                        <button disabled className="ready-button">Ready</button> 
                </Link>  
            }
        </div>
    )
}

export default Roles;