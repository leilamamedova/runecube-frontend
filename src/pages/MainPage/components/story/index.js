import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import SplitText from "../../../../components/TextAnimation";
import './index.scss';

var data = 'Story...';

const Story = () => {
    const [story, setStore] = useState(data);

    useEffect(() => {

    }, [story])
    
    return (
        <div>
            <h1><SplitText copy={story} role="heading" /></h1>
            <Link to='/solver'>
                <button>Start</button> 
            </Link> 
        </div>
    )
}

export default Story;