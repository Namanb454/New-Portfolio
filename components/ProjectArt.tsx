/* Abstract monochrome cover art for project cards. Absolutely-positioned
   so it fills any aspect-ratio frame. */

export type ArtVariant =
  | "spark"
  | "card"
  | "bars"
  | "phones"
  | "reels"
  | "type";

export default function ProjectArt({
  variant,
  name,
  type,
  fgc = "#0A0A0A",
  gridc = "transparent",
}: {
  variant: ArtVariant;
  name: string;
  type: string;
  fgc?: string;
  gridc?: string;
}) {
  if (variant === "spark") {
    return (
      <div className="art absolute inset-0" aria-hidden>
        <div
          className="absolute left-1/2 top-1/2 rounded-full border border-[#2E2E2E]"
          style={{ width: "58%", aspectRatio: "1", transform: "translate(-50%,-50%)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 rounded-full border border-[#3D3D3D]"
          style={{ width: "36%", aspectRatio: "1", transform: "translate(-50%,-50%)" }}
        />
        <svg
          viewBox="0 0 24 24"
          className="absolute left-1/2 top-1/2"
          style={{ width: "22%", height: "auto", transform: "translate(-50%,-50%)" }}
        >
          <path
            d="M12 1.5c.6 5.6 4.9 9.9 10.5 10.5-5.6.6-9.9 4.9-10.5 10.5C11.4 16.9 7.1 12.6 1.5 12 7.1 11.4 11.4 7.1 12 1.5z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className="art absolute inset-0" aria-hidden>
        <div
          className="absolute left-1/2 top-1/2 rounded-[14px] border-[1.5px] border-[#BDBDBD]"
          style={{
            width: "50%",
            aspectRatio: "1.586",
            transform: "translate(-36%,-62%) rotate(8deg)",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 flex flex-col justify-between rounded-[14px]"
          style={{
            width: "50%",
            aspectRatio: "1.586",
            background: "#0A0A0A",
            transform: "translate(-50%,-50%) rotate(-6deg)",
            boxShadow: "0 24px 40px -18px rgba(0,0,0,0.5)",
            padding: "7% 8%",
          }}
        >
          <div style={{ width: "22%", aspectRatio: "1.3", borderRadius: 4, background: "#D4D4D4" }} />
          <div
            className="flex font-mono"
            style={{ gap: "8%", fontSize: 12, color: "#A3A3A3", letterSpacing: "0.1em" }}
          >
            <span>••••</span>
            <span>••••</span>
            <span>••••</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "bars") {
    return (
      <div className="art absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 flex flex-col"
          style={{ padding: "9% 10%", gap: "9%" }}
        >
          <div className="flex" style={{ gap: "6%" }}>
            <div className="h-[34px] flex-1 rounded-lg bg-[#F2F2F2]" />
            <div className="h-[34px] flex-1 rounded-lg bg-[#F2F2F2]" />
            <div className="h-[34px] flex-1 rounded-lg bg-[#0A0A0A]" />
          </div>
          <div
            className="flex flex-1 items-end border-b border-[#D4D4D4]"
            style={{ gap: "4%" }}
          >
            {[38, 62, 48, 82, 56, 70, 44].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{ height: `${h}%`, background: h === 82 ? "#0A0A0A" : "#D4D4D4" }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "phones") {
    return (
      <div className="art absolute inset-0 flex items-center justify-center" aria-hidden style={{ gap: "5%" }}>
        <div style={{ width: "18%", aspectRatio: "9 / 19", borderRadius: 14, background: "#2E2E2E", transform: "translateY(10%)" }} />
        <div
          className="flex flex-col"
          style={{ width: "22%", aspectRatio: "9 / 19", borderRadius: 16, background: "#F5F5F5", padding: "12% 10%", gap: "8%" }}
        >
          <div style={{ height: "30%", borderRadius: 8, background: "#0A0A0A" }} />
          <div style={{ height: "6%", width: "70%", borderRadius: 4, background: "#BDBDBD" }} />
          <div style={{ height: "6%", width: "50%", borderRadius: 4, background: "#D4D4D4" }} />
          <div style={{ marginTop: "auto", height: "12%", borderRadius: 999, background: "#0A0A0A" }} />
        </div>
        <div style={{ width: "18%", aspectRatio: "9 / 19", borderRadius: 14, background: "#2E2E2E", transform: "translateY(10%)" }} />
      </div>
    );
  }

  if (variant === "reels") {
    return (
      <div className="art absolute inset-0" aria-hidden>
        <div className="absolute inset-0 flex items-center justify-center" style={{ gap: "3%" }}>
          <div style={{ width: "16%", aspectRatio: "9 / 16", borderRadius: 10, background: "#2A2A2A" }} />
          <div
            className="grid place-items-center"
            style={{ width: "20%", aspectRatio: "9 / 16", borderRadius: 12, background: "#F5F5F5" }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "34%", height: "auto" }}>
              <path d="M8 5.5v13l11-6.5z" fill="#0A0A0A" />
            </svg>
          </div>
          <div style={{ width: "16%", aspectRatio: "9 / 16", borderRadius: 10, background: "#2A2A2A" }} />
        </div>
        <div
          className="absolute"
          style={{ left: "10%", right: "10%", bottom: "10%", height: 3, borderRadius: 3, background: "#2A2A2A" }}
        >
          <div style={{ width: "38%", height: "100%", borderRadius: 3, background: "#F5F5F5" }} />
        </div>
      </div>
    );
  }

  // type
  return (
    <div
      className="art absolute inset-0 flex flex-col justify-between"
      aria-hidden
      style={{
        padding: "7% 8%",
        color: fgc,
        backgroundImage: `repeating-linear-gradient(90deg, ${gridc} 0 1px, transparent 1px 48px)`,
      }}
    >
      <span
        className="font-mono"
        style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.7 }}
      >
        {type}
      </span>
      <span
        className="font-medium"
        style={{ fontSize: "clamp(28px,4.4vw,48px)", letterSpacing: "-0.04em", lineHeight: 1 }}
      >
        {name}
      </span>
    </div>
  );
}
