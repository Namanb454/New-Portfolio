import Image from "next/image";
import Link from "next/link";
import PixelGrid from "@/components/PixelGrid";
import ProjectArt, { type ArtVariant } from "@/components/ProjectArt";

const selected: {
  name: string;
  desc: string;
  type: string;
  img?: string;
  org?: string;
  v: ArtVariant;
  bg: string;
  fgc?: string;
  gridc?: string;
}[] = [
  {
    name: "LP Builder",
    desc: "No-code landing page builder, exports PHP",
    type: "No-code builder",
    img: "/images/no_code_landing_page_builder.png",
    v: "type",
    bg: "#0A0A0A",
    fgc: "#F5F5F5",
    gridc: "#1C1C1C",
  },
  {
    name: "Roomi",
    desc: "Room rental & roommate-finding platform",
    type: "Web app · Marketplace",
    img: "/images/roomi.png",
    org: "Mono",
    v: "type",
    bg: "#FFFFFF",
    fgc: "#0A0A0A",
    gridc: "#F0F0F0",
  },
  {
    name: "Dashboard Builder",
    desc: "Drag-and-drop no-code dashboard builder",
    type: "Web app",
    img: "/images/no_code_dashboard_builder.png",
    v: "bars",
    bg: "#FFFFFF",
  },
  {
    name: "Maple Drive",
    desc: "Executive search firm website",
    type: "Marketing website",
    img: "/images/maple_drive.png",
    org: "Mono",
    v: "type",
    bg: "#0A0A0A",
    fgc: "#F5F5F5",
    gridc: "#1C1C1C",
  },
];

const stack = [
  { n: "01", sym: "Ts", name: "TypeScript" },
  { n: "02", sym: "Re", name: "React" },
  { n: "03", sym: "Nx", name: "Next.js" },
  { n: "04", sym: "Ns", name: "NestJS" },
  { n: "05", sym: "Nd", name: "Node.js" },
  { n: "06", sym: "Fa", name: "FastAPI" },
  { n: "07", sym: "Pg", name: "PostgreSQL" },
  { n: "08", sym: "Py", name: "Python" },
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

const explorations = [
  {
    title: "AI Gen Reels",
    body: "Interface concepts for generating short-form video with AI — prompt, preview and publish in one flow.",
    meta: "UI / UX",
  },
  {
    title: "Real Estate",
    body: "A property listing and discovery web app with search, filters and rich listing pages.",
    meta: "Web app",
  },
  {
    title: "Tipriyo",
    body: "Mobile app design exploring onboarding, navigation and a clean component set.",
    meta: "Mobile design",
  },
];

const h2 =
  "m-0 text-2xl font-medium tracking-[-0.015em] text-[var(--fg)]";

export default function Home() {
  return (
    <div id="top">
      {/* HERO */}
      <section className="pt-28">
        <Image
          className="bi d2 block rounded-full bg-[var(--tile)] object-cover"
          src="/images/profile.png"
          alt="Naman Bansal"
          width={64}
          height={64}
          style={{ objectPosition: "50% 20%", width: 64, height: 64 }}
          priority
        />
        <h1 className="bi d3 mt-7 text-[36px] font-medium leading-[1.2] tracking-[-0.02em]">
          Hi, I&apos;m Naman
        </h1>
        <p className="bi d4 mt-3 max-w-[600px] text-[17px] leading-[1.6] text-[var(--muted)]">
          Full-stack Software Engineer at Star Estate, shipping AI-first products
          end to end — from database schema and API design to frontend and
          deploy.
        </p>
        <div className="bi d5 mt-7 flex flex-wrap items-center gap-5 text-base font-medium">
          <a href="mailto:namanb454@gmail.com" className="ul">
            namanb454@gmail.com
          </a>
          <Link
            href="/book-a-call"
            className="va inline-flex items-center gap-1.5 text-[var(--muted)]"
          >
            <span className="ul">Book a call</span>
            <svg
              className="ar"
              width="13"
              height="13"
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
        </div>
      </section>

      {/* SELECTED WORK */}
      <section aria-labelledby="work-h" className="pt-32">
        <div className="rv mb-6 flex items-center justify-between">
          <h2 id="work-h" className={h2}>
            Selected work
          </h2>
          <Link href="/projects" className="ul text-[15px] font-medium">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-x-5 gap-y-7">
          {selected.map((p) => (
            <Link key={p.name} href="/projects" className="wcard rv block">
              <div
                className="frame relative overflow-hidden rounded-[18px] border border-[var(--line)]"
                style={{ aspectRatio: "7 / 5", background: p.bg }}
              >
                {p.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.img}
                    alt={p.name}
                    className="art absolute inset-0 h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                ) : (
                  <ProjectArt
                    variant={p.v}
                    name={p.name}
                    type={p.type}
                    fgc={p.fgc}
                    gridc={p.gridc}
                  />
                )}
              </div>
              <div className="pt-[18px]">
                <div className="flex items-center gap-2">
                  <span className="text-base font-medium">{p.name}</span>
                  {p.org && (
                    <span className="rounded-full bg-[var(--tile)] px-2 py-0.5 font-mono text-[10px] text-[var(--muted)]">
                      @ {p.org}
                    </span>
                  )}
                </div>
                <div className="mt-1.5 text-[15px] text-[var(--muted)]">
                  {p.desc}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section aria-labelledby="stack-h" className="pt-36">
        <h2 id="stack-h" className={`rv mb-6 ${h2}`}>
          My stack
        </h2>
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-3.5 p-0">
          {stack.map((s) => (
            <li
              key={s.n}
              title={s.name}
              className="tile rv flex flex-col justify-between rounded-[18px] bg-[var(--tile)] p-2.5 px-3"
              style={{ aspectRatio: "1" }}
            >
              <span className="font-mono text-[10px] text-[var(--subtle)]">
                {s.n}
              </span>
              <span className="text-center text-[28px] font-medium leading-none tracking-[-0.03em]">
                {s.sym}
              </span>
              <span className="truncate text-center text-[11px] text-[var(--muted)]">
                {s.name}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ABOUT */}
      <section aria-labelledby="about-h" className="pt-36">
        <h2 id="about-h" className={`rv mb-7 ${h2}`}>
          About
        </h2>
        <p className="rv mb-7 max-w-[680px] text-base leading-[1.75] text-[var(--muted)]">
          I&apos;m a full-stack software engineer at Star Estate (SDE 1) with
          1.6+ years of production experience and a bias for end-to-end ownership
          — from database schema and API design to frontend architecture and
          deployment.
        </p>
        <p className="rv mb-7 max-w-[680px] text-base leading-[1.75] text-[var(--muted)]">
          My stack centres on TypeScript, React, Next.js, NestJS and PostgreSQL.
          I&apos;m an early adopter of AI-first development, building custom
          tooling and evals to ship faster without compromising quality.
        </p>
        <p className="rv m-0 max-w-[680px] text-base leading-[1.75] text-[var(--muted)]">
          Outside of coding, you&apos;ll find me on long bike rides, playing
          cricket, or on the badminton court.
        </p>

        <div className="mt-14 grid grid-cols-3 gap-[clamp(8px,4vw,48px)]">
          <figure
            className="polar rv relative m-0"
            style={{ transform: "rotate(-4deg)" }}
          >
            <div
              className="overflow-hidden rounded-[18px] bg-[var(--tile)]"
              style={{
                aspectRatio: "9 / 10",
                boxShadow: "0 18px 40px -22px rgba(0,0,0,0.45)",
              }}
            >
              <Image
                src="/images/profile.png"
                alt="Naman in a black tee"
                width={300}
                height={333}
                className="block h-full w-full object-cover"
                style={{ objectPosition: "50% 15%" }}
              />
            </div>
          </figure>
          <figure
            className="polar rv relative m-0"
            style={{ transform: "rotate(3deg) translateY(10px)" }}
          >
            <div
              className="flex flex-col justify-between overflow-hidden rounded-[18px] p-[clamp(12px,2.4vw,24px)]"
              style={{
                aspectRatio: "9 / 10",
                background: "#0A0A0A",
                color: "#F5F5F5",
                boxShadow: "0 18px 40px -22px rgba(0,0,0,0.45)",
              }}
            >
              <svg
                viewBox="0 0 64 40"
                aria-hidden="true"
                style={{ width: "70%", height: "auto" }}
                fill="none"
                stroke="#F5F5F5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="28" r="9" />
                <circle cx="52" cy="28" r="9" />
                <path d="M12 28l12-14h14l14 14M24 14l-4-6h-6M38 14l6-6h6M30 28h8" />
              </svg>
              <span
                className="font-medium leading-[1.2] tracking-[-0.02em]"
                style={{ fontSize: "clamp(14px,2vw,20px)" }}
              >
                Long rides
                <br />
                <span style={{ color: "#A3A3A3" }}>to unwind</span>
              </span>
            </div>
          </figure>
          <figure
            className="polar rv relative m-0"
            style={{ transform: "rotate(-3deg)" }}
          >
            <div
              className="flex flex-col justify-between overflow-hidden rounded-[18px] p-[clamp(12px,2.4vw,24px)]"
              style={{
                aspectRatio: "9 / 10",
                background: "#E5E5E5",
                color: "#0A0A0A",
                boxShadow: "0 18px 40px -22px rgba(0,0,0,0.45)",
              }}
            >
              <svg
                viewBox="0 0 64 40"
                aria-hidden="true"
                style={{ width: "70%", height: "auto" }}
                fill="none"
                stroke="#0A0A0A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 36 30 8l6 5L12 40z" />
                <path d="M30 8l4-5 5 4-3 6" />
                <circle cx="50" cy="28" r="7" />
                <path d="M45 23c3 3 7 7 10 10" />
              </svg>
              <span
                className="font-medium leading-[1.2] tracking-[-0.02em]"
                style={{ fontSize: "clamp(14px,2vw,20px)" }}
              >
                Cricket &amp;
                <br />
                <span style={{ color: "#525252" }}>badminton</span>
              </span>
            </div>
          </figure>
        </div>
      </section>

      {/* EXPERIENCE + SKILLS */}
      <section aria-labelledby="exp-h" className="pt-40">
        <h2 id="exp-h" className={`rv mb-7 ${h2}`}>
          Experience
        </h2>
        <div className="flex flex-wrap gap-10">
          <div className="flex flex-[1_1_260px] flex-col gap-7">
            <div className="rv">
              <div className="text-base font-medium">Star Estate</div>
              <div className="mt-2 text-[15px] text-[var(--subtle)]">SDE 1</div>
              <div className="mt-1.5 text-[15px] text-[var(--subtle)]">
                Feb 2026 – Present
              </div>
            </div>
            <div className="rv">
              <div className="text-base font-medium">XEqualTo</div>
              <div className="mt-2 text-[15px] text-[var(--subtle)]">
                Full Stack Developer · Contract
              </div>
              <div className="mt-1.5 text-[15px] text-[var(--subtle)]">
                Apr 2025 – Apr 2026
              </div>
            </div>
            <div className="rv">
              <div className="text-base font-medium">Mono</div>
              <div className="mt-2 text-[15px] text-[var(--subtle)]">SDE</div>
              <div className="mt-1.5 text-[15px] text-[var(--subtle)]">
                May 2025 – Feb 2026
              </div>
            </div>
          </div>
          <div className="rv flex-[1_1_300px]">
            <div className="text-base font-medium">Skills</div>
            <ul className="m-0 mt-2 flex list-none flex-col gap-[9px] p-0">
              {skills.map((k) => (
                <li key={k} className="text-[15px] text-[var(--muted)]">
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EXPLORATIONS */}
      <section aria-labelledby="ex-h" className="pt-40">
        <div className="rv mb-6 flex items-center justify-between">
          <h2 id="ex-h" className={h2}>
            Design explorations
          </h2>
          <Link href="/gallery" className="ul text-[15px] font-medium">
            View gallery
          </Link>
        </div>
        <div className="rv overflow-hidden rounded-[22px] border border-[var(--line)]">
          {explorations.map((e, i) => (
            <Link
              key={e.title}
              href="/gallery"
              className={`erow block px-[clamp(20px,3vw,28px)] py-8 ${
                i > 0 ? "border-t border-[var(--line)]" : ""
              }`}
            >
              <span className="flex items-center justify-between gap-4">
                <span className="text-base font-medium">{e.title}</span>
                <svg
                  className="ar"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              <span className="mt-3.5 block max-w-[640px] text-[15px] leading-[1.7] text-[var(--muted)]">
                {e.body}
              </span>
              <span className="mt-4 block text-sm font-medium">{e.meta}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* PIXEL GRID */}
      <section aria-label="Naman, in pixels" className="pt-44">
        <PixelGrid />
      </section>
    </div>
  );
}
