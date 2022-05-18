import { BrowserRouter, Routes, Route } from "react-router-dom";

import Catalog from "./catalog/Catalog";
import Topbar from "./Topbar/Topbar";

export default function App() {
    return(
        <BrowserRouter>
            <Topbar />
            <Routes>
                <Route path="/" element={<Catalog />} />
            </Routes>
        </BrowserRouter>
    );
}