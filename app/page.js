import React from 'react';

export default function Page() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', color: '#e11d48' }}>HASIČSKÝ PODCAST</h1>
      <p style={{ fontSize: '1.2rem', color: '#9ca3af' }}>Vítejte na našem novém webu o požárním sportu!</p>
      
      <div style={{ marginTop: '50px', border: '1px solid #374151', padding: '20px', borderRadius: '15px' }}>
        <h2>Nejnovější epizoda</h2>
        <div style={{ aspectRatio: '16/9', backgroundColor: '#1f2937', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Tady bude tvé YouTube video */}
          <p>Tady se brzy objeví video z YouTube</p>
        </div>
      </div>

      <div style={{ marginTop: '50px' }}>
        <h2>Náš Merch</h2>
        <p>Pracujeme na e-shopu s tričky!</p>
      </div>
    </div>
  )
}
