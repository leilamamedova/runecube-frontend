import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import SplitText from "../../../../components/TextAnimation";
import useStore from "../../../../services/socket";
import './index.scss';

var data = 'Story...';

const Story = () => {
    const [story, setStory] = useState(data);
    const {roles} = useStore();
    const username = useStore(({username})=>username);
    let url;
    
    return (
        <div>
            <h1><SplitText copy={story} role="heading" /></h1>
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