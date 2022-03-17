import React, {useEffect, useState} from 'react';
import Cube from 'react-3d-cube';
import CountDownTimer from '../countDownTimer';
import Rune1 from '../../../../assets/images/rune_1.png';
import Rune2 from '../../../../assets/images/rune_2.png';
import Rune3 from '../../../../assets/images/rune_3.png';
import Rune4 from '../../../../assets/images/rune_4.png';
import Rune5 from '../../../../assets/images/rune_5.png';
import Rune6 from '../../../../assets/images/rune_6.png';

import './index.scss'

const dummyData = 
{
    timer: {
        minutes: 0,
        seconds: 5
    },
    count: 3,
    image: 'https://res.cloudinary.com/dorehapc1/image/upload/v1647374901/rune_bqry8g.png'
}

const sides = [
    {
    id: 1,
    side: 'front',
    image: Rune1
    },
    {
    id: 2,
    side: 'back',
    image: Rune2
    },
    {
    id: 3,
    side: 'right',
    image: Rune3
    },
    {
    id: 4,
    side: 'left',
    image: Rune4
    },
    {
    id: 5,
    side: 'top',
    image: Rune5
    },
    {
    id: 6,
    side: 'bottom',
    image: Rune6
    }
]
 
const RuneCube = () => {
    const [data, setData] = useState(dummyData);
    const [currentSide, setCurrentSide] = useState(1);

    const shuffleHandler = () => {
        const newSide = Math.floor(Math.random()*6+1);
        if(newSide === currentSide) {
            shuffleHandler();
        }else{
            console.log(newSide);
            setCurrentSide(newSide);
        }
    }

    return (
        <div className="scene">
            <div className="cube">
                {
                    sides.map(item => {
                        if (item.id === currentSide ){
                            return(
                                 <div key={item.id} className={"side " + item.side} >
                                     <CountDownTimer minSecs={data.timer} shuffleHandler={shuffleHandler}/>
                                     <p>Count: {data.count}</p>
                                     <img src={item.image} alt='rune' draggable='false'/>                                                                    
                                 </div>  
                            )  
                        } else{
                            return(
                                <div key={item.id} className={"side " + item.side} >
                                    <img src={item.image} alt='rune' draggable='false'/>
                                </div>  
                           ) 
                        }
                    })
                }
            </div>
        </div>
    );
  }


export default RuneCube;
