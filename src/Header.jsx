export default function Header() {
  return (
    <header className="bg-surface dark:bg-surface-dark border-b border-outline-variant dark:border-outline z-50 relative shrink-0">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <img alt="Radio América Logo" className="h-10 w-auto object-contain" src="/LOGORADIO.png" />
          <span className="font-headline-lg text-[24px] md:text-headline-lg font-extrabold text-primary dark:text-primary-fixed-dim tracking-tighter">Radio América</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-primary dark:text-primary-fixed-dim border-b-2 border-primary pb-1 font-label-caps text-label-caps uppercase transition-colors duration-200" href="https://radioamerica.com.ve/category/mundial-2026-en-america/">Mundial 2026</a>
          <a className="text-on-background dark:text-on-background font-medium font-label-caps text-label-caps uppercase hover:text-primary transition-colors duration-200" href="#">Calendario</a>
          <a className="text-on-background dark:text-on-background font-medium font-label-caps text-label-caps uppercase hover:text-primary transition-colors duration-200" href="https://radioamerica.com.ve/">Noticias</a>
        </nav>
      </div>
    </header>
  );
}