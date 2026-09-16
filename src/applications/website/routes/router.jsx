import { Routes, Route } from "react-router-dom";
import Home from "../page/home";
import Companies from "../../velnoxa/companies/companies";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/companies" element={<Companies />} />
        </Routes>
    );
}

export default Router;