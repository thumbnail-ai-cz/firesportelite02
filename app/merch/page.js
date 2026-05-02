'use client'

import React from 'react';
import Header from '../Header';

export default function MerchPage() {
 const products = [
    { 
      name: 'FUNKČNÍ TRIČKO', 
      price: '669 KČ', 
      image: '/tricko.jpg' // Cesta začíná lomítkem, což znamená složku public
    },
    { 
      name: 'MIKINA S KAPUCÍ', 
      price: '1 169 KČ', 
      image: '/mikina.jpg' 
    },
    { 
      name: 'KŠILTOVKA', 
      price: '469 KČ', 
      image: '/ksiltovka.jpg' 
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />

      <main className="max-w-6xl mx-auto p-8 pt-32">
        <header className="mb-16 text-center">
          <h1 className="text-6xl font-extrabold uppercase mb-4 tracking-tighter">Náš Merch</h1>
          <p className="text-gray-500 uppercase tracking-widest text-sm">Vybavení pro ty nejlepší</p>
        </header>

        {/* GRID S PRODUKTY - PŘESNĚ PODLE TVÉHO NÁVRHU */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-[#0a0c10] p-8 rounded-[3rem] border border-[#1a1d23] text-center flex flex-col items-center transition-all hover:scale-[1.02] hover:border-red-600/50 shadow-2xl"
            >
              {/* Box pro fotku - nyní s reálným obrázkem */}
<div className="w-full aspect-square bg-[#1a1d23] rounded-[2rem] mb-8 flex items-center justify-center overflow-hidden border border-gray-800">
  <img 
    src={product.image} 
    alt={product.name} 
    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
  />
</div>

              {/* Název produktu */}
              <h4 className="text-2xl font-black uppercase tracking-tight mb-2">
                {product.name}
              </h4>

              {/* Cena - Výrazná červená */}
              <p className="text-red-600 font-black text-3xl mb-8 tracking-wider">
                {product.price}
              </p>

              {/* Tlačítko KOUPIT */}
              <button className="w-full bg-white text-black py-4 rounded-full font-black hover:bg-red-600 hover:text-white transition-all uppercase tracking-[0.15em] text-sm shadow-lg">
                KOUPIT
              </button>
            </div>
          ))}
        </div>

        {/* Info box dole */}
        <footer className="mt-20 py-10 border-t border-gray-900 text-center">
          <p className="text-gray-600 text-sm uppercase tracking-widest">
            Všechny ceny jsou včetně DPH • Doprava od 1500 Kč zdarma
          </p>
        </footer>
      </main>
    </div>
  );
}
