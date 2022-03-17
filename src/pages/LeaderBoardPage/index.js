import React, { useState } from "react";
import './index.scss';

const data = [
  {
    id: 1,
    team: 'ABC',
    member1: 'user1',
    member2: 'user2',
    time: '18:10'
  },
  {
    id: 2,
    team: 'EFG',
    member1: 'user1',
    member2: 'user2',
    time: '12:20'
  },
]

const LeaderBoard = () => {
  const [leaderBoard, setLeaderBoard] = useState(data)

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
                        {
                          leaderBoard.map(item => (
                            <tr key={item.id}>
                              <td>{item.team}</td>
                              <td>
                                <p>{item.member1}</p>
                                <p>{item.member2}</p>
                              </td>                          
                              <td>{item.time}</td>
                            </tr>
                          ))
                        }                                           
                      </tbody>
                    </table>
                  </div>
                </section>      
            </div>
    )
}

export default LeaderBoard;