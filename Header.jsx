import React from 'react';

export default function Header() {
  return (
    <header className="bg-surface dark:bg-surface-dark border-b border-outline-variant dark:border-outline z-50 relative shrink-0">
      <div className="flex justify-between items-center px-margin-desktop h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <img alt="Radio América Logo" className="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFCm94klohUqTAyUDLBFpY_4uINZDloy2_e94rs-HNHg1pPCV56YqDMy59Vk7LBEoeyhN1JDdqTR-KA0vjsfo0hmllUv1NPdw5MIRiS45Xloy_dhG3UcTKeb9ajVtdEf_TwFO-2S4Q4XcBE8QX8XcPUK0JHyz0yDzX8Nmp8ZA_zCJlVXR2XQk5H-bxeFvq0xISUg0q1it4bCeptB0Bx0pCBXTPVrlk9t7IZKgnKBo-gLM6B4-muMTZQNPmTYaOTV-QSB0BHBIibdM" />
          <span className="font-headline-lg text-headline-lg font-extrabold text-primary dark:text-primary-fixed-dim tracking-tighter">Radio América</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-primary dark:text-primary-fixed-dim border-b-2 border-primary pb-1 font-label-caps text-label-caps uppercase transition-colors duration-200" href="#">Mundial 2026</a>
          <a className="text-on-background dark:text-on-background font-medium font-label-caps text-label-caps uppercase hover:text-primary transition-colors duration-200" href="#">Directo</a>
          <a className="text-on-background dark:text-on-background font-medium font-label-caps text-label-caps uppercase hover:text-primary transition-colors duration-200" href="#">Podcast</a>
          <a className="text-on-background dark:text-on-background font-medium font-label-caps text-label-caps uppercase hover:text-primary transition-colors duration-200" href="#">Noticias</a>
        </nav>
      </div>
    </header>
  );
}