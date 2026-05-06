import Header from '../Header';

export default function EpizodyPage() {
  // Seznam tvých epizod - celkem 12 položek pro bohatý archiv
const vsechnyEpizody = [
    { id: "2GbG3zuYXWo", title: "PŘÍBĚH LEGENDÁRNÍ DHZ ZBORY - MARTIN BEHRO & TOMÁŠ KUCHTA", duration: "02:22:23", label: "#15", cat: "on-line podcast" },
    { id: "p6LqTGneZno", title: "JAKUB PAULÍČEK - HASIČ, ORGANIZÁTOR, TÁTA A MANŽEL", duration: "01:32:33", label: "#14", cat: "studio podcast" },
    { id: "ySon3PIvLx8", title: "MĚL JSEM NABÍDKY I NA EXTRALIGU, ALE ŽERNOVICE JSOU SRDCOVKA", duration: "01:07:34", label: "#13", cat: "studio podcast" },
    { id: "WcTlrSw4Nhc", title: "CO SE DĚLO 6.12.2025 V ČESKÉM RUDOLCI?", duration: "00:14:16", label: "#12", cat: "aftermovie" },
    { id: "TW-iHKnFRwM", title: "PŘÍBĚH 10ti NÁSOBNÉHO MISTRA ČR, Vít Vymazal 🔥", duration: "01:05:58", label: "#11", cat: "podcast" },
    { id: "nKHb3OIuKIs", title: "NA KAŽDOU SOUTĚŽ JEZDÍM VYHRÁT - Jakub Sirbu, SDH Pasohlávky B", duration: "01:11:56", label: "#10", cat: "podcast" },
    { id: "Y9FYu6omTQg", title: "NEJPOPULÁRNĚJŠÍ AKCE V POŽÁRNÍM ÚTOKU NA SVĚTĚ - FLÍDR CUP 2025 🏆", duration: "00:22:44", label: "#9", cat: "aftermovie" },
    { id: "ue4aHwL5BQ0", title: "Jaký je skutečný důvod neúčasti Zdendy Kalouse na letošním Mistrovství Evropy v PÚ? 😮", duration: "01:17:44", label: "#8", cat: "podcast" },
    { id: "3UPnWRtxgQ0", title: "Dodnes máme s týmem odjeto cca 900 závodů po celé ČR a míříme na 1 000, říká Petr Skala", duration: "01:04:32", label: "#7", cat: "podcast" },
    { id: "ePW6kZT6AVw", title: "Na Mistrovství světa v Rusku se mi líbilo nejvíc, říká Káťa Vébrová", duration: "01:03:40", label: "#6", cat: "podcast" },
    { id: "ARkaGp2YayE", title: "Titul v Extralize z roku 2020 nám předpověděla kartářka, říká Lůů Možíšová ", duration: "01:53:23", label: "#5", cat: "podcast" },
    { id: "Q2F4pA5sICU&t=3708s", title: "Posledních 6 let v požárním sportu byly nejlepší roky mého života, říká Jana Šípková", duration: "01:03:54", label: "#4", cat: "podcast" },
    { id: "p6LqTGneZno", title: "MLÁDEŽ A POŽÁRNÍ SPORT", duration: "00:35:50", label: "#122", cat: "JUNIORS" },
    { id: "2GbG3zuYXWo", title: "ROZHOVOR: STAVITELÉ TRATÍ", duration: "01:05:00", label: "#121", cat: "ZÁKULISÍ" },
    { id: "p6LqTGneZno", title: "JAK PŘIPRAVIT HADICE NA REKORD", duration: "00:25:40", label: "#120", cat: "TECHNIKA" },
    { id: "2GbG3zuYXWo", title: "MOTIVACE A TÝMOVÝ DUCH", duration: "01:40:20", label: "#119", cat: "MENTÁLNÍ" },
    { id: "p6LqTGneZno", title: "ZIMNÍ PŘÍPRAVA V TĚLOCVIČNĚ", duration: "00:55:00", label: "#118", cat: "TRÉNINK" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      
      <main className="max-w-6xl mx-auto p-8 pt-32">
        <div className="mb-12">
          <h1 className="text-6xl font-extrabold uppercase mb-2 italic">Archiv Epizod</h1>
          <p className="text-red-600 font-bold tracking-widest text-sm uppercase">Firesport Elite</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vsechnyEpizody.map((ep, index) => (
            <a 
              key={index}
              href={`https://www.youtube.com/watch?v=${ep.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f5f5f5] rounded-[2.5rem] p-6 text-black flex flex-col justify-between group cursor-pointer hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(255,0,0,0.2)] transition-all duration-300 border-b-8 border-gray-300 hover:border-red-600"
            >
              <div>
                <div className="flex gap-2 mb-5">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-[10px] font-black uppercase">{ep.label}</span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full text-[10px] font-bold text-gray-600">{ep.duration}</span>
                </div>
                
                <div className="aspect-video rounded-3xl overflow-hidden mb-5 bg-black shadow-inner">
                  <img 
                    src={`https://img.youtube.com/vi/${ep.id}/maxresdefault.jpg`} 
                    alt={ep.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                
                <h4 className="font-bebas text-2xl leading-[1.1] mb-2 uppercase group-hover:text-red-600 transition-colors tracking-tight">
                  {ep.title}
                </h4>
              </div>
              
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="bg-red-600 w-9 h-9 rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-500">
                    <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[9px] border-l-white border-b-[5px] border-b-transparent ml-1"></div>
                  </div>
                  <span className="text-[11px] font-black uppercase text-gray-400 group-hover:text-black">Přehrát</span>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ep.cat}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Informační lišta na konci */}
        <div className="mt-20 p-10 bg-zinc-900 rounded-[3rem] text-center border border-zinc-800">
           <h3 className="text-2xl font-black uppercase mb-2">Chceš víc obsahu?</h3>
           <p className="text-gray-400 mb-6">Odebírej náš kanál přímo na YouTube a nenech si ujít žádnou premiéru.</p>
           <a 
            href="https://youtube.com/@TVOJANASLOV" 
            target="_blank" 
            className="inline-block bg-red-600 px-8 py-3 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
           >
             Odebírat na YouTube
           </a>
        </div>
      </main>
    </div>
  );
}
