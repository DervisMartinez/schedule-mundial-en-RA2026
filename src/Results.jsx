import React, { useState, useEffect } from 'react';
import { fetchResults } from './api';

export default function Results() {
  const [resultsData, setResultsData] = useState([]);

  useEffect(() => {
    // Sincronizando con la API de Football
    fetchResults().then(data => setResultsData(data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto w-full p-margin-mobile md:p-margin-desktop flex-1">
      <h2 className="text-headline-lg-mobile md:text-headline-lg font-bold mb-6 text-on-background">Últimos Resultados</h2>
      
      <div className="flex flex-col gap-6">
        {resultsData.map((group, idx) => (
          <div key={idx} className="bg-surface-container-lowest rounded-xl border border-surface-dim overflow-hidden shadow-sm">
            <div className="bg-surface-container-low px-4 py-2 border-b border-surface-dim flex items-center justify-between">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">{group.date}</span>
              <span className="font-label-caps text-[10px] text-on-surface-variant tracking-wider">MUNDIAL 2026</span>
            </div>
            <div className="flex flex-col">
              {group.matches.map((match, mIdx) => (
                <div key={match.id} className={`flex items-center p-3 sm:p-4 hover:bg-surface-bright transition-colors cursor-pointer group ${mIdx !== group.matches.length - 1 ? 'border-b border-surface-variant' : ''}`}>
                  <div className="w-12 text-center shrink-0 border-r border-surface-variant pr-3 sm:pr-4 mr-3 sm:mr-4">
                    <span className="font-label-caps text-[11px] text-on-surface-variant opacity-80 group-hover:text-primary transition-colors">{match.status}</span>
                  </div>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={match.homeTeam.flag} alt={match.homeTeam.name} className="w-5 h-5 rounded-full object-cover border border-surface-dim" />
                        <span className={`font-body-md text-sm ${match.homeScore > match.awayScore ? 'font-bold text-on-surface' : 'text-on-surface-variant'}`}>{match.homeTeam.name}</span>
                      </div>
                      <span className={`font-stat-value text-base ${match.homeScore > match.awayScore ? 'font-bold text-primary' : 'text-on-surface-variant'}`}>{match.homeScore}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={match.awayTeam.flag} alt={match.awayTeam.name} className="w-5 h-5 rounded-full object-cover border border-surface-dim" />
                        <span className={`font-body-md text-sm ${match.awayScore > match.homeScore ? 'font-bold text-on-surface' : 'text-on-surface-variant'}`}>{match.awayTeam.name}</span>
                      </div>
                      <span className={`font-stat-value text-base ${match.awayScore > match.homeScore ? 'font-bold text-primary' : 'text-on-surface-variant'}`}>{match.awayScore}</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-col items-end shrink-0 w-24 pl-4 border-l border-surface-variant ml-4">
                    <span className="font-label-caps text-[10px] text-on-surface-variant uppercase text-right">{match.group}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}