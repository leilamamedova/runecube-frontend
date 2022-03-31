import React, { useEffect, useState } from 'react';
import mazeImage from '../../../../assets/images/maze.jpg';
import useStore from '../../../../services/store';
import './index.scss';

const data = 6;
const style = 2;

const MazeBlock = () => {
    const mazeSide = useStore(({mazeSide})=>mazeSide);
    const [sidesCount, setSidesCount] = useState([]);

    useEffect(()=>{
        const removeSide = sidesCount.filter(side => side !== mazeSide )
        setSidesCount(removeSide)
    }, [mazeSide])

    useEffect(()=>{
        for (let i = 1; i <= data; i++) {
            setSidesCount(prev => [...prev, i])
        }
    }, [data])
    console.log(sidesCount);
    console.log(mazeSide);

    return (
        <div className="maze" style={{gridTemplateColumns: `repeat(${data}, minmax(auto, 1fr))`}}>
                <img src={mazeImage} alt='maze_img'/>
                {sidesCount && 
                    sidesCount.map(item => (
                        <div key={item} className="maze-blocks" style={{backdropFilter: `blur(${style}px)`}}/>
                    ))
                }
        </div>
    )    
}

export default MazeBlock;