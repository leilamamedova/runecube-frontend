import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import SplitText from "../../../../components/TextAnimation";
import useStore from "../../../../services/store";
import './index.scss';

const Story = () => {
    const [startStory, setStartStory] = useState('Read me...'); 
    const {roles} = useStore();
    const username = useStore(({username})=>username);
    const socket = useStore(({socket})=>socket);
    const setRuneData = useStore(({setRuneData})=>setRuneData);

    useEffect(() => {   
        socket.emit('start_game', (res) => {
            setRuneData(res);
            console.log(res);
            
            let story = res[1].start_story;
            let modifyStory = story.substring(story.indexOf("\n") + 1);
            setStartStory(modifyStory);
        })
    }, [])
    
    return (
        <div className="story">
            {
                startStory && <h1><SplitText copy={startStory} role="heading" /></h1>
            }
            {
                roles==='solver'?
                    <Link to= {'/' + roles}>
                        <button>Start</button> 
                    </Link> 
                :
                    <button onClick={()=>window.location.href="https://boring-torvalds-278d93.netlify.app?"+username}>Start</button>   
            }            
        </div>
    )
}

export default Story;