// Socials case study Z.V.V. Pelikaan Instagram match posters

function SocialsCase({ lang, t, onBack, onMore }) {

  const copy = lang === "nl" ? {
    subtitle: "Wedstrijdposters voor Z.V.V. Pelikaan",
    role: "Graphic Designer",
    year: "2020",
    duration: "Seizoen 2019/2020",
    tools: "Sketch, Adobe Photoshop",
    intro: "Voor mijn voetbalteam bij Z.V.V. Pelikaan houd ik samen met een teamgenoot (Martin van Yren) een Instagram account bij. Op dit account plaatsen we vooral wedstrijd posters voor op de zaterdagen. 2019/2020 was het eerste jaar voor ons om hier aan te werken en is mij zeker bevallen. Veel goede reacties en zelfs een van de posters heeft het AD gehaald. Voor het maken van deze posters maak ik gebruik van Sketch en Adobe Photoshop. Hieronder zijn een aantal posters te zien die ik heb ontworpen op dit account.",
    instagram: "Instagram: zvvpelikaan2",
    postersTitle: "Posters",
  } : {
    subtitle: "Match day posters for Z.V.V. Pelikaan",
    role: "Graphic Designer",
    year: "2020",
    duration: "Season 2019/2020",
    tools: "Sketch, Adobe Photoshop",
    intro: "For my football team at Z.V.V. Pelikaan I ran an Instagram account together with a teammate. We mainly post match day posters for Saturday games. 2019/2020 was our first season doing this and I really enjoyed it. We got great reactions one of the posters even made it into the AD newspaper. I use Sketch and Adobe Photoshop to create these posters. Below is a selection of posters I designed for this account.",
    instagram: "Instagram: zvvpelikaan2",
    postersTitle: "Posters",
  };

  // Portrait posters (1:1 or portrait aspect) 3 columns
  const portraitPosters = [
    "uploads/f814a92e-5e3d-4b20-a8ab-64359b7589ce_rw_1920-f97aeba1.jpg",  // LRC cup match
    "uploads/d0065ad9-874d-41b3-87fc-73f49e70ec99_rw_1920-64f78324.jpg",  // IFC cupmatch blue
    "uploads/172ca54f-a96f-4a58-9787-20e450af39f0_rw_1920-de3be438.jpg",  // Pelikaan vs Drechtstreek
    "uploads/87d6c1d4-e625-4d2e-924f-dc3bc19ea805_rw_1920-2d301cd6.jpg",  // Match Day Keep Going
    "uploads/0f71f794-b3cd-403d-8a58-464cf642767d_rw_1200-640d63ef.png",  // Hardinxveld vs Pelikaan The Return
  ];

  // Landscape posters full width
  const landscapePosters = [
    "uploads/a000e32c-7818-4b24-9f74-83965c7a55cb_rw_1920-678abd43.jpg",  // Pelikaan 2 vs SCO 2
    "uploads/30db50c1-55c5-4ad4-b916-a3745b32f834_rw_1920-dceb1ef2.jpg",  // Pelikaan 2 vs GRC-14
  ];

  return (
    <div style={{ maxWidth: 920, margin: "0 auto" }}>
      <BackBtn onClick={onBack} onMore={onMore} t={t} />

      <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(48px, 6.4vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.025em", fontWeight: 400, margin: "20px 0 12px" }}>
        Socials
      </h2>
      <p style={{ fontStyle: "italic", color: "var(--muted)", margin: 0, fontSize: 22, fontFamily: "var(--serif)" }}>
        {copy.subtitle}
      </p>

      {/* Meta */}
      <CaseThumb id="instagram" />

      <dl className="va-case-meta" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
        borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
        margin: "40px 0", padding: "20px 0", fontSize: 13 }}>
        <Meta label={t.role_label} val={copy.role} />
        <Meta label={t.year_label} val={copy.year} />
        <Meta label={t.duration_label} val={copy.duration} />
        <Meta label={t.tools_label} val={copy.tools} />
      </dl>

      {/* Intro */}
      <p style={{ fontFamily: "var(--serif)", fontSize: 22, lineHeight: 1.45, margin: "0 0 16px", maxWidth: 760 }}>
        {copy.intro}
      </p>
      <p style={{ fontSize: 14, color: "var(--muted)", margin: "0 0 8px" }}>
        {copy.instagram}
      </p>
      <p style={{ fontSize: 14, margin: "0 0 48px" }}>
        <a href="https://www.ad.nl/regiosport-dordrecht/voorzitters-kijken-uit-naar-derby-tussen-pelikaan-en-vvgz-het-moet-een-feestje-worden~a5c2dfba/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--fg)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
          AD: Voorzitters kijken uit naar derby tussen Pelikaan en VVGZ
        </a>
      </p>

      {/* Posters */}
      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 16px", fontWeight: 500 }}>
        {copy.postersTitle}
      </h3>

      {/* Portrait posters 3 columns */}
      <div className="va-phone-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 12 }}>
        {portraitPosters.slice(0, 3).map((src, i) => (
          <img key={i} src={src} alt={`Poster ${i + 1}`}
            style={{ width: "100%", display: "block", borderRadius: 6, aspectRatio: "4/5", objectFit: "cover" }}/>
        ))}
      </div>
      <div className="va-photo-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        {portraitPosters.slice(3).map((src, i) => (
          <img key={i} src={src} alt={`Poster ${i + 4}`}
            style={{ width: "100%", display: "block", borderRadius: 6, aspectRatio: "4/5", objectFit: "cover" }}/>
        ))}
      </div>

      {/* Landscape posters full width */}
      {landscapePosters.map((src, i) => (
        <img key={i} src={src} alt={`Landscape poster ${i + 1}`}
          style={{ width: "100%", display: "block", borderRadius: 6, marginBottom: 12 }}/>
      ))}

      <div style={{ height: 80 }}/>
    </div>
  );
}

Object.assign(window, { SocialsCase });
