'use client';

import { useState, useEffect } from 'react';
import { Logo } from './logo';

const heroImages = [
  '/hero/hero-0.jpg',
  '/hero/hero-1.jpg',
  '/hero/hero-2.jpg',
  '/hero/hero-3.jpg',
  '/hero/hero-4.jpg',
  '/hero/hero-5.jpg',
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background image slideshow with fade */}
      {heroImages.map((img, i) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            i === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        >
          {/* Dark overlay + gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        </div>
      ))}

      <div className="relative z-10 max-w-3xl mx-auto animate-fade-in">
        <div className="mb-8 flex justify-center">
          <Logo className="w-20 h-20 text-gold" />
        </div>

        <h1 className="font-serif text-[clamp(2.6rem,6.5vw,5rem)] font-semibold leading-[1.05] tracking-tight text-white mb-5">
          Senza Misura
        </h1>

        <p className="text-white/90 text-[15px] md:text-base tracking-[0.08em] uppercase font-medium mb-12">
          Corrado Salmè — Predicazioni, Musica e Insegnamenti Biblici
        </p>

        <blockquote className="relative text-left md:text-center pl-5 md:pl-0 border-l-2 md:border-l-0 md:border-t-2 border-gold/60 pt-0 md:pt-8 mb-12 max-w-xl mx-auto">
          <p className="font-serif italic text-[clamp(1.15rem,2.2vw,1.5rem)] leading-[1.5] text-white/90">
            «Perché colui che Dio ha mandato, proferisce le parole di Dio, perché Dio non dà lo Spirito con misura.»
          </p>
          <cite className="block mt-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-gold not-italic">
            Giovanni 3:34
          </cite>
        </blockquote>

        <a
          href="#materiali"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gold/40 text-gold text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-500 hover:bg-gold hover:text-background hover:shadow-[0_0_40px_rgba(200,169,110,0.18)] hover:border-gold"
        >
          Esplora i materiali
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17l9.2-9.2M17 17V8H8" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white">Scorri</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent animate-scroll-line" />
      </div>
    </section>
  );
}
