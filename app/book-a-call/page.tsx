"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ?? "";

const OPTIONS = [
  "SaaS",
  "Web Application",
  "Mobile App",
  "AI Agents & Chatbots",
  "Consultation",
  "Other",
];

const FAQS = [
  {
    q: "What can you help with?",
    a: "SaaS products, web applications, mobile apps, AI agents and chatbots — from first idea to production. I also do one-off technical consultations if you need a second opinion on architecture or stack.",
  },
  {
    q: "What does your usual stack look like?",
    a: "TypeScript, React and Next.js on the frontend; NestJS, Node.js or FastAPI on the backend; PostgreSQL, MongoDB or Supabase for data — plus OpenAI and Claude integrations when the product needs AI.",
  },
  {
    q: "Do you also design, or only develop?",
    a: "Both. I design interfaces and mobile flows (see the design gallery) and ship them as production code, so design and engineering stay in sync.",
  },
  {
    q: "How soon will I hear back?",
    a: "I read every request personally and reply by email shortly after it arrives. If it is urgent, email me directly at namanb454@gmail.com.",
  },
];

const inputCls =
  "h-12 rounded-xl border border-[var(--line)] bg-[var(--bg)] px-3.5 text-[15px] text-[var(--fg)] focus:border-[var(--fg)] focus:outline-none focus:shadow-[0_0_0_3px_var(--tile2)]";

export default function BookACallPage() {
  const [form, setForm] = useState({ name: "", email: "", req: "", msg: "" });
  const [err, setErr] = useState({ name: false, email: false, req: false, msg: false });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(0);
  const [copied, setCopied] = useState(false);
  const [faq, setFaq] = useState(0);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(id);
  }, []);

  let clock = "--:--";
  if (now !== null) {
    try {
      clock = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date(now));
    } catch {}
  }

  const firstName = (form.name || "").trim().split(" ")[0] || "there";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const ne = {
      name: !form.name.trim(),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()),
      req: !form.req,
      msg: form.msg.trim().length < 10,
    };
    if (ne.name || ne.email || ne.req || ne.msg) {
      setErr(ne);
      setShake((s) => s + 1);
      return;
    }

    setLoading(true);
    try {
      if (GOOGLE_SCRIPT_URL) {
        const res = await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            type: form.req,
            reason: form.msg,
          }),
        });
        if (!res.ok) throw new Error("Failed to submit");
        const json = await res.json().catch(() => ({}));
        if (json.result === "error") {
          throw new Error(json.error?.message || "Script returned an error");
        }
      }
      toast.success("Request sent successfully!");
      setSent(true);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again or email directly.");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setForm({ name: "", email: "", req: "", msg: "" });
    setErr({ name: false, email: false, req: false, msg: false });
    setSent(false);
  }

  function copyEmail() {
    try {
      navigator.clipboard.writeText("namanb454@gmail.com");
    } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="pt-28">
      <div className="flex flex-wrap items-start gap-14">
        {/* LEFT */}
        <section aria-labelledby="bk-h" className="min-w-0 flex-[1_1_300px]">
          <h1 id="bk-h" className="bi d2 m-0 text-[36px] font-medium leading-[1.2] tracking-[-0.02em]">
            Let&apos;s talk.
          </h1>
          <p className="bi d3 mt-3 text-[17px] leading-[1.6] text-[var(--muted)]">
            Tell me about your project and I&apos;ll get back to you shortly.
          </p>

          <ol className="bi d4 m-0 mt-10 flex list-none flex-col gap-5 p-0">
            {[
              ["01", "Share the details", "What you're building, and where you need help.", false],
              ["02", "I review and reply", "I read every request personally and answer by email.", false],
              ["03", "We hop on a call", "Scope, timeline and next steps — no strings attached.", true],
            ].map(([n, t, d, hi]) => (
              <li key={n as string} className="flex gap-3.5">
                <span
                  className="grid h-7 w-7 flex-[0_0_28px] place-items-center rounded-full font-mono text-[11px]"
                  style={{
                    background: hi ? "var(--fg)" : "var(--tile)",
                    color: hi ? "var(--bg)" : undefined,
                  }}
                >
                  {n}
                </span>
                <span>
                  <span className="block text-[15px] font-medium">{t}</span>
                  <span className="mt-0.5 block text-sm leading-[1.55] text-[var(--muted)]">
                    {d}
                  </span>
                </span>
              </li>
            ))}
          </ol>

          <div className="bi d5 mt-10 flex flex-col gap-3.5 border-t border-[var(--line)] pt-7">
            <div className="text-[13px] text-[var(--subtle)]">Or email directly</div>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="mailto:namanb454@gmail.com"
                className="ul text-base font-medium"
              >
                namanb454@gmail.com
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="ib inline-flex h-8 items-center gap-1.5 rounded-full border-0 bg-[var(--tile)] px-3 text-xs"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></svg>
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              Delhi NCR · {clock} IST (UTC+5:30)
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
              <a href="https://www.linkedin.com/in/naman-bansal-9585nb/" target="_blank" rel="noreferrer" className="ul">LinkedIn</a>
              <a href="https://github.com/Namanb454" target="_blank" rel="noreferrer" className="ul">GitHub</a>
              <a href="https://x.com/namanbansaldev" target="_blank" rel="noreferrer" className="ul">X</a>
              <a href="https://www.instagram.com/namanbansaldev/" target="_blank" rel="noreferrer" className="ul">Instagram</a>
            </div>
          </div>
        </section>

        {/* FORM CARD */}
        <section
          aria-label="Booking form"
          className="bi d3 min-w-0 flex-[1.35_1_420px] rounded-[24px] border border-[var(--line)] bg-[var(--tile)] p-[clamp(20px,3.4vw,32px)]"
        >
          {!sent ? (
            <form
              onSubmit={submit}
              noValidate
              key={shake}
              className={`flex flex-col gap-[22px] ${shake % 2 === 1 ? "shake" : ""}`}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="bk-name" className="text-[13px] font-medium">Name</label>
                <input
                  id="bk-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    setErr({ ...err, name: false });
                  }}
                  className={inputCls}
                />
                {err.name && (
                  <span role="alert" className="text-[13px]">↳ Please add your name.</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="bk-email" className="text-[13px] font-medium">Email</label>
                <input
                  id="bk-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    setErr({ ...err, email: false });
                  }}
                  className={inputCls}
                />
                {err.email && (
                  <span role="alert" className="text-[13px]">↳ That email doesn&apos;t look right.</span>
                )}
              </div>

              <fieldset className="m-0 flex flex-col gap-2.5 border-0 p-0">
                <legend className="mb-2.5 p-0 text-[13px] font-medium">What do you need?</legend>
                <div className="flex flex-wrap gap-2">
                  {OPTIONS.map((o) => {
                    const on = form.req === o;
                    return (
                      <button
                        key={o}
                        type="button"
                        onClick={() => {
                          setForm({ ...form, req: o });
                          setErr({ ...err, req: false });
                        }}
                        aria-pressed={on}
                        className="chip min-h-10 rounded-full border px-3.5 text-sm"
                        style={{
                          borderColor: on ? "var(--fg)" : "var(--line)",
                          background: on ? "var(--fg)" : "var(--bg)",
                          color: on ? "var(--bg)" : "var(--fg)",
                        }}
                      >
                        {o}
                      </button>
                    );
                  })}
                </div>
                {err.req && (
                  <span role="alert" className="text-[13px]">↳ Pick the closest option.</span>
                )}
              </fieldset>

              <div className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <label htmlFor="bk-msg" className="text-[13px] font-medium">
                    Why do you want to book?
                  </label>
                  <span className="font-mono text-[11px] text-[var(--subtle)]">
                    {form.msg.length}/500
                  </span>
                </div>
                <textarea
                  id="bk-msg"
                  rows={5}
                  maxLength={500}
                  placeholder="Tell me a bit about your project goals, timeline and anything else that helps."
                  value={form.msg}
                  onChange={(e) => {
                    setForm({ ...form, msg: e.target.value });
                    setErr({ ...err, msg: false });
                  }}
                  className={`${inputCls} h-auto resize-y py-3 leading-[1.6]`}
                />
                {err.msg && (
                  <span role="alert" className="text-[13px]">
                    ↳ A sentence or two (10+ characters) helps me prepare.
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="send inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border-0 bg-[var(--fg)] text-[15px] font-medium text-[var(--bg)] disabled:opacity-80"
              >
                {loading ? "Sending…" : "Send request"}
                {!loading && (
                  <svg className="ar" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                )}
              </button>
              <p className="m-0 text-center text-xs leading-[1.5] text-[var(--subtle)]">
                Your details are only used to reply to this request.
              </p>
            </form>
          ) : (
            <div
              role="status"
              className="flex min-h-[480px] flex-col items-center justify-center gap-4 px-2 py-6 text-center"
            >
              <span className="ok-ring grid h-16 w-16 place-items-center rounded-full bg-[var(--fg)] text-[var(--bg)]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path className="ok-tick" d="M5 12.5l4.5 4.5L19 7.5" /></svg>
              </span>
              <div className="ok-in">
                <div className="text-2xl font-medium tracking-[-0.02em]">
                  Thanks, {firstName}!
                </div>
                <p className="mx-auto mt-2.5 max-w-[360px] text-[15px] leading-[1.6] text-[var(--muted)]">
                  Your request for{" "}
                  <strong className="font-medium text-[var(--fg)]">
                    {form.req || "your project"}
                  </strong>{" "}
                  is in. I&apos;ll get back to you at {form.email} shortly.
                </p>
              </div>
              <div className="ok-in mt-2 flex flex-wrap justify-center gap-2.5">
                <Link
                  href="/projects"
                  className="ibp inline-flex min-h-11 items-center rounded-full bg-[var(--fg)] px-[18px] text-sm font-medium text-[var(--bg)]"
                >
                  Browse my projects
                </Link>
                <button
                  type="button"
                  onClick={reset}
                  className="ib min-h-11 rounded-full border border-[var(--line)] bg-[var(--bg)] px-[18px] text-sm"
                >
                  Send another
                </button>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* FAQ */}
      <section aria-labelledby="faq-h" className="pt-32">
        <h2 id="faq-h" className="rv mb-6 text-2xl font-medium tracking-[-0.015em]">
          Questions
        </h2>
        <div className="rv border-t border-[var(--line)]">
          {FAQS.map((q, i) => {
            const open = faq === i;
            return (
              <div key={q.q} className="border-b border-[var(--line)]">
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => setFaq(open ? -1 : i)}
                    aria-expanded={open}
                    aria-controls={`faq-a-${i}`}
                    className="faq-q flex min-h-16 w-full items-center justify-between gap-4 border-0 bg-transparent py-[18px] text-left text-base font-medium"
                  >
                    {q.q}
                    <svg className="pl shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
                  </button>
                </h3>
                {open && (
                  <p
                    id={`faq-a-${i}`}
                    className="ok-in m-0 pb-[22px] pr-10 text-[15px] leading-[1.7] text-[var(--muted)]"
                  >
                    {q.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
