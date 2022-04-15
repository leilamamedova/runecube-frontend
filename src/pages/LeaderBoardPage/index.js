import React, { useState, useEffect } from "react";
import SplitText from "../../components/TextAnimation";
import useStore from "../../services/store";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner";
import './index.scss';
import { Link } from "react-router-dom";

const LeaderBoard = () => {
  const [leaderBoard, setLeaderBoard] = useState();

  const endStory = useStore(({endStory})=>endStory);

  useEffect(()=> {
    axios.get('https://runecube.herokuapp.com/api/Players')
    .then(res => setLeaderBoard(res.data))
  })

    return (
            <div className="leaderboard-page">
                <section>
                  <h2>LeaderBoard</h2>
                  <div className="story">
                    {
                      endStory && <h1><SplitText copy={endStory} role="heading" /></h1>                      
                    }
                  </div>
                  <div className="tbl-header">
                    <table cellPadding="0" cellSpacing="0" border="0">
                      <thead>
                        <tr>
                          <th>Members</th>
                          <th>Roles</th>                          
                          <th>Time</th>
                          <th>Status</th>     
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="tbl-content">
                    <table cellPadding="0" cellSpacing="0" border="0">
                      <tbody>
                        {
                          leaderBoard ? leaderBoard.map((item, index) => (
                            <tr key={index}>
                              <td>
                                <p>{item.explorer}</p>
                                <p>{item.solver}</p>
                              </td>
                              <td>
                                <p>explorer</p>
                                <p>solver</p>
                              </td>                          
                              <td>{item.spentTime}</td>
                              <td>{item.isFinished ? <p>finished</p>:<p>not finished</p>}</td>
                            </tr>
                          ))
                          :
                          <LoadingSpinner/>
                        }
                      </tbody>
                    </table>
                  </div>
                </section> 
                <Link to='/'>
                  <button>Back</button>                 
                </Link>    
            </div>
    )
}

export default LeaderBoard;