import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";
import "./App.css";
import Subcription from "./subcription";
import TaskRouter from "./assets/taskRouter";
import All from "./assets/All";
import DataScience from "./assets/dataScience";
import CyberSecurity from "./assets/cyberSecurity";
import FullStack from "./assets/fullStack";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<All />} />
         <Route path="/datascience" element={<DataScience />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/fullstack" element={<FullStack />} />
      </Routes>
    </Router>
  );
}

export default App;
