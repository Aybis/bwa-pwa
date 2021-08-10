import Header from './components/Header.js';
import Hero from './components/Hero';
import React, { useEffect, useState } from 'react';
import Browse from './components/Browse.js';
import Arrived from './components/Arrived.js';
import AsideMenu from './components/AsideMenu';
import Clients from './components/Clients.js';
import Footer from 'components/Footer.js';

function App() {
  const [items, setitems] = useState([]);

  const getDataApi = async () => {
    await fetch('https://batikita.herokuapp.com/index.php/batik/all')
      .then((response) => response.json())
      .then((response) => {
        setitems(response.hasil);
        const script = document.createElement('script');
        script.src = './js/carousel.js';
        script.async = false;
        document.body.appendChild(script);
      });
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      getDataApi();
    }, 300);
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
