import React from "react";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaHeart,
  FaSpotify,
  FaVolumeUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 flex items-center justify-between fixed bottom-0 w-full">
      <div className="flex items-center">
        <span className="mr-4">
          Conectado como: <strong>Talona</strong>
        </span>
        <FaSpotify size={20} className="mr-4" />
      </div>

      {/* Controles de reprodução centralizados */}
      <div className="flex items-center mx-auto">
        <FaHeart
          className="mr-2 cursor-pointer hover:text-green-500"
          size={20}
        />
        <FaStepBackward
          className="mr-2 cursor-pointer hover:text-green-500"
          size={20}
        />
        <FaPlay
          className="mr-2 cursor-pointer hover:text-green-500"
          size={24}
        />
        <FaPause
          className="mr-2 cursor-pointer hover:text-green-500"
          size={24}
        />
        <FaStepForward
          className="mr-2 cursor-pointer hover:text-green-500"
          size={20}
        />
      </div>

      {/* Controle deslizante de volume */}
      <div className="flex items-center">
        <FaVolumeUp size={16} className="mr-2" />
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          className="slider bg-gray appearance-none h-2 w-16 cursor-pointer"
      
        />
      </div>
    </footer>
  );
};

export default Footer;