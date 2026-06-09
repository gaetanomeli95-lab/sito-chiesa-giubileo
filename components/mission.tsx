import { SectionReveal } from './ui/section-reveal';

export function Mission() {
  return (
    <section id="missione" className="relative py-28 md:py-36 bg-surface border-y border-border">
      <div className="max-w-[720px] mx-auto px-6 lg:px-8 text-center">
        <SectionReveal>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            La nostra missione
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-foreground mb-10">
            Sovrabbondante grazia
          </h2>
        </SectionReveal>

        <SectionReveal delay={120}>
          <p className="text-[1.08rem] leading-[1.85] text-muted mb-6">
            Il nostro desiderio è che visitando queste pagine e, gustandone il contenuto, tu possa sperimentare la{' '}
            <strong className="text-foreground font-medium">sovrabbondante grazia di Dio</strong> che è in Cristo Gesù il nostro Signore, essendo sopraffatto dal Suo amore e dalla Sua meravigliosa presenza.
          </p>
        </SectionReveal>

        <SectionReveal delay={220}>
          <p className="text-[1.08rem] leading-[1.85] text-muted">
            Niente potrà mai sostituire la potenza di una sola Parola che esce dalla Sua bocca; per questo preghiamo che tu possa ricevere quella benedizione che solo Lui può dare,{' '}
            <strong className="text-foreground font-medium">senza misura</strong>.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
