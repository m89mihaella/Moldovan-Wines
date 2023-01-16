import "./App.css";
import "./styles/wines.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Wineries from "./components/Wineries";
import History from "./components/History";
import Wines from "./components/Wines";
import Glass from "./components/Glass";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/wines" element={<Wines />} />
          <Route path="/wineries" element={<Wineries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fill-me-up" element={<Glass />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
