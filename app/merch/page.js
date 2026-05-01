'use client'

import React from 'react';
import Header from '../Header'; // Cesta k tvému Headeru o úroveň výš

export default function MerchPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <main className="max-w-6xl mx-auto p-8 pt-32 text-center">
        <h1 className="text-6xl font-extrabold uppercase mb-6">Náš kompletní Merch</h1>
        <p className="text-xl text-gray-400 mb-12">Právě pro vás připravujeme plnohodnotný e-shop s vybavením Firesport Elite.</p>
        
        {/* Dočasný box, aby stránka nebyla prázdná */}
        <div className="bg-gray-900 border border-gray-800 p-12 rounded-[3rem]">
          <p className="text-red-600 font-bold uppercase tracking-widest text-2xl">Již brzy online</p>
        </div>
      </main>
    </div>
  );
}
