import React, { useState, useEffect } from 'react';
import { fetchMatches } from './api';

export default function MainBoard() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetchMatches().then(data => {
      setMatches(data);
    });
  }, []);

  return (
    <main className="flex-1 flex flex-col overflow-y-auto bg-surface-bright">
      {/* Date Picker */}
      <div className="w-full bg-surface-container-lowest border-b border-surface-variant sticky top-0 z-10">
        <div className="flex overflow-x-auto hide-scrollbar px-margin-mobile md:px-margin-desktop py-4 gap-4 items-center">
          <button className="shrink-0 flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container text-on-surface-variant min-w-[60px] opacity-50">
            <span className="font-label-caps text-label-caps">MIE</span>
            <span className="font-stat-value text-stat-value mt-1">10</span>
          </button>
          <button className="shrink-0 flex flex-col items-center justify-center p-2 rounded-lg bg-primary text-on-primary min-w-[60px] shadow-sm relative">
            <span className="font-label-caps text-label-caps">JUE</span>
            <span className="font-stat-value text-stat-value mt-1">11</span>
            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-secondary-fixed-dim rounded-full"></div>
          </button>
          <button className="shrink-0 flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-highest text-on-surface min-w-[60px]">
            <span className="font-label-caps text-label-caps">VIE</span>
            <span className="font-stat-value text-stat-value mt-1">12</span>
          </button>
          <button className="shrink-0 flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-highest text-on-surface min-w-[60px]">
            <span className="font-label-caps text-label-caps">SAB</span>
            <span className="font-stat-value text-stat-value mt-1">13</span>
          </button>
          <button className="shrink-0 flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-highest text-on-surface min-w-[60px]">
            <span className="font-label-caps text-label-caps">DOM</span>
            <span className="font-stat-value text-stat-value mt-1">14</span>
          </button>
          <button className="shrink-0 flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-highest text-on-surface min-w-[60px]">
            <span className="font-label-caps text-label-caps">LUN</span>
            <span className="font-stat-value text-stat-value mt-1">15</span>
          </button>
        </div>
      </div>

      <div className="flex-1 p-margin-mobile md:p-margin-desktop grid grid-cols-1 xl:grid-cols-12 gap-gutter">
        {/* Match Feed */}
        <div className="xl:col-span-8 flex flex-col gap-6">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-live-indicator rounded-full live-pulse"></div>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase">En Vivo</h3>
            </div>
            
            {matches.filter(m => m.isLive).length === 0 && (
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-sm">
                <span className="material-symbols-outlined text-outline mb-2 text-4xl" style={{ fontVariationSettings: "'FILL' 0" }}>event_upcoming</span>
                <span className="font-headline-md text-on-surface-variant">Aún no hay partidos en juego</span>
                <span className="font-body-md text-sm text-outline mt-1">El Mundial 2026 inicia el 11 de Junio</span>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {matches.filter(m => m.isLive).map(match => (
                <div key={match.id} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-card-padding relative overflow-hidden group hover:border-primary-container transition-colors shadow-[0_0_15px_rgba(193,53,53,0.1)]">
                  <div className="absolute top-0 right-0 bg-primary text-on-primary px-3 py-1 rounded-bl-lg font-stat-value text-stat-value text-xs">
                    <span className="live-pulse inline-block w-2 h-2 bg-white rounded-full mr-1"></span> {match.minute}'
                  </div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant mb-4">{match.group} • {match.stadium}</div>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-surface-variant rounded-full overflow-hidden">
                          <img alt={`${match.homeTeam.name} Flag`} className="w-full h-full object-cover" src={match.homeTeam.flag} />
                        </div>
                        <span className="font-headline-md text-headline-md">{match.homeTeam.name}</span>
                      </div>
                      <span className="font-display-score text-[24px] leading-[24px] text-primary">{match.homeScore}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-surface-variant rounded-full overflow-hidden">
                          <img alt={`${match.awayTeam.name} Flag`} className="w-full h-full object-cover" src={match.awayTeam.flag} />
                        </div>
                        <span className="font-headline-md text-headline-md">{match.awayTeam.name}</span>
                      </div>
                      <span className="font-display-score text-[24px] leading-[24px] text-on-surface">{match.awayScore}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-surface-variant flex justify-between items-center cursor-pointer hover:opacity-80">
                    <span className="font-label-caps text-label-caps text-primary">Radio América en Vivo</span>
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>volume_up</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-4">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase">Próximos Partidos</h3>
            </div>
            <div className="flex flex-col gap-3">
              {matches.filter(m => !m.isLive).map(match => (
                <div key={match.id} className="bg-surface-container-lowest border border-surface-dim rounded-lg p-3 flex items-center justify-between hover:bg-surface-container-low transition-colors cursor-pointer">
                  <div className="flex-1 flex items-center justify-end gap-3 pr-4 border-r border-surface-dim">
                    <span className="font-body-md text-body-md font-bold text-right leading-tight">{match.homeTeam.name}</span>
                    <div className="w-6 h-6 bg-surface-variant rounded-full overflow-hidden shrink-0">
                      <img alt={`${match.homeTeam.name} Flag`} className="w-full h-full object-cover" src={match.homeTeam.flag} />
                    </div>
                  </div>
                  <div className="px-2 flex flex-col items-center justify-center min-w-[80px]">
                    <span className="font-stat-value text-stat-value text-on-surface">{match.time}</span>
                    <span className="font-label-caps text-[10px] text-on-surface-variant mt-1 text-center">{match.group}</span>
                    <span className="font-label-caps text-[10px] text-primary mt-1 uppercase text-center">{match.stadium}</span>
                  </div>
                  <div className="flex-1 flex items-center justify-start gap-3 pl-4 border-l border-surface-dim">
                    <div className="w-6 h-6 bg-surface-variant rounded-full overflow-hidden shrink-0">
                      <img alt={`${match.awayTeam.name} Flag`} className="w-full h-full object-cover" src={match.awayTeam.flag} />
                    </div>
                    <span className="font-body-md text-body-md font-bold leading-tight">{match.awayTeam.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column / Standings & News */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
            <div className="bg-surface-dim px-4 py-3 border-b border-outline-variant flex justify-between items-center">
              <h4 className="font-headline-md text-[16px] leading-[20px] font-bold uppercase">Grupo A</h4>
              <span className="font-label-caps text-[10px] text-on-surface-variant cursor-pointer hover:text-primary">VER TODO</span>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low font-label-caps text-label-caps text-on-surface-variant border-b border-surface-dim">
                  <th className="py-2 pl-4 w-8">#</th>
                  <th className="py-2">Equipo</th>
                  <th className="py-2 text-center w-8">J</th>
                  <th className="py-2 text-center w-8">G</th>
                  <th className="py-2 text-center w-8">Pts</th>
                </tr>
              </thead>
              <tbody className="font-stat-value text-[13px]">
                <tr className="border-b border-surface-variant bg-white relative">
                  <td className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></td>
                  <td className="py-3 pl-4">1</td>
                  <td className="py-3 font-body-md text-sm font-bold flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full overflow-hidden shrink-0"><img alt="" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGzTJoU-28gpaaCPNoOtYpmoXHeIlrhNuGiaD1q2WnV07_Knjo4gI1jpUngVtXt7htW2SgxOcJn-hAbQ7681OeZp-cUHA3pC7FSt4-ZeQd6NvqoPIX92JFoCmGCGOxkFdEp8mf2cPBc_fl47pVTUSXk4Y3cwXB01GpaK_EKgbHtWfTVuJRug5YHz5P7az_wGWHIq6nm1IzTMU0kAUZS01HswYlnDjQUk2KBQrY1SGiPqlVcrBhi7gwG0GzhHyw0JfT-vlA6JT-1AQ" /></div>
                    Argentina
                  </td>
                  <td className="py-3 text-center text-on-surface-variant">2</td>
                  <td className="py-3 text-center text-on-surface-variant">2</td>
                  <td className="py-3 text-center font-bold text-primary">6</td>
                </tr>
                <tr className="border-b border-surface-variant bg-surface-bright relative">
                  <td className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></td>
                  <td className="py-3 pl-4">2</td>
                  <td className="py-3 font-body-md text-sm font-bold flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full overflow-hidden shrink-0"><img alt="" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD64GMg9_4xma3aZRtk2ki8ibMRrq5CB3mMacJvs9ESPRQgSBQIqBURL0TEtTW7xmOuvvRbcVzerFN-1gJ3-HqIXef5dYx3_FHWsKCXJgMhnE_48RBQHQhMt2K5hDIhCoN9q2NpKH0slaOOLVfuYCve_j2njLrS4QVNm_V7dbskqfxcKcRSW7CabRum0j-TMO5wq8U5wi1rlSyZcDVqFsrZlyA84IBcjkJ7d7NAmddhn99B3GfALCB7awF7qzxD7yQPwjBs77E-tJ0" /></div>
                    Canadá
                  </td>
                  <td className="py-3 text-center text-on-surface-variant">2</td>
                  <td className="py-3 text-center text-on-surface-variant">1</td>
                  <td className="py-3 text-center font-bold">3</td>
                </tr>
                <tr className="border-b border-surface-variant bg-white">
                  <td className="py-3 pl-4">3</td>
                  <td className="py-3 font-body-md text-sm flex items-center gap-2 text-on-surface-variant">
                    <div className="w-4 h-4 rounded-full overflow-hidden shrink-0 opacity-50"><img alt="" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmLKgczh3nSE2V8aBecS21wJy12bOO4J9_MgD5Fu3Cgx3G8GbmsrudEWmfyNxMCthDnGYXpD1iJw9iGplvoYi7Pd3ckyMl8ZOEW7kbILGQYKHFddAQStOVyeji5k2vb1QrbH0v2tQB0nq14QB99YgSmJtbzO6qR_ygoZwtt1b8qZzQR6FhwnrQLCYAlqD3rbg57l0gJgrbU__P5L_eauzgGQOesJQHA8kTVOqJufRSAOsV-joRkNHvPKcECFYiAB8AyX8sdU2GtnQ" /></div>
                    Chile
                  </td>
                  <td className="py-3 text-center text-on-surface-variant">2</td>
                  <td className="py-3 text-center text-on-surface-variant">0</td>
                  <td className="py-3 text-center font-bold text-on-surface-variant">1</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
            <div className="bg-surface-dim px-4 py-3 border-b border-outline-variant flex justify-between items-center">
              <h4 className="font-headline-md text-[16px] leading-[20px] font-bold uppercase">Grupo B</h4>
            </div>
            <div className="p-4 flex items-center justify-center bg-surface-container-low h-24">
              <span className="font-label-caps text-on-surface-variant">Partidos por iniciar</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
            <div className="bg-surface-dim px-4 py-3 border-b border-outline-variant flex justify-between items-center">
              <h4 className="font-headline-md text-[16px] leading-[20px] font-bold uppercase">NOTICIAS DESTACADAS</h4>
            </div>
            <div className="flex flex-col">
              {/* News Item 1 */}
              <div className="p-3 border-b border-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer group">
                <div className="flex gap-3">
                  <div className="w-24 h-16 bg-surface-variant rounded overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=200&h=150&auto=format&fit=crop" alt="Estadio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h5 className="font-headline-md text-[13px] leading-tight text-on-surface group-hover:text-primary transition-colors">Nuevas sedes confirmadas para la gran final del Mundial</h5>
                    <span className="font-label-caps text-[10px] text-primary uppercase">Radio América</span>
                  </div>
                </div>
              </div>
              {/* News Item 2 */}
              <div className="p-3 border-b border-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer group">
                <div className="flex gap-3">
                  <div className="w-24 h-16 bg-surface-variant rounded overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=200&h=150&auto=format&fit=crop" alt="Entrenamiento" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h5 className="font-headline-md text-[13px] leading-tight text-on-surface group-hover:text-primary transition-colors">Vinotinto inicia preparación intensa en el predio nacional</h5>
                    <span className="font-label-caps text-[10px] text-secondary uppercase">WordPress</span>
                  </div>
                </div>
              </div>
              {/* News Item 3 */}
              <div className="p-3 hover:bg-surface-container-low transition-colors cursor-pointer group">
                <div className="flex gap-3">
                  <div className="w-24 h-16 bg-surface-variant rounded overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=200&h=150&auto=format&fit=crop" alt="Balón" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h5 className="font-headline-md text-[13px] leading-tight text-on-surface group-hover:text-primary transition-colors">Análisis: Los favoritos para liderar el Grupo A</h5>
                    <span className="font-label-caps text-[10px] text-primary uppercase">Radio América</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}