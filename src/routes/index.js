import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from "../components/ScrollToTop";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage";
import SolverPage from "../pages/SolverPage";
import LeaderBoard from "../pages/LeaderBoardPage";
import useStore from "../services/socket";

const AppRoutes = () => {
    const username = useStore(({username})=>username);

    return (
        <Router>
            <ScrollToTop/>
                <Routes>     
                    <Route element={<MainLayout/>}>
                        <Route path='/' element={<MainPage/>} exact/>
                        <Route path='/username' element={<MainPage/>}/>
                        <Route path='/roles' element={<MainPage/>}/>
                        <Route path='/story' element={<MainPage/>}/>
                        
                        <Route path='/solver' element={<SolverPage/>}/>
                        <Route path='/leaderboard' element={<LeaderBoard/>}/>
                    </Route>                   
                </Routes>
        </Router>
    )
}

export default AppRoutes;