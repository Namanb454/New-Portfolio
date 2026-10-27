"use client";

import Link from "next/link";
import { useState } from "react";
import ProjectArt, { type ArtVariant } from "@/components/ProjectArt";

type Group = "code" | "design" | "ai";
type Project = {
  id: string;
  name: string;
  kind: string;
  type: string;
  desc: string;
  img?: string;
  org?: string;
  groups: Group[];
  v: ArtVariant;
  bg: string;
  fgc?: string;
  gridc?: string;
  stack: string[];
  href: string;
  role: string;
  status: string;
  year?: string;
  overview: string;
};

const STACK: Record<string, [string, string]> = {
  TypeScript: ["Ts", "01"],
  "Next.js": ["Nx", "02"],
  React: ["Re", "03"],
  "Node.js": ["Nd", "04"],
  "Tailwind CSS": ["Tw", "05"],
  NestJS: ["Ns", "06"],
  LLMs: ["Ai", "07"],
};

const RAW: Project[] = [
  {
    id: "roomi",
    name: "Roomi",
    kind: "PROPTECH",
    type: "Web app · Marketplace",
    desc: "Room rental & roommate-finding platform",
    img: "/images/roomi.png",
    org: "Mono",
    groups: ["code"],
    v: "type",
    bg: "#FFFFFF",
    fgc: "#0A0A0A",
    gridc: "#F0F0F0",
    stack: [],
    href: "https://roomiapp.com/",
    year: "2025",
    role: "Full-stack developer",
    status: "Live",
    overview:
      "Roomi is a room rental and roommate-finding platform that connects verified renters with available rooms and compatible roommates. It features map and list browsing with rich filters — price, urgency, layout, gender, verification, amenities and duration — plus roommate verification and in-app safety checks.",
  },
  {
    id: "mapledrive",
    name: "Maple Drive",
    kind: "WEBSITE",
    type: "Marketing website",
    desc: "Executive search firm website",
    img: "/images/maple_drive.png",
    org: "Mono",
    groups: ["code", "design"],
    v: "type",
    bg: "#0A0A0A",
    fgc: "#F5F5F5",
    gridc: "#1C1C1C",
    stack: [],
    href: "https://mapledrive.com/",
    year: "2025",
    role: "Design & development",
    status: "Live",
    overview:
      "Maple Drive Partners is the marketing site for a retained executive search firm serving institutional asset managers and family offices. A refined, editorial experience that communicates four decades of relationships, absolute discretion and a highly selective partnership model.",
  },
  {
    id: "dashboard",
    name: "Dashboard Builder",
    kind: "NO-CODE",
    type: "Web app",
    desc: "Drag-and-drop no-code dashboard builder",
    img: "/images/no_code_dashboard_builder.png",
    groups: ["code"],
    v: "bars",
    bg: "#FFFFFF",
    stack: ["TypeScript", "React", "Tailwind CSS"],
    href: "https://no-code-dashboard-builder-9ja4.vercel.app/",
    year: "2025",
    role: "Full-stack developer",
    status: "Shipped",
    overview:
      "A drag-and-drop dashboard builder — fully customisable, with a live canvas that exports the result as clean, production-ready code.",
  },
  {
    id: "lpbuilder",
    name: "LP Builder",
    kind: "NO-CODE",
    type: "No-code builder · Web app",
    desc: "No-code landing page builder, exports PHP",
    img: "/images/no_code_landing_page_builder.png",
    groups: ["code", "design"],
    v: "type",
    bg: "#0A0A0A",
    fgc: "#F5F5F5",
    gridc: "#1C1C1C",
    stack: [],
    href: "https://no-code-landing-page-builder.vercel.app/",
    year: "2026",
    role: "Design & development",
    status: "Live",
    overview:
      "LP Builder is a no-code builder for real-estate campaign landing pages. A three-pane visual editor lets you edit every text, image, colour and font, then export a ready-to-upload folder of clean PHP — with built-in lead capture, UTM/GCLID tracking, Find & Replace for relaunches, and analytics integrations (gtag, GTM, Meta Pixel). No sign-up, no build step.",
  },
  {
    id: "webpforge",
    name: "WebP Forge",
    kind: "TOOL",
    type: "Browser tool · Web app",
    desc: "Batch image converter & compressor",
    img: "/images/webpforge.jpg",
    groups: ["code"],
    v: "type",
    bg: "#0A0A0A",
    fgc: "#F5F5F5",
    gridc: "#1C1C1C",
    stack: [],
    href: "https://image-converter-beryl-chi.vercel.app/",
    year: "2026",
    role: "Design & development",
    status: "Live",
    overview:
      "WebP Forge is a browser-based image converter and compressor. Drop in a batch of images, set a quality target with ECO / BAL / PRO presets, and export optimised WebP — all client-side, with a live spectral preview of each result.",
  },
  {
    id: "tipriyo",
    name: "Tipriyo",
    kind: "AI",
    type: "AI · Virtual staging",
    desc: "AI virtual staging with 7+ room styles",
    img: "/images/tipriyo.png",
    groups: ["design", "ai"],
    v: "phones",
    bg: "#1A1A1A",
    stack: [],
    href: "https://tipriyo.ai",
    year: "2024",
    role: "Design & development",
    status: "Shipped",
    overview:
      "Tipriyo is an AI virtual staging app with 7+ room categories and styles, saving up to 90% of traditional staging cost. I designed the flows and shipped the interface.",
  },
  {
    id: "docugen",
    name: "Docu Gen",
    kind: "AI",
    type: "AI · Docs",
    desc: "Document processing and summarization",
    img: "/images/p12.webp",
    groups: ["code", "ai"],
    v: "type",
    bg: "#EDEDED",
    fgc: "#0A0A0A",
    gridc: "#DCDCDC",
    stack: ["LLMs", "Node.js"],
    href: "https://docugen.ai",
    year: "2026",
    role: "Full-stack developer",
    status: "Shipped",
    overview:
      "Docu Gen is an intelligent document processing and summarization tool that streamlines writing workflows with NLP and LLMs.",
  },
  {
    id: "reamor",
    name: "Reamor UI",
    kind: "OPEN SOURCE",
    type: "UI library",
    desc: "Parallax animation library for React",
    img: "/images/p1.webp",
    groups: ["code", "design"],
    v: "type",
    bg: "#0A0A0A",
    fgc: "#F5F5F5",
    gridc: "#1C1C1C",
    stack: ["React", "TypeScript"],
    href: "https://reamor-ui.vercel.app/",
    year: "2024",
    role: "Creator",
    status: "Shipped",
    overview:
      "Reamor UI is an open-source library that lets developers add smooth parallax animations to their interfaces with minimal setup.",
  },
];

const FILTERS: { id: "all" | Group; label: string }[] = [
  { id: "all", label: "All" },
  { id: "code", label: "Code" },
  { id: "design", label: "Design" },
  { id: "ai", label: "AI" },
];

function primary(href: string) {
  if (href.includes("github.com")) return "Source code";
  return "Visit site";
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | Group>("all");
  const [sel, setSel] = useState<string | null>(null);

  const count = (g: "all" | Group) =>
    RAW.filter((p) => g === "all" || p.groups.includes(g as Group)).length;
  const visible = RAW.filter(
    (p) => filter === "all" || p.groups.includes(filter as Group)
  );

  const selected = sel ? RAW.find((p) => p.id === sel) ?? null : null;

  if (selected) {
    const idx = RAW.findIndex((p) => p.id === selected.id);
    const more = [RAW[(idx + 1) % RAW.length], RAW[(idx + 2) % RAW.length]];
    const open = (id: string) => {
      setSel(id);
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch {}
    };
    return (
      <div>
        <article className="pt-[72px]">
          <button
            type="button"
            onClick={() => {
              setSel(null);
              try {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } catch {}
            }}
            className="vback bi d1 inline-flex min-h-11 items-center gap-2 border-0 bg-transparent text-sm text-[var(--muted)]"
          >
            <svg
              className="ar"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            All projects
          </button>
          <h1 className="bi d2 mt-6 text-[36px] font-medium leading-[1.2] tracking-[-0.02em]">
            {selected.name}
          </h1>
          <div className="bi d3 mt-3.5 flex flex-wrap items-center text-[15px] font-medium">
            <a
              href={selected.href}
              target="_blank"
              rel="noreferrer"
              className="va inline-flex items-center gap-1.5 pr-3.5"
            >
              <span className="ul">{primary(selected.href)}</span>
              <svg
                className="ar"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
            <span aria-hidden className="h-3.5 w-px bg-[var(--line)]" />
            <Link
              href="/book-a-call"
              className="va inline-flex items-center gap-1.5 pl-3.5 text-[var(--muted)]"
            >
              <span className="ul">Build something similar</span>
              <svg
                className="ar"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </Link>
          </div>
        </article>

        <div className="bi d4 mt-10">
          <div
            className="relative overflow-hidden rounded-[20px] border border-[var(--line)]"
            style={{ aspectRatio: "16 / 9", background: selected.bg }}
          >
            <Cover p={selected} />
          </div>
        </div>

        <section className="pt-12">
          <dl className="rv m-0 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 border-b border-[var(--line)] pb-8">
            {[
              ["Type", selected.type],
              ["Role", selected.role],
              ["Year", selected.year ?? "2025"],
              ["Status", selected.status],
              ...(selected.org ? [["Built at", selected.org]] : []),
            ].map(([k, val]) => (
              <div key={k}>
                <dt className="text-[13px] text-[var(--subtle)]">{k}</dt>
                <dd className="m-0 mt-1.5 text-[15px] font-medium">{val}</dd>
              </div>
            ))}
          </dl>
          <p className="rv mt-8 max-w-[680px] text-base leading-[1.75] text-[var(--muted)]">
            {selected.overview}
          </p>
        </section>

        {selected.stack.length > 0 && (
          <section aria-label="Project stack" className="pt-24">
            <h2 className="rv mb-6 text-2xl font-medium tracking-[-0.015em]">
              Project stack
            </h2>
            <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-3.5 p-0">
              {selected.stack.map((s) => {
                const m = STACK[s] ?? [s.slice(0, 2), "00"];
                return (
                  <li
                    key={s}
                    title={s}
                    className="tile rv flex flex-col justify-between rounded-[18px] bg-[var(--tile)] p-2.5 px-3"
                    style={{ aspectRatio: "1" }}
                  >
                    <span className="font-mono text-[10px] text-[var(--subtle)]">
                      {m[1]}
                    </span>
                    <span className="text-center text-[28px] font-medium leading-none tracking-[-0.03em]">
                      {m[0]}
                    </span>
                    <span className="text-center text-[11px] text-[var(--muted)]">
                      {s}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        <section aria-labelledby="more-h" className="pt-28">
          <h2 id="more-h" className="rv mb-6 text-2xl font-medium tracking-[-0.015em]">
            More projects
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-5">
            {more.map((m) => {
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => open(m.id)}
                  className="wcard rv block w-full border-0 bg-transparent p-0 text-left"
                >
                  <div
                    className="frame relative overflow-hidden rounded-[18px] border border-[var(--line)]"
                    style={{ aspectRatio: "7 / 3", background: m.bg }}
                  >
                    <Cover p={m} />
                  </div>
                  <div className="pt-4">
                    <div className="text-base font-medium">{m.name}</div>
                    <div className="mt-1.5 text-[15px] text-[var(--muted)]">
                      {m.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="pt-28">
        <h1 className="bi d2 m-0 text-[36px] font-medium leading-[1.2] tracking-[-0.02em]">
          Projects &amp; experiments
        </h1>
        <p className="bi d3 mt-3 max-w-[620px] text-[17px] leading-[1.6] text-[var(--muted)]">
          Products, open-source code and design work I&apos;ve built over the
          years.
        </p>
        <div
          role="group"
          aria-label="Filter projects"
          className="bi d4 mt-10 flex flex-wrap gap-2"
        >
          {FILTERS.map((f) => {
            const on = f.id === filter;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={on}
                className="chip inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-sm"
                style={{
                  borderColor: on ? "var(--fg)" : "var(--line)",
                  background: on ? "var(--tile)" : "transparent",
                  color: "var(--fg)",
                }}
              >
                {f.label}
                <span className="text-xs opacity-55">{count(f.id)}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section aria-label="Project list" className="pt-10">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-x-5 gap-y-8">
          {visible.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => {
                setSel(p.id);
                try {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } catch {}
              }}
              aria-label={`Open ${p.name} project`}
              className="wcard rv block w-full border-0 bg-transparent p-0 text-left"
            >
              <div
                className="frame relative overflow-hidden rounded-[18px] border border-[var(--line)]"
                style={{ aspectRatio: "7 / 5", background: p.bg }}
              >
                <Cover p={p} />
              </div>
              <div className="pt-[18px]">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2">
                    <span className="text-base font-medium">{p.name}</span>
                    {p.org && (
                      <span className="rounded-full bg-[var(--tile)] px-2 py-0.5 font-mono text-[10px] text-[var(--muted)]">
                        @ {p.org}
                      </span>
                    )}
                  </span>
                  <span className="font-mono text-[11px] text-[var(--subtle)]">
                    {p.kind}
                  </span>
                </div>
                <div className="mt-1.5 text-[15px] text-[var(--muted)]">
                  {p.desc}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function Cover({ p }: { p: Project }) {
  if (p.img) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={p.img}
        alt={p.name}
        className="art absolute inset-0 h-full w-full object-cover object-top"
        loading="lazy"
      />
    );
  }
  return (
    <ProjectArt
      variant={p.v}
      name={p.name}
      type={p.type}
      fgc={p.fgc}
      gridc={p.gridc}
    />
  );
}
