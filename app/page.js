import React from 'react';
import Header from './Header'; // Importuje tvůj nový Header

export default function Page() {
  // Tady si pak můžeš měnit ID videa (to za v=)
  const latestVideoId = "dQw4w9WgXcQ"; 

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Vložíme tvůj nový profi Header */}
      <Header />

      {/* Hlavní obsah stránky (přidáme horní padding, aby Header nic nezakrýval) */}
      <main className="max-w-5xl mx-auto p-8 pt-28">
        {/* Hero sekce s videem */}
        <section id="epizody" className="text-center my-16">
          <h2 className="text-8xl font-extrabold mb-1 inline-block">Připrav si něco dobrého k jídlu nebo pití a užij si nejnovější epizodu</h2>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800 mt-6">
            <iframe 
              className="w-full h-full"
              src={`https://youtu.be/2GbG3zuYXWo?si=G3zWI9Ft3wxWmIL-${latestVideoId}`}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Sekce Merch */}
        <section id="merch" className="my-20">
          <h3 className="text-3xl font-bold mb-8 border-l-4 border-red-600 pl-4">Náš Merch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
              <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center italic text-gray-500">Foto trička</div>
              <h4 className="text-xl font-bold">Tričko "Proud"</h4>
              <p className="text-red-500 font-bold my-2">490 Kč</p>
              <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-red-600 hover:text-white transition">Koupit</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
