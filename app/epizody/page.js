import Header from '../Header';

export default function EpizodyPage() {
  // Tady si pak můžeš přidávat další a další epizody
  const vsechnyEpizody = [
    { id: "2GbG3zuYXWo", title: "NÁZEV EPIZODY 134", duration: "02:52:04", label: "#134", cat: "BUSINESS" },
    { id: "ID_VIDEA_2", title: "PŘÍPRAVA NA SEZÓNU", duration: "01:15:00", label: "#133", cat: "TRÉNINK" },
    { id: "ID_VIDEA_3", title: "TECHNIKA SAVIC", duration: "00:45:20", label: "#132", cat: "TECHNIKA" },
    // Sem prostě připíšeš další řádek, až vyjde nový díl
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="max-w-6xl mx-auto p-8 pt-28">
        <h1 className="text-6xl font-extrabold uppercase mb-12">Všechny epizody</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vsechnyEpizody.map((ep, index) => (
            <a 
              key={index}
              href={`https://www.youtube.com/watch?v=${ep.id}`}
              target="_blank"
              className="bg-[#f5f5f5] rounded-[2rem] p-5 text-black flex flex-col justify-between hover:scale-[1.02] transition-transform"
            >
              <div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">{ep.label}</span>
                  <span className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">{ep.duration}</span>
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-200">
                  <img src={`https://img.youtube.com/vi/${ep.id}/maxresdefault.jpg`} alt={ep.title} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bebas text-2xl leading-tight mb-2 uppercase">{ep.title}</h4>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center">
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
