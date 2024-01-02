import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DetailsPage from "./components/Maincontent/DetailsPage";
import Mainpage from "./components/Maincontent/Mainpage";
function App() {
  return (
    <>
      <div>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/details/:label" element={<DetailsPage />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
