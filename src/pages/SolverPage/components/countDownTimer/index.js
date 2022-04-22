import React, { useEffect } from 'react';

const CountDownTimer = ({minSecs, setTime}) => {   
    const { minutes, seconds } = minSecs;

    useEffect(() => {
        const timerId = setInterval(() => {
            if (minutes !== 0 && seconds === 0) {
                setTime(minutes - 1); //if we have minutes, we will need to fix code here
            } else {
                setTime(seconds - 1);
            }
        }, 1000);

        return () => {
            clearInterval(timerId);
        }
    });    

    return (
        <div>
            <p>{`${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

export default CountDownTimer;