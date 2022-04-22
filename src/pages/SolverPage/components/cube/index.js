import React, {useCallback, useEffect, useState} from 'react';
import CountDownTimer from '../countDownTimer';
import { Cube } from '../../../../utils/Cube';
import './index.scss'
import useStore from '../../../../services/store';
import { useNavigate } from 'react-router-dom';

const sides = ['front','back','right','left','top','bottom']
 
const RuneCube = () => { 
    const navigate = useNavigate();

    const runeData = useStore(({runeData})=>runeData);
    const gameData = useStore(({gameData})=>gameData);
    const totalCount = useStore(({totalCount})=>totalCount);
    const socket = useStore(({socket})=>socket);
    const runeCount = useStore(({runeCount})=>runeCount);
    const newRune = useStore(({newRune})=>newRune);
    const setNewRune = useStore(({setNewRune})=>setNewRune);
    const setRuneCount = useStore(({setRuneCount})=>setRuneCount);
    const setMazeSide = useStore(({setMazeSide})=>setMazeSide);
    const setTotalCount = useStore(({setTotalCount})=>setTotalCount);
    const setUserAnswer = useStore(({setUserAnswer})=>setUserAnswer);

    const [currentSide, setCurrentSide] = useState(0);
    const [runeTime, setRuneTime] = useState(gameData.maxResponseTime)
    const [sideTime, setSideTime] = useState(gameData.sidesTime)

    const shuffleHandler = () => {
        const newSide = Math.floor(Math.random()*6);
        if(newSide === currentSide) {
            shuffleHandler();
        }else{
            setCurrentSide(newSide);
        }
    }

    const getTime = useCallback((newSideTime)=>{
        setSideTime(newSideTime);

        if(newSideTime === 0) {
            setSideTime(gameData.sidesTime);
        }
    },[])

    useEffect(() => {
        Cube();       

        socket.on('update_rune', (response) => {
            console.log('update_rune', response);
            setRuneCount(response[0])
            setNewRune(response[1])
            setUserAnswer(response[2]) 
            shuffleHandler()
        })

        socket.on('change_side', (response) => {
            console.log('change_side', response);
            setRuneCount(response[0])
            setNewRune(response[1]) 
            setUserAnswer(response[2])      
            shuffleHandler()     
        })   
        
        socket.on('finish_game', (response) => {
            if(response) {
                alert(`Your partner left the game`)
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
            setSideTime(gameData.sidesTime)   
        }) 

        socket.on('rune_time_finished', (response) => {
            console.log('rune_time', response);
            setRuneCount(response[0])
            setNewRune(response[1])
            shuffleHandler()  
        }); 

        socket.on('side_time_finished', (response) => {
            console.log('side_time', response); 
            setRuneCount(response[0])
            setNewRune(response[1])
            shuffleHandler() 
            setSideTime(gameData.sidesTime);
        }); 
    }, [socket])

    useEffect(() => {
        setRuneCount(gameData.count)
        setNewRune(runeData);
    }, [runeData, gameData])

    useEffect(() => {
        setRuneTime(gameData.maxResponseTime)        
    }, [newRune])

    return (
        <div className="scene">
            <div className="cube">
                {
                    sides.map((item, index) => {
                        if (index === currentSide && runeData && gameData && runeCount && newRune ){
                            return(
                                 <div key={index} className={"side " + item} >
                                     <CountDownTimer minSecs={{minutes: 0,seconds: sideTime}} getTime={getTime}/>
                                     <p>{runeCount}/{gameData.count}</p>
                                     <div className={'shape ' + newRune.value} style={{backgroundColor: newRune.color, borderColor: newRune.color}}>{newRune.value}</div>       
                                     <CountDownTimer minSecs={{minutes: 0,seconds: runeTime}}/>                             
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
