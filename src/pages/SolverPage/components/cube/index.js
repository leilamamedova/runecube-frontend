import React, {useEffect, useState} from 'react';
import CountDownTimer from '../countDownTimer';
import { Cube } from '../../../../utils/Cube';
import './index.scss'
import useStore from '../../../../services/socket';

const sides = ['front','back','right','left','top','bottom']
 
const RuneCube = () => {
    const [runeData, setRuneData] = useState(null);  
    const [currentSide, setCurrentSide] = useState(0);
    const socket = useStore(({socket})=>socket);

    const shuffleHandler = () => {
        const newSide = Math.floor(Math.random()*6+1);
        if(newSide === currentSide) {
            shuffleHandler();
        }else{
            setCurrentSide(newSide);
        }
    }

    useEffect(() => {
        Cube(); 
    })

    useEffect(() => {   
        socket.emit('start_game', (res) => { 
            const data = JSON.parse(res[0])
            setRuneData(data)
            console.log(data);
        })
    }, [])

    return (
        <div className="scene">
            <div className="cube">
                {
                    sides.map((item, index) => {
                        if (index === currentSide && runeData ){
                            return(
                                 <div key={index} className={"side " + item} >
                                     <CountDownTimer minSecs={{minutes: 0,seconds: runeData.sides_time}} shuffleHandler={shuffleHandler} time='sideTime'/>
                                     <p>Count: {runeData.count}</p>
                                     <div className={'shape ' + runeData.value} style={{backgroundColor: runeData.color}}></div>       
                                     <CountDownTimer minSecs={{minutes: 0,seconds: runeData.max_response_time}} time='runeTime'/>                             
                                 </div>  
                            )  
                        } else{
                            return(
                                <div key={index} className={"side " + item} ></div>  
                           ) 
                        }
                    })
                }
            </div>
        </div>
    );
  }


export default RuneCube;
