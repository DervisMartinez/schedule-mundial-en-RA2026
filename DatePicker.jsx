import React, { useState, useEffect } from 'react';
import { fetchMatches } from './api';

export default function DatePicker() {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const getDates = async () => {
      const matches = await fetchMatches();
      const uniqueDates = [];
      
      matches.forEach(m => {
        const d = new Date(m.rawDate);
        const dateStr = d.toDateString();
        
        if (!uniqueDates.find(item => item.full === dateStr)) {
          uniqueDates.push({
            full: dateStr,
            dayName: d.toLocaleDateString('es-ES', { weekday: 'short' }).substring(0, 3).toUpperCase(),
            dayNumber: d.getDate(),
            isToday: dateStr === new Date().toDateString()
          });
        }
      });

      // Ordenar fechas cronológicamente
      uniqueDates.sort((a, b) => new Date(a.full) - new Date(b.full));
      setDates(uniqueDates);

      // Seleccionar "Hoy" por defecto si hay juegos, si no, ir al primer día del torneo
      const today = new Date().toDateString();
      const hasToday = uniqueDates.find(d => d.full === today);
      const initial = hasToday ? today : (uniqueDates.length > 0 ? uniqueDates[0].full : '');
      
      if (initial) {
        handleSelect(initial);
      }
    };
    getDates();
  }, []);

  const handleSelect = (dateStr) => {
    setSelectedDate(dateStr);
    window.dispatchEvent(new CustomEvent('dateChange', { detail: dateStr }));
  };

  return (
    <div className="w-full bg-surface-container-lowest border-b border-surface-variant">
      <div className="max-w-7xl mx-auto flex overflow-x-auto hide-scrollbar px-margin-mobile md:px-margin-desktop py-4 gap-4 items-center justify-start">
        {dates.map((date) => {
          const isSelected = selectedDate === date.full;
          return (
            <button
              key={date.full}
              onClick={() => handleSelect(date.full)}
              className={`shrink-0 flex flex-col items-center justify-center p-2 rounded-lg min-w-[60px] transition-colors ${
                isSelected
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-container-highest text-on-surface hover:bg-surface-container'
              }`}
            >
              <span className="font-label-caps text-label-caps">{date.isToday ? 'HOY' : date.dayName}</span>
              <span className="font-stat-value text-stat-value mt-1">{date.dayNumber}</span>
              {isSelected && <div className="h-1 w-1 bg-white rounded-full mt-1"></div>}
            </button>
          );
        })}
      </div>
    </div>
  );
}