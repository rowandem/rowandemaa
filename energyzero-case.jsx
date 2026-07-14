// EnergyZero case study custom page with images

function EnergyZeroCase({ lang, t, onBack, onMore }) {
  const cs = CASE_STUDIES["energyzero"]?.[lang];
  const p = PROJECTS.find(x => x.id === "energyzero");

  return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <BackBtn onClick={onBack} onMore={onMore} t={t} />
      <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(48px, 6.4vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.025em", fontWeight: 400, margin: "20px 0 12px" }}>
        {cs.title}
      </h2>
      <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--muted)", margin: 0, fontSize: 22 }}>{cs.subtitle}</p>

      <CaseThumb id="energyzero" />

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
      </div>

      {/* Flexcontract + Storytelling side by side */}
      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "56px 0 16px", fontWeight: 500 }}>
        {lang === "nl" ? "Eindproduct" : "Final product"}
      </h3>
      <div className="va-photo-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" }}>
        <img src="uploads/f711f75a-b3ce-4e8a-98ac-d3f89b140197_rw_1920.png" alt="EnergyZero storytelling one-pager"
          style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/f99a1168-ed95-48a7-8da5-1c6c980b09df_rw_1920.png" alt="EnergyZero Flexcontract page"
          style={{ width: "100%", display: "block", borderRadius: 6 }}/>
      </div>

      {/* Style Guide bottom */}
      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "56px 0 16px", fontWeight: 500 }}>
        Style Guide
      </h3>
      <img src="uploads/c853dede-8dd9-41bb-9a1d-f24219ebb151_rw_1920.png" alt="EnergyZero style guide"
        style={{ width: "75%", display: "block", borderRadius: 6 }}/>

      <div style={{ height: 80 }}/>
    </div>
  );
}

Object.assign(window, { EnergyZeroCase });
