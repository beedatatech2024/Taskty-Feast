import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DetailsPage from "./components/Maincontent/DetailsPage";
import Mainpage from "./components/Maincontent/Mainpage";
import Home from "./components/Maincontent/Home";


function App() {
  return (
    <Router>
      <div className="w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/main" element={<Mainpage />} />
          <Route path="/details/:label" element={<DetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
