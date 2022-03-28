import React, { useState, useEffect } from "react";
import SplitText from "../../components/TextAnimation";
import './index.scss';
import useStore from "../../services/store";

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
  const [endStory, setEndStory] = useState('Great!');
  const runeData = useStore(({runeData})=>runeData);

  useEffect(()=> {
    setEndStory(runeData[2].end_story);
  }, [])

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
                          <th>Team</th>
                          <th>Members</th>                          
                          <th>Time</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="tbl-content">
                    <table cellPadding="0" cellSpacing="0" border="0">
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