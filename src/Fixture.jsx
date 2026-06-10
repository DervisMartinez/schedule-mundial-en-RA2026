import React, { useState, useEffect } from 'react';
import { fetchMatches } from '../api';

export default function Fixture() {
  const [knockoutMatches, setKnockoutMatches] = useState({
    dieciseisavos: [],
    octavos: [],
    cuartos: [],
    semifinales: [],
    final: []
  });

  useEffect(() => {
    fetchMatches().then(data => {
      const ko = {
        dieciseisavos: data.filter(m => m.group === 'Dieciseisavos de Final'),
        octavos: data.filter(m => m.group === 'Octavos de Final'),
        cuartos: data.filter(m => m.group === 'Cuartos de Final'),
        semifinales: data.filter(m => m.group === 'Semifinales'),
        final: data.filter(m => m.group === 'Final' || m.group === 'Tercer Puesto')
      };
      setKnockoutMatches(ko);
    });
  }, []);

  // Subcomponente de una tarjeta de partido
  const MatchCard = ({ match }) => (
    <div className="bg-surface-container-lowest border border-surface-variant rounded-lg p-3 w-64 shrink-0 shadow-sm relative hover:border-primary transition-colors cursor-pointer group">
      <div className="text-[10px] font-label-caps text-on-surface-variant mb-3 border-b border-surface-dim pb-1 flex justify-between">
        <span>{match.dateStr.split(',')[0]}</span>
        <span className="truncate max-w-[120px]">{match.stadium.split('(')[0]}</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={match.homeTeam.flag} alt="" className="w-5 h-5 rounded-full border border-surface-dim object-cover" />
            <span className={`font-body-md text-sm truncate max-w-[120px] ${match.homeScore > match.awayScore ? 'font-bold' : ''}`}>{match.homeTeam.name}</span>
          </div>
          <span className={`font-stat-value text-sm ${match.homeScore > match.awayScore ? 'font-bold text-primary' : 'text-on-surface-variant'}`}>{match.homeScore ?? '-'}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={match.awayTeam.flag} alt="" className="w-5 h-5 rounded-full border border-surface-dim object-cover" />
            <span className={`font-body-md text-sm truncate max-w-[120px] ${match.awayScore > match.homeScore ? 'font-bold' : ''}`}>{match.awayTeam.name}</span>
          </div>
          <span className={`font-stat-value text-sm ${match.awayScore > match.homeScore ? 'font-bold text-primary' : 'text-on-surface-variant'}`}>{match.awayScore ?? '-'}</span>
        </div>
      </div>
    </div>
  );

  // Subcomponente de columna para cada Ronda
  const RoundColumn = ({ title, matches }) => (
    <div className="flex flex-col gap-4 shrink-0 w-64">
      <h3 className="font-headline-md text-sm uppercase text-primary mb-2 text-center bg-primary-container text-on-primary-container py-2 rounded-lg sticky top-0 z-10">{title}</h3>
      <div className="flex flex-col gap-6 justify-around h-full py-2">
        {matches.map(m => <MatchCard key={m.id} match={m} />)}
      </div>
    </div>
  );

  return (
    <div className="max-w-full w-full p-margin-mobile md:p-margin-desktop flex-1 flex flex-col h-full overflow-hidden">
      <h2 className="text-headline-lg-mobile md:text-headline-lg font-bold mb-6 text-on-background">Cuadro de Eliminatorias</h2>
      <div className="flex-1 overflow-x-auto hide-scrollbar bg-surface-bright border border-surface-variant rounded-xl p-6 shadow-inner">
        <div className="flex gap-12 min-w-max h-full relative">
          {/* Líneas conectoras visuales pueden ser añadidas mediante SVG absolutos si lo deseas */}
          <RoundColumn title="Dieciseisavos (32)" matches={knockoutMatches.dieciseisavos} />
          <RoundColumn title="Octavos (16)" matches={knockoutMatches.octavos} />
          <RoundColumn title="Cuartos (8)" matches={knockoutMatches.cuartos} />
          <RoundColumn title="Semifinales (4)" matches={knockoutMatches.semifinales} />
          <RoundColumn title="Final y 3er Lugar" matches={knockoutMatches.final} />
        </div>
      </div>
    </div>
  );
}