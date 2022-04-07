import React, { useEffect } from 'react';
import useStore from '../../../../services/store';

const CountDownTimer = ({minSecs, shuffleHandler, time}) => {
    const socket = useStore(({socket})=>socket);
    const setNewRune = useStore(({setNewRune})=>setNewRune);
    const setRuneCount = useStore(({setRuneCount})=>setRuneCount);
   
    const { minutes = 0, seconds = 60 } = minSecs;
    const [[mins, secs], setTime] = React.useState([minutes, seconds]);

    const tick = () => {   
        if (mins === 0 && secs === 0) {
            setTime([0, 0]);
            if(time=='sideTime'){
                shuffleHandler()   
                socket.emit('side_time', (response) => {
                    console.log('side_time', response);
                    setRuneCount(response[0])
                    setNewRune(response[1])
                });
                reset()  
                socket.on('change_side', (response) => {
                    if(response) {
                        reset()
                    }
                })           
            }else if(time=='runeTime'){
                socket.emit('rune_time', (response) => {
                    console.log('rune_time', response);
                    setRuneCount(response[0])
                    setNewRune(response[1])
                });
                reset()  
                socket.on('update_rune', (response) => {
                    if(response) {
                        reset()
                    }
                })               
            }   
        }         
         else if (secs === 0) {
            setTime([mins - 1, 59]);
        } else {
            setTime([mins, secs - 1]);
        }
    };

    const reset = () => setTime([parseInt(minutes), parseInt(seconds)]);
    
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    return (
        <div>
            <p>{`${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

export default CountDownTimer;