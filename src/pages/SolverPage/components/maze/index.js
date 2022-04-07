import React, { useEffect, useState } from 'react';
import mazeImage from '../../../../assets/images/maze.jpg';
import useStore from '../../../../services/store';
import './index.scss';

const MazeBlock = () => {
    const [sidesCount, setSidesCount] = useState([]);

    const mazeSide = useStore(({mazeSide})=>mazeSide);
    const gameData = useStore(({gameData})=>gameData);

    useEffect(()=>{
        const removeSide = sidesCount.filter(side => side !== mazeSide )
        setSidesCount(removeSide)
    }, [mazeSide])

    useEffect(()=>{
        for (let i = 1; i <= gameData.eachSideCount; i++) {
            setSidesCount(prev => [...prev, i])
        }
    }, [gameData])

    return (
        <div className="maze" style={{gridTemplateColumns: `repeat(${gameData.eachSideCount}, minmax(auto, 1fr))`}}>
                <img src={mazeImage} alt='maze_img'/>
                {sidesCount && 
                    sidesCount.map(item => (
                        <div key={item} className="maze-blocks"/>
                    ))
                }
        </div>
    )    
}

export default MazeBlock;