

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import Login from './Pages/login';
import Signup from './Pages/signup'; 
import Internship from './pages/Internship';
import Placement from './Pages/Placement';
import AboutUS  from './Pages/AboutUS';
import HireFromUs from './Pages/HireFromUs';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/internships" element={<Internship />} />
        <Route path="/placements" element={<Placement />} />
        <Route path="/Aboutus" element={<AboutUS />} />
        <Route path="/HireFromUs" element={<HireFromUs />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
