import Image from 'next/image'
import React from 'react';
import Header from './components/Header';
import Playlist from './components/Playlist';
import Footer from './components/Footer'
import Main from './components/main'

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Main />
        <Playlist />
        {/* Adicione outros componentes conforme necessário */}
  
      <Footer /> 
    </div>
    </>
  );
}
  

