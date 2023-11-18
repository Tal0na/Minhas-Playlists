import React from 'react';

const Playlist = () => {
  // Simulação de dados com informações adicionais
  const playlists = [
    {
      id: 1,
      name: "Playlist 1",
      description: "Esta é a primeira playlist. Curta suas músicas favoritas!",
      cover: "url_da_capa_1.jpg",
    },
    {
      id: 2,
      name: "Playlist 2",
      description: "Uma coleção de músicas para animar o seu dia.",
      cover: "url_da_capa_2.jpg",
    },
    {
      id: 3,
      name: "Playlist 3",
      description: "Músicas relaxantes para uma tarde tranquila.",
      cover: "url_da_capa_3.jpg",
    },
  ];

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-4">Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id} className="mb-4">
            <div className="flex items-center">
              <img
                src={playlist.cover}
                alt={`Capa de ${playlist.name}`}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{playlist.name}</h3>
                <p className="text-gray-500">{playlist.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Playlist;