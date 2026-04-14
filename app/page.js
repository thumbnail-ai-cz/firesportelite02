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
    src="https://www.youtube.com/embed/2GbG3zuYXWo"
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen
  ></iframe>
</div>
        </section>
{/* SEKCE DALŠÍ EPIZODY */}
        <section className="my-20">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-5xl font-extrabold uppercase">Poslední epizody</h2>
            <a href="/epizody" className="text-gray-400 hover:text-white transition flex items-center gap-2 uppercase text-sm font-bold">
  Všechny epizody <span className="text-xl">→</span>
</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* KARTA 1 */}
            <div className="bg-[#f5f5f5] rounded-[2rem] p-5 text-black flex flex-col justify-between group cursor-pointer hover:scale-[1.02] transition-transform">
              <div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">#134</span>
                  <span className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">02:52:04</span>
                <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-black shadow-sm">
   </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-200">
                  <img src="https://img.youtube.com/vi/ID_VIDEA_2/maxresdefault.jpg" alt="Thumbnail" className="w-full h-full object-cover" />
                </div>
</div>
                <h4 className="font-bebas text-2xl leading-tight mb-2 uppercase">Název tvé epizody - Host a téma dílu</h4>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Kategorie</span>
              </div>
            </div>

            {/* KARTA 2 */}
            <div className="bg-[#f5f5f5] rounded-[2rem] p-5 text-black flex flex-col justify-between group cursor-pointer hover:scale-[1.02] transition-transform">
              <div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">#133</span>
                  <span className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">01:15:00</span>
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-200">
                  <img src="https://img.youtube.com/vi/ID_VIDEA_2/maxresdefault.jpg" alt="Thumbnail" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bebas text-2xl leading-tight mb-2 uppercase">Příprava na sezónu - co nepodcenit</h4>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Trénink</span>
              </div>
            </div>

            {/* KARTA 3 */}
            <div className="bg-[#f5f5f5] rounded-[2rem] p-5 text-black flex flex-col justify-between group cursor-pointer hover:scale-[1.02] transition-transform">
              <div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">#132</span>
                  <span className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">00:45:20</span>
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-200">
                  <img src="https://img.youtube.com/vi/ID_VIDEA_3/maxresdefault.jpg" alt="Thumbnail" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bebas text-2xl leading-tight mb-2 uppercase">Technika savic - detaily, co rozhodují</h4>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Technika</span>
              </div>
            </div>
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
