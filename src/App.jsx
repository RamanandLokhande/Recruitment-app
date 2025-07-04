

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import Login from './Pages/login';
import Signup from './Pages/signup'; 
import Blog from "./Pages/Blog";
import Menu from "./pages/Menu";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/menu" element={<Menu/>} />
              </Routes>
    </Router>
  );
}

export default App;
