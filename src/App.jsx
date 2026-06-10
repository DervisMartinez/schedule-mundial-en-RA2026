import React, { useState, useRef } from 'react';
import Header from './Header';
import DatePicker from '../DatePicker';
import MatchFeed from '../MatchFeed';
import RightColumn from '../RightColumn';
import Groups from './Groups';
import Results from './Results';
import Fixture from './Fixture';

function App() {
  const [activeTab, setActiveTab] = useState('calendario');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-surface-bright text-on-surface font-body-md min-h-screen flex flex-col pb-20">
      <Header />
      
      {/* Sub Navigation for Portal Style */}
      <div className="bg-surface-container-low border-b border-surface-variant z-40 sticky top-0">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <nav className="flex overflow-x-auto hide-scrollbar gap-6 py-3">
            <a onClick={() => setActiveTab('calendario')} className={`font-label-caps text-label-caps uppercase whitespace-nowrap flex items-center gap-2 cursor-pointer transition-colors ${activeTab === 'calendario' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: activeTab === 'calendario' ? "'FILL' 1" : "'FILL' 0" }}>calendar_today</span>
              Calendario
            </a>
            <a onClick={() => setActiveTab('resultados')} className={`font-label-caps text-label-caps uppercase whitespace-nowrap flex items-center gap-2 cursor-pointer transition-colors ${activeTab === 'resultados' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: activeTab === 'resultados' ? "'FILL' 1" : "'FILL' 0" }}>sports_score</span>
              Resultados
            </a>
            <a onClick={() => setActiveTab('grupos')} className={`font-label-caps text-label-caps uppercase whitespace-nowrap flex items-center gap-2 cursor-pointer transition-colors ${activeTab === 'grupos' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: activeTab === 'grupos' ? "'FILL' 1" : "'FILL' 0" }}>format_list_numbered</span>
              Grupos
            </a>
            <a onClick={() => setActiveTab('fixture')} className={`font-label-caps text-label-caps uppercase whitespace-nowrap flex items-center gap-2 cursor-pointer transition-colors ${activeTab === 'fixture' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: activeTab === 'fixture' ? "'FILL' 1" : "'FILL' 0" }}>account_tree</span>
              Fixture
            </a>
          </nav>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <main className="flex-1 w-full flex flex-col">
          {activeTab === 'calendario' && (
            <>
              <DatePicker />
              <div className="flex-1 w-full max-w-7xl mx-auto p-margin-mobile md:p-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter md:gap-8">
                <MatchFeed />
                <RightColumn />
              </div>
            </>
          )}
          {activeTab === 'grupos' && <Groups />}
          {activeTab === 'resultados' && <Results />}
          {activeTab === 'fixture' && <Fixture />}
        </main>
      </div>

      {/* Floating Live Radio Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-primary-container text-on-primary shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:gap-8 flex-1">
            <div className="flex flex-col shrink-0">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-white rounded-full live-pulse"></div>
                <span className="font-label-caps text-[10px] uppercase tracking-wider">En Directo</span>
              </div>
              <span className="font-label-caps text-[10px] opacity-80">90.9 FM</span>
            </div>
            <div className="flex items-center gap-4 flex-1 max-w-md">
              <audio ref={audioRef} src="https://transmision.radioamerica.com.ve:8087/" preload="none"></audio>
              <button onClick={togglePlay} className="w-10 h-10 md:w-12 md:h-12 bg-white text-primary rounded-full flex items-center justify-center hover:scale-105 transition-transform shrink-0 shadow-md">
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>
              <div className="flex-1 flex flex-col justify-center hidden sm:flex">
                <span className="font-headline-md text-sm md:text-base leading-tight truncate font-bold text-white">Radio América</span>
                <div className="flex items-center gap-3 mt-1">
                  <span className="material-symbols-outlined text-[16px] opacity-80">volume_up</span>
                  <div className="flex-1 h-1.5 bg-white/30 rounded-full relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-2/3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4 border-l border-white/20 pl-6">
            <span className="font-label-caps text-[12px] uppercase opacity-90">Transmisión Oficial</span>
            <img alt="Radio América Logo Mini" className="h-8 w-auto object-contain invert brightness-0" src="/LOGORADIO.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;