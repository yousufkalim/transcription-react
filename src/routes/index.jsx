// Init
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Routes
import Home from '../containers/Components/Home';

import MainContent from '../containers/Components/MainContent';
import Header from '../components/homecomponents/Header';
import Footer from '../components/homecomponents/Footer';

function Index() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transcription" element={<MainContent />} />
      </Routes>
      <Footer />
    </>
  );
}
export default Index;
