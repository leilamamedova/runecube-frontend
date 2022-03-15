import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from "../components/ScrollToTop";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage";
import ExplorerPage from "../pages/ExplorerPage";
import SolverPage from "../pages/SolverPage";

const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop/>
                <Routes>     
                    <Route element={<MainLayout/>}>
                        <Route path='/' element={<MainPage/>} exact/>
                        <Route path='/explorer' element={<ExplorerPage/>}/>
                        <Route path='/solver' element={<SolverPage/>}/>
                    </Route>                   
                </Routes>
        </Router>
    )
}

export default AppRoutes;