import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BrandMark } from './BrandMark';

const links = [
  { href: '#how', label: 'How it works' },
  { href: '#invest', label: 'Invest' },
  { href: '#compare', label: 'Why Beam' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/85 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <nav className="max-w-[1120px] mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <BrandMark size={26} />
          <span className="font-display font-semibold text-lg tracking-tight">Beam</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#download"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-display font-semibold text-white bg-gradient-to-br from-cobalt to-cobalt-dark shadow-[0_10px_22px_-8px_rgba(54,84,255,0.55)] transition-transform active:scale-[0.97] hover:shadow-[0_14px_28px_-8px_rgba(54,84,255,0.6)]"
        >
          Get the app
        </a>
      </nav>
    </motion.header>
  );
}
