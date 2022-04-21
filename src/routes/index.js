import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthRoute } from "../utils/PrivateRoute";
import ScrollToTop from "../components/ScrollToTop";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage";
import SolverPage from "../pages/SolverPage";
import LeaderBoard from "../pages/LeaderBoardPage";
import Login from "../pages/MainPage/components/login";
import StartStory from "../pages/MainPage/components/story";

const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop/>
                <Routes>     
                    <Route element={<MainLayout/>}>
                        <Route path='/' element={<MainPage/>} exact/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/leaderboard' element={<LeaderBoard/>}/>

                        <Route element={<AuthRoute/>}>
                            <Route path='/story' element={<StartStory/>}/>                            
                            <Route path='/solver' element={<SolverPage/>}/>                          
                        </Route>                
                    </Route>                   
                </Routes>
        </Router>
    )
}

export default AppRoutes;