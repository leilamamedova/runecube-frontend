import React from "react";
import useStore from "../../services/store";
import RuneCube from "./components/cube";
import MazeBlock from "./components/maze";
import TotalGameCount from "./components/totalGameCount";
import UserAnswer from "./components/userAnswer";
import LoadingSpinner from "../../components/LoadingSpinner";
import './index.scss';

const SolverPage = () => {
    const gameStarted = useStore(({gameStarted})=>gameStarted);

    return (
        <div className="solver-page">
            {gameStarted ?
                <div>
                    <UserAnswer/>            
                    <RuneCube/>
                    <MazeBlock/>   
                    <TotalGameCount/>   
                </div>
            :
                <div>
                    <h1>Wait for explorer</h1>
                    <LoadingSpinner/>                        
                </div>
            }     
        </div>
    )
}

export default SolverPage;