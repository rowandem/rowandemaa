// Stibat case study battery recycling campaign

function StibatCase({ lang, t, onBack, onMore }) {

  const copy = lang === "nl" ? {
    subtitle: "Een campagne om jongeren batterijen te laten recyclen",
    role: "UX/UI Designer · Student",
    year: "2019",
    duration: "12 weken",
    tools: "Adobe InDesign, Sketch, Figma",
    intro: "Tijdens mijn 2e leerjaar van de opleiding Communication & Multimedia Design aan de Haagse Hogeschool, heb ik het vak Designing voor Campagnes gevolgd. Tijdens dit vak heb ik samen met drie andere studenten een commerciële campagne bedacht voor Stibat.",
    about: "Over Stibat",
    aboutText: "Stibat is een non-profitorganisatie die de inzameling en het recyclen van lege batterijen in Nederland organiseert. Stibat heeft een belangrijke taak, het realiseren van het wettelijk vastgestelde inzamelpercentage voor batterijen. Dit is sinds 2016 45%. Echter wordt verwacht dat het wettelijke percentage in afzienbare tijd wordt verhoogd naar 65%. De doelgroep waarop gefocust moet worden zijn uitwonende jongeren in de leeftijd van 21 - 30 jaar.",
    campaign: "De campagne",
    campaignText: "Vervolgens is er een onlinecampagne bedacht, waarbij je bij het inleveren van batterijen punten kunt verdienen. Dit puntensysteem moet ervoor zorgen dat de doelgroep meer lege batterijen gaat inleveren. Deze punten kan de doelgroep weer inleveren voor leuke en handige producten. Zie het campagne boek voor meer informatie over de campagne.",
    deliverables: "Opgeleverde producten",
    deliverablesText: "Uiteindelijk is er een campagne aangeleverd aan Stibat met producten zoals: een app, een Instagram post, fysieke prullenbak met poster en een campagneboek.",
    bookTitle: "Campagne boek",
  } : {
    subtitle: "A campaign to get young people recycling batteries",
    role: "UX/UI Designer · Student",
    year: "2019",
    duration: "12 weeks",
    tools: "Adobe InDesign, Sketch, Figma",
    intro: "During my 2nd year of Communication & Multimedia Design at The Hague University of Applied Sciences, I took the course Designing for Campaigns. Together with three other students, I designed a commercial campaign for Stibat.",
    about: "About Stibat",
    aboutText: "Stibat is a non-profit organisation that manages the collection and recycling of used batteries in the Netherlands. Their legal target is a 45% collection rate (since 2016), expected to increase to 65%. The target audience: students aged 21-30 living independently.",
    campaign: "The campaign",
    campaignText: "We designed an online campaign where recycling batteries earns points. This reward system encourages the target audience to recycle more. Points can be redeemed for useful products made from recycled materials. See the campaign book for full details.",
    deliverables: "Deliverables",
    deliverablesText: "The final delivery to Stibat included: a mobile app, Instagram content, a physical recycling bin with poster, and a full campaign book.",
    bookTitle: "Campaign book",
  };

  // App screens row (4 phones from original)
  const appScreens = [];

  const socialImages = [];

  // All images in campaign book order CB-image 1 through 17, 3 columns
  const bookPages = [
    "uploads/CB-image 1.png",
    "uploads/CB-image 2.png",
    "uploads/CB-image 3.png",
    "uploads/CB-image 4.png",
    "uploads/CB-image 5.png",
    "uploads/CB-image 6.png",
    "uploads/CB-image 7.png",
    "uploads/CB-image 8.png",
    "uploads/CB-image 9.png",
    "uploads/CB-image 10.png",
    "uploads/CB-image 11.png",
    "uploads/CB-image 12.png",
    "uploads/CB-image 13.png",
    "uploads/CB-image 14.png",
    "uploads/CB-image 15.png",
    "uploads/CB-image 16.png",
    "uploads/CB-image 17.png",
  ];

  // Poster removed

  return (
    <div style={{ maxWidth: 920, margin: "0 auto" }}>
      <BackBtn onClick={onBack} onMore={onMore} t={t} />

      <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(48px, 6.4vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.025em", fontWeight: 400, margin: "20px 0 12px" }}>
        Stibat
      </h2>
      <p style={{ fontStyle: "italic", color: "var(--muted)", margin: 0, fontSize: 22, fontFamily: "var(--serif)" }}>
        {copy.subtitle}
      </p>

      {/* Meta */}
      <CaseThumb id="stibat" />

      <dl className="va-case-meta" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
        borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
        margin: "40px 0", padding: "20px 0", fontSize: 13 }}>
        <Meta label={t.role_label} val={copy.role} />
        <Meta label={t.year_label} val={copy.year} />
        <Meta label={t.duration_label} val={copy.duration} />
        <Meta label={t.tools_label} val={copy.tools} />
      </dl>

      {/* Intro */}
      <p style={{ fontFamily: "var(--serif)", fontSize: 22, lineHeight: 1.45, margin: "0 0 48px", maxWidth: 760 }}>
        {copy.intro}
      </p>

      {/* Sections */}
      <CaseSection num="01" title={copy.about} text={copy.aboutText} />
      <CaseSection num="02" title={copy.campaign} text={copy.campaignText} />
      <CaseSection num="03" title={copy.deliverables} text={copy.deliverablesText} />

      {/* App */}
      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "56px 0 16px", fontWeight: 500 }}>
        App
      </h3>
      <div className="va-phone-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        <img src="uploads/App image 1.png" alt="App screen 1" style={{ width: "100%", display: "block", borderRadius: 4 }}/>
        <img src="uploads/App image 2.png" alt="App screen 2" style={{ width: "100%", display: "block", borderRadius: 4 }}/>
        <img src="uploads/App image 3.png" alt="App screen 3" style={{ width: "100%", display: "block", borderRadius: 4 }}/>
        <img src="uploads/App image 4.png" alt="App screen 4" style={{ width: "100%", display: "block", borderRadius: 4 }}/>
      </div>

      {/* Promotional materials */}
      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "56px 0 16px", fontWeight: 500 }}>
        {lang === "nl" ? "Promotiemateriaal" : "Promotional materials"}
      </h3>
      <div className="va-phone-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        <img src="uploads/da82d9e9-263c-47d3-80ea-73ce50f18923_rw_1200-d0476492.png" alt="Recycling bin design" style={{ width: "100%", display: "block", borderRadius: 4 }}/>
        <img src="uploads/186eec41-21c6-43ed-ad4f-8047b5d8c042_rw_1200-0e81a606.png" alt="Campaign poster" style={{ width: "100%", display: "block", borderRadius: 4 }}/>
        <img src="uploads/a4dcfb5d-2f1e-4c89-a829-2f12ccd4bba8_rw_600-d92c9c42.png" alt="Instagram mockups" style={{ width: "100%", display: "block", borderRadius: 4 }}/>
      </div>

      {/* Campaign book all images in correct order matching reference */}
      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "56px 0 16px", fontWeight: 500 }}>
        {copy.bookTitle}
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }} className="va-phone-grid">
        {bookPages.map((src, i) => (
          <img key={i} src={src} alt={`Campaign book page ${i + 1}`}
            style={{ width: "100%", display: "block", borderRadius: 4 }}/>
        ))}
      </div>

      {/* Outcome */}
      <div style={{ marginTop: 48, padding: "28px 32px", background: "#CFE3EC",
        color: "rgba(0,0,0,0.85)", borderRadius: 6 }}>
        <span style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", opacity: 0.65 }}>{t.outcome_label}</span>
        <p style={{ fontFamily: "var(--serif)", fontSize: 28, lineHeight: 1.2, margin: "8px 0 0" }}>
          {lang === "nl" ? "Complete campagne opgeleverd aan Stibat met app, social media, poster en campagneboek." : "Complete campaign delivered to Stibat including app, social media, poster and campaign book."}
        </p>
      </div>

      <div style={{ height: 80 }}/>
    </div>
  );
}

Object.assign(window, { StibatCase });
