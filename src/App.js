import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';

// Lazy-loaded route components for code splitting
const LandingPage = React.lazy(() => import('./components/LandingPage'));
const BookUs = React.lazy(() => import('./components/BookUs'));
const Menu = React.lazy(() => import('./components/Menu'));
const AboutSection = React.lazy(() => import('./components/About'));
const ContactSection = React.lazy(() => import('./components/Contact'));
const FindUs = React.lazy(() => import('./components/FindUs'));
const Privacy = React.lazy(() => import('./components/Privacy'));
const NotFound = React.lazy(() => import('./components/NotFound'));

const App = () => {
  return (
      <HelmetProvider>
      <BrowserRouter>
        <MainNavbar />
        <Suspense fallback={<div style={{ minHeight: '60vh' }}></div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/book-us" element={<BookUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/contact-us" element={<ContactSection />} />
            <Route path="/find-us" element={<FindUs />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
      </HelmetProvider>
  );
};

export default App;
