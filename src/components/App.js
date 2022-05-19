import { BrowserRouter, Routes, Route } from "react-router-dom";

import Catalog from "./catalog/Catalog";
import Showtimes from "./Showtimes";
import Topbar from "./Topbar";

export default function App() {
    return(
        <BrowserRouter>
            <Topbar />
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/filme/:id" element={<Showtimes />} />
            </Routes>
        </BrowserRouter>
    );
}