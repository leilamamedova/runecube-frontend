import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import SplitText from "../../../../components/TextAnimation";
import useStore from "../../../../services/socket";
import axios from 'axios';
import './index.scss';

const Story = () => {
    const [startStory, setStartStory] = useState('Hi...');
    const {roles} = useStore();
    const username = useStore(({username})=>username);

    useEffect(()=> {
        axios.get('https://runecube.herokuapp.com/api/Storys')
        .then(res=> { 
            let story = res.data.storyStartPrompt;
            let modifyStory = story.substring(story.indexOf("\n") + 1)
            setStartStory(modifyStory)
        })
    }, [])
    
    return (
        <div className="story">
            <h1><SplitText copy={startStory} role="heading" /></h1>
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