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
              zobrazit Všechny epizody <span className="text-xl">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* KARTA 1 */}
            <a 
              href="https://www.youtube.com/watch?v=p6LqTGneZno" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#f5f5f5] rounded-[2rem] p-5 text-black flex flex-col justify-between group cursor-pointer hover:scale-[1.02] transition-transform"
            >
              <div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">#16</span>
                  <span className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">01:32:33</span>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-black shadow-sm">
                  <img src="https://img.youtube.com/vi/p6LqTGneZno/maxresdefault.jpg" alt="Thumbnail" className="w-full h-full object-contain" />
                </div>
                <h4 className="font-bebas text-2xl leading-tight mb-2 uppercase pt-2">JAKUB PAULÍČEK - HASIČ, ORGANIZÁTOR, TÁTA A MANŽEL</h4>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Podcast</span>
              </div>
            </a>

            {/* KARTA 2 */}
            <a 
              href="https://www.youtube.com/watch?v=ySon3PIvLx8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#f5f5f5] rounded-[2rem] p-5 text-black flex flex-col justify-between group cursor-pointer hover:scale-[1.02] transition-transform"
            >
              <div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">#15</span>
                  <span className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">01:07:34</span>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-black shadow-sm">
                  <img src="https://img.youtube.com/vi/ySon3PIvLx8/maxresdefault.jpg" alt="Thumbnail" className="w-full h-full object-contain" />
                </div>
                <h4 className="font-bebas text-2xl leading-tight mb-2 uppercase pt-2">MĚL JSEM NABÍDKY I NA EXTRALIGU, ALE ŽERNOVICE JSOU SRDCOVKA</h4>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Podcast</span>
              </div>
            </a>

            {/* KARTA 3 */}
            <a 
              href="https://www.youtube.com/watch?v=TW-iHKnFRwM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#f5f5f5] rounded-[2rem] p-5 text-black flex flex-col justify-between group cursor-pointer hover:scale-[1.02] transition-transform"
            >
              <div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">#14</span>
                  <span className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">01:05:58</span>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-black shadow-sm">
                  <img src="https://img.youtube.com/vi/TW-iHKnFRwM/maxresdefault.jpg" alt="Thumbnail" className="w-full h-full object-contain" />
                </div>
                <h4 className="font-bebas text-2xl leading-tight mb-2 uppercase pt-2">PŘÍBĚH 10ti NÁSOBNÉHO MISTRA ČR, Vít Vymazal 🔥</h4>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Podcast</span>
              </div>
            </a>
          </div>
        </section>
  
   {/* Sekce Merch v app/page.js */}
        <section id="merch" className="my-20">
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-5xl font-extrabold uppercase tracking-tighter">Merch</h3>
            <a 
              href="/merch" 
              className="text-gray-400 hover:text-white transition flex items-center gap-2 uppercase text-sm font-bold"
            >
              Zobrazit všechny položky <span className="text-xl">→</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
           {/* POLOŽKA 1 - Tričko */}
            <a 
              href="https://buy.stripe.com/7sYaEW3UkfEEffD3EU9AA06" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block"
            >
              <div className="bg-[#0a0c10] p-8 rounded-[3rem] border border-[#1a1d23] text-center flex flex-col items-center hover:border-red-600/50 transition-all shadow-2xl">
                <div className="w-full aspect-square bg-[#1a1d23] rounded-[2rem] mb-8 flex items-center justify-center overflow-hidden border border-gray-800">
                  <img 
                    src="/tricko.jpg" 
                    alt="Funkční tričko" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <h4 className="text-2xl font-black uppercase tracking-tight mb-2 text-white">Funkční tričko s názvem</h4>
                <p className="text-red-600 font-black text-3xl mb-8 tracking-wider">699 Kč</p>
                <div className="w-full bg-white text-black py-4 rounded-full font-black group-hover:bg-red-600 group-hover:text-white transition-all uppercase tracking-widest text-sm text-center">
                  Koupit
                </div>
              </div>
            </a>

           {/* POLOŽKA 2 - Mikina */}
            <a 
              href="https://buy.stripe.com/SEM_VLOZ_TVUJ_STRIPE_LINK_PRO_MIKINU" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block"
            >
              <div className="bg-[#0a0c10] p-8 rounded-[3rem] border border-[#1a1d23] text-center flex flex-col items-center hover:border-red-600/50 transition-all shadow-2xl">
                <div className="w-full aspect-square bg-[#1a1d23] rounded-[2rem] mb-8 flex items-center justify-center overflow-hidden border border-gray-800">
                  <img 
                    src="/mikina.jpg" 
                    alt="Mikina s kapucí" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <h4 className="text-2xl font-black uppercase tracking-tight mb-2 text-white">Mikina s kapucí</h4>
                <p className="text-red-600 font-black text-3xl mb-8 tracking-wider">1 169 Kč</p>
                <div className="w-full bg-white text-black py-4 rounded-full font-black group-hover:bg-red-600 group-hover:text-white transition-all uppercase tracking-widest text-sm text-center">
                  Koupit
                </div>
              </div>
            </a>

           {/* POLOŽKA 3 - Kšiltovka */}
            <a 
              href="https://buy.stripe.com/SEM_VLOZ_TVUJ_STRIPE_LINK_PRO_KSILTOVKU" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block"
            >
              <div className="bg-[#0a0c10] p-8 rounded-[3rem] border border-[#1a1d23] text-center flex flex-col items-center hover:border-red-600/50 transition-all shadow-2xl">
                <div className="w-full aspect-square bg-[#1a1d23] rounded-[2rem] mb-8 flex items-center justify-center overflow-hidden border border-gray-800">
                  <img 
                    src="/ksiltovka.jpg" 
                    alt="Kšiltovka" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <h4 className="text-2xl font-black uppercase tracking-tight mb-2 text-white">Kšiltovka</h4>
                <p className="text-red-600 font-black text-3xl mb-8 tracking-wider">469 Kč</p>
                <div className="w-full bg-white text-black py-4 rounded-full font-black group-hover:bg-red-600 group-hover:text-white transition-all uppercase tracking-widest text-sm text-center">
                  Koupit
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
