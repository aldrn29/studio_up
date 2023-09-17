import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Element from "./pages/Element";
import Generic from "./pages/Generic";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/element" element={<Element />} />
                <Route path="/generic" element={<Generic />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
