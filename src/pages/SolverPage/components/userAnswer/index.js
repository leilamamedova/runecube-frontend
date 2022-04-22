import React from "react";
import CorrectIcon from '../../../../assets/images/correct.png';
import WrongIcon from '../../../../assets/images/wrong.png';
import useStore from "../../../../services/store";
import './index.scss';

const UserAnswer = () => {
    const userAnswer = useStore(({userAnswer})=>userAnswer);

    return (
        <div className="user-answer">
            {userAnswer === 'wrong_rune' ? <img src={WrongIcon} alt='wrong'/> 
            : userAnswer === 'right_rune' ? <img src={CorrectIcon} alt='correct'/> 
            : userAnswer === 'finish_message' ? <p>You finished the game!</p> 
            : null
            }       
        </div>
    )
}

export default UserAnswer;