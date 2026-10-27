import Link from "next/link";

const pages = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/book-a-call", label: "Book a call" },
];

const socials = [
  { href: "https://github.com/Namanb454", label: "GitHub" },
  { href: "https://www.linkedin.com/in/naman-bansal-9585nb/", label: "LinkedIn" },
  { href: "https://x.com/namanbansaldev", label: "X" },
  { href: "https://www.instagram.com/namanbansaldev/", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="rv flex flex-col items-center gap-[18px] pt-32 pb-14 text-center">
      <a
        href="mailto:namanb454@gmail.com"
        className="ul text-[15px] text-[var(--muted)]"
      >
        namanb454@gmail.com
      </a>
      <nav
        aria-label="Footer"
        className="flex flex-wrap justify-center gap-5 text-[13px] text-[var(--subtle)]"
      >
        {pages.map((p) => (
          <Link key={p.href} href={p.href} className="ul">
            {p.label}
          </Link>
        ))}
      </nav>
      <div className="flex flex-wrap justify-center gap-5 text-[13px] text-[var(--subtle)]">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="ul"
          >
            {s.label}
          </a>
        ))}
        <span>© {new Date().getFullYear()} Naman Bansal</span>
      </div>
    </footer>
  );
}
