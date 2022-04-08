import React, {useEffect, useState} from 'react';
import CountDownTimer from '../countDownTimer';
import { Cube } from '../../../../utils/Cube';
import './index.scss'
import useStore from '../../../../services/store';
import { useNavigate } from 'react-router-dom';

const sides = ['front','back','right','left','top','bottom']
 
const RuneCube = () => { 
    const navigate = useNavigate();

    const [currentSide, setCurrentSide] = useState(0);
    const username = useStore(({username})=>username);
    const runeData = useStore(({runeData})=>runeData);
    const gameData = useStore(({gameData})=>gameData);
    const socket = useStore(({socket})=>socket);
    const runeCount = useStore(({runeCount})=>runeCount);
    const newRune = useStore(({newRune})=>newRune);
    const setNewRune = useStore(({setNewRune})=>setNewRune);
    const setRuneCount = useStore(({setRuneCount})=>setRuneCount);
    const setMazeSide = useStore(({setMazeSide})=>setMazeSide);
    const setTotalCount = useStore(({setTotalCount})=>setTotalCount);
    const setUserAnswer = useStore(({setUserAnswer})=>setUserAnswer);

    const shuffleHandler = () => {
        const newSide = Math.floor(Math.random()*6);
        if(newSide === currentSide) {
            shuffleHandler();
        }else{
            setCurrentSide(newSide);
        }
    }

    useEffect(() => {
        Cube();         

        socket.on('update_rune', (response) => {
            console.log('update_rune', response);
            shuffleHandler()
            setRuneCount(response[0])
            setNewRune(response[1])
            setUserAnswer(response[2]) 
        })

        socket.on('change_side', (response) => {
            console.log('change_side', response);
            shuffleHandler()
            setRuneCount(response[0])
            setNewRune(response[1]) 
            setUserAnswer(response[2])           
        })   
        
        socket.on('finish_game', (response) => {
            if(response) {
                alert(`${username} left the game`)
                navigate('/leaderboard');
            }
            navigate('/leaderboard');
        }) 

        socket.on('finish_message', (response) => {
            setUserAnswer(response)    
        }) 

        socket.on('open_map', (response) => {
            console.log('open_map', response);
            setMazeSide(response)
            setTotalCount(response)
        }) 
    }, [socket])

    useEffect(() => {
        setRuneCount(gameData.count)
        setNewRune(runeData);
    }, [runeData, gameData])

    return (
        <div className="scene">
            <div className="cube">
                {
                    sides.map((item, index) => {
                        if (index === currentSide && runeData && gameData && runeCount && newRune ){
                            return(
                                 <div key={index} className={"side " + item} >
                                     <CountDownTimer minSecs={{minutes: 0,seconds: gameData.sidesTime}} shuffleHandler={shuffleHandler} time='sideTime'/>
                                     <p>Count: {runeCount}</p>
                                     <div className={'shape ' + newRune.value} style={{backgroundColor: newRune.color, borderColor: newRune.color}}>{newRune.value}</div>       
                                     <CountDownTimer minSecs={{minutes: 0,seconds: gameData.maxResponseTime}} time='runeTime'/>                             
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
