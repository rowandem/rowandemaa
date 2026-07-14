// Keiretsu Europe case study with image carousel

function KeiretsuCase({ lang, t, onBack, onMore }) {
  const cs = CASE_STUDIES["keiretsu"]?.[lang];
  const p = PROJECTS.find(x => x.id === "keiretsu");
  const [current, setCurrent] = React.useState(0);

  const images = [
    "uploads/Web 1.png",
    "uploads/Web 2.png",
    "uploads/Web 3.png",
    "uploads/Web 4.png",
    "uploads/Web 5.png",
    "uploads/Web 6.png",
    "uploads/Web 7.png",
    "uploads/Web 8.png",
  ];

  const prev = () => setCurrent(c => (c - 1 + images.length) % images.length);
  const next = () => setCurrent(c => (c + 1) % images.length);

  return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <BackBtn onClick={onBack} onMore={onMore} t={t} />
      <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(48px, 6.4vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.025em", fontWeight: 400, margin: "20px 0 12px" }}>
        {cs.title}
      </h2>
      <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--muted)", margin: 0, fontSize: 22 }}>{cs.subtitle}</p>

      <CaseThumb id="keiretsu" />

      <dl className="va-case-meta" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
        borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
        margin: "40px 0", padding: "20px 0", fontSize: 13 }}>
        <Meta label={t.role_label}     val={cs.role}/>
        <Meta label={t.year_label}     val={cs.year}/>
        <Meta label={t.duration_label} val={cs.duration}/>
        <Meta label={t.tools_label}    val={cs.tools.join(", ")}/>
      </dl>

      <p style={{ fontFamily: "var(--serif)", fontSize: 26, lineHeight: 1.4, color: "var(--fg)", margin: "0 0 48px" }}>
        {cs.summary}
      </p>

      {cs.sections.map((s, i) => (
        <section key={i} className="va-case-section" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 32, padding: "24px 0", borderTop: "1px solid var(--line)" }}>
          <h3 style={{ fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", margin: 0, fontWeight: 500 }}>
            {String(i + 1).padStart(2, "0")} · {s.h}
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0 }}>{s.p}</p>
        </section>
      ))}

      <div style={{ marginTop: 48, padding: "28px 32px", background: p.bg,
        color: p.dark ? "rgba(255,255,255,0.95)" : "rgba(0,0,0,0.85)", borderRadius: 6 }}>
        <span style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", opacity: 0.65 }}>{t.outcome_label}</span>
        <p style={{ fontFamily: "var(--serif)", fontSize: 28, lineHeight: 1.2, margin: "8px 0 0" }}>{cs.outcome}</p>
        <a href="https://xd.adobe.com/view/ab475b22-43b1-493a-959b-5758c8e435ba-fe14/?fullscreen" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 16, color: "inherit", textDecoration: "underline", textUnderlineOffset: "3px", fontSize: 14 }}>
          {lang === "nl" ? "Bekijk het prototype →" : "View the prototype →"}
        </a>
      </div>

      {/* Carousel */}
      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "56px 0 16px", fontWeight: 500 }}>
        {lang === "nl" ? "Website pagina's" : "Website pages"}
      </h3>
      <div style={{ position: "relative", borderRadius: 8, overflow: "hidden", background: "#f5f4f0", maxWidth: 520, margin: "0 auto" }}>
        <img src={images[current]} alt={`Page ${current + 1}`}
          style={{ width: "100%", display: "block", transition: "opacity .3s ease" }}/>

        {/* Nav arrows */}
        <button onClick={prev} style={{
          position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
          width: 36, height: 36, borderRadius: "50%",
          background: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)", fontSize: 16, color: "#111",
        }}>←</button>
        <button onClick={next} style={{
          position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
          width: 36, height: 36, borderRadius: "50%",
          background: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)", fontSize: 16, color: "#111",
        }}>→</button>
      </div>

      {/* Dots + counter below carousel */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginTop: 14 }}>
        <div style={{ display: "flex", gap: 6 }}>
          {images.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: current === i ? 22 : 8, height: 8, borderRadius: 999,
              background: current === i ? "var(--fg)" : "var(--line)",
              border: "none", cursor: "pointer", padding: 0,
              transition: "width .2s, background .2s",
            }}/>
          ))}
        </div>
        <span style={{ fontSize: 12, color: "var(--muted)" }}>
          {current + 1} / {images.length}
        </span>
      </div>

      <div style={{ height: 80 }}/>
    </div>
  );
}

Object.assign(window, { KeiretsuCase });
