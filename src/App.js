import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contents from "./pages/Contents";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    // link? route?
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Works />} />
                <Route path="/contents" element={<Contents />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
