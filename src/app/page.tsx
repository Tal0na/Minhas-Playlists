import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <aside className="w-72 bg-zinc-950 rouded-lg p-6">
            <nav>
              <a
                href=""
                className="flex items-center gap-2 text-xl font-semibold text-zinc-100"
              >
                Home
              </a>
              <a
                href=""
                className="flex items-center gap-2 text-xl font-semibold text-zinc-100"
              >
                Search
              </a>
            </nav>

            <nav className="mt-10 flex flex-col gap-2">
              <a href="" className="text-lg ">
                1
              </a>
            </nav>
          </aside>
          <main className="fleX-1 P-6">
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-black/40 p-1">b1</button>
              <button className="rounded-full bg-black/40 p-1">b2</button>
            </div>
            <h1 className="font-semibold text-3xl mt-10">Good Afternoom</h1>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <a
                href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                <image src="/" width={104} height={104} alt="..." />
                <strong>Musica</strong>
                <button className="w-12 h-12 flex items-center pl-1 ml-auto">
                  play
                </button>
              </a>
            </div>
          </main>
        </div>
        <footer className="bg-black p-10">footer</footer>
      </div>
    </>
  );
}
