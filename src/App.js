import Header from './components/Header.js';
import Hero from './components/Hero';
import React from 'react';
import Browse from './components/Browse.js';
import Arrived from './components/Arrived.js';
import AsideMenu from './components/AsideMenu';
import Clients from './components/Clients.js';
import Footer from 'components/Footer.js';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
