import { Routes, Route } from "react-router-dom";

import Login from "../users/Login";
import Companies from "../companies/companies";
import Dashboard from "../dashboard/Dashboard";

function VelnoxaRouter() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/velnoxa/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default VelnoxaRouter;