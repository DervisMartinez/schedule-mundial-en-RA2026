import React, { useState, useEffect } from 'react';
import { fetchMatches } from './api';

export default function MatchFeed() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDateStr, setSelectedDateStr] = useState('');

  useEffect(() => {
    const getMatches = async () => {
      try {
        const data = await fetchMatches();
        // Ordenar todos los partidos cronológicamente
        const sortedData = data.sort((a, b) => new Date(a.rawDate) - new Date(b.rawDate));
        setMatches(sortedData);
      } catch (error) {
        console.error('Error al obtener los partidos:', error);
      } finally {
        setLoading(false);
      }
    };
    getMatches();

    // Escuchar el evento cuando el usuario da clic en la barra del DatePicker
    const handleDateChange = (e) => setSelectedDateStr(e.detail);
    window.addEventListener('dateChange', handleDateChange);
    return () => window.removeEventListener('dateChange', handleDateChange);
  }, []);

  // Usar la fecha seleccionada o "Hoy" como mecanismo de respaldo
  const targetDateStr = selectedDateStr || new Date().toDateString();

  // Filtrar los partidos sólo para la fecha seleccionada
  const activeMatches = matches.filter(m => new Date(m.rawDate).toDateString() === targetDateStr);

  // Agrupar los partidos del día por su Grupo/Fase
  const groupedMatches = activeMatches.reduce((acc, match) => {
    if (!acc[match.group]) acc[match.group] = [];
    acc[match.group].push(match);
    return acc;
  }, {});

  const getReadableDate = (dateStr) => {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '';
    if (dateStr === new Date().toDateString()) return 'Juegos de Hoy';
    const formatted = d.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
    return `Juegos del ${formatted.charAt(0).toUpperCase() + formatted.slice(1)}`;
  };

  return (
    <div className="lg:col-span-8 flex flex-col gap-6">
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-live-indicator rounded-full live-pulse"></div>
          <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight">
            {getReadableDate(targetDateStr) || 'Jornada'}
          </h3>
        </div>
        <div className="flex flex-col gap-6">
          {loading ? (
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 text-center shadow-sm">
              <p className="text-on-surface-variant font-medium">Cargando la jornada...</p>
            </div>
          ) : activeMatches.length > 0 ? (
            Object.entries(groupedMatches).map(([groupName, groupMatches]) => (
              <div key={groupName} className="flex flex-col gap-4">
                <h4 className="font-label-caps text-label-caps text-primary uppercase border-b border-surface-variant pb-2">{groupName}</h4>
                <div className="grid grid-cols-1 gap-4">
                  {groupMatches.map((match) => (
                    <div key={match.id} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-card-padding relative overflow-hidden group hover:border-primary-container transition-colors shadow-[0_0_15px_rgba(193,53,53,0.1)]">
                      <div className="absolute top-0 right-0 bg-primary text-on-primary px-3 py-1 rounded-bl-lg font-stat-value text-stat-value text-xs">
                        {match.time}
                      </div>
                      <div className="font-label-caps text-label-caps text-on-surface-variant mb-4">{match.stadium}</div>
                      <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-surface-variant rounded-full overflow-hidden shadow-sm">
                              <img alt={`${match.homeTeam.name} Flag`} className="w-full h-full object-cover" src={match.homeTeam.flag} />
                            </div>
                            <span className="font-headline-md text-headline-lg-mobile md:text-headline-lg text-on-surface">{match.homeTeam.name}</span>
                          </div>
                          <span className="font-display-score text-[32px] md:text-display-score leading-none text-primary">{match.homeScore ?? '-'}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-surface-variant rounded-full overflow-hidden shadow-sm">
                              <img alt={`${match.awayTeam.name} Flag`} className="w-full h-full object-cover" src={match.awayTeam.flag} />
                            </div>
                            <span className="font-headline-md text-headline-lg-mobile md:text-headline-lg text-on-surface-variant">{match.awayTeam.name}</span>
                          </div>
                          <span className="font-display-score text-[32px] md:text-display-score leading-none text-on-surface-variant">{match.awayScore ?? '-'}</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-surface-variant flex justify-between items-center">
                        <span className="font-label-caps text-label-caps text-primary cursor-pointer hover:underline">Ver Detalles</span>
                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>sports_soccer</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-sm h-48">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-3 opacity-50" style={{ fontVariationSettings: "'FILL' 0" }}>event_busy</span>
              <h4 className="font-headline-md text-lg text-on-surface mb-1">No hay jornada el día de hoy</h4>
              <p className="text-sm text-on-surface-variant">Los equipos se están preparando para los próximos encuentros.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}