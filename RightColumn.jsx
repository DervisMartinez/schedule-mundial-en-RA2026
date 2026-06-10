import React, { useState, useEffect } from 'react';
import { fetchStandings } from './api';

export default function RightColumn() {
  const [groupsData, setGroupsData] = useState([]);

  useEffect(() => {
    fetchStandings().then(data => setGroupsData(data));
  }, []);

  return (
    <div className="lg:col-span-4 flex flex-col gap-6">
      {/* Grupos Map */}
      {groupsData.map((group) => (
        <div key={group.name} className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <div className="bg-surface-dim px-4 py-3 border-b border-outline-variant flex justify-between items-center">
            <h4 className="font-headline-md text-[16px] leading-[20px] font-bold uppercase text-on-surface">{group.name}</h4>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low font-label-caps text-label-caps text-on-surface-variant border-b border-surface-dim">
                <th className="py-2 pl-4 w-6">#</th>
                <th className="py-2">Equipo</th>
                <th className="py-2 text-center w-6" title="Partidos Jugados">PJ</th>
                <th className="py-2 text-center w-6" title="Ganados">G</th>
                <th className="py-2 text-center w-6" title="Empatados">E</th>
                <th className="py-2 text-center w-6" title="Perdidos">P</th>
                <th className="py-2 text-center w-8" title="Puntos">Pts</th>
              </tr>
            </thead>
            <tbody className="font-stat-value text-[13px]">
              {group.teams.map((team, index) => (
                <tr key={team.name} className={`border-b border-surface-variant ${index < 2 ? 'bg-white' : 'bg-surface-bright'} relative`}>
                  <td className="py-3 pl-4">
                    {index < 2 && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>}
                    {index + 1}
                  </td>
                  <td className={`py-3 font-body-md text-sm ${index < 2 ? 'font-bold text-on-surface' : 'text-on-surface-variant'} flex items-center gap-2 pr-2`}>
                    <div className={`w-5 h-5 rounded-full overflow-hidden shrink-0 ${index >= 2 ? 'opacity-50' : ''}`}>
                      <img alt={`${team.name} flag`} className="w-full h-full object-cover" src={`https://flagcdn.com/w40/${team.flag}.png`} />
                    </div>
                    <span className="truncate max-w-[90px] xl:max-w-[130px] inline-block align-middle" title={team.name}>{team.name}</span>
                  </td>
                  <td className="py-3 text-center text-on-surface-variant">{team.pj}</td>
                  <td className="py-3 text-center text-on-surface-variant">{team.g}</td>
                  <td className="py-3 text-center text-on-surface-variant">{team.e}</td>
                  <td className="py-3 text-center text-on-surface-variant">{team.p}</td>
                  <td className={`py-3 text-center font-bold ${index < 2 ? 'text-primary' : 'text-on-surface-variant'}`}>{team.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {/* Noticias Destacadas */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col shadow-sm">
        <div className="bg-surface-dim px-4 py-3 border-b border-outline-variant flex justify-between items-center">
          <h4 className="font-headline-md text-[16px] leading-[20px] font-bold uppercase text-on-surface">NOTICIAS DESTACADAS</h4>
        </div>
        <div className="flex flex-col">
          <div className="p-4 border-b border-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer group">
            <div className="flex gap-4">
              <div className="w-24 h-16 bg-surface-variant rounded-md overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=200&h=150&auto=format&fit=crop" alt="Estadio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
              </div>
              <div className="flex flex-col justify-between py-1">
                <h5 className="font-headline-md text-[14px] leading-tight text-on-surface group-hover:text-primary transition-colors">Nuevas sedes confirmadas para la gran final del Mundial</h5>
                <span className="font-label-caps text-[10px] text-primary uppercase mt-1">Radio América</span>
              </div>
            </div>
          </div>
          {/* News Item 2 */}
          <div className="p-4 border-b border-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer group">
            <div className="flex gap-4">
              <div className="w-24 h-16 bg-surface-variant rounded-md overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=200&h=150&auto=format&fit=crop" alt="Entrenamiento" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
              </div>
              <div className="flex flex-col justify-between py-1">
                <h5 className="font-headline-md text-[14px] leading-tight text-on-surface group-hover:text-primary transition-colors">Vinotinto inicia preparación intensa en el predio nacional</h5>
                <span className="font-label-caps text-[10px] text-secondary uppercase mt-1">WordPress</span>
              </div>
            </div>
          </div>
          {/* News Item 3 */}
          <div className="p-4 hover:bg-surface-container-low transition-colors cursor-pointer group">
            <div className="flex gap-4">
              <div className="w-24 h-16 bg-surface-variant rounded-md overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=200&h=150&auto=format&fit=crop" alt="Balón" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
              </div>
              <div className="flex flex-col justify-between py-1">
                <h5 className="font-headline-md text-[14px] leading-tight text-on-surface group-hover:text-primary transition-colors">Análisis: Los favoritos para liderar el Grupo A</h5>
                <span className="font-label-caps text-[10px] text-primary uppercase mt-1">Radio América</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}