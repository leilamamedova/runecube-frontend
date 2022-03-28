import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from "../components/ScrollToTop";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage";
import SolverPage from "../pages/SolverPage";
import LeaderBoard from "../pages/LeaderBoardPage";
import { AuthRoute, RoleRoute } from "../utils/PrivateRoute";

const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop/>
                <Routes>     
                    <Route element={<MainLayout/>}>
                        <Route path='/' element={<MainPage/>} exact/>
                        <Route path='/username' element={<MainPage/>}/>

                        <Route element={<AuthRoute/>}>
                            <Route path='/roles' element={<MainPage/>}/>
                            <Route element={<RoleRoute/>}>
                                <Route path='/story' element={<MainPage/>}/>
                            
                                <Route path='/solver' element={<SolverPage/>}/>
                                <Route path='/leaderboard' element={<LeaderBoard/>}/>
                            </Route>
                        </Route>                
                    </Route>                   
                </Routes>
        </Router>
    )
}

export default AppRoutes;