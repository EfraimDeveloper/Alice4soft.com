import { BrowserRouter, Routes, Route } from "react-router-dom";
import Companies from "../companies/companies";

function Router() {
    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/companies" element={<Companies />} />
            </Routes>
        // </BrowserRouter>
    );
}

export default Router;