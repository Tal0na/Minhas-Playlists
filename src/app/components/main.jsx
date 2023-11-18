import React from "react";
import { FaHome, FaSearch } from "react-icons/fa";

const Main = () => {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5 gap-2 m-2">
        <div className="p-4 rounded bg-zinc-900 items-center justify-center">
          <FaHome size={30} />
          Ínicio
          <FaSearch size={30} />
          Pesquisar
        </div>
        <div className="row-span-4 col-start-1 row-start-2 p-4 rounded bg-zinc-900bg-zinc-900 flex bg-zinc-900">
          <img
            src="sua-imagem.jpg"
            alt="Descrição da imagem"
            className="mr-4 rounded"
            style={{ width: "100px", height: "100px" }}
          />
          <div>
            <h2 className="text-xl font-bold">Título</h2>
            <p>Descrição</p>
          </div>
          
        </div>
        <div className="col-span-3 row-span-5 col-start-2 row-start-1 p-4 rounded bg-zinc-900">
          3
        </div>
        <div className="row-span-5 col-start-5 row-start-1 p-4 rounded bg-zinc-900">
          4
        </div>
      </div>
    </>
  );
};

export default Main;
