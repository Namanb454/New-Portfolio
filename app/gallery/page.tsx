"use client";

import { useEffect, useState, useCallback } from "react";

type Group = "web" | "mobile" | "uiux";
type Shot = { img: string; title: string; cat: string; group: Group };

const SHOTS: Shot[] = [
  { img: "/images/p2.webp", title: "Tipriyo", cat: "AI · Virtual Staging", group: "mobile" },
  { img: "/images/p1.webp", title: "Reamor UI", cat: "UI Library", group: "web" },
  { img: "/images/p5.webp", title: "AI Gen Reels", cat: "AI · Video", group: "uiux" },
  { img: "/images/p6.webp", title: "Npm Js Clone", cat: "Web App", group: "web" },
  { img: "/images/p4.webp", title: "Real Estate", cat: "Web Platform", group: "web" },
  { img: "/images/p7.webp", title: "Horizon", cat: "FinTech", group: "web" },
  { img: "/images/p11.webp", title: "Dashboard Builder", cat: "No-code", group: "web" },
  { img: "/images/p12.webp", title: "Docu Gen", cat: "AI · Docs", group: "uiux" },
  { img: "/images/p15.webp", title: "E-commerce", cat: "MERN", group: "web" },
  { img: "/images/p9.webp", title: "Design System", cat: "UI/UX", group: "uiux" },
  { img: "/images/p16.webp", title: "Mobile UI", cat: "Product", group: "mobile" },
  { img: "/images/p8.webp", title: "Mobile UI — 02", cat: "Mobile UI", group: "mobile" },
  { img: "/images/p10.webp", title: "UI Exploration", cat: "UI/UX", group: "uiux" },
  { img: "/images/p13.webp", title: "Mobile UI — 03", cat: "Mobile UI", group: "mobile" },
  { img: "/images/p14.webp", title: "UI Exploration — 02", cat: "UI/UX", group: "uiux" },
  { img: "/images/p17.webp", title: "Mobile UI — 04", cat: "Mobile UI", group: "mobile" },
];

const FILTERS: { id: "all" | Group; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "uiux", label: "UI/UX" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<"all" | Group>("all");
  const [open, setOpen] = useState(-1);

  const shown = SHOTS.filter((s) => filter === "all" || s.group === filter);
  const count = (id: "all" | Group) =>
    SHOTS.filter((s) => id === "all" || s.group === id).length;

  const close = useCallback(() => setOpen(-1), []);
  const nav = useCallback(
    (dir: number) => setOpen((o) => (o + dir + shown.length) % shown.length),
    [shown.length]
  );

  useEffect(() => {
    if (open < 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") nav(-1);
      if (e.key === "ArrowRight") nav(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, nav]);

  const cur = open >= 0 && open < shown.length ? shown[open] : null;

  return (
    <div>
      <section className="pt-28">
        <h1 className="bi d2 m-0 text-[36px] font-medium leading-[1.2] tracking-[-0.02em]">
          Design gallery
        </h1>
        <p className="bi d3 mt-3 max-w-[620px] text-[17px] leading-[1.6] text-[var(--muted)]">
          A collection of user interfaces, design systems and visual
          explorations.
        </p>
        <div
          role="group"
          aria-label="Filter designs"
          className="bi d4 mt-10 flex flex-wrap gap-2"
        >
          {FILTERS.map((f) => {
            const on = f.id === filter;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  setFilter(f.id);
                  setOpen(-1);
                }}
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

      <section aria-label="Designs" className="pt-10">
        <div style={{ columns: "3 260px", columnGap: "16px" }}>
          {shown.map((g, i) => (
            <button
              key={g.img}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Open ${g.title}`}
              className="gi rv mb-4 block w-full border-0 bg-transparent p-0 text-left"
              style={{ breakInside: "avoid" }}
            >
              <span className="relative block overflow-hidden rounded-[18px] border border-[var(--line)] bg-[var(--tile)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="gimg block w-full"
                  src={g.img}
                  alt={`${g.title} — ${g.cat}`}
                  loading="lazy"
                />
                <span
                  className="cap absolute inset-x-2.5 bottom-2.5 flex items-center justify-between gap-2.5 rounded-xl px-3 py-2.5 text-[#F5F5F5] backdrop-blur-[10px]"
                  style={{ background: "rgba(10,10,10,0.62)" }}
                >
                  <span className="text-sm font-medium">{g.title}</span>
                  <span className="text-xs text-[#BDBDBD]">{g.cat}</span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="rv mt-24 flex flex-wrap items-center justify-between gap-5 rounded-[22px] border border-[var(--line)] px-[clamp(20px,3vw,32px)] py-8">
        <div>
          <div className="text-base font-medium">
            Need a product designed and built?
          </div>
          <div className="mt-1.5 text-[15px] text-[var(--muted)]">
            I design interfaces and ship them as production code.
          </div>
        </div>
        <a
          href="/book-a-call"
          className="ibp inline-flex min-h-11 items-center rounded-full bg-[var(--fg)] px-5 text-sm font-medium text-[var(--bg)]"
        >
          Book a call
        </a>
      </section>

      {cur && (
        <div
          className="lb fixed inset-0 z-[60] flex flex-col items-center justify-center gap-5 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={cur.title}
          style={{ background: "rgba(8,8,8,0.94)", color: "#F5F5F5", zIndex: 60 }}
          onClick={close}
        >
          <div
            className="lb-card relative overflow-hidden rounded-[18px]"
            style={{ maxWidth: "min(100%, 960px)", maxHeight: "72vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cur.img}
              alt={`${cur.title} — ${cur.cat}`}
              className="block max-h-[72vh] w-auto max-w-full object-contain"
            />
          </div>
          <div
            className="flex w-full max-w-[960px] flex-wrap items-center justify-between gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="text-base font-medium">{cur.title}</div>
              <div className="mt-1 text-[13px] text-[#A3A3A3]">
                {cur.cat} · {open + 1} / {shown.length}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => nav(-1)}
                aria-label="Previous design"
                className="lbb grid h-11 w-11 place-items-center rounded-full border border-[#3A3A3A] text-[#F5F5F5]"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
              </button>
              <button
                type="button"
                onClick={() => nav(1)}
                aria-label="Next design"
                className="lbb grid h-11 w-11 place-items-center rounded-full border border-[#3A3A3A] text-[#F5F5F5]"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
              </button>
              <button
                type="button"
                onClick={close}
                aria-label="Close viewer"
                className="lbb grid h-11 w-11 place-items-center rounded-full border border-[#3A3A3A] text-[#F5F5F5]"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
