import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Edit from "./pages/Edit";
import View from "./pages/View";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/:id" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
