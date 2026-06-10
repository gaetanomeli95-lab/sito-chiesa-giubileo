'use client';

import { useState, useEffect } from 'react';
import { Logo, LogoText } from './logo';

const navLinks = [
  { label: 'La Storia', href: '#storia' },
  { label: 'Materiali', href: '#materiali' },
  { label: 'Missione', href: '#missione' },
  { label: 'Contatti', href: '#contatti' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3 group">
            <Logo className="w-8 h-8 text-gold transition-transform duration-300 group-hover:scale-105" />
            <LogoText className={`text-lg transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white'}`} />
          </a>

          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 group/link ${scrolled ? 'text-muted hover:text-foreground' : 'text-white/90 hover:text-white'}`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover/link:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-[5px]"
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-px transition-all duration-300 ${scrolled ? 'bg-foreground' : 'bg-white'} ${
                menuOpen ? 'rotate-45 translate-y-[3px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-px transition-all duration-300 ${scrolled ? 'bg-foreground' : 'bg-white'} ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-px transition-all duration-300 ${scrolled ? 'bg-foreground' : 'bg-white'} ${
                menuOpen ? '-rotate-45 -translate-y-[3px]' : ''
              }`}
            />
          </button>
        </nav>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 py-6 space-y-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium uppercase tracking-[0.1em] text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
