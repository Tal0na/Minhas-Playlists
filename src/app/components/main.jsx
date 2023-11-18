import React from "react";
import {
  FaHome,
  FaSearch,
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaHeart,
  FaSpotify,
  FaVolumeUp,
} from "react-icons/fa";

const Main = () => {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-6 gap-2 m-2">
        <div className="p-4 rounded bg-zinc-900 items-center justify-center">
          <FaHome size={30} />
          Ínicio
          <FaSearch size={30} />
          Pesquisar
          {1}
        </div>
        <div className="row-span-4 col-start-1 row-start-2 p-4 rounded bg-zinc-900 flex flex-col overflow-auto">
          <div>
            <h2 className="text-xl font-bold">Título</h2>
            <p>Descrição</p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Título</h2>
            <p>Descrição</p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Título</h2>
            <p>Descrição</p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Título</h2>
            <p>Descrição</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Título</h2>
            <p>Descrição</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Título</h2>
            <p>Descrição</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Título</h2>
            <p>Descrição</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Título</h2>
            <p>Descrição</p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Título</h2>
            <p>Descrição</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Título</h2>
            <p>Descrição</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Título</h2>
            <p>Descrição</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Título</h2>
            <p>Descrição</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Título</h2>
            <p>Descrição</p>
          </div>
          {2}
        </div>

        <div className="col-span-3 row-span-5 col-start-2 row-start-1 p-4 rounded bg-zinc-900">
          {3}
        </div>

        <div className="row-span-5 col-start-5 row-start-1 p-4 rounded bg-zinc-900">
          {4}
        </div>
        <div className="col-span-full col-start-1 row-start-6 bg-black">
          <footer className="bg-black text-white p-8 flex items-center justify-between fixed bottom-0 w-full">
            <div className="flex items-center">
              <span className="mr-4">
                Conectado como: <strong>Talona</strong>
              </span>
              <FaSpotify size={20} className="mr-4" />
            </div>
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
        </div>
      </div>
    </>
  );
};

export default Main;
