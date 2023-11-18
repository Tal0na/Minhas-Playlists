import Image from 'next/image'
import React from 'react';
import Header from './components/Header';
import Playlist from './components/Playlist';
import Footer from './components/Footer'
import Main from './components/main'

export default function Home() {
  return (
    <>
    <div className="min-h-scree">
      <Header />
      <Main />
      <Playlist />
      <Footer /> 
    </div>
    </>
  );
}
  

