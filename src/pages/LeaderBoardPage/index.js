import React, { useState, useEffect } from "react";
import SplitText from "../../components/TextAnimation";
import './index.scss';
import useStore from "../../services/store";

const LeaderBoard = () => {
  const endStory = useStore(({endStory})=>endStory);
  const leaderBoardData = useStore(({leaderBoardData})=>leaderBoardData);

    return (
            <div className="leaderboard-page">
                <section>
                  <h2>LeaderBoard</h2>
                  <div className="story">
                    {
                      endStory && <h1><SplitText copy={endStory.end_story} role="heading" /></h1>                      
                    }
                  </div>
                  <div className="tbl-header">
                    <table cellPadding="0" cellSpacing="0" border="0">
                      <thead>
                        <tr>
                          <th>Members</th>
                          <th>Roles</th>                          
                          <th>Time</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="tbl-content">
                    <table cellPadding="0" cellSpacing="0" border="0">
                      <tbody>
                        {    leaderBoardData &&                      
                            <tr>
                              <td>
                                <p>{leaderBoardData[0]}</p>
                                <p>{leaderBoardData[2]}</p>
                              </td>
                              <td>
                                <p>{leaderBoardData[1]}</p>
                                <p>{leaderBoardData[3]}</p>
                              </td>                          
                              <td>{leaderBoardData[4]}</td>
                            </tr>
                        }                                           
                      </tbody>
                    </table>
                  </div>
                </section>      
            </div>
    )
}

export default LeaderBoard;