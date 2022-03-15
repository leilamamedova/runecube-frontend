import * as React from 'react';
import Cube from 'react-3d-cube';
import CountDownTimer from '../countDownTimer';
import './index.scss'

const data = [
    {
        index: 1,
        timer: {
            minutes: 3,
            seconds: 0
        },
        count: 3,
        image: 'https://res.cloudinary.com/dorehapc1/image/upload/v1647374901/rune_bqry8g.png'
    },
    {
        index: 2,
        timer: {
            minutes: 10,
            seconds: 3
        },
        count: 3,
        image: 'https://res.cloudinary.com/dorehapc1/image/upload/v1647374901/rune_bqry8g.png'
    },
    {
        index: 3,
        timer: {
            minutes: 10,
            seconds: 3
        },
        count: 3,
        image: 'https://res.cloudinary.com/dorehapc1/image/upload/v1647374901/rune_bqry8g.png'
    },
    {
        index: 4,
        timer: {
            minutes: 10,
            seconds: 3
        },
        count: 3,
        image: 'https://res.cloudinary.com/dorehapc1/image/upload/v1647374901/rune_bqry8g.png'
    },
    {
        index: 5,
        timer: {
            minutes: 10,
            seconds: 3
        },
        count: 3,
        image: 'https://res.cloudinary.com/dorehapc1/image/upload/v1647374901/rune_bqry8g.png'
    },
    {
        index: 6,
        timer: {
            minutes: 10,
            seconds: 3
        },
        count: 3,
        image: 'https://res.cloudinary.com/dorehapc1/image/upload/v1647374901/rune_bqry8g.png'
    },
]
 
class LogoCube extends React.Component {
  render() {
    return (
        <center>
            <div>
                <div
                    style={{
                        width: 300,
                        height: 300
                    }}
                >
                    <Cube size={300} index="front">
                        {
                            data.map(item => (
                                <div key={item.index} className='cube-content'>
                                    <CountDownTimer minSecs={item.timer}/>
                                    <p>Count: {item.count}</p>
                                    <img src={item.image}></img>
                                </div>
                                )
                            )
                        }                      
                    </Cube>
                </div>
            </div>
        </center>
    );
  }
}


export default LogoCube
