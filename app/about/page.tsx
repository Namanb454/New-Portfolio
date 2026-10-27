import Image from "next/image";
import Link from "next/link";

const askAbout = [
  "Full-stack ownership (schema → deploy)",
  "TypeScript, Next.js & NestJS",
  "PostgreSQL & data modeling",
  "AI-first development & evals",
  "RBAC & multi-cloud dashboards",
  "Bikes, cricket & badminton",
];
const rightNow = [
  "SDE 1 at Star Estate",
  "Building PropAdvise",
  "AI-assisted engineering workflows",
  "No-code builders (LP & dashboard)",
  "Open to collaboration",
  "Taking on freelance projects",
];
const numbers = [
  { n: "1.6+", label: "Years of experience", invert: false },
  { n: "20+", label: "Projects done", invert: false },
  { n: "97", label: "Mobile Lighthouse", invert: false },
  { n: "22", label: "Tools in my stack", invert: true },
];
const skills = [
  "React / Next.js / TanStack Query",
  "TypeScript / JavaScript (ES6+)",
  "State management (Redux, Zustand)",
  "Tailwind CSS & shadcn/ui",
  "Node.js / Express / NestJS",
  "FastAPI & Python",
  "PostgreSQL / MongoDB / Supabase",
  "REST API design, RBAC & auth",
  "AI-assisted dev, OpenAI & Claude APIs",
  "Git, Docker, CI/CD & Vercel",
];

type Cat = "FE" | "BE" | "DB" | "LG" | "TL";
const cats: Record<Cat, { label: string; tile: string; sw: string }> = {
  FE: {
    label: "Frontend",
    tile: "bg-[var(--tile)] text-[var(--fg)]",
    sw: "bg-[var(--tile)] border border-[var(--line)]",
  },
  BE: {
    label: "Backend",
    tile: "bg-transparent border-[1.5px] border-[var(--fg)] text-[var(--fg)]",
    sw: "border-[1.5px] border-[var(--fg)]",
  },
  DB: {
    label: "Data",
    tile: "bg-[var(--fg)] text-[var(--bg)]",
    sw: "bg-[var(--fg)]",
  },
  LG: {
    label: "Languages",
    tile: "bg-[var(--tile2)] text-[var(--fg)]",
    sw: "bg-[var(--tile2)] border border-[var(--line)]",
  },
  TL: {
    label: "Tools",
    tile: "bg-transparent border-[1.5px] border-dashed border-[var(--subtle)] text-[var(--fg)]",
    sw: "border-[1.5px] border-dashed border-[var(--subtle)]",
  },
};
const stackList: [string, string, Cat][] = [
  ["React", "Re", "FE"], ["Next.js", "Nx", "FE"], ["TanStack", "Tq", "FE"],
  ["Redux", "Rx", "FE"], ["Zustand", "Zu", "FE"], ["Tailwind CSS", "Tw", "FE"],
  ["Framer Motion", "Fm", "FE"], ["GraphQL", "Gq", "FE"], ["Node.js", "Nd", "BE"],
  ["Express", "Ex", "BE"], ["NestJS", "Ns", "BE"], ["FastAPI", "Fa", "BE"],
  ["PostgreSQL", "Pg", "DB"], ["MongoDB", "Mg", "DB"], ["Supabase", "Sb", "DB"],
  ["TypeScript", "Ts", "LG"], ["JavaScript", "Js", "LG"], ["Python", "Py", "LG"],
  ["C++", "Cp", "LG"], ["Git", "Gt", "TL"], ["Docker", "Dk", "TL"], ["AWS", "Aw", "TL"],
];

export default function AboutPage() {
  return (
    <div>
      <section className="pt-28">
        <h1 className="bi d2 m-0 text-[36px] font-medium leading-[1.2] tracking-[-0.02em]">
          About me
        </h1>
        <p className="bi d3 mt-3 max-w-[600px] text-[17px] leading-[1.6] text-[var(--muted)]">
          Software engineer, product builder and occasional long-distance rider.
        </p>
      </section>

      <figure
        className="hero-photo bi d3 relative mt-12 overflow-hidden rounded-[20px]"
        style={{ aspectRatio: "16 / 9", background: "#1A1A1A" }}
      >
        <Image
          src="/hero-image.jpg"
          alt="Naman Bansal in a black tee against a dark backdrop"
          fill
          sizes="952px"
          className="object-cover"
          style={{ objectPosition: "50% 22%" }}
        />
        <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] text-[#F5F5F5] backdrop-blur-[10px]" style={{ background: "rgba(10,10,10,0.6)" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#F5F5F5]" />
          Based in Delhi NCR, India
        </figcaption>
      </figure>

      <section aria-labelledby="story-h" className="pt-24">
        <h2 id="story-h" className="rv mb-7 text-2xl font-medium tracking-[-0.015em]">
          Story
        </h2>
        <p className="rv mb-6 max-w-[680px] text-base leading-[1.75] text-[var(--muted)]">
          Hey — I&apos;m Naman, a full-stack software engineer with 1.6+ years of
          production experience and a strong bias for end-to-end ownership. I
          currently build at Star Estate as an SDE 1, taking products from
          database schema and API design through to frontend architecture and
          deployment.
        </p>
        <p className="rv mb-6 max-w-[680px] text-base leading-[1.75] text-[var(--muted)]">
          I specialise in the TypeScript ecosystem — Next.js, React, NestJS and
          PostgreSQL — and care deeply about clean architecture, scalable data
          modeling and performant, maintainable code. Along the way I&apos;ve
          shipped platforms across proptech, cloud-cost, e-commerce and wellness.
        </p>
        <p className="rv m-0 max-w-[680px] text-base leading-[1.75] text-[var(--muted)]">
          I&apos;m an early adopter of AI-first development, building custom
          tooling and evals to ship faster without compromising quality. When
          I&apos;m off the keyboard, I&apos;m usually out on my bike, playing
          cricket, or on a badminton court.
        </p>
      </section>

      <section aria-label="Interests" className="flex flex-wrap gap-10 pt-20">
        {[
          { h: "Ask me about", items: askAbout },
          { h: "Right now", items: rightNow },
        ].map((col) => (
          <div key={col.h} className="rv flex-[1_1_260px]">
            <h3 className="m-0 text-base font-medium">{col.h}</h3>
            <ul className="m-0 mt-3 flex list-none flex-col gap-[9px] p-0 text-[15px] text-[var(--muted)]">
              {col.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section aria-label="By the numbers" className="pt-24">
        <div className="rv grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4">
          {numbers.map((x) => (
            <div
              key={x.label}
              className="rounded-[18px] p-6"
              style={{
                background: x.invert ? "var(--fg)" : "var(--tile)",
                color: x.invert ? "var(--bg)" : undefined,
              }}
            >
              <div className="text-[40px] font-medium tracking-[-0.04em]">
                {x.n}
              </div>
              <div
                className="mt-1 text-sm"
                style={{ color: x.invert ? undefined : "var(--muted)", opacity: x.invert ? 0.7 : 1 }}
              >
                {x.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="stack-h" className="pt-32">
        <div className="rv mb-6 flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="stack-h" className="m-0 text-2xl font-medium tracking-[-0.015em]">
            My stack
          </h2>
          <div className="flex flex-wrap gap-4 text-xs text-[var(--muted)]">
            {(Object.keys(cats) as Cat[]).map((k) => (
              <span key={k} className="inline-flex items-center gap-1.5">
                <span className={`inline-block h-3 w-3 rounded ${cats[k].sw}`} />
                {cats[k].label}
              </span>
            ))}
          </div>
        </div>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-3 p-0">
          {stackList.map(([name, sym, cat], i) => (
            <li
              key={name}
              title={name}
              className={`tile-rot rv flex flex-col justify-between rounded-[18px] p-2.5 px-3 ${cats[cat].tile}`}
              style={{ aspectRatio: "1" }}
            >
              <span className="flex justify-between font-mono text-[10px] opacity-60">
                <span>{(i < 9 ? "0" : "") + (i + 1)}</span>
                <span>{cat}</span>
              </span>
              <span className="text-center text-[28px] font-medium leading-none tracking-[-0.03em]">
                {sym}
              </span>
              <span className="truncate text-center text-[11px] opacity-75">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="exp-h" className="pt-32">
        <h2 id="exp-h" className="rv mb-7 text-2xl font-medium tracking-[-0.015em]">
          Experience
        </h2>
        <div className="flex flex-wrap gap-10">
          <div className="flex flex-[1_1_260px] flex-col gap-7">
            {[
              ["Star Estate", "SDE 1", "Feb 2026 – Present"],
              ["XEqualTo", "Full Stack Developer · Contract", "Apr 2025 – Apr 2026"],
              ["Mono", "SDE", "May 2025 – Feb 2026"],
              ["GGSIPU, Delhi", "B.Tech, Information Technology", "2021 – 2025"],
            ].map(([a, b, c]) => (
              <div key={a} className="rv">
                <div className="text-base font-medium">{a}</div>
                <div className="mt-2 text-[15px] text-[var(--subtle)]">{b}</div>
                <div className="mt-1.5 text-[15px] text-[var(--subtle)]">{c}</div>
              </div>
            ))}
          </div>
          <div className="rv flex-[1_1_300px]">
            <div className="text-base font-medium">Skills</div>
            <ul className="m-0 mt-2 flex list-none flex-col gap-[9px] p-0 text-[15px] text-[var(--muted)]">
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="cta-h"
        className="rv mt-32 flex flex-wrap items-end justify-between gap-7 rounded-[24px] p-[clamp(28px,5vw,56px)]"
        style={{ background: "var(--fg)", color: "var(--bg)" }}
      >
        <div className="flex-[1_1_360px]">
          <h2
            id="cta-h"
            className="m-0 font-medium leading-[1.1] tracking-[-0.03em]"
            style={{ fontSize: "clamp(28px,3.6vw,40px)" }}
          >
            Have a project in mind?
          </h2>
          <p className="mt-3.5 max-w-[460px] text-base leading-[1.6] opacity-70">
            SaaS products, web and mobile apps, AI agents &amp; chatbots, or a
            consultation — tell me what you&apos;re building.
          </p>
        </div>
        <Link
          href="/book-a-call"
          className="va inline-flex min-h-[52px] items-center gap-2.5 rounded-full px-6 text-[15px] font-medium"
          style={{ background: "var(--bg)", color: "var(--fg)" }}
        >
          Book a call
          <svg
            className="ar"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
