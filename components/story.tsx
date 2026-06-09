import { SectionReveal } from './ui/section-reveal';

export function Story() {
  return (
    <section id="storia" className="relative py-28 md:py-36 bg-surface border-y border-border">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <SectionReveal className="text-center mb-16 md:mb-20">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            2006 — Oggi
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-foreground">
            La nostra storia
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <SectionReveal delay={100}>
            <div className="space-y-6 text-[1.02rem] leading-[1.85] text-muted">
              <p>
                Nel 2006 il Signore parlò al mio cuore dicendomi di mettere a disposizione gratuitamente tutto ciò che avevo e avrei ricevuto da Lui:{' '}
                <strong className="text-foreground font-medium">canti, prediche, insegnamenti, libri</strong> e tutto il resto.
              </p>
              <p>
                Quel passo di fede costituì, umanamente parlando, una grossa perdita economica, ma segnò anche una{' '}
                <strong className="text-foreground font-medium">svolta determinante</strong>. Dopo aver pubblicato gratuitamente i canti nel nostro sito, nel primo mese registrammo più di{' '}
                <strong className="text-foreground font-medium">80.000 download</strong> da tutto il mondo.
              </p>
              <p>
                Migliaia di testimonianze, email, sms, in questi anni, hanno riempito di gioia e gratitudine il nostro cuore per quello che Dio ha operato in salvezza, guarigioni, liberazioni, battesimi di Spirito Santo, chiamate al ministero, conferme profetiche, famiglie riunite, suicidi scampati.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="space-y-6 text-[1.02rem] leading-[1.85] text-muted">
              <blockquote className="font-serif italic text-lg md:text-xl text-gold-light/90 pl-5 border-l-2 border-gold/50 bg-gold-muted/40 p-5 rounded-r-xl leading-[1.7]">
                «Una sorella della nostra comunità, malata di cancro da diversi mesi e sapendo che era arrivato per lei il momento di andare con il Padre, ha desiderato farlo ascoltando i tuoi canti.»
              </blockquote>
              <p>
                Non riuscivo a credere alle mie orecchie, ma in qualche minuto realizzai quanto fosse importante che la presenza di Dio ci accompagni in{' '}
                <strong className="text-foreground font-medium">ogni istante della nostra esistenza</strong>, anche l'ultimo.
              </p>
              <p>
                Incoraggiamo il download, la duplicazione e la riproduzione di tutto il materiale pubblicato su questo sito. La decisione di seminare gratuitamente ha fatto sì che{' '}
                <strong className="text-foreground font-medium">decine e decine di migliaia di persone</strong> fossero raggiunte. Permetteteci di farlo ancora oggi.{' '}
                <strong className="text-foreground font-medium">Scaricate e diffondete!</strong>
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
