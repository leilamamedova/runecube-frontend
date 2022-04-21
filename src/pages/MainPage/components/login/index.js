import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import useStore from "../../../../services/store";
import './index.scss';

const Login = () => {
    const [ready, setReady] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const socket = useStore(({socket})=>socket);
    const roles = useStore(({roles})=>roles);
    const username = useStore(({username})=>username);

    const setRoles = useStore(({setRoles})=>setRoles);  
    const setStartStory = useStore(({setStartStory})=>setStartStory);
    const setEndStory = useStore(({setEndStory})=>setEndStory);
    const setUsername = useStore(({setUsername})=>setUsername);  

    const handleChange =  (event) => {
        setRoles(event.target.value)
    }

    const sendData = () => {
        socket.emit('choose_player', {username: username, role: roles, sid: socket.id})
        setLoading(true)
    }

    useEffect(() => {
        ready && navigate('/story');
    }, [ready])

    useEffect(() => {    
        socket.on('choose_player', (response) => {          
            if(typeof response[1] === 'string' ) {
                setError(response[1]);
                setLoading(false)
            } else{
                setError('');                
                setStartStory(response[1].start_story);
                setEndStory(response[1].end_story);                
            }
            setReady(response[0]);
            console.log('Choose player', response);
        }) 
        
        
        socket.on('ongoing_game', function (data) {
            if (data) {
                socket.emit('user_reconnected', {username: username, role: roles, sid: socket.id})
            }  
        });      
    },[socket])

    return (
        <div className="login">
            <h1>Let's find out who you are...</h1>
            <div className="input-holder">
                <input type="text" placeholder="Username" className="input" onChange={(e) => (setUsername(e.target.value))}/>
            </div>
            <div className="choose-role">
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
            {
                roles.length>1 && username ?
                    <>
                        <button className="ready-button" onClick={sendData}>
                            {loading ?
                                <LoadingSpinner/>
                                :
                                <>Ready</>                            
                            }                            
                        </button> 
                        {
                            error && <p className="error">{error}</p>
                        }                        
                    </> 
                :
                    <Link to={ready && '/story'}>
                        <button disabled className="ready-button">Ready</button> 
                    </Link> 
            }
        </div>
    )
}

export default Login;