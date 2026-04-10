import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Banner1 from "../assets/banner1.jfif";
import Banner2 from "../assets/banner2.jfif";
import Banner3 from "../assets/banner3.jfif";

/* ══════════════════════════════════════════
   SLIDE DATA
══════════════════════════════════════════ */
const SLIDES = [
    {
        title: "We Build Digital\nExperiences",
        tag: "WEB DESIGN & DEVELOPMENT",
        sub: "THE",
        subBold: "BUSINESS",
        subEnd: "THAT WE ARE IN",
        bg: Banner3,
        codeSlot: 0,
    },
    {
        title: "Full-Stack MERN\nEngineering",
        tag: "SCALABLE SOLUTIONS",
        sub: "THE",
        subBold: "TECHNOLOGY",
        subEnd: "THAT POWERS YOU",
        bg: Banner1,
        codeSlot: 1,
    },
    {
        title: "Launch. Scale.\nDominate.",
        tag: "DIGITAL GROWTH",
        sub: "THE",
        subBold: "BRAND VALUES",
        subEnd: "THAT WE LIVE BY",
        bg: Banner2,
        codeSlot: 2,
    },
];

/* ══════════════════════════════════════════
   CODE WINDOWS — 3 completely different sets
══════════════════════════════════════════ */

// Slot 0 — Terminal / bash deploy log style
const TERMINAL_LINES = [
    { t: "$ npm run build", c: "#a8d97c" },
    { t: "> digitalwebguider@3.0.0", c: "#999" },
    { t: "> vite build", c: "#999" },
    { t: "", c: "" },
    { t: "✓ 1847 modules transformed", c: "#25baff" },
    { t: "✓ built in 2.41s", c: "#25baff" },
    { t: "", c: "" },
    { t: "$ vercel --prod", c: "#a8d97c" },
    { t: "▲ Deploying to production", c: "#fff" },
    { t: "✔ Preview: https://dwg.app", c: "#a8d97c" },
    { t: "✔ Deployed: live", c: "#a8d97c" },
];

// Slot 1 — API route + middleware (Express/Node)
const API_LINES = [
    { t: "router.use(authenticate);", c: "#c792ea" },
    { t: "", c: "" },
    { t: "router.get('/projects', async (req, res) => {", c: "#25baff" },
    { t: "  const data = await Project", c: "#fff" },
    { t: "    .find({ active: true })", c: "#ff9d4d" },
    { t: "    .sort('-createdAt')", c: "#ff9d4d" },
    { t: "    .limit(10);", c: "#ff9d4d" },
    { t: "  res.json({ success: true, data });", c: "#fff" },
    { t: "});", c: "#25baff" },
    { t: "", c: "" },
    { t: "module.exports = router;", c: "#a8d97c" },
];

// Slot 2 — React component (JSX)
const REACT_LINES = [
    { t: "export default function Hero() {", c: "#25baff" },
    { t: "  const [active, set] = useState(0);", c: "#fff" },
    { t: "", c: "" },
    { t: "  useEffect(() => {", c: "#c792ea" },
    { t: "    const t = setInterval(next, 5500);", c: "#fff" },
    { t: "    return () => clearInterval(t);", c: "#fff" },
    { t: "  }, [active]);", c: "#c792ea" },
    { t: "", c: "" },
    { t: "  return (", c: "#25baff" },
    { t: "    <Slider slides={SLIDES} />", c: "#ff9d4d" },
    { t: "  );", c: "#25baff" },
    { t: "}", c: "#25baff" },
];

const ALL_CODE = [TERMINAL_LINES, API_LINES, REACT_LINES];
const CODE_TITLES = ["terminal", "api.js", "Hero.jsx"];

// Small side snippet panels (left & right), different per slot
const SIDE_LEFT = [
    // slot 0 — git log
    [
        { c: "#a8d97c", t: "commit a3f92bc" },
        { c: "#999", t: "Author: Dev Team" },
        { c: "#fff", t: "feat: launch v3.0" },
        { c: "#999", t: "2 minutes ago" },
    ],
    // slot 1 — .env
    [
        { c: "#c792ea", t: "# .env.production" },
        { c: "#a8d97c", t: "PORT=5000" },
        { c: "#a8d97c", t: "MONGO_URI=atlas://" },
        { c: "#a8d97c", t: "JWT_SECRET=••••••" },
    ],
    // slot 2 — package.json snippet
    [
        { c: "#ff9d4d", t: '"scripts": {' },
        { c: "#fff", t: '  "dev": "vite",' },
        { c: "#fff", t: '  "build": "vite build"' },
        { c: "#ff9d4d", t: '}' },
    ],
];

const SIDE_RIGHT = [
    // slot 0 — server status
    [
        { c: "#a8d97c", t: "● Server: ONLINE" },
        { c: "#25baff", t: "● DB: Connected" },
        { c: "#a8d97c", t: "● CDN: Active" },
        { c: "#999", t: "Uptime: 99.9%" },
    ],
    // slot 1 — response JSON
    [
        { c: "#fff", t: "{" },
        { c: "#25baff", t: '  "success": true,' },
        { c: "#ff9d4d", t: '  "count": 42,' },
        { c: "#a8d97c", t: '  "latency": "12ms"' },
        { c: "#fff", t: "}" },
    ],
    // slot 2 — lighthouse scores
    [
        { c: "#a8d97c", t: "Performance  100" },
        { c: "#a8d97c", t: "Accessibility 98" },
        { c: "#25baff", t: "SEO          100" },
        { c: "#ff9d4d", t: "Best Practice 95" },
    ],
];

/* ══════════════════════════════════════════
   TYPEWRITER HOOK
══════════════════════════════════════════ */
function useTypewriter(text, speed, run) {
    const [out, setOut] = useState("");
    useEffect(() => {
        if (!run) { setOut(""); return; }
        setOut("");
        let i = 0;
        const iv = setInterval(() => {
            i++;
            setOut(text.slice(0, i));
            if (i >= text.length) clearInterval(iv);
        }, speed);
        return () => clearInterval(iv);
    }, [text, run]);
    return out;
}

/* ══════════════════════════════════════════
   ANIMATED CODE WINDOW (centre)
══════════════════════════════════════════ */
function CodeWindow({ slot, animKey }) {
    const lines = ALL_CODE[slot];
    const title = CODE_TITLES[slot];
    const [vis, setVis] = useState(0);

    useEffect(() => {
        setVis(0);
        let i = 0;
        const t = setInterval(() => {
            i++;
            setVis(i);
            if (i >= lines.length) clearInterval(t);
        }, 90);
        return () => clearInterval(t);
    }, [animKey, slot]);

    return (
        <div style={{
            background: "rgba(8,10,18,0.92)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 16,
            padding: "18px 22px",
            fontFamily: "'Fira Code','Courier New',monospace",
            fontSize: 13,
            lineHeight: 1.9,
            backdropFilter: "blur(18px)",
            boxShadow: "0 0 0 1px rgba(37,186,255,0.08), 0 20px 60px rgba(0,0,0,0.6)",
            minWidth: 380,
            position: "relative",
        }}>
            {/* title bar */}
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 14 }}>
                {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                    <div key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
                ))}
                <span style={{
                    marginLeft: "auto",
                    background: "rgba(37,186,255,0.1)",
                    border: "1px solid rgba(37,186,255,0.2)",
                    borderRadius: 100,
                    padding: "2px 10px",
                    fontSize: 10,
                    color: "#25baff",
                    letterSpacing: "0.05em",
                }}>
                    {title}
                </span>
            </div>

            {/* lines */}
            {lines.slice(0, vis).map((l, i) => (
                <div key={i} style={{
                    display: "flex", gap: 10, alignItems: "baseline",
                    opacity: 0,
                    animation: `codeIn 0.25s ${i * 0.02}s forwards`,
                }}>
                    <span style={{ color: "rgba(255,255,255,0.15)", minWidth: 20, textAlign: "right", userSelect: "none", fontSize: 11 }}>
                        {l.t ? i + 1 : ""}
                    </span>
                    <span style={{ color: l.c || "#888" }}>{l.t}</span>
                </div>
            ))}

            {/* blinking cursor */}
            {vis < lines.length && (
                <div style={{ display: "flex", gap: 10, marginTop: 2 }}>
                    <span style={{ minWidth: 20 }} />
                    <span style={{ color: "#25baff", animation: "cur 0.8s infinite" }}>█</span>
                </div>
            )}

            <style>{`
                @keyframes codeIn { from{opacity:0;transform:translateX(-5px)}to{opacity:1;transform:none} }
                @keyframes cur    { 0%,100%{opacity:1}50%{opacity:0} }
            `}</style>
        </div>
    );
}

/* ══════════════════════════════════════════
   SMALL SIDE PANEL
══════════════════════════════════════════ */
function SidePanel({ lines, style }) {
    return (
        <div style={{
            background: "rgba(8,10,18,0.82)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
            padding: "12px 14px",
            fontFamily: "'Fira Code','Courier New',monospace",
            fontSize: 11,
            lineHeight: 1.75,
            backdropFilter: "blur(12px)",
            ...style,
        }}>
            {lines.map((l, i) => (
                <div key={i} style={{ color: l.c || "#888" }}>{l.t}</div>
            ))}
        </div>
    );
}

/* ══════════════════════════════════════════
   MAIN HERO
══════════════════════════════════════════ */
export default function HeroSlider3() {
    const [active, setActive] = useState(0);
    const [animKey, setAnimKey] = useState(0);

    const go = useCallback((idx) => {
        const n = ((idx % SLIDES.length) + SLIDES.length) % SLIDES.length;
        setActive(n);
        setAnimKey(k => k + 1);
    }, []);

    useEffect(() => {
        const t = setInterval(() => go(active + 1), 5800);
        return () => clearInterval(t);
    }, [active, go]);

    const slide = SLIDES[active];
    const lines = slide.title.split("\n");

    const [l1done, setL1done] = useState(false);
    useEffect(() => {
        setL1done(false);
        const t = setTimeout(() => setL1done(true), lines[0].length * 50 + 60);
        return () => clearTimeout(t);
    }, [animKey]);

    const tw1 = useTypewriter(lines[0], 50, true);
    const tw2 = useTypewriter(lines[1] || "", 50, l1done);

    return (
        <header style={{ position: "relative", minHeight: 600, overflow: "hidden", background: "#030508" }}>

            {/* ── BG images ── */}
            {SLIDES.map((s, i) => (
                <div key={i} style={{
                    position: "absolute", inset: 0,
                    backgroundImage: `url(${s.bg})`,
                    backgroundSize: "cover", backgroundPosition: "center",
                    opacity: i === active ? 1 : 0,
                    transition: "opacity 1.2s ease",
                    zIndex: 0,
                }} />
            ))}

            {/* gradient overlay — heavier on left so text pops */}
            <div style={{
                position: "absolute", inset: 0, zIndex: 1,
                background: "linear-gradient(105deg, rgba(3,5,8,0.92) 0%, rgba(3,5,8,0.78) 50%, rgba(3,5,8,0.55) 100%)",
            }} />

            {/* subtle grid */}
            <div style={{
                position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
                backgroundImage: `
                    linear-gradient(rgba(37,186,255,0.035) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(37,186,255,0.035) 1px, transparent 1px)
                `,
                backgroundSize: "56px 56px",
            }} />

            {/* ── Code panels (right side) ── */}
            <div style={{ position: "absolute", inset: 0, zIndex: 4, pointerEvents: "none" }}>

                {/* LEFT side panel */}
                <SidePanel
                    lines={SIDE_LEFT[slide.codeSlot]}
                    style={{ position: "absolute", left: "2%", bottom: "16%", opacity: 0.8, minWidth: 180 }}
                />

                {/* LEFT blurred ghost rows */}
                <div style={{
                    position: "absolute", left: "2%", top: "20%",
                    background: "rgba(8,10,18,0.55)", border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 10, padding: "10px 14px", opacity: 0.45, minWidth: 140,
                }}>
                    {[75, 55, 85, 45, 65].map((w, i) => (
                        <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 5 }}>
                            <div style={{ width: 7, height: 7, borderRadius: "50%", border: "1px solid rgba(37,186,255,0.4)", flexShrink: 0 }} />
                            <div style={{ height: 6, borderRadius: 100, background: "rgba(255,255,255,0.09)", width: `${w}%`, filter: "blur(1px)" }} />
                        </div>
                    ))}
                </div>

                {/* CENTRE main code window */}
                <div style={{ position: "absolute", left: "50%", top: "18%", transform: "translateX(-50%)" }}>
                    <CodeWindow slot={slide.codeSlot} animKey={animKey} key={animKey} />
                    {/* bottom scrollbar mockup */}
                    <div style={{ marginTop: 5, display: "flex", justifyContent: "center" }}>
                        <div style={{ width: 220, height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 100 }}>
                            <div style={{ width: 80, height: 4, background: "rgba(37,186,255,0.3)", borderRadius: 100 }} />
                        </div>
                    </div>
                </div>

                {/* RIGHT side panel */}
                <SidePanel
                    lines={SIDE_RIGHT[slide.codeSlot]}
                    style={{ position: "absolute", right: "2%", bottom: "18%", opacity: 0.8, minWidth: 170 }}
                />

                {/* RIGHT blurred ghost */}
                <div style={{
                    position: "absolute", right: "2%", top: "22%",
                    background: "rgba(8,10,18,0.55)", border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 10, padding: "10px 14px", opacity: 0.4, minWidth: 120,
                }}>
                    {[80, 50, 70, 40, 60, 55].map((w, i) => (
                        <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 5 }}>
                            <div style={{ width: 7, height: 7, borderRadius: "50%", border: "1px solid rgba(168,217,124,0.35)", flexShrink: 0 }} />
                            <div style={{ height: 6, borderRadius: 100, background: "rgba(255,255,255,0.09)", width: `${w}%`, filter: "blur(1px)" }} />
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Main text content ── */}
            <div style={{
                position: "relative", zIndex: 10,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                minHeight: 600, textAlign: "center",
                padding: "80px 40px 100px",
            }}>
                {/* tag pill */}
                <div
                    key={animKey + "-tag"}
                    style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        background: "rgba(37,186,255,0.08)",
                        border: "1px solid rgba(37,186,255,0.22)",
                        borderRadius: 100, padding: "5px 18px",
                        fontSize: 11, color: "#25baff",
                        fontFamily: "'Fira Code',monospace",
                        letterSpacing: "0.12em", marginBottom: 28,
                        animation: "fadeUp 0.5s 0.1s both",
                    }}
                >
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#a8d97c", flexShrink: 0, animation: "ping 2s infinite" }} />
                    {slide.tag}
                </div>

                {/* TITLE — typewriter */}
                <h1
                    key={animKey}
                    style={{
                        fontSize: "clamp(36px, 5.5vw, 72px)",
                        fontWeight: 800, color: "#fff",
                        lineHeight: 1.12, marginBottom: 20,
                        fontFamily: "'Sora','Segoe UI',sans-serif",
                        letterSpacing: "-0.025em",
                        textShadow: "0 2px 40px rgba(0,0,0,0.95)",
                        minHeight: "2.5em",
                    }}
                >
                    <span style={{ color: "#fff" }}>
                        {tw1}
                        {!l1done && <span style={{ animation: "blink 0.7s infinite" }}>|</span>}
                    </span>
                    <br />
                    <span style={{ color: "#25baff" }}>
                        {l1done && tw2}
                        {l1done && tw2.length < (lines[1] || "").length && (
                            <span style={{ animation: "blink 0.7s infinite", color: "#25baff" }}>|</span>
                        )}
                    </span>
                </h1>

                {/* subtitle */}
                <p
                    key={animKey + "-s"}
                    style={{
                        fontSize: "clamp(11px,1.4vw,15px)",
                        letterSpacing: "0.22em", color: "rgba(255,255,255,0.60)",
                        marginBottom: 44,
                        animation: "fadeUp 0.5s 0.35s both",
                    }}
                >
                    {slide.sub}&nbsp;
                    <strong style={{ color: "#fff", fontWeight: 700, letterSpacing: "0.22em" }}>{slide.subBold}</strong>
                    &nbsp;{slide.subEnd}
                </p>

                {/* CTA buttons */}
                <div
                    key={animKey + "-b"}
                    style={{
                        display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap",
                        animation: "fadeUp 0.5s 0.55s both"
                    }}
                >
                    <Link to="/contact" className="hbtn hbtn-white">GET A QUOTE</Link>
                    <Link to="/contact" className="hbtn hbtn-orange">CONTACT US</Link>
                </div>
            </div>

            {/* ── Left / Right arrows ── */}
            <button className="harrow harrow-l" onClick={() => go(active - 1)}>&#8249;</button>
            <button className="harrow harrow-r" onClick={() => go(active + 1)}>&#8250;</button>

            {/* ── Dot indicators ── */}
            <div style={{
                position: "absolute", bottom: 22, left: "50%", transform: "translateX(-50%)",
                display: "flex", gap: 8, zIndex: 20,
            }}>
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => go(i)}
                        style={{
                            width: i === active ? 30 : 9, height: 9,
                            borderRadius: 100, border: "none", cursor: "pointer", padding: 0,
                            background: i === active ? "#ff6b1a" : "rgba(255,255,255,0.25)",
                            transition: "all 0.35s ease",
                        }}
                    />
                ))}
            </div>

            {/* ── Slide counter ── */}
            <div style={{
                position: "absolute", bottom: 26, right: 28, zIndex: 20,
                fontFamily: "'Fira Code',monospace", fontSize: 12,
                color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em",
            }}>
                {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </div>

            {/* ── Global styles ── */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Fira+Code:wght@400;500&display=swap');

                @keyframes blink   { 0%,100%{opacity:1}50%{opacity:0} }
                @keyframes fadeUp  { from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none} }
                @keyframes ping    { 0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(0.8)} }

                .hbtn {
                    display:inline-block; padding:13px 32px;
                    border-radius:7px; font-weight:700; font-size:13px;
                    letter-spacing:0.1em; text-decoration:none;
                    transition:all .25s ease; cursor:pointer;
                }
                .hbtn-white {
                    border:2px solid #fff; background:transparent; color:#fff;
                }
                .hbtn-white:hover { background:#fff; color:#000; }

                .hbtn-orange {
                    border:2px solid #ff6b1a; background:#ff6b1a; color:#fff;
                }
                .hbtn-orange:hover { background:#e05510; border-color:#e05510; }

                .harrow {
                    position:absolute; top:50%; transform:translateY(-50%);
                    z-index:20;
                    background:rgba(255,255,255,0.06);
                    border:1px solid rgba(255,255,255,0.15);
                    border-radius:50%; width:48px; height:48px;
                    color:#fff; font-size:28px; cursor:pointer;
                    display:flex; align-items:center; justify-content:center;
                    transition:all .2s; line-height:1; backdrop-filter:blur(6px);
                }
                .harrow:hover { background:rgba(255,107,26,0.7); border-color:#ff6b1a; }
                .harrow-l { left:20px; }
                .harrow-r { right:20px; }

                @media(max-width:640px) {
                    .harrow { display:none; }
                }
            `}</style>
        </header>
    );
}