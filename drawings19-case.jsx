// Drawings '19 case study separate page

function Drawings19Case({ lang, t, onBack, onMore }) {

  const copy = lang === "nl" ? {
    subtitle: "Persoonlijke illustraties 2019",
    intro: "In mijn vrije tijd ben ik graag aan het tekenen, dit hoort bij mij en laat ik dan ook graag zien. Deze pagina toont tekeningen uit 2019.",
    sketchLabel: "Schets",
    digitalLabel: "Digitaal",
    pairsTitle: "Tekeningen 2019",
    pairsSub: "Een selectie illustraties uit 2019"
  } : {
    subtitle: "Personal illustrations 2019",
    intro: "In my free time I love to draw it's part of who I am and something I like to share.",
    sketchLabel: "Sketch",
    digitalLabel: "Digital",
    pairsTitle: "Drawings 2019",
    pairsSub: "A selection of illustrations from 2019"
  };

  // Sketch → Digital pair
  const pairs = [
  {
    sketch: "uploads/44cc8e41-7cfa-4c6b-bd1a-22bfd84df6c4_rw_1920.png",
    digital: "uploads/ca635bf0-12ca-4285-a09d-cea2a68983ea_rw_1920.png"
  },
  {
    sketch: "uploads/26ddd41e-6163-4a23-bc38-d1ce4fa229be_rw_1920-87219a25.png",
    digital: "uploads/83f1f52c-85ee-4df0-8735-16ec87033a90_rw_1920-4d8b43f2.png"
  }];

  return (
    <div style={{ maxWidth: 920, margin: "0 auto" }}>
      <BackBtn onClick={onBack} onMore={onMore} t={t} />

      <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(48px, 6.4vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.025em", fontWeight: 400, margin: "20px 0 12px" }}>
        Drawings '19
      </h2>
      <p style={{ fontStyle: "italic", color: "var(--muted)", margin: 0, fontSize: 22, fontFamily: "var(--serif)" }}>
        {copy.subtitle}
      </p>

      <CaseThumb id="drawings-19" />

      <p style={{ fontFamily: "var(--serif)", fontSize: 22, lineHeight: 1.45, margin: "40px 0 56px", maxWidth: 720 }}>
        {copy.intro}
      </p>

      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 8px", fontWeight: 500 }}>
        {copy.pairsTitle}
      </h3>
      {pairs.map((pair, i) =>
      <div key={i} className="va-photo-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div style={{ position: "relative" }}>
          <img src={pair.sketch} alt={`Sketch ${i + 1}`}
            style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: 6, display: "block", background: "#f5f4f0" }}/>
          <span style={{ position: "absolute", bottom: 10, left: 12, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", background: "rgba(255,255,255,0.8)", padding: "3px 8px", borderRadius: 4 }}>
            {copy.sketchLabel}
          </span>
        </div>
        <div style={{ position: "relative" }}>
          <img src={pair.digital} alt={`Digital ${i + 1}`}
            style={{ width: "100%", aspectRatio: "1/1", objectFit: "contain", borderRadius: 6, display: "block", background: "#fff" }}/>
          <span style={{ position: "absolute", bottom: 10, left: 12, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", background: "rgba(255,255,255,0.8)", padding: "3px 8px", borderRadius: 4 }}>
            {copy.digitalLabel}
          </span>
        </div>
      </div>
      )}

      {/* Sketch-only images */}
      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "40px 0 16px", fontWeight: 500 }}>
        {lang === "nl" ? "Schetsen" : "Sketches"}
      </h3>
      <div className="va-photo-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <img src="uploads/2b44ae4a-9923-4d91-8add-d82371daaba4_rw_1920.png" alt="Sketch girl with kanji"
          style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: 6, display: "block", background: "#f5f4f0" }}/>
        <img src="uploads/96988767-71a6-4b43-9680-510d2909439c_rw_1920.png" alt="Sketch fisherman"
          style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: 6, display: "block", background: "#f5f4f0" }}/>
      </div>

      <div style={{ height: 80 }}/>
    </div>
  );
}

Object.assign(window, { Drawings19Case });
