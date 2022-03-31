import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";
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
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const socket = useStore(({socket})=>socket);
    const roles = useStore(({roles})=>roles);
    const username = useStore(({username})=>username);
    const setRoles = useStore(({setRoles})=>setRoles);  
    const setRuneData = useStore(({setRuneData})=>setRuneData);
    const setGameData = useStore(({setGameData})=>setGameData);
    const setStartStory = useStore(({setStartStory})=>setStartStory);
    const setEndStory = useStore(({setEndStory})=>setEndStory);

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
            setReady(response[0]);
            if(typeof response[1] === 'string' ) {
                setError(response[1]);
            } else{
                setError('');
                setRuneData(response[1][0]);
                setStartStory(response[1][1]);
                setEndStory(response[1][2]);
                setGameData(response[1][3]);
            }
            setLoading(false) 
            console.log(response);
        })
    },[roles])

    useEffect(() => {
        setLoading(true) 
    }, [roles])

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
                loading ?
                    <Link to={ready && '/story'}>
                        <button className="ready-button"><LoadingSpinner/></button> 
                    </Link>  
                    : 
                    <>
                        <Link to='/story'>
                            <button disabled={!ready} className="ready-button">Ready</button> 
                        </Link> 
                        <p className="error">{error}</p>
                    </>
            }
        </div>
    )
}

export default Roles;