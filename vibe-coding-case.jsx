// Vibe Coding case study — moving from Figma to Claude Code

function VibeCodingCase({ lang, t, onBack, onMore }) {
  const docBlocks = [
    { name: "CLAUDE.md", body: `# Role
You are a senior product designer and frontend engineer.

# Product context
This product helps [target audience] achieve [main goal].

# Design principles
- Prioritize clarity over visual decoration.
- Use progressive disclosure for complex flows.
- Keep screens focused on one primary action.
- Avoid introducing new UI patterns unless necessary.

# Design system rules
- Use existing components before creating new ones.
- Follow the spacing, typography, and color tokens in /design/tokens.md.
- Do not hardcode styles unless explicitly requested.

# Workflow
Before making changes:
1. Analyze the current UX.
2. Explain the intended change.
3. Identify affected components.
4. Propose a plan.
5. Wait for approval before editing major flows.

# Output format
For UX tasks, always provide:
- UX reasoning
- Suggested changes
- Files affected
- Risks or tradeoffs` },
    { name: "components.md", body: `# Button rules

Primary button:
- Use only once per screen.
- Reserved for the main action.
- Never use for destructive actions.

Secondary button:
- Use for alternative actions.
- Can appear multiple times.

Destructive button:
- Always requires confirmation.
- Never placed as the default action.` },
    { name: "SKILL.md", body: `---
name: design-system-audit
description: Review UI code against the product design system.
---

# Goal
Find inconsistencies between implementation and design system rules.

# Inputs
- UI files
- Design system documentation
- Component library rules

# Process
1. Identify components used.
2. Compare them against design system rules.
3. Flag hardcoded styles.
4. Suggest fixes.
5. Prioritize by severity.

# Output
Return a table with:
- Issue
- Location
- Severity
- Recommended fix` },
  ];
  const copy = lang === "nl" ? {
    subtitle: "Van Figma naar Claude Code",
    role: "Product Designer", year: "2026", duration: "doorlopend",
    tools: ["Claude Code", "GitHub", "GitLab", "Figma"],
    intro: "Sinds eind vorig jaar werk ik meer met Claude dan met Figma. Dit is het verhaal van hoe dat zo gekomen is.",
    sections: [
      { h: "Het startpunt", p: "Eind vorig jaar wilde ik meer leren dan alleen HTML en CSS. Ik begon met cursussen Python, maar toen AI zulke grote stappen zette werd het duidelijker: de basis zelf leren was niet meer de meest logische route. In plaats daarvan ben ik direct gaan coderen met Claude Code." },
      { h: "Leren van developers", p: "Ik ben meetings gaan bijwonen met devs uit mijn team en heb geleerd over GitHub, GitLab, branches en merge requests. Stap voor stap kreeg ik meer grip op hoe een development-workflow er in de praktijk uitziet." },
      { h: "De praktijk", p: "De afgelopen maanden ben ik actiever bezig met het oplossen van UX-gerelateerde tickets die al een tijd op de plank lagen, dan met het openen van Figma. Design en implementatie liggen nu dichter bij elkaar." },
      { h: "Grenzen leren stellen", p: "Een belangrijke les is het stellen van grenzen met Claude, zodat ik niet zelf kleine UI-dingetjes ga fixen of dingen herstel die Claude op eigen initiatief heeft aangepast." }
    ],
    outcome: "Van UX-designer die af en toe code leest, naar iemand die actief meebouwt aan de codebase, met Figma nog steeds in de gereedschapskist maar niet meer als eerste stap."
  } : {
    subtitle: "Moving from Figma to Claude Code",
    role: "Product Designer", year: "2026", duration: "ongoing",
    tools: ["Claude Code", "GitHub", "GitLab", "Figma"],
    intro: "Since the end of last year, I've been working more with Claude than with Figma. Here's how that happened.",
    sections: [
      { h: "The starting point", p: "At the end of last year I wanted to learn more than just HTML and CSS. I started with a bunch of Python courses, but as AI made such big steps, it became clear that learning the basics from scratch wasn't the most logical route anymore. So I skipped ahead and started coding directly with Claude Code." },
      { h: "Learning from developers", p: "I started joining meetings with developers on my team and learned about GitHub, GitLab, branches, and merge requests, among other things. Step by step I got a better grip on what a real development workflow actually looks like." },
      { h: "Day to day", p: "Over the past few months I've been more active fixing UX-related tickets that had been sitting on the shelf than opening Figma. Design and implementation now live much closer together." },
      { h: "Setting boundaries", p: "An important lesson has been learning to set boundaries with Claude, so I'm not stuck fixing small UI details myself, or undoing things Claude changed on its own." }
    ],
    outcome: "From a UX designer who occasionally read code, to someone actively building in the codebase with Figma still in the toolkit, just no longer the first step."
  };

  return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <BackBtn onClick={onBack} onMore={onMore} t={t} />

      <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(48px, 6.4vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.025em", fontWeight: 400, margin: "20px 0 12px" }}>
        Vibe Coding
      </h2>
      <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--muted)", margin: 0, fontSize: 22 }}>{copy.subtitle}</p>

      <CaseThumb id="vibe-coding" />

      <dl className="va-case-meta" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
        borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
        margin: "40px 0", padding: "20px 0", fontSize: 13 }}>
        <Meta label={t.role_label}     val={copy.role}/>
        <Meta label={t.year_label}     val={copy.year}/>
        <Meta label={t.duration_label} val={copy.duration}/>
        <Meta label={lang === "nl" ? "Bedrijf" : "Company"} val="Storyteq"/>
      </dl>

      <p style={{ fontFamily: "var(--serif)", fontSize: 26, lineHeight: 1.4, color: "var(--fg)", margin: "0 0 48px" }}>
        {copy.intro}
      </p>

      {copy.sections.map((s, i) => (
        <section key={i} className="va-case-section" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 32, padding: "24px 0", borderTop: "1px solid var(--line)" }}>
          <h3 style={{ fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", margin: 0, fontWeight: 500 }}>
            {String(i + 1).padStart(2, "0")} · {s.h}
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0 }}>{s.p}</p>
        </section>
      ))}

      <div style={{ marginTop: 48, padding: "28px 32px", background: "#CE7C5F", color: "#fff", borderRadius: 6 }}>
        <span style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", opacity: 0.75 }}>{t.outcome_label}</span>
        <p style={{ fontFamily: "var(--serif)", fontSize: 26, lineHeight: 1.25, margin: "8px 0 0" }}>{copy.outcome}</p>
      </div>

      <section className="va-case-section" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 32, padding: "24px 0", borderTop: "1px solid var(--line)", marginTop: 48 }}>
        <h3 style={{ fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", margin: 0, fontWeight: 500 }}>
          {lang === "nl" ? "Resultaat · Toolbar opschonen" : "Result · Cleaning up the toolbar"}
        </h3>
        <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0 }}>
          {lang === "nl"
            ? "Ik heb de toolbar opgeschoond: van allerlei losse instellingsknoppen naar één dropdown met al deze instellingen en meer die daar logisch in pasten."
            : "I cleaned up the toolbar, moving from a scattered set of individual setting buttons to a single dropdown containing all these settings and more that made sense to include there."}
        </p>
      </section>

      <div className="va-photo-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>
        <div>
          <img src="uploads/Before.png" alt="Toolbar — before"
            style={{ width: "100%", display: "block", borderRadius: 6 }}/>
          <p style={{ fontSize: 12, color: "var(--muted)", textAlign: "center", marginTop: 8 }}>{lang === "nl" ? "Voor" : "Before"}</p>
        </div>
        <div>
          <img src="uploads/After.png" alt="Toolbar — after"
            style={{ width: "100%", display: "block", borderRadius: 6 }}/>
          <p style={{ fontSize: 12, color: "var(--muted)", textAlign: "center", marginTop: 8 }}>{lang === "nl" ? "Resultaat" : "After"}</p>
        </div>
      </div>

      <section className="va-case-section" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 32, padding: "24px 0", borderTop: "1px solid var(--line)", marginTop: 48 }}>
        <h3 style={{ fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", margin: 0, fontWeight: 500 }}>
          {lang === "nl" ? "Resultaat · Resizable panelen" : "Result · Resizable panels"}
        </h3>
        <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0 }}>
          {lang === "nl"
            ? "Ik heb de panelen resizable gemaakt; eerder waren ze statisch. Daarvoor moest ik alle velden en tabs nalopen om te zorgen dat alles op de juiste manier meerekt, en een dynamische max-breedte ingesteld die meebeweegt met de viewport van de gebruiker."
            : "I made these panels resizable; before they were static. That meant checking every field and tab to make sure things stretched the right way, and setting a dynamic max-width that adapts to the user's viewport."}
        </p>
      </section>

      <div className="va-photo-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>
        <img src="uploads/Template-builder-storyteq-07-15-2026_10_10_AM.png" alt="Template builder — panel at default width"
          style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/Template-builder-storyteq-07-15-2026_10_10_AM (1).png" alt="Template builder — panel resized"
          style={{ width: "100%", display: "block", borderRadius: 6 }}/>
      </div>

      <section className="va-case-section" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 32, padding: "24px 0", borderTop: "1px solid var(--line)", marginTop: 48 }}>
        <h3 style={{ fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", margin: 0, fontWeight: 500 }}>
          {lang === "nl" ? "Werkwijze · UX-vriendelijke context" : "Approach · UX-friendly context"}
        </h3>
        <div>
          <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0 }}>
            {lang === "nl"
              ? "Om Claude als designpartner te laten werken in plaats van een losse codegenerator, schrijf ik UX-vriendelijke context: een CLAUDE.md die de rol, designprincipes en workflow vastlegt, een components.md met concrete UI-regels, en losse skills voor terugkerende taken. Zo maakt Claude beslissingen die aansluiten op het design system in plaats van er tegenin te werken."
              : "To make Claude work as a design partner instead of a loose code generator, I write UX-friendly context: a CLAUDE.md that sets the role, design principles and workflow, a components.md with concrete UI rules, and standalone skills for recurring tasks. That way Claude makes decisions that follow the design system instead of fighting it."}
          </p>
          <p style={{ fontSize: 14, color: "var(--muted)", margin: "16px 0 0" }}>
            {lang === "nl" ? "Scroll door de documentatie hieronder." : "Scroll through the documentation below."}
          </p>
        </div>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 24 }}>
        {docBlocks.map((d) => (
          <div key={d.name} style={{ background: "#3A3F44", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "#33383D" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E06C5E" }}/>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E5B95C" }}/>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#8BC26E" }}/>
              <span style={{ marginLeft: 6, fontFamily: "ui-monospace, Menlo, monospace", fontSize: 12, color: "rgba(255,255,255,0.7)" }}>{d.name}</span>
            </div>
            <pre style={{ margin: 0, padding: "16px 18px", height: 360, overflowY: "auto", fontFamily: "ui-monospace, Menlo, Consolas, monospace", fontSize: 12.5, lineHeight: 1.55, color: "#E4E6E8", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{d.body}</pre>
          </div>
        ))}
      </div>

      <div style={{ height: 80 }}/>
    </div>
  );
}

Object.assign(window, { VibeCodingCase });
