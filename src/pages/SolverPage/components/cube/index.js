import React, {useState} from 'react';
import Cube from 'react-3d-cube';
import CountDownTimer from '../countDownTimer';
import './index.scss'

const dummyData = 
{
    timer: {
        minutes: 3,
        seconds: 0
    },
    count: 3,
    image: 'https://res.cloudinary.com/dorehapc1/image/upload/v1647374901/rune_bqry8g.png'
}

const sides = [
    1,2,3,4,5,6
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
        <center>
            <div>
                <div
                    style={{
                        width: 300,
                        height: 300,
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'                        
                    }}
                >
                    
                    <Cube size={300} index="front">
                        {
                            sides.map(item => {
                                
                                if (item === currentSide ){
                                    return (
                                        <div key={item} className='cube-content'>
                                            <CountDownTimer minSecs={data.timer}/>
                                            <p>Count: {data.count}</p>
                                            <img src={data.image} alt="rune"/>
                                        </div>
                                        )
                                }                            }
                            )
                        }                      
                    </Cube>
                    <button onClick={shuffleHandler}>Test</button>
                </div>
            </div>
        </center>
    );
  }


export default RuneCube;
