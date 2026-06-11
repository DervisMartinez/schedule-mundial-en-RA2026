import React, { useState, useEffect } from 'react';
import { fetchMatches } from './api';

export default function AdminPanel() {
  const [matches, setMatches] = useState([]);
  const [overrides, setOverrides] = useState({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Cargamos los partidos
    fetchMatches().then(data => {
      setMatches(data);
      // Obtenemos las modificaciones desde la Base de Datos
      fetch('/get_overrides.php')
        .then(res => res.json())
        .then(dbOverrides => setOverrides(dbOverrides || {}))
        .catch(err => console.error("Error al cargar datos manuales", err));
    });
  }, []);

  const handleChange = (id, field, value) => {
    setOverrides(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value
      }
    }));
  };

  const handleSave = async () => {
    try {
      await fetch('/save_overrides.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(overrides)
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error("Error al guardar en la BD", error);
    }
  };

  return (
    <div className="min-h-screen bg-surface-bright text-on-surface font-body-md p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-surface-variant pb-4">
          <div>
            <h1 className="font-headline-lg text-3xl font-bold text-primary">Panel de Control</h1>
            <p className="text-on-surface-variant">Actualiza marcadores y enlaza notas de prensa manualmente.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-primary hover:underline font-label-caps">Volver al Inicio</a>
            <button onClick={handleSave} className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-surface-tint transition-colors">
              {saved ? '¡Guardado!' : 'Guardar Cambios'}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col gap-2 p-2">
          {matches.map(match => {
            const override = overrides[match.id] || {};
            return (
              <div key={match.id} className="p-4 border border-surface-variant rounded-lg hover:bg-surface-container-low flex flex-col gap-3">
                
                {/* Fila 1: Marcadores */}
                <div className="w-full flex items-center justify-between md:justify-start gap-4">
                  <span className="font-label-caps text-on-surface-variant w-16">{match.group}</span>
                  <div className="flex items-center gap-2 flex-1 max-w-[200px] justify-end">
                    <span className="font-bold truncate">{override.homeTeamName || match.homeTeam.name}</span>
                    <img src={match.homeTeam.flag} alt="flag" className="w-6 h-6 rounded-full object-cover shrink-0" />
                  </div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number" 
                      className="w-12 h-10 border border-outline-variant rounded text-center font-bold" 
                      placeholder="-" 
                      value={override.homeScore !== undefined ? override.homeScore : (match.homeScore ?? '')} 
                      onChange={(e) => handleChange(match.id, 'homeScore', e.target.value)}
                    />
                    <span>-</span>
                    <input 
                      type="number" 
                      className="w-12 h-10 border border-outline-variant rounded text-center font-bold" 
                      placeholder="-" 
                      value={override.awayScore !== undefined ? override.awayScore : (match.awayScore ?? '')} 
                      onChange={(e) => handleChange(match.id, 'awayScore', e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-2 flex-1 max-w-[200px]">
                    <img src={match.awayTeam.flag} alt="flag" className="w-6 h-6 rounded-full object-cover shrink-0" />
                    <span className="font-bold truncate">{override.awayTeamName || match.awayTeam.name}</span>
                  </div>
                </div>
                
                {/* Fila 2: Controles de Estado, Minuto y Enlace */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 border-t border-surface-variant pt-3">
                  <select 
                    className="w-full px-3 py-2 border border-outline-variant rounded text-sm font-bold bg-white"
                    value={override.status || (match.status !== 'NS' ? match.status : 'NS')}
                    onChange={(e) => handleChange(match.id, 'status', e.target.value)}
                  >
                    <option value="NS">Programado / Sin Empezar</option>
                    <option value="LIVE">🔴 En Vivo</option>
                    <option value="FT">⚫ Finalizado</option>
                  </select>
                  
                  <input type="text" className="w-full px-3 py-2 border border-outline-variant rounded text-sm" placeholder="Minuto (Ej: 45+2')" value={override.minute !== undefined ? override.minute : match.minute} onChange={(e) => handleChange(match.id, 'minute', e.target.value)} />
                  
                  <input type="text" className="w-full px-3 py-2 border border-outline-variant rounded text-sm" placeholder="URL para Ver/Escuchar..." value={override.matchUrl !== undefined ? override.matchUrl : ''} onChange={(e) => handleChange(match.id, 'matchUrl', e.target.value)} />
                </div>

                {/* Fila 3: Reasignar nombres para 8vos, 4tos, etc. */}
                <div className="w-full flex flex-col md:flex-row gap-3">
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-outline-variant rounded text-sm bg-surface-bright" 
                    placeholder={`Reasignar Local (Escribir en inglés, Ej: Brazil)`}
                    value={override.homeTeamName !== undefined ? override.homeTeamName : ''} 
                    onChange={(e) => handleChange(match.id, 'homeTeamName', e.target.value)} />
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-outline-variant rounded text-sm bg-surface-bright" 
                    placeholder={`Reasignar Visitante (Ej: Argentina)`}
                    value={override.awayTeamName !== undefined ? override.awayTeamName : ''} 
                    onChange={(e) => handleChange(match.id, 'awayTeamName', e.target.value)} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}