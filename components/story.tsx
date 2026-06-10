'use client';

import { motion, useScroll, useTransform, useReducedMotion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

/* ── Milestone data — a documentary journey ── */
const milestones = [
  {
    year: '2006',
    title: 'Il ministero nasce',
    body: 'Il Signore parlò al cuore di Corrado Salmè: mettere a disposizione gratuitamente tutto ciò che aveva ricevuto. Canti, prediche, insegnamenti — senza prezzo, senza confini.',
    quote: null,
    image: '/hero/hero-0.jpg',
    speed: 1.0,
  },
  {
    year: '2007',
    title: 'I primi canti',
    body: 'Pubblicati gratuitamente sul sito. Nel primo mese: più di 80.000 download da tutto il mondo. Quello che sembrava una perdita economica si rivelò una svolta determinante.',
    quote: '«Una sorella malata di cancro ha desiderato andare con il Padre ascoltando i tuoi canti.»',
    image: '/hero/hero-1.jpg',
    speed: 1.4,
  },
  {
    year: '2011',
    title: 'Fire Generation',
    body: 'Inizia la registrazione sistematica degli insegnamenti. Dieci aspetti del ministero dello Spirito Santo — una serie che segna la maturità del messaggio.',
    quote: null,
    image: '/hero/hero-2.jpg',
    speed: 0.8,
  },
  {
    year: '2012',
    title: "Crescita dell'archivio",
    body: "Predicazioni, libri, lezioni iChurch, produzioni speciali. L'archivio cresce di anno in anno, sempre con lo stesso principio: ricevuto gratis, dato gratis.",
    quote: null,
    image: '/hero/hero-3.jpg',
    speed: 1.2,
  },
  {
    year: '2020',
    title: 'Espansione online',
    body: 'La raccolta supera il migliaio di materiali. Audio, video, documenti — tutto accessibile senza registrazione, senza pubblicità, senza condizioni.',
    quote: null,
    image: '/hero/hero-4.jpg',
    speed: 1.6,
  },
  {
    year: 'Oggi',
    title: 'La collezione',
    body: 'Decine di migliaia di persone raggiunte. Migliaia di testimonianze di salvezza, guarigioni, liberazioni, chiamate al ministero, famiglie riunite.',
    quote: '«Permetteteci di farlo ancora oggi. Scaricate e diffondete.»',
    image: '/hero/hero-5.jpg',
    speed: 1.0,
  },
];

/* ── Easing ── */
const easeOut = [0.16, 1, 0.3, 1] as const;

/* ── Single milestone ── */
function Milestone({
  data,
  index,
}: {
  data: (typeof milestones)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100 * data.speed, -100 * data.speed]
  );

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ y: prefersReducedMotion ? 0 : y }}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center"
    >
      {/* Giant year watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <span className="font-serif font-bold text-[clamp(120px,15vw,260px)] leading-none text-foreground/[0.04] select-none whitespace-nowrap">
          {data.year}
        </span>
      </div>

      {/* Text column */}
      <div
        className={`relative z-10 ${isEven ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'}`}
      >
        <motion.div
          initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.92 }}
          animate={
            isInView || prefersReducedMotion
              ? { opacity: 1, filter: 'blur(0px)', scale: 1 }
              : {}
          }
          transition={{ duration: 0.9, ease: easeOut }}
        >
          <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-gold mb-3">
            {data.year}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
            {data.title}
          </h3>
          <p className="text-muted text-[15px] md:text-base leading-[1.75] mb-5">
            {data.body}
          </p>

          {data.quote && (
            <div className="inline-block p-5 rounded-xl backdrop-blur-xl bg-white/[0.03] border border-white/10 shadow-2xl shadow-black/20 max-w-md">
              <p className="font-serif italic text-[15px] text-gold/80 leading-[1.7]">
                {data.quote}
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Image column */}
      <div
        className={`relative z-10 ${isEven ? 'md:order-2' : 'md:order-1'}`}
      >
        <motion.div
          initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.92 }}
          animate={
            isInView || prefersReducedMotion
              ? { opacity: 1, filter: 'blur(0px)', scale: 1 }
              : {}
          }
          transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/30"
        >
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
          {/* Depth vignette */}
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.4)]" />
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-4 h-4 rounded-full bg-gold border-[3px] border-background shadow-lg shadow-gold/20" />
      </div>
    </motion.div>
  );
}

/* ── Main component ── */
export function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="storia"
      className="relative py-24 md:py-36 bg-background overflow-hidden"
    >
      {/* Ambient depth background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-gold/[0.02] blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.015] blur-[100px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center mb-20 md:mb-32">
        <motion.span
          className="block text-[10px] md:text-[11px] font-medium uppercase tracking-[0.16em] text-gold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          Un percorso di fede
        </motion.span>
        <motion.h2
          className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-semibold leading-tight text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
        >
          La storia
        </motion.h2>
        <motion.p
          className="text-muted text-sm md:text-base max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
        >
          Dal primo passo di fede a oggi. Un viaggio attraverso vent&apos;anni di
          ministero.
        </motion.p>
      </div>

      {/* Timeline */}
      <div
        ref={containerRef}
        className="relative max-w-[1200px] mx-auto px-6 lg:px-8"
      >
        {/* Central progress line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
          {/* Track */}
          <div className="absolute inset-0 bg-border/60" />
          {/* Animated gold fill */}
          <motion.div
            className="absolute top-0 left-0 right-0 origin-top bg-gradient-to-b from-gold via-gold-light to-gold/40"
            style={{
              scaleY: prefersReducedMotion ? 1 : lineScale,
              height: '100%',
            }}
          />
        </div>

        {/* Milestones */}
        <div className="relative space-y-28 md:space-y-48">
          {milestones.map((m, i) => (
            <Milestone key={m.year} data={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
