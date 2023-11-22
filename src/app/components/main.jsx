import React from "react"
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
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa"

const Main = () => {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-7 gap-2 m-2">
        <div className="p-4 rounded bg-zinc-900 flex flex-col justify-center">
          <div className="flex items-center mb-2">
            <div
              className="mr-2 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out 
            flex items-center"
            >
              <FaHome size={30} className="mr-2" />
              <span>Ínicio</span>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div
              className="mr-2 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out 
            flex items-center"
            >
              <FaSearch size={30} className="mr-2" />
              <span>Pesquisar</span>
            </div>
          </div>
        </div>
        <div
          className="row-span-4 col-start-1 row-start-2 p-4 rounded bg-zinc-900 flex flex-col 
        overflow-auto"
        >
          <div className="text-lg">MInha Biblioteca</div>
          <div className="hover:bg-zinc-800 p-4 rounded">
            <a
              href="https://open.spotify.com/playlist/74N2GGm7zgRZB0Wqt98wS0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl ">01 I Pop</h2>
            </a>
            <p>Descrição</p>
          </div>

          <div className="hover:bg-zinc-800 p-4 rounded">
            <a
              href="https://open.spotify.com/playlist/0RbqVCzXkLeyz6Z0dZriwl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl ">02 I Pop Alternative</h2>
            </a>
            <p>Descrição</p>
          </div>

          <div className="hover:bg-zinc-800 p-4 rounded">
            <a
              href="https://open.spotify.com/playlist/4WAAsJEtVnS4qzLz6ttohC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl ">03 I Rap/Hip Hop</h2>
            </a>
            <p>Descrição</p>
          </div>

          <div className="hover:bg-zinc-800 p-4 rounded">
            <a
              href="https://open.spotify.com/playlist/6sYubCIaWsuP4CSfjxMTGW"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl ">04 I </h2>
            </a>
            <p>Descrição</p>
          </div>

          <div className="hover:bg-zinc-800 p-4 rounded">
            <a
              href="https://open.spotify.com/playlist/6RTieNiLPLWm2xalN7xcLd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl ">05 I</h2>
            </a>
            <p>Descrição</p>
          </div>

          <div className="hover:bg-zinc-800 p-4 rounded">
            <a
              href="https://open.spotify.com/playlist/2VfLADNvEDyf2D46nd8Hfv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl ">06 I</h2>
            </a>
            <p>Descrição</p>
          </div>

          <div className="hover:bg-zinc-800 p-4 rounded">
            <a
              href="https://open.spotify.com/playlist/1ip1N8nCRpfxu0rGLXKye7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl ">07 I</h2>
            </a>
            <p>Descrição</p>
          </div>

          <div className="hover:bg-zinc-800 p-4 rounded">
            <a
              href="https://open.spotify.com/playlist/0DSAsUte2KDCj4B5qBiawh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl ">08 I</h2>
            </a>
            <p>Descrição</p>
          </div>

          <div className="hover:bg-zinc-800 p-4 rounded">
            <a
              href="https://open.spotify.com/playlist/2UD65Tc0eP1eAGFjHN6ei5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl ">09 I</h2>
            </a>
            <p>Descrição</p>
          </div>

          <div className="hover:bg-zinc-800 p-4 rounded">
            <a
              href="https://open.spotify.com/playlist/3oPMxSlnoTLKMbfd7Pck9j"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-xl ">10 I </h2>
            </a>
            <p>Descrição</p>
          </div>
          {2}
        </div>

        <div className="col-span-3 row-span-5 col-start-2 row-start-1 p-4 rounded bg-zinc-900">
          <div className="flex items-center gap-">
            <button className="rounded-full bg-black/40 opacity-70 text-lg p-2">
              <FaAngleLeft />
            </button>
            <button className="rounded-full bg-black/40 opacity-70 text-lg p-2">
              <FaAngleRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-5">Bom Dia</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden 
                hover:bg-white/20 transition-colors"
            >
              <image width={104} height={104} alt="j" />
              <strong>Musica</strong>
              <button className="w-12 h-12 flex items-center pl-1 ml-auto">
                play
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden 
                hover:bg-white/20 transition-colors"
            >
              <image width={104} height={104} alt="j" />
              <strong>Musica</strong>
              <button className="w-12 h-12 flex items-center pl-1 ml-auto">
                play
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden 
                hover:bg-white/20 transition-colors"
            >
              <image width={104} height={104} alt="j" />
              <strong>Musica</strong>
              <button className="w-12 h-12 flex items-center pl-1 ml-auto">
                play
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden 
                hover:bg-white/20 transition-colors"
            >
              <image width={104} height={104} alt="j" />
              <strong>Musica</strong>
              <button className="w-12 h-12 flex items-center pl-1 ml-auto">
                play
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden 
                hover:bg-white/20 transition-colors"
            >
              <image width={104} height={104} alt="j" />
              <strong>Musica</strong>
              <button className="w-12 h-12 flex items-center pl-1 ml-auto">
                play
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden 
                hover:bg-white/20 transition-colors"
            >
              <image width={104} height={104} alt="j" />
              <strong>Musica</strong>
              <button className="w-12 h-12 flex items-center pl-1 ml-auto">
                play
              </button>
            </a>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Feito por Talona</h1>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden 
                hover:bg-white/20 transition-colors"
            >
              <image width={104} height={104} alt="j" />
              <strong>Musica</strong>
              <button className="w-12 h-12 flex items-center pl-1 ml-auto">
                play
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden 
                hover:bg-white/20 transition-colors"
            >
              <image width={104} height={104} alt="j" />
              <strong>Musica</strong>
              <button className="w-12 h-12 flex items-center pl-1 ml-auto">
                play
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden 
                hover:bg-white/20 transition-colors"
            >
              <image width={104} height={104} alt="j" />
              <strong>Musica</strong>
              <button className="w-12 h-12 flex items-center pl-1 ml-auto">
                play
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden 
                hover:bg-white/20 transition-colors"
            >
              <image width={104} height={104} alt="j" />
              <strong>Musica</strong>
              <button className="w-12 h-12 flex items-center pl-1 ml-auto">
                play
              </button>
            </a>
          </div>
          <h1 className="font-semibold text-3xl mt-10">PodCasts </h1>

          <div className="grid grid-cols-4 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden 
                hover:bg-white/20 transition-colors"
            >
              <image width={104} height={104} alt="j" />
              <strong>Musica</strong>
              <button className="w-12 h-12 flex items-center pl-1 ml-auto">
                play
              </button>
            </a>
          </div>
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
  )
}

export default Main
