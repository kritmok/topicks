import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stock from "./components/pages/Stock";
import Nfts from "./components/pages/Nfts";
import ScrollToTop from "./components/ScrollToTop";
import Project0 from "./components/pages/Project0";
import Project1 from "./components/pages/Project1";
import Project2 from "./components/pages/Project2";
import Project3 from "./components/pages/Project3";
import Project4 from "./components/pages/Project4";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Stock />} />
          <Route exact path="/nfts" element={<Nfts />} />
          <Route exact path="/project-0" element={<Project0 />} />
          <Route exact path="/project-1" element={<Project1 />} />
          <Route exact path="/project-2" element={<Project2 />} />
          <Route exact path="/project-3" element={<Project3 />} />
          <Route exact path="/project-4" element={<Project4 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
