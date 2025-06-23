// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import Login from './Pages/login';
import Signup from './Pages/signup'; // Ensure this file exists in ./Pages

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
