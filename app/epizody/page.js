import Header from '../Header';

export default function EpizodyPage() {
  // Seznam všech tvých epizod
  const vsechnyEpizody = [
    { id: "p6LqTGneZno", title: "NÁZEV EPIZODY 134 - HOST A TÉMA", duration: "02:52:04", label: "#134", cat: "BUSINESS" },
    { id: "2GbG3zuYXWo", title: "PŘÍPRAVA NA SEZÓNU - CO NEPODCENIT", duration: "01:15:00", label: "#133", cat: "TRÉNINK" },
    { id: "p6LqTGneZno", title: "TECHNIKA SAVIC - DETAILY, CO ROZHODUJÍ", duration: "00:45:20", label: "#132", cat: "TECHNIKA" },
    // Sem budeš jednoduše přidávat další řádky s novými díly
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      
      <main className="max-w-6xl mx-auto p-8 pt-32">
        <h1 className="text-6xl font-extrabold uppercase mb-12">Všechny epizody</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vsechnyEpizody.map((ep, index) => (
            <a 
              key={index}
              href={`https://www.youtube.com/watch?v=${ep.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f5f5f5] rounded-[2rem] p-5 text-black flex flex-col justify-between group cursor-pointer hover:scale-[1.02] transition-transform shadow-xl"
            >
              <div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">{ep.label}</span>
                  <span className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">{ep.duration}</span>
                </div>
                
                {/* Rámeček s opraveným poměrem stran 16:9 */}
                <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-black shadow-sm">
                  <img 
                    src={`https://img.youtube.com/vi/${ep.id}/maxresdefault.jpg`} 
                    alt={ep.title} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                
                <h4 className="font-bebas text-2xl leading-tight mb-2 uppercase pt-2">{ep.title}</h4>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <div className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ep.cat}</span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
