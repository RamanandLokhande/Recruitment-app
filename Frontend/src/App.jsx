import React, { useState } from 'react';
import MainPage from './pages/MainPage';
import './App.css';
import Login from './pages/login'; // ✅ lowercase path

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? <MainPage /> : <Login />;
}

export default App;


