"use client";

import { useEffect, useRef } from "react";

/* pixel grid spelling NAMAN — revealed with a staggered pop when scrolled into view */
function buildCells() {
  const glyph: Record<string, string[]> = {
    N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
    A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
    M: ["10001", "11011", "10101", "10101", "10001", "10001", "10001"],
  };
  const word = "NAMAN";
  const cols = 52;
  const rows = 7;
  const start = Math.floor((cols - (word.length * 6 - 1)) / 2);
  let seed = 954;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const cells: { lvl: number; delay: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let on = false;
      const rel = c - start;
      if (rel >= 0 && rel < word.length * 6) {
        const li = Math.floor(rel / 6);
        const lc = rel % 6;
        if (lc < 5) on = glyph[word[li]][r][lc] === "1";
      }
      const x = rnd();
      const lvl = on ? 4 : x < 0.5 ? 0 : x < 0.78 ? 1 : x < 0.93 ? 2 : 3;
      const delay = Math.round((c / cols) * 420) + r * 10;
      cells.push({ lvl, delay });
    }
  }
  return cells;
}
const CELLS = buildCells();

export default function PixelGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="A grid of squares spelling NAMAN"
      className="pgrid grid grid-cols-[repeat(52,minmax(0,1fr))] gap-[3px]"
    >
      {CELLS.map((c, i) => (
        <span
          key={i}
          className="pcell block rounded-[3px]"
          style={{
            aspectRatio: "1",
            background: `var(--px${c.lvl})`,
            animationDelay: `${c.delay}ms`,
          }}
        />
      ))}
    </div>
  );
}
