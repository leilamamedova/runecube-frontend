import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import SplitText from "../../../../components/TextAnimation";
import useStore from "../../../../services/store";
import './index.scss';

const StartStory = () => {
    const [modifyStartStory, setModifyStartStory] = useState(''); 
    const [loading, setLoading] = useState(false);
    const {REACT_APP_8THWALL_URL} = process.env;

    const {roles} = useStore();
    const username = useStore(({username})=>username);
    const startStory = useStore(({startStory})=>startStory);
    const socket = useStore(({socket})=>socket);
    const setGameStarted = useStore(({setGameStarted})=>setGameStarted);

    const setRuneData = useStore(({setRuneData})=>setRuneData);
    const setGameData = useStore(({setGameData})=>setGameData);

    useEffect(() => {             
        let modifyStory = startStory.substring(startStory.indexOf("\n") + 1);
        setModifyStartStory(modifyStory);
    }, [startStory])

    const handleStart = () => {
        setLoading(true)
        
        socket.emit('game_started');
        socket.emit('start_game');   
    }

    useEffect(() => {
        socket.on('game_started', (response) => {
            if (response) {
                setGameStarted(true);           
            } else {
                setGameStarted(false);    
            }
        })

        socket.on('start_game', (response) => {
            setRuneData(response[0]);
            setGameData(response[1]);
            setLoading(false)
            console.log("start game", response);
        })    
    }, [socket])
    
    return (
        <div className="story">
            {
                startStory && <h1><SplitText copy={modifyStartStory} role="heading" /></h1>
            }
            {
                roles==='solver'?
                    <Link to= {!loading && '/' + roles}>
                        <button onClick={handleStart}>
                            {loading ?
                                <LoadingSpinner/>
                                :
                                <>Start</>                            
                            }
                        </button> 
                    </Link> 
                :
                    <button onClick={()=>window.location.href=`${REACT_APP_8THWALL_URL}?username=`+username}>Start</button>   
            }            
        </div>
    )
}

export default StartStory;