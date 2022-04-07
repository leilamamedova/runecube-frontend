import React from "react";
import RuneCube from "./components/cube";
import MazeBlock from "./components/maze";
import TotalGameCount from "./components/totalGameCount";

const SolverPage = () => {
    return (
        <div className="solver-page">
           <RuneCube/>
           <MazeBlock/>   
           <TotalGameCount/>        
        </div>
    )
}

export default SolverPage;