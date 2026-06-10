import React from 'react';

export default function Venues() {
  // Datos simulados de las sedes principales
  const venuesData = [
    { id: 1, name: 'Estadio Azteca', city: 'Ciudad de México, México', capacity: '83,264', image: 'https://images.unsplash.com/photo-1518091043644-c1d44570a2c9?q=80&w=600&auto=format&fit=crop' },
    { id: 2, name: 'MetLife Stadium', city: 'Nueva York/Nueva Jersey, EE.UU.', capacity: '82,500', image: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=600&auto=format&fit=crop' },
    { id: 3, name: 'BMO Field', city: 'Toronto, Canadá', capacity: '30,000', image: 'https://images.unsplash.com/photo-1524015368236-bbf6f72545b6?q=80&w=600&auto=format&fit=crop' },
    { id: 4, name: 'SoFi Stadium', city: 'Los Ángeles, EE.UU.', capacity: '70,240', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop' },
    { id: 5, name: 'Estadio BBVA', city: 'Monterrey, México', capacity: '53,500', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop' },
    { id: 6, name: 'BC Place', city: 'Vancouver, Canadá', capacity: '54,500', image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full p-margin-mobile md:p-margin-desktop flex-1">
      <div className="mb-8">
        <h2 className="text-headline-lg-mobile md:text-headline-lg font-bold text-on-background">Sedes del Mundial 2026</h2>
        <p className="text-on-surface-variant mt-2 font-body-md">Conoce los estadios en México, Estados Unidos y Canadá que albergarán la Copa del Mundo.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {venuesData.map((venue) => (
          <div key={venue.id} className="bg-surface-container-lowest rounded-xl border border-surface-dim overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            {/* Imagen del estadio */}
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img 
                src={venue.image} 
                alt={venue.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-4 z-20">
                <span className="bg-primary text-on-primary font-label-caps text-[10px] px-2 py-1 rounded uppercase tracking-wider">Confirmada</span>
              </div>
            </div>
            
            {/* Info del estadio */}
            <div className="p-5">
              <h3 className="font-headline-md text-lg font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">{venue.name}</h3>
              <div className="flex items-center gap-2 text-on-surface-variant mb-3">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                <span className="font-body-md text-sm">{venue.city}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-surface-dim">
                <span className="font-label-caps text-xs text-on-surface-variant uppercase">Capacidad</span>
                <span className="font-stat-value text-sm font-bold text-on-surface">{venue.capacity} espectadores</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}