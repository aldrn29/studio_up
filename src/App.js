import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Process from "./pages/Process";
import Works from "./pages/Works";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
    
    return (
        <Router>
            <ScrollToTop />
            <AnimatePresence>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/process" element={<Process />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="*" element={<Home />} />
                </Routes>
                <Footer />
            </AnimatePresence>
        </Router>
    );
}

export default App;
