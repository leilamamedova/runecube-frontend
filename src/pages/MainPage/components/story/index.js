import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import SplitText from "../../../../components/TextAnimation";
import useStore from "../../../../services/store";
import './index.scss';

const Story = () => {
    const [modifyStartStory, setModifyStartStory] = useState('Read me...'); 

    const {roles} = useStore();
    const username = useStore(({username})=>username);
    const startStory = useStore(({startStory})=>startStory);
    const socket = useStore(({socket})=>socket);
    const setStartGame = useStore(({setStartGame})=>setStartGame);

    useEffect(() => {             
        let story = startStory.start_story;
        let modifyStory = story.substring(story.indexOf("\n") + 1);
        setModifyStartStory(modifyStory);
    }, [startStory])

    const handleStart = () => {
        socket.emit('game_started');
        socket.on('game_started', (response) => {
            if (response) {
                setStartGame(true);           
            } else {
                setStartGame(false);    
            }
        })
    }
    
    return (
        <div className="story">
            {
                startStory && <h1><SplitText copy={modifyStartStory} role="heading" /></h1>
            }
            {
                roles==='solver'?
                    <Link to= {'/' + roles}>
                        <button onClick={handleStart}>Start</button> 
                    </Link> 
                :
                    <button onClick={()=>window.location.href="https://runecube.8thwall.app/rnapp?username="+username}>Start</button>   
            }            
        </div>
    )
}

export default Story;