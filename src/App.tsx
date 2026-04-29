import { useState } from "react";

/* ── Brand mark ────────────────────────────────────── */
const BrandMark = ({ size = 30 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={size} height={size}>
    <rect width="100" height="100" rx="22" fill="#3E4F2E" />
    <text x="50" y="68" fontSize="52" textAnchor="middle" fill="#E8D574" fontFamily="Georgia, serif" fontWeight="700" fontStyle="italic">d</text>
  </svg>
);

/* ── Shared SVG icons ──────────────────────────────── */
const AppleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25" />
  </svg>
);

const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 20.5V3.5c0-.5.3-1 .8-1.2L13.4 12 3.8 21.7c-.5-.2-.8-.7-.8-1.2zM14.8 13.4l2.5 2.5L6.8 22l8-8.6zM18.4 9.6l-2.5 2.5L14.8 11l1.1-1.1L6.8 2l10.5 6.1c.7.4 1.1 1.1 1.1 1.5z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

/* ── Nav ───────────────────────────────────────────── */
const Nav = () => (
  <nav className="sticky top-0 z-50 bg-cream/85 backdrop-blur-[14px] border-b border-line-soft">
    <div className="max-w-[1280px] mx-auto px-8 max-[720px]:px-[22px]">
      <div className="flex items-center justify-between py-[18px]">
        <div className="flex items-center gap-[10px] font-serif font-bold text-[22px] tracking-[-0.4px] text-olive-deep">
          <BrandMark />
          <span>Dates</span>
        </div>
        <div className="hidden min-[761px]:flex gap-7 items-center">
          <a href="#how" className="text-ink-soft text-sm font-medium hover:text-ink transition-colors">How it works</a>
          <a href="#features" className="text-ink-soft text-sm font-medium hover:text-ink transition-colors">Features</a>
          <a href="#stories" className="text-ink-soft text-sm font-medium hover:text-ink transition-colors">Stories</a>
          <a href="#pricing" className="text-ink-soft text-sm font-medium hover:text-ink transition-colors">Pricing</a>
        </div>
        <a href="#download" className="inline-flex items-center gap-2 bg-ink text-cream px-4 py-[10px] rounded-full text-[13.5px] font-semibold hover:bg-olive-ink transition-colors">
          Get the app
          <ArrowIcon />
        </a>
      </div>
    </div>
  </nav>
);

/* ── Hero ──────────────────────────────────────────── */
const Hero = () => (
  <section className="relative py-20 max-[960px]:py-14">
    <div className="max-w-[1280px] mx-auto px-8 max-[720px]:px-[22px]">
      <div className="grid grid-cols-[1.05fr_1fr] max-[960px]:grid-cols-1 gap-[60px] max-[960px]:gap-10 items-center">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-[10px] px-[14px] py-[6px] rounded-full bg-ink/[0.06] text-xs font-semibold text-ink-soft tracking-[0.4px]">
            <span className="w-[6px] h-[6px] rounded-full bg-terracotta" />
            New &middot; Spring &rsquo;26 release
          </span>
          <h1 className="font-serif font-bold text-[clamp(48px,8.4vw,128px)] leading-[0.94] tracking-[-0.04em] mt-6 text-ink">
            Plans,<br />
            <em className="italic font-semibold text-terracotta">not</em> pings.
          </h1>
          <p className="mt-7 max-w-[560px] text-[19px] leading-[1.55] text-ink-soft">
            Dates is the warm little app for the people you actually want to see. Save ideas, send invites by link, see who&rsquo;s in — without forcing anyone into another group chat.
          </p>
          <div className="mt-9 flex gap-3 flex-wrap items-center">
            <a href="#download" className="inline-flex items-center gap-[10px] px-[22px] py-[15px] rounded-full text-[15px] font-semibold bg-butter text-olive-ink hover:bg-butter-deep transition-colors">
              <AppleIcon />
              App Store
            </a>
            <a href="#download" className="inline-flex items-center gap-[10px] px-[22px] py-[15px] rounded-full text-[15px] font-semibold bg-transparent text-ink border border-line hover:bg-ink/[0.04] transition-colors">
              <PlayIcon />
              Google Play
            </a>
          </div>
          <div className="flex gap-2 mt-[14px] text-[12.5px] text-ink-muted">
            <span className="inline-flex gap-[6px] items-center">&#9733;&#9733;&#9733;&#9733;&#9733; 4.8 average</span>
            <span>&middot;</span>
            <span className="inline-flex gap-[6px] items-center">120k+ dates planned</span>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="relative h-[560px] max-[960px]:h-[480px] flex justify-center items-center">
          {/* Floating notes */}
          <div className="absolute top-[60px] left-0 bg-paper border border-line rounded-[14px] px-[14px] py-[10px] text-xs text-ink-soft font-medium shadow-[0_8px_22px_rgba(31,27,21,0.08)] flex items-center gap-[10px] whitespace-nowrap max-[1100px]:hidden">
            <span className="w-[26px] h-[26px] rounded-lg bg-butter text-olive-ink flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.8.6 1.5 1.4 1.5 2.6V17h4v-.5c0-1.2.7-2 1.5-2.6A6 6 0 0 0 12 3z" /></svg>
            </span>
            <span><b className="text-ink">Save a dumb idea.</b><br />Turn it into Friday.</span>
          </div>

          <div className="absolute top-1/2 left-[-30px] -translate-y-1/2 bg-olive-deep text-white border-none rounded-[14px] px-[14px] py-[10px] text-xs font-medium shadow-[0_8px_22px_rgba(31,27,21,0.08)] flex items-center gap-[10px] whitespace-nowrap max-[1100px]:hidden">
            <span className="w-[26px] h-[26px] rounded-lg bg-butter text-olive-ink flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 1 0-7-7l-1 1" /><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 1 0 7 7l1-1" /></svg>
            </span>
            <span>One link. Anyone RSVPs.</span>
          </div>

          <div className="absolute bottom-[80px] right-0 bg-paper border border-line rounded-[14px] px-[14px] py-[10px] text-xs text-ink-soft font-medium shadow-[0_8px_22px_rgba(31,27,21,0.08)] flex items-center gap-[10px] whitespace-nowrap max-[1100px]:hidden">
            <span className="w-[26px] h-[26px] rounded-lg bg-butter text-olive-ink flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
            </span>
            <span><b className="text-ink">3 friends in.</b> 1 maybe.</span>
          </div>

          {/* Phone */}
          <div className="w-[280px] h-[570px] bg-cream rounded-[46px] p-2 shadow-[0_0_0_1px_rgba(31,27,21,0.10),0_30px_60px_-20px_rgba(31,27,21,0.32),0_60px_100px_-40px_rgba(62,79,46,0.20)] relative">
            {/* Notch */}
            <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[100px] h-[26px] rounded-full bg-ink z-10" />
            <div className="w-full h-full bg-cream rounded-[38px] overflow-hidden relative">
              {/* Status bar */}
              <div className="flex justify-between items-center px-6 pt-[14px] pb-2 text-[13px] font-semibold">
                <span>9:41</span>
                <span className="inline-flex items-center gap-1">
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M2 8.5h6M2 5h8M2 1.5h4" stroke="#1F1B15" strokeWidth="1.4" strokeLinecap="round" /></svg>
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5a6 6 0 0 1 12 0M3.5 5a3.5 3.5 0 0 1 7 0M6 5a1 1 0 0 1 2 0" stroke="#1F1B15" strokeWidth="1.2" fill="none" strokeLinecap="round" /></svg>
                  <svg width="22" height="11" viewBox="0 0 22 11" fill="none"><rect x="0.5" y="1" width="18" height="9" rx="2" stroke="#1F1B15" /><rect x="2" y="2.5" width="14" height="6" rx="1" fill="#1F1B15" /><rect x="19.5" y="4" width="1.5" height="3" rx="0.5" fill="#1F1B15" /></svg>
                </span>
              </div>

              {/* App header */}
              <div className="px-[18px] pt-2 flex justify-between items-center">
                <div className="flex items-center gap-[10px]">
                  <div className="w-8 h-8 rounded-full bg-butter text-olive-ink flex items-center justify-center font-bold text-[13px]">M</div>
                  <div>
                    <div className="text-[10px] text-ink-muted font-semibold tracking-[0.3px]">THURSDAY &middot; APR 23</div>
                    <div className="font-serif font-bold text-[17px] text-olive-deep leading-none">Dates</div>
                  </div>
                </div>
                <div className="flex gap-1 text-olive-deep">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13l3-8h12l3 8v6H3z" /><path d="M3 13h5l1 3h6l1-3h5" /></svg>
                  </div>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="9" /></svg>
                  </div>
                </div>
              </div>

              {/* Headline */}
              <div className="font-serif font-bold text-[30px] leading-[1.04] tracking-[-0.7px] px-[18px] pt-[14px] pb-1">
                You have <em className="text-olive-deep italic">3</em> dates pending.
              </div>
              <div className="px-[18px] text-[11px] text-ink-muted mt-[6px]">Next up: Samaki Samaki on Apr 25.</div>

              {/* Quick actions */}
              <div className="flex gap-[7px] px-[18px] pt-[14px] pb-[6px]">
                <span className="inline-flex items-center gap-[5px] px-[11px] py-[7px] rounded-full text-[11px] font-semibold bg-butter text-olive-ink">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                  Plan a date
                </span>
                <span className="inline-flex items-center gap-[5px] px-[11px] py-[7px] rounded-full text-[11px] font-semibold bg-paper border border-line-soft text-ink">From ideas</span>
                <span className="inline-flex items-center gap-[5px] px-[11px] py-[7px] rounded-full text-[11px] font-semibold bg-paper border border-line-soft text-ink">Import</span>
              </div>

              {/* Date card */}
              <div className="mx-[14px] mt-2 rounded-[20px] overflow-hidden bg-paper shadow-[0_4px_18px_rgba(31,27,21,0.06)] border border-line-soft">
                <div className="h-[140px] bg-gradient-to-br from-[#E8A765] via-[#C96C3F] to-[#6E4A2B] relative">
                  <span className="absolute top-[10px] left-[10px] px-2 py-[3px] rounded-full bg-[rgba(201,181,66,0.95)] text-[#2A250E] text-[8.5px] font-bold tracking-[0.6px] uppercase inline-flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#2A250E]" />Pending
                  </span>
                  <span className="absolute top-[10px] right-[10px] bg-white rounded-lg px-2 py-1 text-center leading-none">
                    <span className="block font-serif text-[8px] text-olive-deep tracking-[0.7px] font-bold">APR</span>
                    <span className="block font-serif text-sm font-bold text-ink">25</span>
                  </span>
                  <span className="absolute bottom-[10px] left-[10px] flex">
                    <span className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[11px] border-2 border-white" style={{ background: "#E89B5A" }}>&#127803;</span>
                    <span className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[11px] border-2 border-white -ml-[6px]" style={{ background: "#6E8B4E" }}>&#127911;</span>
                    <span className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[11px] border-2 border-white -ml-[6px]" style={{ background: "#C96C3F" }}>&#127802;</span>
                  </span>
                </div>
                <div className="px-[14px] py-3 pb-[14px]">
                  <div className="font-serif font-bold text-[17px] leading-[1.1] tracking-[-0.3px]">Samaki Samaki</div>
                  <div className="flex gap-[10px] text-ink-muted text-[10.5px] mt-[6px] items-center">
                    <span className="inline-flex items-center gap-1">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                      5:22 PM
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
                      Westlands
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── Marquee Strip ─────────────────────────────────── */
const MarqueeStrip = () => {
  const items = [
    { text: "Sunset picnic", em: true, suffix: " — Karura" },
    { text: "Pottery class with Kev", em: false },
    { text: "Wine bar", em: true, suffix: ", the new one" },
    { text: "Sunday hike, easy pace", em: false },
    { text: "Bookshop crawl", em: true },
    { text: "Aisha's birthday dinner", em: false },
    { text: "Night market", em: true, suffix: ", Saturday" },
    { text: "Coffee with Dan", em: false },
  ];

  const renderItems = () => (
    <>
      {items.map((item, i) => (
        <span key={i} className="font-serif font-semibold text-[22px] text-ink-soft tracking-[-0.4px] inline-flex items-center gap-12">
          <span>{item.em ? <em className="italic text-terracotta">{item.text}</em> : item.text}{item.suffix || ""}</span>
          <span className="w-[6px] h-[6px] rounded-full bg-ink-faint shrink-0" />
        </span>
      ))}
    </>
  );

  return (
    <div className="border-t border-b border-line py-[22px] bg-cream-deep overflow-hidden">
      <div className="flex gap-12 items-center whitespace-nowrap animate-marquee">
        {renderItems()}
        {renderItems()}
      </div>
    </div>
  );
};

/* ── Anti-pattern (Before / After) ─────────────────── */
const AntiPattern = () => (
  <section className="py-[120px] max-[720px]:py-20" id="how">
    <div className="max-w-[1280px] mx-auto px-8 max-[720px]:px-[22px]">
      <span className="text-xs font-bold tracking-[1.4px] uppercase text-olive-deep inline-flex items-center gap-[10px]">
        <span className="w-[18px] h-px bg-olive-deep" />The problem
      </span>
      <h2 className="font-serif font-bold text-[clamp(40px,5.6vw,72px)] leading-[1.02] tracking-[-0.03em] mt-[18px] max-w-[14ch]">
        &ldquo;<em className="italic text-terracotta">We should hang out</em>&rdquo; doesn&rsquo;t put it on the calendar.
      </h2>
      <p className="mt-[22px] text-lg leading-[1.55] text-ink-soft max-w-[540px]">
        Group chats lose plans the second someone changes the subject. Dates is built for the part where you actually decide.
      </p>

      <div className="grid grid-cols-2 max-[780px]:grid-cols-1 gap-6 mt-[60px]">
        {/* Bad */}
        <div className="rounded-3xl p-9 border border-line bg-paper relative overflow-hidden">
          <span className="inline-block text-[11px] font-bold tracking-[1.4px] uppercase text-rose">Group chat, last Tuesday</span>
          <h3 className="font-serif font-bold text-[32px] leading-[1.05] tracking-[-0.6px] mt-[14px] mb-[18px]">
            The plan that <span className="line-through decoration-rose decoration-2">happened</span>.
          </h3>
          <div className="bg-ink/[0.04] rounded-[14px] px-[14px] py-3 text-[13.5px] text-ink-soft leading-[1.4] mt-2">
            <span className="font-bold text-ink text-[11.5px] uppercase tracking-[0.6px] block mb-[3px]">Aisha</span>okay but where though
          </div>
          <div className="bg-terracotta/10 rounded-[14px] px-[14px] py-3 text-[13.5px] text-ink leading-[1.4] mt-2">
            <span className="font-bold text-terracotta text-[11.5px] uppercase tracking-[0.6px] block mb-[3px]">You</span>literally anywhere lol
          </div>
          <div className="bg-ink/[0.04] rounded-[14px] px-[14px] py-3 text-[13.5px] text-ink-soft leading-[1.4] mt-2">
            <span className="font-bold text-ink text-[11.5px] uppercase tracking-[0.6px] block mb-[3px]">Kev</span>I&rsquo;m down whenever
          </div>
          <div className="bg-ink/[0.04] rounded-[14px] px-[14px] py-3 text-[13.5px] text-ink-soft leading-[1.4] mt-2">
            <span className="font-bold text-ink text-[11.5px] uppercase tracking-[0.6px] block mb-[3px]">Zuri</span>wait what day are we doing
          </div>
          <div className="bg-terracotta/10 rounded-[14px] px-[14px] py-3 text-[13.5px] text-ink leading-[1.4] mt-2">
            <span className="font-bold text-terracotta text-[11.5px] uppercase tracking-[0.6px] block mb-[3px]">You</span>&hellip; so are we doing this
          </div>
          <div className="bg-ink/[0.04] rounded-[14px] px-[14px] py-3 text-[13.5px] text-ink-soft leading-[1.4] mt-2 opacity-50">
            <span className="font-bold text-ink text-[11.5px] uppercase tracking-[0.6px] block mb-[3px]">3 weeks later</span>nothing
          </div>
        </div>

        {/* Good */}
        <div className="rounded-3xl p-9 bg-olive-deep text-white border-transparent relative overflow-hidden">
          <span className="inline-block text-[11px] font-bold tracking-[1.4px] uppercase text-butter">In Dates, 90 seconds</span>
          <h3 className="font-serif font-bold text-[32px] leading-[1.05] tracking-[-0.6px] mt-[14px] mb-[18px]">
            A plan that <em className="text-butter italic">actually lands</em>.
          </h3>
          <div className="flex flex-col gap-[14px] mt-2">
            {[
              { n: "1", t: <><b className="font-bold">Save the idea.</b> &ldquo;Sunset picnic at Karura.&rdquo;</> },
              { n: "2", t: <><b className="font-bold">Pick a Friday,</b> add Aisha, Kev, Zuri.</> },
              { n: "3", t: <><b className="font-bold">Send a link.</b> Three replies before dinner.</> },
              { n: "4", t: <><b className="font-bold">Show up.</b> The basket&rsquo;s already in the car.</> },
            ].map((step) => (
              <div key={step.n} className="flex gap-[14px] items-center px-[14px] py-3 bg-white/[0.06] rounded-[14px]">
                <span className="w-[26px] h-[26px] rounded-lg bg-butter text-olive-ink flex items-center justify-center font-extrabold text-[13px] shrink-0 font-serif">{step.n}</span>
                <span className="text-sm font-medium text-white">{step.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── Feature Bento Grid ────────────────────────────── */
const Features = () => (
  <section className="py-[120px] max-[720px]:py-20 pt-0" id="features">
    <div className="max-w-[1280px] mx-auto px-8 max-[720px]:px-[22px]">
      <span className="text-xs font-bold tracking-[1.4px] uppercase text-olive-deep inline-flex items-center gap-[10px]">
        <span className="w-[18px] h-px bg-olive-deep" />What&rsquo;s inside
      </span>
      <h2 className="font-serif font-bold text-[clamp(40px,5.6vw,72px)] leading-[1.02] tracking-[-0.03em] mt-[18px] max-w-[14ch]">
        Small app. <em className="italic text-terracotta">Big calendar.</em>
      </h2>
      <p className="mt-[22px] text-lg leading-[1.55] text-ink-soft max-w-[540px]">
        Six features. None of them are a feed. None of them are a chat. All of them are about turning a maybe into a Wednesday.
      </p>

      <div className="grid grid-cols-12 gap-5 mt-[60px]">
        {/* Ideas Board - lg */}
        <div className="col-span-7 max-[960px]:col-span-12 rounded-3xl p-8 bg-paper border border-line-soft relative overflow-hidden min-h-[360px] flex flex-col">
          <span className="font-serif italic font-medium text-[15px] text-ink-muted">i. Ideas Board</span>
          <h3 className="font-serif font-bold text-[30px] leading-[1.05] tracking-[-0.5px] mt-3 mb-3">
            Every <em className="italic">&ldquo;oh that looks fun&rdquo;</em>, in one place.
          </h3>
          <p className="text-[14.5px] leading-[1.55] text-ink-soft max-w-[38ch]">
            Save links from Instagram, TikTok, your notes app — anywhere. Turn any idea into a date with one tap.
          </p>
          <div className="mt-auto pt-6">
            <div className="grid grid-cols-2 gap-[10px]">
              {[
                { bg: "from-[#E8A765] via-[#C96C3F] to-[#6E4A2B]", t: "Sunset picnic at Karura", s: "FROM NOTES" },
                { bg: "from-[#B89B5E] to-[#8A6B3D]", t: "Pottery @ Kibera Ceramics", s: "FROM TIKTOK" },
                { bg: "from-[#6E8B4E] to-[#3E4F2E]", t: "Night market, Village Market", s: "FROM INSTAGRAM" },
                { bg: "from-[#D4B483] to-[#8A6B3D]", t: "Bookshop crawl, Westlands", s: "FROM A LINK" },
              ].map((idea, i) => (
                <div key={i} className="rounded-[14px] overflow-hidden bg-cream border border-line-soft">
                  <div className={`h-20 bg-gradient-to-br ${idea.bg}`} />
                  <div className="px-[10px] py-2 text-[11.5px] font-semibold text-ink">{idea.t}</div>
                  <div className="px-[10px] pb-2 text-[9.5px] text-ink-muted tracking-[0.4px]">{idea.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RSVP - sm dark */}
        <div className="col-span-5 max-[960px]:col-span-12 rounded-3xl p-8 bg-olive-ink text-white border-none relative overflow-hidden min-h-[360px] flex flex-col">
          <span className="font-serif italic font-medium text-[15px] text-white/60">ii. RSVP, but kind</span>
          <h3 className="font-serif font-bold text-[30px] leading-[1.05] tracking-[-0.5px] mt-3 mb-3">
            Yes, no, <em className="italic text-butter">or &ldquo;ask me Friday&rdquo;</em>.
          </h3>
          <p className="text-[14.5px] leading-[1.55] text-white/[0.78] max-w-[38ch]">
            A maybe is a real answer. See exactly who&rsquo;s in, who&rsquo;s stalling, who&rsquo;s out — without anyone feeling cornered.
          </p>
          <div className="mt-auto pt-6">
            <div className="bg-white/[0.06] rounded-2xl p-[14px] flex flex-col gap-2">
              <div className="h-2 rounded-full bg-rose/25 overflow-hidden flex">
                <div className="w-[55%] bg-butter" />
                <div className="w-[25%] bg-olive" />
              </div>
              <div className="flex gap-[14px] text-[11.5px] font-semibold text-white/85">
                <span className="before:content-['●'] before:mr-1 before:text-butter">3 in</span>
                <span className="before:content-['●'] before:mr-1 before:text-sage">1 maybe</span>
                <span className="before:content-['●'] before:mr-1 before:text-rose">1 out</span>
              </div>
              <div className="flex flex-col gap-[6px] mt-[6px]">
                {[
                  { emoji: "🌻", name: "Aisha", status: "In", bg: "#E89B5A", sBg: "rgba(168,180,137,0.3)", sC: "#C5CFA8" },
                  { emoji: "🎧", name: "Kev", status: "Maybe", bg: "#6E8B4E", sBg: "rgba(232,213,116,0.25)", sC: "#E8D574" },
                  { emoji: "🌺", name: "Zuri", status: "In", bg: "#C96C3F", sBg: "rgba(168,180,137,0.3)", sC: "#C5CFA8" },
                ].map((p) => (
                  <div key={p.name} className="flex items-center gap-[10px] px-2 py-[6px] bg-white/[0.06] rounded-[10px]">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px]" style={{ background: p.bg }}>{p.emoji}</div>
                    <div className="flex-1 text-xs text-white font-medium">{p.name}</div>
                    <div className="text-[9.5px] font-bold tracking-[0.6px] uppercase px-[7px] py-[3px] rounded-full" style={{ background: p.sBg, color: p.sC }}>{p.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Link import - eq terra */}
        <div className="col-span-4 max-[960px]:col-span-12 rounded-3xl p-8 bg-terracotta text-white border-none relative overflow-hidden min-h-[360px] flex flex-col">
          <span className="font-serif italic font-medium text-[15px] text-white/60">iii. Drop a link</span>
          <h3 className="font-serif font-bold text-[30px] leading-[1.05] tracking-[-0.5px] mt-3 mb-3">
            Anything &rarr; <em className="italic">a plan</em>.
          </h3>
          <p className="text-[14.5px] leading-[1.55] text-white/[0.78] max-w-[38ch]">
            Paste any URL. We&rsquo;ll pull the title, photo, and place so you don&rsquo;t have to.
          </p>
          <div className="mt-auto pt-6">
            <div className="bg-paper rounded-[14px] p-[14px] flex flex-col gap-[10px] border border-white/[0.18]">
              <div className="flex gap-[10px] items-center">
                <div className="flex-1 font-mono text-[11px] text-ink-soft bg-ink/[0.05] px-[10px] py-2 rounded-lg whitespace-nowrap overflow-hidden text-ellipsis">
                  tiktok.com/@maker/v/720&hellip;
                </div>
              </div>
              <div className="flex items-center gap-[6px] text-[11px] text-white/70 font-semibold tracking-[0.3px] uppercase justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
                auto-fill
              </div>
              <div className="bg-gradient-to-br from-[#B89B5E] to-[#8A6B3D] rounded-[10px] p-[10px] text-white">
                <div className="font-serif font-bold text-sm">Pottery @ Kibera Ceramics</div>
                <div className="text-[10.5px] opacity-85 mt-[2px]">2hr &middot; BYOB &middot; Sat 4pm</div>
              </div>
            </div>
          </div>
        </div>

        {/* Memories - eq */}
        <div className="col-span-4 max-[960px]:col-span-12 rounded-3xl p-8 bg-paper border border-line-soft relative overflow-hidden min-h-[360px] flex flex-col">
          <span className="font-serif italic font-medium text-[15px] text-ink-muted">iv. Memories</span>
          <h3 className="font-serif font-bold text-[30px] leading-[1.05] tracking-[-0.5px] mt-3 mb-3">
            After the date, <em className="italic text-terracotta">the part you keep</em>.
          </h3>
          <p className="text-[14.5px] leading-[1.55] text-ink-soft max-w-[38ch]">
            Photos, a one-line note, a tiny souvenir. Past dates don&rsquo;t disappear — they fold into a year worth flipping through.
          </p>
          <div className="mt-auto pt-6">
            <div className="grid grid-cols-3 gap-[6px]">
              {[
                "from-[#E8A765] to-[#C96C3F]",
                "from-[#6E8B4E] to-[#3E4F2E]",
                "from-[#B89B5E] to-[#8A6B3D]",
                "from-[#D89A8C] to-[#B4695E]",
                "from-[#D4B483] to-[#8A6B3D]",
                "from-[#3E4F2E] to-[#1F2A18]",
              ].map((bg, i) => (
                <div key={i} className={`h-[72px] rounded-lg bg-gradient-to-br ${bg}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Bills - eq butter */}
        <div className="col-span-4 max-[960px]:col-span-12 rounded-3xl p-8 bg-butter text-olive-ink border-none relative overflow-hidden min-h-[360px] flex flex-col">
          <span className="font-serif italic font-medium text-[15px] text-ink/50">v. Split, lightly</span>
          <h3 className="font-serif font-bold text-[30px] leading-[1.05] tracking-[-0.5px] mt-3 mb-3">
            Who got the <em className="italic">third round</em>?
          </h3>
          <p className="text-[14.5px] leading-[1.55] text-ink/[0.72] max-w-[38ch]">
            A no-spreadsheet way to split a bill across the table. Settle later, in the chat you already use.
          </p>
          <div className="mt-auto pt-6">
            {[
              { emoji: "🌻", name: "Aisha", bg: "#E89B5A", amt: "$28" },
              { emoji: "🎧", name: "Kev", bg: "#6E8B4E", amt: "$31" },
              { emoji: "🌺", name: "Zuri", bg: "#C96C3F", amt: "$24" },
            ].map((r) => (
              <div key={r.name} className="flex items-center justify-between py-[10px] border-b border-dashed border-ink/[0.18] last:border-b-0">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[11px]" style={{ background: r.bg }}>{r.emoji}</div>
                  <div className="text-[12.5px] font-semibold">{r.name}</div>
                </div>
                <div className="font-serif font-bold text-sm">{r.amt}</div>
              </div>
            ))}
            <div className="flex items-center justify-between pt-[14px] border-t-[1.5px] border-ink/40">
              <div className="font-bold text-[13.5px]">Total &middot; 4 ways</div>
              <div className="font-serif font-bold text-lg">$83</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── Pull Quote ────────────────────────────────────── */
const PullQuote = () => (
  <section className="py-[120px] max-[720px]:py-20 pt-0">
    <div className="max-w-[1280px] mx-auto px-8 max-[720px]:px-[22px]">
      <div className="bg-olive-deep text-white rounded-[32px] px-[60px] py-20 max-[720px]:px-7 max-[720px]:py-12 max-[720px]:rounded-3xl relative overflow-hidden">
        <span className="absolute -top-[30px] right-10 font-serif font-bold italic text-[280px] leading-none text-butter/[0.18] select-none pointer-events-none">
          &ldquo;
        </span>
        <p className="font-serif font-medium italic text-[clamp(28px,3.6vw,46px)] leading-[1.18] tracking-[-0.02em] max-w-[22ch] relative">
          We used to talk about doing things. Now we just <em className="text-butter not-italic font-semibold">do them</em>. Three Fridays in a row, all because someone bothered to send a link.
        </p>
        <div className="mt-8 flex items-center gap-[14px] text-sm relative">
          <div className="w-11 h-11 rounded-full bg-butter text-olive-ink flex items-center justify-center text-xl">
            &#127803;
          </div>
          <div>
            <b className="block font-bold text-white not-italic">Aisha M.</b>
            <span className="text-white/65">Nairobi &middot; uses Dates with five friends</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── Steps ─────────────────────────────────────────── */
const Steps = () => (
  <section className="py-[120px] max-[720px]:py-20 pt-0" id="stories">
    <div className="max-w-[1280px] mx-auto px-8 max-[720px]:px-[22px]">
      <span className="text-xs font-bold tracking-[1.4px] uppercase text-olive-deep inline-flex items-center gap-[10px]">
        <span className="w-[18px] h-px bg-olive-deep" />90 seconds
      </span>
      <h2 className="font-serif font-bold text-[clamp(40px,5.6vw,72px)] leading-[1.02] tracking-[-0.03em] mt-[18px] max-w-[14ch]">
        From <em className="italic text-terracotta">idea</em> to <em className="italic text-terracotta">&ldquo;see you Friday&rdquo;</em>.
      </h2>

      <div className="grid grid-cols-3 max-[780px]:grid-cols-1 gap-8 mt-[60px] relative">
        {[
          { n: "i.", t: "Save it before you forget it", p: "A photo, a place, a screenshot from someone's story. Dates parses what it can and lets you tag the rest." },
          { n: "ii.", t: "Send the invite as a link", p: "No accounts required. Anyone with the URL can RSVP — straight from SMS, WhatsApp, email, anywhere." },
          { n: "iii.", t: "Show up. Then keep the photo.", p: 'After the date, drop a memory. Months later it\'ll surface as "a year ago today" — the good kind.' },
        ].map((step) => (
          <div key={step.n} className="relative">
            <div className="font-serif font-bold text-[88px] leading-none tracking-[-0.04em] text-terracotta italic">{step.n}</div>
            <div className="font-serif font-bold text-2xl mt-[14px] mb-[10px] tracking-[-0.4px]">{step.t}</div>
            <div className="text-[14.5px] leading-[1.55] text-ink-soft max-w-[32ch]">{step.p}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Ideas Wall ────────────────────────────────────── */
const IdeasWall = () => (
  <section className="py-[120px] max-[720px]:py-20 pt-0">
    <div className="max-w-[1280px] mx-auto px-8 max-[720px]:px-[22px]">
      <span className="text-xs font-bold tracking-[1.4px] uppercase text-olive-deep inline-flex items-center gap-[10px]">
        <span className="w-[18px] h-px bg-olive-deep" />Real boards
      </span>
      <h2 className="font-serif font-bold text-[clamp(40px,5.6vw,72px)] leading-[1.02] tracking-[-0.03em] mt-[18px] max-w-[14ch]">
        A peek at what people are saving.
      </h2>

      <div className="grid grid-cols-4 max-[900px]:grid-cols-2 gap-[14px] mt-[60px]">
        {[
          { bg: "from-[#E8A765] via-[#C96C3F] to-[#6E4A2B]", src: "From notes", t: "Sunset picnic, Karura", tags: ["Outdoors", "Chill"] },
          { bg: "from-[#B89B5E] to-[#8A6B3D]", src: "From TikTok", t: "Pottery class @ Kibera", tags: ["Creative", "Indoors"] },
          { bg: "from-[#6E8B4E] to-[#3E4F2E]", src: "From IG", t: "Night market, Village Market", tags: ["Food", "Evening"] },
          { bg: "from-[#D4B483] to-[#8A6B3D]", src: "From a link", t: "Bookshop crawl, Westlands", tags: ["Lowkey", "Afternoon"] },
        ].map((card, i) => (
          <div key={i} className="rounded-[18px] overflow-hidden bg-paper border border-line-soft">
            <div className={`h-[170px] bg-gradient-to-br ${card.bg} relative`}>
              <span className="absolute top-[10px] left-[10px] bg-white/[0.92] text-[9.5px] font-bold tracking-[0.6px] uppercase px-2 py-[3px] rounded-full text-ink">
                {card.src}
              </span>
            </div>
            <div className="px-4 py-[14px] pb-4">
              <div className="font-serif font-bold text-[17px] leading-[1.15] tracking-[-0.3px]">{card.t}</div>
              <div className="mt-2 flex gap-[6px] flex-wrap">
                {card.tags.map((tag) => (
                  <span key={tag} className="text-[10.5px] font-semibold text-ink-soft bg-ink/[0.05] px-2 py-[3px] rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Pricing ───────────────────────────────────────── */
const Pricing = () => (
  <section className="py-[120px] max-[720px]:py-20 pt-0" id="pricing">
    <div className="max-w-[1280px] mx-auto px-8 max-[720px]:px-[22px]">
      <span className="text-xs font-bold tracking-[1.4px] uppercase text-olive-deep inline-flex items-center gap-[10px]">
        <span className="w-[18px] h-px bg-olive-deep" />Pricing
      </span>
      <h2 className="font-serif font-bold text-[clamp(40px,5.6vw,72px)] leading-[1.02] tracking-[-0.03em] mt-[18px] max-w-[14ch]">
        Free for the <em className="italic text-terracotta">real stuff</em>.
      </h2>
      <p className="mt-[22px] text-lg leading-[1.55] text-ink-soft max-w-[540px]">
        Plan as many dates as you want. Pro is for people who want extras — collaborative boards, photo albums, calendar sync.
      </p>

      <div className="grid grid-cols-2 max-[780px]:grid-cols-1 gap-5 mt-[60px]">
        {/* Free */}
        <div className="bg-paper border border-line rounded-3xl p-9 flex flex-col gap-[18px]">
          <div>
            <span className="text-[11px] font-bold tracking-[1.4px] uppercase text-olive-deep">Free, forever</span>
            <h3 className="font-serif font-bold text-4xl tracking-[-0.6px]">Dates</h3>
          </div>
          <div className="font-serif font-bold text-5xl tracking-[-1px]">$0<span className="text-base font-medium text-ink-muted font-sans italic"> / always</span></div>
          <ul className="flex flex-col gap-[10px] list-none p-0 m-0">
            {["Unlimited dates & ideas", "Link-based invites, no account needed", "Maybe / yes / no RSVPs", "Memories & one-line notes", "Split bill across the table"].map((item) => (
              <li key={item} className="flex gap-[10px] text-[14.5px] text-ink-soft items-start">
                <span className="w-[18px] h-[18px] rounded-full bg-butter shrink-0 mt-[1px] flex items-center justify-center">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1F2A18" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 12 9 17 20 6" /></svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-2">
            <a href="#download" className="w-full inline-flex items-center justify-center gap-[10px] px-[22px] py-[15px] rounded-full text-[15px] font-semibold bg-transparent text-ink border border-line hover:bg-ink/[0.04] transition-colors">
              Get Dates free
            </a>
          </div>
        </div>

        {/* Pro */}
        <div className="bg-ink text-white border-none rounded-3xl p-9 flex flex-col gap-[18px] relative">
          <div>
            <span className="text-[11px] font-bold tracking-[1.4px] uppercase text-butter">Dates Pro</span>
            <h3 className="font-serif font-bold text-4xl tracking-[-0.6px] text-white">For the planners</h3>
          </div>
          <div className="font-serif font-bold text-5xl tracking-[-1px] text-white">$4<span className="text-base font-medium text-white/60 font-sans italic"> / month</span></div>
          <ul className="flex flex-col gap-[10px] list-none p-0 m-0">
            {["Collaborative ideas boards (with anyone)", "Full photo albums per date", "Two-way Apple / Google calendar sync", "Custom accent colors & cover art", '"On this day, last year" memories'].map((item) => (
              <li key={item} className="flex gap-[10px] text-[14.5px] text-white/85 items-start">
                <span className="w-[18px] h-[18px] rounded-full bg-butter shrink-0 mt-[1px] flex items-center justify-center">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1F2A18" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 12 9 17 20 6" /></svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-2">
            <a href="#download" className="w-full inline-flex items-center justify-center gap-[10px] px-[22px] py-[15px] rounded-full text-[15px] font-semibold bg-butter text-olive-ink hover:bg-butter-deep transition-colors">
              Try Pro &middot; 14 days free
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── FAQ ───────────────────────────────────────────── */
const faqData = [
  { q: "Do my friends need the app?", a: "No. Dates invites are real URLs. Anyone can open the link, see the plan, and RSVP from a browser — phone, laptop, whatever. They can grab the app if they like it, but they never have to." },
  { q: "What's the difference vs. a group chat?", a: "Group chats are great at vibing and bad at deciding. Dates handles the \"who, when, where\" so the chat can stay fun." },
  { q: "Is this a dating app?", a: "No. It's a planning app — for the people you already know. Friends, partners, the climbing crew, your mum. The kind of date that goes in a calendar." },
  { q: "Will you sell my data?", a: "No. Free is funded by Pro, not by you. We don't run ads and we don't share your contacts." },
  { q: "Android and iPhone?", a: "Both. Web works for receiving invites and basic RSVPs." },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section className="py-[120px] max-[720px]:py-20 pt-0">
      <div className="max-w-[880px] mx-auto px-8 max-[720px]:px-[22px]">
        <span className="text-xs font-bold tracking-[1.4px] uppercase text-olive-deep inline-flex items-center gap-[10px]">
          <span className="w-[18px] h-px bg-olive-deep" />Questions
        </span>
        <h2 className="font-serif font-bold text-[clamp(40px,5.6vw,72px)] leading-[1.02] tracking-[-0.03em] mt-[18px] max-w-[14ch]">
          The short answers.
        </h2>

        <div className="mt-[60px] flex flex-col border-t border-line">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="border-b border-line py-6 cursor-pointer"
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            >
              <div className="flex justify-between items-center gap-4">
                <span className="font-serif font-semibold text-[22px] tracking-[-0.3px]">{item.q}</span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    openIdx === i ? "rotate-45 bg-butter" : "bg-ink/[0.05]"
                  }`}
                >
                  <PlusIcon />
                </span>
              </div>
              {openIdx === i && (
                <p className="text-[15px] leading-[1.55] text-ink-soft mt-[10px] max-w-[60ch]">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Final CTA ─────────────────────────────────────── */
const FinalCTA = () => (
  <section className="px-8" id="download">
    <div className="max-w-[1280px] mx-auto">
      <div className="bg-ink text-white rounded-[36px] px-[60px] py-[100px] max-[720px]:px-7 max-[720px]:py-16 max-[720px]:rounded-3xl text-center relative overflow-hidden mb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(232,213,116,0.18),transparent_50%),radial-gradient(ellipse_at_20%_80%,rgba(201,108,63,0.18),transparent_50%)]" />
        <h2 className="font-serif font-bold text-[clamp(48px,7vw,96px)] leading-[0.98] tracking-[-0.04em] relative">
          Make a plan.<br /><em className="text-butter italic font-semibold">Keep it.</em>
        </h2>
        <p className="mt-6 text-lg text-white/70 relative max-w-[480px] mx-auto">
          Dates is free for as long as you want, on iPhone and Android. Try it for one Friday.
        </p>
        <div className="mt-10 flex gap-3 justify-center flex-wrap relative">
          <a href="#" className="inline-flex items-center gap-[10px] px-[22px] py-[15px] rounded-full text-[15px] font-semibold bg-butter text-olive-ink hover:bg-butter-deep transition-colors">
            <AppleIcon />
            Download for iPhone
          </a>
          <a href="#" className="inline-flex items-center gap-[10px] px-[22px] py-[15px] rounded-full text-[15px] font-semibold bg-white/[0.08] text-white border border-white/15 hover:bg-white/[0.12] transition-colors">
            <PlayIcon />
            Download for Android
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ── Footer ────────────────────────────────────────── */
const Footer = () => (
  <footer className="max-w-[1280px] mx-auto px-8 max-[720px]:px-[22px]">
    <div className="border-t border-line py-12 pb-14 grid grid-cols-4 max-[780px]:grid-cols-2 gap-8">
      <div>
        <div className="flex items-center gap-[10px] font-serif font-bold text-[22px] tracking-[-0.4px] text-olive-deep mb-[14px]">
          <BrandMark />
          <span>Dates</span>
        </div>
        <div className="font-serif italic font-medium text-lg text-olive-deep">Plans, not pings.</div>
      </div>
      <div>
        <div className="text-[11px] font-bold tracking-[1.4px] uppercase text-ink-muted mb-[14px]">Product</div>
        <div className="flex flex-col gap-[10px]">
          <a href="#" className="text-ink text-sm hover:text-terracotta transition-colors">Ideas Board</a>
          <a href="#" className="text-ink text-sm hover:text-terracotta transition-colors">Invites</a>
          <a href="#" className="text-ink text-sm hover:text-terracotta transition-colors">Memories</a>
          <a href="#" className="text-ink text-sm hover:text-terracotta transition-colors">Pro</a>
        </div>
      </div>
      <div>
        <div className="text-[11px] font-bold tracking-[1.4px] uppercase text-ink-muted mb-[14px]">Company</div>
        <div className="flex flex-col gap-[10px]">
          <a href="#" className="text-ink text-sm hover:text-terracotta transition-colors">About</a>
          <a href="#" className="text-ink text-sm hover:text-terracotta transition-colors">Field notes</a>
          <a href="#" className="text-ink text-sm hover:text-terracotta transition-colors">Press kit</a>
          <a href="#" className="text-ink text-sm hover:text-terracotta transition-colors">Careers</a>
        </div>
      </div>
      <div>
        <div className="text-[11px] font-bold tracking-[1.4px] uppercase text-ink-muted mb-[14px]">Help</div>
        <div className="flex flex-col gap-[10px]">
          <a href="#" className="text-ink text-sm hover:text-terracotta transition-colors">Support</a>
          <a href="#" className="text-ink text-sm hover:text-terracotta transition-colors">Status</a>
          <a href="#" className="text-ink text-sm hover:text-terracotta transition-colors">Privacy</a>
          <a href="#" className="text-ink text-sm hover:text-terracotta transition-colors">Terms</a>
        </div>
      </div>
    </div>
    <div className="border-t border-line-soft py-6 pb-14 flex justify-between items-center flex-wrap gap-[14px] text-[13px] text-ink-muted">
      <div>&copy; 2026 Dates Co. &middot; Made with care, mostly on Fridays.</div>
      <div className="flex gap-[18px]">
        <a href="#" className="text-ink-muted hover:text-ink transition-colors">Twitter</a>
        <a href="#" className="text-ink-muted hover:text-ink transition-colors">Instagram</a>
        <a href="#" className="text-ink-muted hover:text-ink transition-colors">hello@dates.app</a>
      </div>
    </div>
  </footer>
);

/* ── App ───────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <Hero />
      <MarqueeStrip />
      <AntiPattern />
      <Features />
      <PullQuote />
      <Steps />
      <IdeasWall />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
