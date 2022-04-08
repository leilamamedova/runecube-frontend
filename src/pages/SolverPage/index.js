import React from "react";
import RuneCube from "./components/cube";
import MazeBlock from "./components/maze";
import TotalGameCount from "./components/totalGameCount";
import UserAnswer from "./components/userAnswer";

const SolverPage = () => {
    return (
        <div className="solver-page">
           <UserAnswer/>            
           <RuneCube/>
           <MazeBlock/>   
           <TotalGameCount/>        
        </div>
    )
}

export default SolverPage;