import React from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaHeart, FaSpotify } from 'react-icons/fa';

const Main = () => {
  // Simulação de dados
  const tracks = [
    { id: 1, title: 'Música 1', artist: 'Artista 1' },
    { id: 2, title: 'Música 2', artist: 'Artista 2' },
    { id: 3, title: 'Música 3', artist: 'Artista 3' },
    // Adicione mais faixas conforme necessário
  ];

  return (
    <main className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tracks.map((track) => (
          <div key={track.id} className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">{track.title}</h3>
            <p className="text-gray-500">{track.artist}</p>
            <div className="flex items-center mt-2">
              <FaHeart className="mr-2 cursor-pointer" size={20} />
              <FaPlay className="mr-2 cursor-pointer" size={20} />
              <FaPause className="mr-2 cursor-pointer" size={20} />
              <FaStepBackward className="mr-2 cursor-pointer" size={20} />
              <FaStepForward className="cursor-pointer" size={20} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;