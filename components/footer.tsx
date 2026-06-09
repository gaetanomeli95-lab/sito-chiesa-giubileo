import { Logo, LogoText } from './logo';

export function Footer() {
  return (
    <footer id="contatti" className="relative border-t border-border bg-background">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-14 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-border">
          <div className="flex items-center gap-3">
            <Logo className="w-9 h-9 text-gold" />
            <div>
              <LogoText className="text-base text-foreground" />
              <p className="text-[12px] text-muted tracking-wide">Corrado Salmè — Senza Misura</p>
            </div>
          </div>

          <a
            href="mailto:info@senzamisura.org"
            className="relative text-[15px] text-gold font-medium transition-colors duration-300 hover:text-gold-light group/email"
          >
            info@senzamisura.org
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover/email:w-full" />
          </a>
        </div>

        <div className="pt-8 text-center">
          <p className="text-[13px] text-muted leading-relaxed">
            Scarica, duplica, diffondi. «Gratuitamente avete ricevuto, gratuitamente date.»
          </p>
        </div>
      </div>
    </footer>
  );
}
