import React, { useEffect } from 'react';
import useStore from '../../../../services/store';

const CountDownTimer = ({minSecs, time}) => {   
    const { minutes, seconds} = minSecs;
    const [[mins, secs], setTime] = React.useState([minutes, seconds]);

    const newRune = useStore(({newRune})=>newRune);
    const totalCount = useStore(({totalCount})=>totalCount);
    
    const reset = () => setTime([parseInt(minutes), parseInt(seconds)]);

    const tick = () => {   
        if (mins === 0 && secs === 0) {
            reset() 
        }         
         else if (mins !== 0 && secs === 0) {
            setTime([mins - 1, 59]);
        } else {
            setTime([mins, secs - 1]);
        }
    };

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    useEffect(() => {
        if(time==='runeTime'){
            reset();           
        } 
    }, [newRune])

    useEffect(() => {
        if(time==='sideTime'){
            reset();           
        }
    }, [totalCount])

    return (
        <div>
            <p>{`${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

export default CountDownTimer;