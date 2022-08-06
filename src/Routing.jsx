import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Agenda from "./Components/Agenda";
export const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Agenda />} />
      </Routes>
    </Router>
  );
};
