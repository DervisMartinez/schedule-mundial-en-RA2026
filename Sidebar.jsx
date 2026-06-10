import React, { useState, useRef } from 'react';

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col bg-surface-container-low dark:bg-surface-dark border-r border-outline-variant w-64 shrink-0 h-full p-4 gap-2">
      <div className="mb-6 px-4">
        <h2 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">Mundial 2026</h2>
        <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">Radio América</p>
      </div>
      <nav className="flex flex-col gap-1 flex-1">
        <a className="bg-primary-container text-on-primary-container font-bold rounded-xl flex items-center gap-3 p-3 transition-all duration-200 scale-98" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
          <span className="font-label-caps text-label-caps">Calendario</span>
        </a>
        <a className="text-on-surface-variant hover:bg-surface-variant dark:hover:bg-inverse-surface rounded-xl flex items-center gap-3 p-3 transition-colors" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>sports_score</span>
          <span className="font-label-caps text-label-caps">Resultados</span>
        </a>
        <a className="text-on-surface-variant hover:bg-surface-variant dark:hover:bg-inverse-surface rounded-xl flex items-center gap-3 p-3 transition-colors" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>format_list_numbered</span>
          <span className="font-label-caps text-label-caps">Grupos</span>
        </a>
        <a className="text-on-surface-variant hover:bg-surface-variant dark:hover:bg-inverse-surface rounded-xl flex items-center gap-3 p-3 transition-colors" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>account_tree</span>
          <span className="font-label-caps text-label-caps">Fixture</span>
        </a>
      </nav>
      <div className="mt-auto bg-primary-container text-on-primary p-3 rounded-xl flex flex-col gap-2 shadow-lg">
        <RadioPlayer />
      </div>
    </aside>
  );
}

function RadioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const streamUrl = 'https://transmision.radioamerica.com.ve:8087/RA909FM';

  const toggleRadio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => console.error("Error al reproducir la radio:", error));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={streamUrl} preload="none" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full live-pulse"></div>
            <span className="font-label-caps text-[10px] uppercase tracking-wider">En Directo</span>
          </div>
          <span className="font-label-caps text-[10px] opacity-80">90.9 FM</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={toggleRadio} className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{isPlaying ? 'pause' : 'play_arrow'}</span>
          </button>
          <div className="flex-1 flex flex-col">
            <span className="font-headline-md text-[12px] leading-tight truncate">Radio América</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="material-symbols-outlined text-[16px] opacity-80">volume_up</span>
              <div className="flex-1 h-1 bg-white/30 rounded-full relative">
                <div className="absolute left-0 top-0 h-full w-2/3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}