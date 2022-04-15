import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import Login from "./components/login";
import Story from "./components/story";
import Main from "./components/main";
import './index.scss';

const MainPage = () => {
    const [showElements, setShowElements] = useState(null)
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/login'){
            setShowElements('login')
        }else if(location.pathname === '/story') {
            setShowElements('story')
        }else{
            setShowElements('main')
        }
    }, [location, showElements]);


    return (
        <div className="main-page">
            { 
                showElements==='login' ? 
                    <Login/>
                :
                showElements==='story' ? 
                    <Story/>
                :
                    <Main/>                       
            }           
        </div>
    )
}

export default MainPage;