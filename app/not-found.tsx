import Link from "next/link";

function build404() {
  const g4 = ["10001", "10001", "10001", "11111", "00001", "00001", "00001"];
  const g0 = ["01110", "10001", "10011", "10101", "11001", "10001", "01110"];
  const glyphs = [g4, g0, g4];
  const cols = 23;
  const rows = 7;
  const start = 2;
  let seed = 404;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const cells: { lvl: number; delay: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const rel = c - start;
      let on = false;
      if (rel >= 0 && rel < 17) {
        const li = Math.floor(rel / 6);
        const lc = rel % 6;
        if (lc < 5 && glyphs[li]) on = glyphs[li][r][lc] === "1";
      }
      const x = rnd();
      const lvl = on ? 3 : x < 0.55 ? 0 : x < 0.85 ? 1 : 2;
      const delay = on ? 120 + c * 22 + r * 14 : Math.round(x * 500);
      cells.push({ lvl, delay });
    }
  }
  return cells;
}
const CELLS = build404();

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
      <div
        role="img"
        aria-label="404"
        className="grid w-full max-w-[560px] grid-cols-[repeat(23,minmax(0,1fr))] gap-1"
      >
        {CELLS.map((c, i) => (
          <span
            key={i}
            className="cell-pop block rounded"
            style={{
              aspectRatio: "1",
              background: `var(--px${c.lvl === 3 ? 4 : c.lvl})`,
              animationDelay: `${c.delay}ms`,
            }}
          />
        ))}
      </div>
      <h1 className="bi d2 mt-12 text-[36px] font-medium tracking-[-0.02em]">
        Page not found
      </h1>
      <p className="bi d3 mt-3 text-[17px] leading-[1.6] text-[var(--muted)]">
        This page went out for a long ride and hasn&apos;t come back yet.
      </p>
      <div className="bi d4 mt-8 flex flex-wrap justify-center gap-2.5">
        <Link
          href="/"
          className="ibp inline-flex min-h-12 items-center rounded-full bg-[var(--fg)] px-[22px] text-[15px] font-medium text-[var(--bg)]"
        >
          Back home
        </Link>
        <Link
          href="/projects"
          className="ib inline-flex min-h-12 items-center rounded-full bg-[var(--tile)] px-[22px] text-[15px]"
        >
          View projects
        </Link>
      </div>
    </div>
  );
}
