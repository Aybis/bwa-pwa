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

  useEffect(function () {
    (async function () {
      const response = await fetch(
        'https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc',
        {
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            'x-api-key': process.env.REACT_APP_API_KEY,
          },
        },
      );
      const { nodes } = await response.json();
      setitems(nodes);
    })();
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
