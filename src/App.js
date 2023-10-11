import { Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/navigationBar/navigationBar";
import LaboratorMainPage from "./components/laborator/laboratorMainPage";
import LaboratorPage from "./components/laborator/laboratorPage";
import LaboratorUkraine from "./components/laborator/laboratorUkraine";

import "./App.css";

function App() {
  return (
    <div className="container container_mainDiv p-3">
      <NavigationBar />
      <div className="p-2">
        <Routes>
          <Route path="/" element={<h3>HOME PAGE</h3>} />
          <Route path="/lectii" element={<h3>LECTII</h3>} />
          <Route path="/laborator">
            <Route index element={<LaboratorMainPage />} />
            <Route path=":clasa" element={<LaboratorPage />} />
          </Route>
          <Route path="/contact" element={<h3>CONTACT</h3>} />
          {/* UKRAINE */}
          <Route path="/lab-ukr" element={<LaboratorUkraine />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
