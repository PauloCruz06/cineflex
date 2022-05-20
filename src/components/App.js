import { BrowserRouter, Routes, Route } from "react-router-dom";

import Catalog from "./Catalog";
import Seats from "./Seats";
import Showtimes from "./Showtimes";
import Topbar from "./Topbar";

export default function App() {
    return(
        <BrowserRouter>
            <Topbar />
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/sessoes/:id" element={<Showtimes />} />
                <Route path="/assentos/:id" element={<Seats />} />
            </Routes>
        </BrowserRouter>
    );
}