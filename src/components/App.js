import { BrowserRouter, Routes, Route } from "react-router-dom";

import Catalog from "./catalog/Catalog";
import Seats from "./Seats";
import Showtimes from "./Showtimes";
import Topbar from "./Topbar";

export default function App() {
    return(
        <BrowserRouter>
            <Topbar />
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/filme/:id" element={<Showtimes />} />
                <Route path="/sessao/:id" element={<Seats />} />
            </Routes>
        </BrowserRouter>
    );
}