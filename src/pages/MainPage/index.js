import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import Roles from "./components/roles";
import UserName from "./components/username";
import Story from "./components/story";
import Main from "./components/main";
import './index.scss';

const MainPage = () => {
    const [showElements, setShowElements] = useState(null)
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/roles'){
            setShowElements('roles')
        }else if(location.pathname === '/username') {
            setShowElements('username')
        }else if(location.pathname === '/story') {
            setShowElements('story')
        }else{
            setShowElements('main')
        }
    }, [location, showElements]);


    return (
        <div className="main-page">
            { showElements=='roles' ? 
                <Roles/>
            :
            showElements=='username' ? 
                <UserName/>
            :
            showElements=='story' ? 
                <Story/>
            :
                <Main/>                       
            }           
        </div>
    )
}

export default MainPage;