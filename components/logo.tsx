export function Logo({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Giubileo logo"
    >
      <path
        d="M20 2C20 2 14 8 14 14C14 18 16 21 20 24C24 21 26 18 26 14C26 8 20 2 20 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gold"
      />
      <path
        d="M20 6C20 6 17 10 17 13.5C17 16 18 18 20 20C22 18 23 16 23 13.5C23 10 20 6 20 6Z"
        fill="currentColor"
        className="text-gold/60"
      />
      <path
        d="M20 24V38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-foreground"
      />
      <path
        d="M14 30C14 30 17 33 20 33C23 33 26 30 26 30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-foreground"
      />
      <path
        d="M12 34C12 34 16 37 20 37C24 37 28 34 28 34"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-foreground"
      />
    </svg>
  );
}

export function LogoText({ className = '' }: { className?: string }) {
  return (
    <span className={`font-serif font-semibold tracking-tight ${className}`}>
      Giubileo
    </span>
  );
}
