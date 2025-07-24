import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Navbar from './Navbar';
import Navbar from './components/Navbar';

//Changes
// import About from './components/About';
// import Event from './components/Event';
// import FacultyAdvisorS from './components/FacultyAdvisors';
// import Footer from './components/Footer';
// import Gallery from './components/Gallery';
// import Modal from './components/Modal';

import Home from './pages/Home';
import OurEvents from './pages/OurEvents';
import OurTeam from './pages/OurTeam';
import OurAlumni from './pages/OurAlumni';

import ContactUs from './pages/ContactUs';

//Changes


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<OurEvents />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/alumni" element={<OurAlumni />} />
        
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;


