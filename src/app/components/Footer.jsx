import React from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaHeart, FaSpotify } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 flex items-center justify-between">
      {/* Controles de reprodução */}
      <div className="flex items-center">
        <FaHeart className="mr-2 cursor-pointer" size={20} />
        <FaStepBackward className="mr-2 cursor-pointer" size={20} />
        <FaPlay className="mr-2 cursor-pointer" size={20} />
        <FaPause className="mr-2 cursor-pointer" size={20} />
        <FaStepForward className="cursor-pointer" size={20} />
      </div>

      {/* Informações da conta */}
      <div className="flex items-center">
        <span className="mr-2">Conectado como: <strong>Seu Nome</strong></span>
        <FaSpotify size={20} />
      </div>
    </footer>
  );
};

export default Footer;