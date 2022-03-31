import React from "react";
import RuneCube from "./components/cube";
import MazeBlock from "./components/maze";

const SolverPage = () => {
    return (
        <div className="solver-page">
           <RuneCube/>
           <MazeBlock/>           
        </div>
    )
}

export default SolverPage;