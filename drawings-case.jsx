// Drawings case study sketch-to-digital gallery

function DrawingsCase({ lang, t, onBack, onMore }) {

  const copy = lang === "nl" ? {
    subtitle: "Persoonlijke illustraties van schets tot digitaal",
    intro: "In mijn vrije tijd ben ik graag aan het tekenen, dit hoort bij mij en laat ik dan ook graag zien. De tekeningen die hier te zien zijn komen voort uit schetsen. Naast het tekenen vind ik het leuk om de tekeningen erna te digitaliseren en te verwerken als poster of op kleding.",
    sketchLabel: "Schets",
    digitalLabel: "Digitaal",
    pairsTitle: "Van schets naar digitaal",
    pairsSub: "Elke tekening begint op papier en wordt vervolgens gedigitaliseerd hieronder staan de schetsen naast hun digitale versie",
    moreTitle: "Meer schetsen"
  } : {
    subtitle: "Personal illustrations from sketch to digital",
    intro: "In my free time I love to draw it's part of who I am and something I like to share. The drawings shown here all started as sketches. Besides drawing, I enjoy digitalising them and turning them into posters or prints on clothing.",
    sketchLabel: "Sketch",
    digitalLabel: "Digital",
    pairsTitle: "From sketch to digital",
    pairsSub: "Every drawing starts on paper and gets digitalised below are the sketches alongside their digital counterpart",
    moreTitle: "More sketches"
  };

  // Sketch → Digital pairs (side by side)
  const pairs = [
  {
    sketch: "uploads/a806b8e1-5b15-4e9d-a326-bdaa444b2eb4_rw_3840.JPG",  // star creature 2 sketch
    digital: "uploads/2a7f8be3-03d7-496b-bbb0-1aaa11b88ac0_rw_1920.png"  // purple jellyfish digital
  },
  {
    sketch: "uploads/a37337e9-a128-49f0-b084-c4b0bb1d0b7f_rw_3840.JPG",   // butterfly eyes sketch
    digital: "uploads/c6288e6e-d95b-4b54-a28e-88b391b7fd92_rw_1920.png"   // white star creature digital
  },
  {
    sketch: "uploads/efaefb79-5dbd-4f27-a3bf-6d36b84ce540_rw_3840.JPG",   // jellyfish sketch
    digital: "uploads/03eaa4cd-55e2-4d6b-83e4-f859e069d01a_rw_1920.png"   // buttereyes digital
  },
  {
    sketch: "uploads/b8217b1c-2c20-42fc-bca9-616a4342274a_rw_3840.JPG",   // star creature sketch
    digital: "uploads/d6e50a63-9280-43ec-a9a2-39c38ab2f03f_rw_1920.png"   // cloud catcher digital
  },
  {
    sketch: "uploads/c740fa6f-7c1a-4785-bb7e-7fa6a4c62556_rw_3840.JPG",   // tiger cat sketch
    digital: "uploads/2f27ce23-8125-458e-9523-bb39722b8bcd_rw_1920.png"   // 90's box digital
  },
  {
    sketch: "uploads/4cab2882-275b-48a1-ae39-39b6379a1e62_rw_3840.JPG",   // bird creature sketch
    digital: "uploads/9caaa54f-ac63-400f-99ea-dfce5ccfcea5_rw_1920.png"   // tiger cat digital
  }];

  // Extra standalone
  const extraDigital = [
    "uploads/d40f8b59-634d-47d6-a33a-9bb9fb06c1d2_rw_1920.png"  // butterfly close-up digital
  ];

  const extraSketches = [
    "uploads/a806b8e1-5b15-4e9d-a326-bdaa444b2eb4_rw_3840.JPG",   // star creature 2 sketch
    "uploads/0f01cda8-5ba1-4cf8-9e0c-45755b9f2b25_rw_3840.JPG",   // face sketch
    "uploads/4cab2882-275b-48a1-ae39-39b6379a1e62_rw_3840.JPG",    // bird creature sketch
    "uploads/58a8135b-a2db-4e16-9e57-e2d5a73f3b60_rw_3840.JPG"    // snake bat sketch
  ];


  return (
    <div style={{ maxWidth: 920, margin: "0 auto" }}>
      <BackBtn onClick={onBack} onMore={onMore} t={t} />

      <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(48px, 6.4vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.025em", fontWeight: 400, margin: "20px 0 12px" }}>Drawings '18

      </h2>
      <p style={{ fontStyle: "italic", color: "var(--muted)", margin: 0, fontSize: 22, fontFamily: "var(--serif)" }}>
        {copy.subtitle}
      </p>

      <CaseThumb id="drawings-18" />

      <p style={{ fontFamily: "var(--serif)", fontSize: 22, lineHeight: 1.45, margin: "40px 0 56px", maxWidth: 720 }}>
        {copy.intro}
      </p>

      {/* Sketch → Digital pairs */}
      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 8px", fontWeight: 500 }}>
        {copy.pairsTitle}
      </h3>
      {pairs.map((pair, i) =>
      <div key={i} className="va-photo-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div style={{ position: "relative" }}>
            <img src={pair.sketch} alt={`Sketch ${i + 1}`}
          style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: 6, display: "block", background: "#f5f4f0" }} />
            <span style={{ position: "absolute", bottom: 10, left: 12, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", background: "rgba(255,255,255,0.8)", padding: "3px 8px", borderRadius: 4 }}>
              {copy.sketchLabel}
            </span>
          </div>
          <div style={{ position: "relative" }}>
            <img src={pair.digital} alt={`Digital ${i + 1}`}
          style={{ width: "100%", aspectRatio: "1/1", objectFit: "contain", borderRadius: 6, display: "block", background: "#fff" }} />
            <span style={{ position: "absolute", bottom: 10, left: 12, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", background: "rgba(255,255,255,0.8)", padding: "3px 8px", borderRadius: 4 }}>
              {copy.digitalLabel}
            </span>
          </div>
        </div>
      )}

      <div style={{ height: 80 }} />
    </div>);

}

Object.assign(window, { DrawingsCase });