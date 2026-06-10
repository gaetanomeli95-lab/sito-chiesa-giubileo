'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import Image from 'next/image';

/* ─── Staggered reveal variants ─── */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  /* Parallax transforms — disabled when reduced-motion is preferred */
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.5, 0.85]);

  const parallaxImageY = prefersReducedMotion ? 0 : imageY;
  const parallaxContentY = prefersReducedMotion ? 0 : contentY;

  return (
    <section
      ref={sectionRef}
      className="relative h-[100dvh] overflow-hidden"
    >
      {/* ── Background image with parallax ── */}
      <motion.div
        className="absolute inset-0"
        style={{ y: parallaxImageY }}
      >
        <motion.div
          className="absolute inset-[-8%]"
          initial={{ scale: 1 }}
          animate={
            prefersReducedMotion
              ? {}
              : { scale: 1.06 }
          }
          transition={
            prefersReducedMotion
              ? {}
              : {
                  duration: 20,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'reverse',
                }
          }
        >
          <Image
            src="/hero/hero-4.jpg"
            alt="Senza Misura — Un ministero di grazia senza confini"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
        </motion.div>
      </motion.div>

      {/* ── Cinematic overlay ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: overlayOpacity }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.35)_100%)]" />
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-8"
        style={{ y: parallaxContentY }}
      >
        <motion.div
          className="max-w-[52rem] mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Overline */}
          <motion.p
            variants={fadeUp}
            className="text-[11px] md:text-xs font-medium uppercase tracking-[0.16em] text-gold mb-5 md:mb-6"
          >
            Corrado Salmè — Dal 2006
          </motion.p>

          {/* Main title */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-[clamp(3.2rem,9vw,7rem)] font-semibold leading-[0.95] tracking-[-0.02em] text-white mb-5 md:mb-6"
          >
            Senza Misura
          </motion.h1>

          {/* Subtitle — generosity as the core thesis */}
          <motion.p
            variants={fadeUp}
            className="text-white/80 text-[16px] md:text-lg leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto"
          >
            Ricevuto gratis. Dato gratis. Un archivio aperto di prediche,
            musica e insegnamenti biblici — senza abbonamenti, senza paywall.
          </motion.p>

          {/* Scripture — the theological anchor for the brand name */}
          <motion.blockquote
            variants={fadeUp}
            className="mb-10 md:mb-12 max-w-lg mx-auto"
          >
            <p className="font-serif italic text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.6] text-white/60">
              «Perché colui che Dio ha mandato, proferisce le parole di Dio:
              perché Dio non dà lo Spirito con misura.»
            </p>
            <cite className="block mt-4 text-[11px] font-medium uppercase tracking-[0.12em] text-gold/90 not-italic">
              Giovanni 3:34
            </cite>
          </motion.blockquote>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#materiali"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gold text-background text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 hover:bg-gold-light hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
              Inizia ad ascoltare
            </a>

            <a
              href="#storia"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/20 text-white/80 text-[12px] md:text-[13px] font-medium uppercase tracking-[0.08em] transition-all duration-300 hover:border-white/40 hover:text-white hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Conosci la storia
            </a>
          </motion.div>

          {/* Honest social proof — no fake numbers */}
          <motion.p
            variants={fadeUp}
            className="mt-10 md:mt-12 text-[12px] md:text-[13px] text-white/40"
          >
            Dal 2006 · Accesso libero e gratuito
          </motion.p>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2.2,
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
          Scorri
        </span>
        <motion.div
          className="w-px h-6 md:h-8 bg-gradient-to-b from-gold/50 to-transparent"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  scaleY: [0.5, 1, 0.5],
                  opacity: [0.4, 0.8, 0.4],
                }
          }
          transition={
            prefersReducedMotion
              ? {}
              : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
          }
        />
      </motion.div>
    </section>
  );
}
