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
          </aside>
          <main className="fleX-1 P-6">main</main>
        </div>
        <footer className="bg-black p-10">footer</footer>
      </div>
    </>
  );
}
