// src/pages/Home.js
import React from 'react';
import About from '../components/About'; 
import Events from '../components/Event';
import FacultyAdvisors from '../components/FacultyAdvisors';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

// ✅ Make sure the path is correct

const Home = () => {
  return (
    <div>
      <h1>Welcome to the official website of SAHYOG- The Student Wellbeing Club!</h1>
      <About />
      <Events />
      <FacultyAdvisors />
      <Gallery /> 
      <Footer /> 
    </div>
  );
};

export default Home;