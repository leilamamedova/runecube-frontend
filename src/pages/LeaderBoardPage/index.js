import React from "react";
import './index.scss';

const LeaderBoard = () => {
    return (
            <div className="leaderboard-page">
                <section>
                  <h1>LeaderBoard</h1>
                  <div class="tbl-header">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <thead>
                        <tr>
                          <th>Team</th>
                          <th>Members</th>                          
                          <th>Time</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div class="tbl-content">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tbody>
                        <tr>
                          <td>ABC</td>
                          <td>
                            <p>user1</p>
                            <p>user2</p>
                          </td>                          
                          <td>18:10</td>
                        </tr>
                        <tr>
                          <td>EFG</td>
                          <td>
                            <p>user1</p>
                            <p>user2</p>
                          </td>                          
                          <td>12:30</td>
                        </tr>                        
                      </tbody>
                    </table>
                  </div>
                </section>      
            </div>
    )
}

export default LeaderBoard;