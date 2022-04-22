import React, { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import Logo from '../../assets/images/logo.png';
import useStore from "../../services/store";
import './index.scss';

const MainPage = () => {
    const socket = useStore(({socket})=>socket);
    const navigate = useNavigate();

    useEffect(() => {
        socket.on('disconnect_before_start', (response) => {
            alert("Something went wrong...");
            navigate('/');
        })
    }, [socket])

    return (
        <div className="main-page">
            <img src={Logo} alt='logo'/>
            <div>
                <Link to='/login'>
                    <button>Play</button> 
                </Link>
                <Link to='/leaderboard'>
                    <button>Leaderboard</button> 
                </Link>
            </div>      
        </div>
    )
}

export default MainPage;