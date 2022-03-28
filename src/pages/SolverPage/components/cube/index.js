import React, {useEffect, useState} from 'react';
import CountDownTimer from '../countDownTimer';
import { Cube } from '../../../../utils/Cube';
import './index.scss'
import useStore from '../../../../services/store';

const sides = ['front','back','right','left','top','bottom']
 
const RuneCube = () => { 
    const [currentSide, setCurrentSide] = useState(0);
    const runeData = useStore(({runeData})=>runeData);

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

    return (
        <div className="scene">
            <div className="cube">
                {
                    sides.map((item, index) => {
                        if (index === currentSide && runeData ){
                            return(
                                 <div key={index} className={"side " + item} >
                                     <CountDownTimer minSecs={{minutes: 0,seconds: 20}} shuffleHandler={shuffleHandler} time='sideTime'/>
                                     <p>Count: {runeData[0].count}</p>
                                     <div className={'shape ' + runeData[0].value} style={{backgroundColor: runeData[0].color, borderColor: runeData[0].color}}></div>       
                                     <CountDownTimer minSecs={{minutes: 0,seconds: runeData[0].maxResponseTime}} time='runeTime'/>                             
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
