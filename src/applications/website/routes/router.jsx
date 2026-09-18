import Navbar from '../../../components/layout/Navbar';
import { Routes, Route  } from "react-router-dom";
import Home from "../page/home";
import { use } from 'react';

function Router() {


    return (
        <>
        <Navbar/> 
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
        </Routes>
        </>
    );
}

export default Router;