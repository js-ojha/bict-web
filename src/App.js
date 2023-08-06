import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Teachers from './pages/Teachers'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
