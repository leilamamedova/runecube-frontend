import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import SplitText from "../../../../components/TextAnimation";
import useStore from "../../../../services/store";
import './index.scss';

const Story = () => {
    const [modifyStartStory, setModifyStartStory] = useState(''); 
    const [loading, setLoading] = useState(false);

    const {roles} = useStore();
    const username = useStore(({username})=>username);
    const startStory = useStore(({startStory})=>startStory);
    const socket = useStore(({socket})=>socket);
    const setStartGame = useStore(({setStartGame})=>setStartGame);

    const setRuneData = useStore(({setRuneData})=>setRuneData);
    const setGameData = useStore(({setGameData})=>setGameData);

    useEffect(() => {             
        let modifyStory = startStory.substring(startStory.indexOf("\n") + 1);
        setModifyStartStory(modifyStory);
    }, [startStory])

    const handleStart = () => {
        setLoading(true)
        socket.emit('game_started');
        socket.on('game_started', (response) => {
            if (response) {
                setStartGame(true);           
            } else {
                setStartGame(false);    
            }
        })

        socket.emit('start_game');
        socket.on('start_game', (response) => {
            setRuneData(response[0]);
            setGameData(response[1]);
            setLoading(false)
            console.log("start game", response);
        })        
    }
    
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
                    <button onClick={()=>window.location.href="https://runecube.8thwall.app/rnapp?username="+username}>Start</button>   
            }            
        </div>
    )
}

export default Story;