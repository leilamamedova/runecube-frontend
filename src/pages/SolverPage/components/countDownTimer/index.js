import React, { useEffect } from 'react';

const CountDownTimer = ({minSecs, getTime}) => {   
    const { minutes, seconds } = minSecs;
    const [[mins, secs], setTime] = React.useState([minutes, seconds]);
    
    const reset = () => setTime([parseInt(minutes), parseInt(seconds)]);

    useEffect(() => {
        const timerId = setInterval(() => {
            if (mins === 0 && secs === 0) {
                reset() 
            }         
             else if (mins !== 0 && secs === 0) {
                setTime([mins - 1, 59]);
            } else {
                setTime([mins, secs - 1]);
            }
        }, 900);

        return () => {
            clearInterval(timerId);
            if (typeof getTime === "function"){
                getTime(secs);
            }
        }
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