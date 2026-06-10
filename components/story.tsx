'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

/* ── Milestone data — a vertical journey ── */
const milestones = [
  {
    year: '2006',
    title: 'Il ministero nasce',
    body: 'Il Signore parlò al cuore di Corrado Salmè: mettere a disposizione gratuitamente tutto ciò che aveva ricevuto. Canti, prediche, insegnamenti — senza prezzo, senza confini.',
    quote: null,
  },
  {
    year: '2007',
    title: 'I primi canti',
    body: 'Pubblicati gratuitamente sul sito. Nel primo mese: più di 80.000 download da tutto il mondo. Quello che sembrava una perdita economica si rivelò una svolta determinante.',
    quote: '«Una sorella malata di cancro ha desiderato andare con il Padre ascoltando i tuoi canti.»',
  },
  {
    year: '2011',
    title: 'Fire Generation',
    body: 'Inizia la registrazione sistematica degli insegnamenti. Dieci aspetti del ministero dello Spirito Santo — una serie che segna la maturità del messaggio.',
    quote: null,
  },
  {
    year: '2012',
    title: 'Crescita dell\'archivio',
    body: 'Predicazioni, libri, lezioni iChurch, produzioni speciali. L\'archivio cresce di anno in anno, sempre con lo stesso principio: ricevuto gratis, dato gratis.',
    quote: null,
  },
  {
    year: '2020',
    title: 'Espansione online',
    body: 'La raccolta supera il migliaio di materiali. Audio, video, documenti — tutto accessibile senza registrazione, senza pubblicità, senza condizioni.',
    quote: null,
  },
  {
    year: 'Oggi',
    title: 'La collezione',
    body: 'Decine di migliaia di persone raggiunte. Migliaia di testimonianze di salvezza, guarigioni, liberazioni, chiamate al ministero, famiglie riunite.',
    quote: '«Permetteteci di farlo ancora oggi. Scaricate e diffondete.»',
  },
];

/* ── Variants ── */
const lineGrow = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const yearReveal = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ── Component ── */
export function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const variants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : undefined;

  return (
    <section
      id="storia"
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-background overflow-hidden"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          className="text-center mb-20 md:mb-28"
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={variants || fadeIn}
        >
          <span className="block text-[10px] md:text-[11px] font-medium uppercase tracking-[0.16em] text-gold mb-4">
            Un percorso di fede
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-semibold leading-tight text-foreground mb-4">
            La storia
          </h2>
          <p className="text-muted text-sm md:text-base max-w-md mx-auto">
            Dal primo passo di fede a oggi. Un viaggio attraverso vent'anni di ministero.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Central line — desktop only */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border origin-top"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={prefersReducedMotion ? undefined : lineGrow}
          />

          <div className="space-y-20 md:space-y-32">
            {milestones.map((m, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={m.year}
                  className={`relative md:grid md:grid-cols-2 md:gap-16 lg:gap-24 ${
                    isEven ? '' : 'md:direction-rtl'
                  }`}
                  initial={prefersReducedMotion ? false : 'hidden'}
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  variants={variants || fadeIn}
                >
                  {/* Year marker — mobile top, desktop center */}
                  <div className="md:hidden mb-6">
                    <span className="font-serif text-[clamp(3rem,8vw,5rem)] font-semibold leading-none text-gold/20">
                      {m.year}
                    </span>
                  </div>

                  {/* Text side */}
                  <div className={`${isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8 md:order-2'}`}>
                    {/* Desktop year */}
                    <div className="hidden md:block mb-5">
                      <motion.span
                        className="font-serif text-[clamp(3.5rem,6vw,5.5rem)] font-semibold leading-none text-gold/15"
                        variants={prefersReducedMotion ? undefined : yearReveal}
                      >
                        {m.year}
                      </motion.span>
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3">
                      {m.title}
                    </h3>
                    <p className="text-muted text-[15px] md:text-base leading-[1.75]">
                      {m.body}
                    </p>

                    {m.quote && (
                      <blockquote className="mt-5 pl-4 border-l-2 border-gold/40">
                        <p className="font-serif italic text-[15px] text-gold/80 leading-[1.7]">
                          {m.quote}
                        </p>
                      </blockquote>
                    )}
                  </div>

                  {/* Visual side — gradient panel with large year */}
                  <div
                    className={`hidden md:flex items-center justify-center ${
                      isEven ? 'md:order-2 md:pl-8' : 'md:order-1 md:pr-8'
                    }`}
                  >
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface-elevated border border-border">
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-serif text-[clamp(4rem,10vw,8rem)] font-bold text-foreground/[0.04] select-none">
                          {m.year}
                        </span>
                      </div>
                      {/* Dot on timeline */}
                      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold border-4 border-background" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
