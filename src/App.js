import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import MainNavbar from './components/MainNavbar';
import BookUs from './components/BookUs';
import Menu from './components/Menu';
import AboutSection from './components/About';
import ContactSection from './components/Contact';
import FindUs from './components/FindUs';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/book-us" element={<BookUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact-us" element={<ContactSection />} />
          <Route path="/find-us" element={<FindUs />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
