import React, { useState, useEffect } from 'react';
import { fetchStandings } from '../api';

export default function Groups() {
  const [groupsData, setGroupsData] = useState([]);

  useEffect(() => {
    fetchStandings().then(data => {
      setGroupsData(data);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto w-full p-margin-mobile md:p-margin-desktop flex-1">
      <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg mb-8 text-on-background">Fase de Grupos</h2>
      
      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
        {groupsData.map((group) => (
          <div key={group.name} className="bg-surface-container-lowest rounded-xl border border-surface-dim overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-surface-dim px-table-cell-padding py-3 border-b border-surface-dim flex justify-between items-center">
              <h3 className="font-headline-md text-[16px] leading-[20px] font-bold uppercase text-on-surface">{group.name}</h3>
            </div>
            <div className="overflow-x-auto relative">
              <table className="w-full text-left border-collapse min-w-[300px]">
                <thead>
                  <tr className="bg-surface-container-low border-b border-surface-container text-on-surface-variant font-label-caps text-[10px] md:text-xs">
                    <th className="py-2 pl-4 pr-2 font-normal w-6">#</th>
                    <th className="py-2 px-2 font-normal text-left">Equipo</th>
                    <th className="py-2 px-1 text-center font-normal" title="Partidos Jugados">PJ</th>
                    <th className="py-2 px-1 text-center font-normal" title="Ganados">G</th>
                    <th className="py-2 px-1 text-center font-normal" title="Empatados">E</th>
                    <th className="py-2 px-1 text-center font-normal" title="Perdidos">P</th>
                    <th className="py-2 px-1 text-center font-normal" title="Diferencia de Goles">DG</th>
                    <th className="py-2 pr-4 pl-2 text-center font-bold" title="Puntos">Pts</th>
                  </tr>
                </thead>
                <tbody className="font-stat-value text-[13px]">
                  {group.teams.map((team, index) => (
                    <tr key={team.name} className={`border-b border-surface-container ${index < 2 ? 'bg-white' : 'bg-surface-bright'} relative`}>
                      <td className="py-3 pl-4 pr-2">
                        {index < 2 && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>}
                        {index + 1}
                      </td>
                      <td className={`py-3 px-2 flex items-center gap-2 ${index < 2 ? 'font-bold text-on-surface' : 'text-on-surface-variant'}`}>
                        <div className={`w-5 h-5 rounded-full overflow-hidden shrink-0 ${index >= 2 ? 'opacity-50' : ''}`}>
                          <img alt={`${team.name} flag`} className="w-full h-full object-cover" src={`https://flagcdn.com/w40/${team.flag}.png`} />
                        </div>
                        <span className="truncate max-w-[90px] xl:max-w-[130px]">{team.name}</span>
                      </td>
                      <td className="py-3 px-1 text-center text-on-surface-variant">{team.pj}</td>
                      <td className="py-3 px-1 text-center text-on-surface-variant">{team.g}</td>
                      <td className="py-3 px-1 text-center text-on-surface-variant">{team.e}</td>
                      <td className="py-3 px-1 text-center text-on-surface-variant">{team.p}</td>
                      <td className="py-3 px-1 text-center text-on-surface-variant">{team.dg > 0 ? `+${team.dg}` : team.dg}</td>
                      <td className={`py-3 pr-4 pl-2 text-center font-bold ${index < 2 ? 'text-primary' : 'text-on-surface-variant'}`}>{team.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}