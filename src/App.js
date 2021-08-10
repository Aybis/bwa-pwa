import Header from './components/Header.js';
import Hero from './components/Hero';
import React, { useEffect, useState } from 'react';
import Browse from './components/Browse.js';
import Arrived from './components/Arrived.js';
import AsideMenu from './components/AsideMenu';
import Clients from './components/Clients.js';
import Footer from 'components/Footer.js';
import Offline from './components/Offline.js';

function App() {
  const [items, setitems] = useState([]);
  const [isOffline, setisOffline] = useState(!navigator.onLine);

  const handleOfflineStatus = () => {
    setisOffline(!navigator.onLine);
  };

  const getDataApi = async () => {
    await fetch('https://batikita.herokuapp.com/index.php/batik/all')
      .then((response) => response.json())
      .then((response) => {
        setitems(response.hasil);
        const script = document.createElement('script');
        script.src = './carousel.js';
        script.async = false;
        document.body.appendChild(script);
      });
  };

  useEffect(() => {
    handleOfflineStatus();
    window.addEventListener('online', handleOfflineStatus);
    window.addEventListener('offline', handleOfflineStatus);
    const timeOut = setTimeout(() => {
      getDataApi();
    }, 300);
    return () => {
      window.removeEventListener('online', handleOfflineStatus);
      window.removeEventListener('offline', handleOfflineStatus);

      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOffline]);

  return (
    <>
      {isOffline && <Offline />}
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
