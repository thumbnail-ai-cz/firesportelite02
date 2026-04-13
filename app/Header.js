'use client' // Důležité: Říká Next.js, že jde o interaktivní komponentu

import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Epizody', href: '#epizody' },
    { name: 'Merch', href: '#merch' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#121212]/90 backdrop-blur-md border-b border-[#2a2a2a] py-3 px-6 md:px-12 flex justify-between items-center">
     {/* 1. LOGO SEKCE (VLEVO) */}
      <div className="flex items-center gap-3">
        {/* TVÉ NAHRANÉ KULATÉ LOGO */}
        <img 
          src="/logo.svg" 
          alt="Logo Firesport Elite" 
          className="h-12 w-12 rounded-full border-2 border-red-600 object-cover" // Tady je to kouzlo!
        />
        <a href="/" className="text-2xl font-extrabold text-white leading-tight">
          FIRESPORT <span className="text-white-600">ELITE</span>
        </a>
      </div>

      {/* 2. VYHLEDÁVACÍ POLE (STŘED/VPRAVO) - Pro desktop */}
      <div className="hidden md:flex items-center gap-2 flex-grow max-w-lg mx-6">
        <div className="relative w-full">
          <input 
            type="search" 
            placeholder="Hledej epizody ..." 
            className="w-full bg-[#1e1e1e] text-white pl-10 pr-4 py-2 rounded-full text-sm border border-[#2a2a2a] focus:ring-1 focus:ring-red-600 focus:outline-none placeholder:text-[#505050]"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#505050]" />
        </div>
        <button className="bg-red-600 text-white px-5 py-2 rounded-full font-bold text-lg hover:bg-red-700 transition leading-tight">
          HLEDAT
        </button>
      </div>

      {/* 3. MENU SEKCE (VPRAVO) */}
      <div className="flex items-center gap-3">
        {/* Ikony pro mobil (Hledání, Menu) */}
        <button className="md:hidden text-gray-300 hover:text-white transition">
          <Search className="h-6 w-6" />
        </button>

        {/* Tlačítko HAMBURGER MENU */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="bg-red-600 rounded-full h-10 w-10 flex items-center justify-center hover:bg-red-700 transition"
        >
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* 4. VYSOUVACÍ HAMBURGER MENU (PRO VŠECHNY VELIKOSTI) */}
      <div 
        className={`absolute top-full left-0 w-full transition-all duration-300 ease-in-out z-40 ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="bg-[#121212]/95 backdrop-blur-lg border-b border-[#2a2a2a] shadow-lg">
          <ul className="py-8 text-center space-y-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="text-white text-3xl md:text-5xl font-extrabold hover:text-red-500 transition block leading-tight"
                  onClick={() => setIsMenuOpen(false)} // Zavře menu po kliknutí
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
