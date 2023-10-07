import { Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/navigationBar/navigationBar";

import "./App.css";

function App() {
  return (
    <div className="container container_mainDiv p-3">
      <NavigationBar />
      <div className="p-3 bg-light">
        <Routes>
          <Route path="/" element={<h3>HOME PAGE</h3>} />
          <Route path="/lectii" element={<h3>LECTII</h3>} />
          <Route path="/laborator" element={<h3>LABORATOR</h3>} />
          <Route path="/contact" element={<h3>CONTACT</h3>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
