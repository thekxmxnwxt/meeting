import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Datepage from "./pages/DatePage";
import FoodSelection from './pages/FoodSelection';
import MovieSelection from './pages/MovieSelection';
import SummaryPage from './pages/SummaryPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/date" element={<Datepage/>} />
        <Route path="/food" element={<FoodSelection/>} />
        <Route path="/movie" element={<MovieSelection/>} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
