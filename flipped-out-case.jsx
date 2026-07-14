// Flipped Out rich case study with image galleries

function FlippedOutCase({ lang, t, onBack, onMore }) {
  const p = PROJECTS.find((x) => x.id === "flipped-out");

  // App screenshots organized by section
  const appScreensRow1 = [
  "uploads/71da47d5-a4fe-4d53-aa7f-0ac53b4f0800_rw_600.png", // Flipped Out title
  "uploads/5ce54b4a-2b96-4f37-8232-4cdf023ad698_rw_600.png", // START
  "uploads/75019f7b-51b6-4682-9394-1ab7e513413a_rw_600.png", // Timer 30:00
  "uploads/f3722e9f-4d90-4a07-ab95-6d612e98d20a_rw_600.png" // Timer 18:34
  ];

  const appScreensRow2 = [
  "uploads/6c7f638b-99b9-4eef-a6df-d4a2aba94992_rw_600.png", // TEAMS
  "uploads/ffbdc117-2447-4bb3-bca5-250088107b46_rw_600.png", // TEAM NAAM 3
  "uploads/07dde282-0776-4fc1-89a0-e2bef8aea18d_rw_600.png", // TEAM NAAM 4
  "uploads/3b48583f-97ad-4df0-adac-d67ef46d4ed8_rw_600.png" // TEAM NAAM 2
  ];

  const appScreensRow3 = [
  "uploads/e357059d-4ce4-4629-bb05-bf9b42787431_rw_600.png", // Checklist
  "uploads/c8980641-a019-4217-a5c6-2abd350571ce_rw_600.png", // Checklist opdrachten
  "uploads/ad655461-b05c-464e-bb3e-5a60f2321a3a_rw_600.png", // Opdrachten 2
  "uploads/2a829618-2c90-4833-9d82-73419a4ae81c_rw_600.png" // CHECKLIST text
  ];

  const appScreensRow4 = [
  "uploads/a7c1ddce-aed2-4153-8c2f-59b6a474b24d_rw_600.png", // SCORE 2 teams
  "uploads/c3d4751b-de16-453b-99ab-557dd435239d_rw_600.png", // SCORE 3 teams
  "uploads/b5feca16-7628-41ed-a686-c48141c94102_rw_600.png", // SCORE 4 teams
  "uploads/83ef3766-d297-41c9-abb4-ebd8a5c64977_rw_600.png" // RANGLIJST
  ];

  const appScreensRow5 = [
  "uploads/5f6c5421-35ab-41b2-b441-7332eec36065_rw_600.png", // Vrijstellingen behaald
  "uploads/941131fb-4a63-492e-a50a-da5a6e83e071_rw_600.png", // TIJD OM statue
  "uploads/64b2956c-9ec1-498e-b0ac-07b88eac0172_rw_600.png", // Tijd om naar buiten
  "uploads/f1cca312-136e-44b9-a485-1c5c1b3e0e6f_rw_600.png" // WOW binnenspel
  ];

  const appScreensRow6 = [
  "uploads/75666ddb-0095-45de-9f4e-4b8658f42403_rw_600.png", // TOTAAL SCORE
  "uploads/2ede6029-ad17-4e96-b92a-de8d6ddb79d6_rw_600.png", // Timer 09:12
  "uploads/79502929-7f91-4712-bc90-dba1bde35a6e_rw_600.png", // Timer 00:29
  "uploads/06651df9-b771-4413-9231-b6f0dea12b72_rw_600.png" // TEAMS 2
  ];

  const copy = lang === "nl" ? {
    subtitle: "Een hybride spel dat studenten Rotterdam laat ontdekken",
    role: "UX/UI Designer · Student",
    year: "2017",
    duration: "12 weken",
    tools: "Adobe Illustrator, Sketch, InVision",
    intro: "Eerstejaarsstudenten die in Rotterdam komen studeren kennen de stad nog nauwelijks. Urban Guides een organisatie die tours geeft over architectuur, cultuur en geschiedenis merkte dat studenten weinig deelnemen aan hun rondleidingen. De opdracht: ontwerp een speelse manier om studenten Rotterdam te laten ontdekken én elkaar beter te leren kennen.",
    naming: "Het concept: Flipped Out",
    namingText: "Flipped Out is een hybride spel (offline + online) dat studenten op een verrassende manier kennis laat maken met Rotterdam én met elkaar. Het spel bestaat uit twee delen: een bordspel en een stadsopdrachten-app.",
    offline: "Offline deel Het bordspel",
    offlineText: "Het spel start met een kleurrijk bordspel vol Rotterdamse illustraties. Teams strijden tegen elkaar om zoveel mogelijk opdrachtkaartjes te verzamelen deze leveren later vrijstellingen op in het buitenspel. Er is geen finishlijn: je speelt tegen de tijd. Creatieve opdrachten linken subtiel aan Rotterdam. Bord, kaartjes en verpakking zijn volledig zelf ontworpen.",
    app: "De Flip Van teams naar één groep",
    appText: "Na het bordspel voeren spelers hun score in de app in. Hier gebeurt de 'flip': de vrijstellingen gelden niet per team, maar voor de hele groep. Vanaf dit moment werken alle spelers samen. Dit versterkt de groepsbinding en zorgt dat iedereen elkaar leert kennen.",
    online: "Online deel De app",
    onlineText: "Buiten voert de groep zoveel mogelijk Rotterdam-opdrachten uit. De app bevat een checklist met creatieve, grappige en soms uitdagende opdrachten. Hoe moeilijker de opdracht, hoe meer punten. Bewijs upload je direct in de app. Aan het einde berekent de app de score en verschijnt de ranglijst.",
    boardTitle: "Het bordspel",
    boardCaption: "Het volledige Flipped Out bordspel een geïllustreerde kaart van Rotterdam met iconische bezienswaardigheden",
    rulesTitle: "Spelregels & categorie-kaarten",
    appScreensTitle: "App schermen",
    appScreensSub: "De companion app van teamregistratie tot timer, scorebord en opdrachten",
    categoriesTitle: "Opdracht categorieën",
    categoriesSub: "Vijf categorieën: uitbeelden, tekenen, Rotterdamse spreuk, niet lachen en waar/niet waar"
  } : {
    subtitle: "A hybrid game that helps students discover Rotterdam",
    role: "UX/UI Designer · Student",
    year: "2017",
    duration: "12 weeks",
    tools: "Adobe Illustrator, Sketch, InVision",
    intro: "First-year students arriving in Rotterdam barely know the city. Urban Guides an organisation that runs tours about architecture, culture and history noticed that students rarely joined their tours. The brief: design a playful way for students to discover Rotterdam and get to know each other.",
    naming: "The concept: Flipped Out",
    namingText: "Flipped Out is a hybrid game (offline & online) that introduces students to Rotterdam and to each other in a surprising way. The game consists of two parts: a board game and a city-challenge app.",
    offline: "Offline the board game",
    offlineText: "The game starts with a colourful board full of Rotterdam illustrations. Teams compete to collect as many challenge cards as possible, these earn exemptions in the outdoor round. There is no finish line: you play against the clock. Creative challenges subtly link to the city. Board, cards and packaging were all designed from scratch.",
    app: "The Flip from teams to one group",
    appText: "After the board game, players enter their score in the app. Here the 'flip' happens: exemptions no longer count per team, but for the entire group. From this point on, all players work together. This strengthens group bonding and ensures everyone gets to know each other.",
    online: "Online the app",
    onlineText: "Outside, the group completes as many Rotterdam challenges as possible. The app contains a checklist of creative, funny and sometimes daring assignments. The harder the challenge, the more points. Proof is uploaded directly in the app. At the end, the app calculates the score and reveals the ranking.",
    boardTitle: "The board game",
    boardCaption: "The complete Flipped Out board an illustrated map of Rotterdam with iconic landmarks",
    rulesTitle: "Rules & category cards",
    appScreensTitle: "App screens",
    appScreensSub: "The companion app from team registration to timer, scoreboard and challenges",
    categoriesTitle: "Challenge categories",
    categoriesSub: "Five categories: act out, draw, Rotterdam saying, don't laugh, and true/false"
  };

  return (
    <div style={{ maxWidth: 920, margin: "0 auto" }}>
      <BackBtn onClick={onBack} onMore={onMore} t={t} />

      <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(48px, 6.4vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.025em", fontWeight: 400, margin: "20px 0 12px" }}>
        Flipped Out
      </h2>
      <p style={{ fontStyle: "italic", color: "var(--muted)", margin: 0, fontSize: 22, fontFamily: "Quicksand" }}>
        {copy.subtitle}
      </p>

      {/* Meta */}
      <CaseThumb id="flipped-out" />

      <dl className="va-case-meta" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
        borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
        margin: "40px 0", padding: "20px 0", fontSize: 13 }}>
        <Meta label={t.role_label} val={copy.role} />
        <Meta label={t.year_label} val={copy.year} />
        <Meta label={t.duration_label} val={copy.duration} />
        <Meta label={t.tools_label} val={copy.tools} />
      </dl>

      {/* Intro */}
      <p style={{ fontFamily: "var(--serif)", fontSize: 26, lineHeight: 1.4, margin: "0 0 48px" }}>
        {copy.intro}
      </p>

      {/* Sections */}
      <CaseSection num="01" title={copy.naming} text={copy.namingText} />
      <CaseSection num="02" title={copy.offline} text={copy.offlineText} />

      {/* Board game full width */}
      <figure style={{ margin: "48px 0" }}>
        <img src="uploads/a260448b-6f0d-4339-897d-0a5cd7b85eeb_rw_1920.png"
        alt="Flipped Out board game"
        style={{ width: "100%", borderRadius: 6, display: "block" }} />
        <figcaption style={{ fontSize: 12, color: "var(--muted)", marginTop: 10, fontStyle: "italic", fontFamily: "var(--serif)" }}>
          {copy.boardCaption}
        </figcaption>
      </figure>

      <CaseSection num="03" title={copy.app} text={copy.appText} />
      <CaseSection num="04" title={copy.online} text={copy.onlineText} />

      {/* Physical photos box, board, details */}
      <div className="va-photo-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "48px 0 12px" }}>
        <img src="uploads/dd6e59ba-0238-464d-a74d-edecdc43759e_rw_1200.jpg" alt="Flipped Out box"
        style={{ width: "100%", borderRadius: 6, display: "block", aspectRatio: "4/3", objectFit: "cover" }} />
        <img src="uploads/dad26dd8-9be3-4bc8-a95e-29d866239d8c_rw_1920.jpg" alt="Box open with board and cards"
        style={{ width: "100%", borderRadius: 6, display: "block", aspectRatio: "4/3", objectFit: "cover" }} />
      </div>
      <div className="va-photo-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <img src="uploads/df394670-b7a3-42e6-9eba-a32d6928f813_rw_1920.jpg" alt="Board game laid out on table"
        style={{ width: "100%", borderRadius: 6, display: "block", aspectRatio: "4/3", objectFit: "cover" }} />
        <img src="uploads/765aeef2-4f6e-4a57-a557-f79234bda9cb_rw_1920.jpg" alt="Board game detail close-up"
        style={{ width: "100%", borderRadius: 6, display: "block", aspectRatio: "4/3", objectFit: "cover" }} />
      </div>
      <img src="uploads/e0ab3144-0237-49c2-9dbb-ad7dc042e8ef_rw_600.jpg" alt="Packaging design in Photoshop"
      style={{ width: "100%", borderRadius: 6, display: "block", marginBottom: 48 }} />

      {/* App screenshots */}
      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "56px 0 8px", fontWeight: 500 }}>
        {copy.appScreensTitle}
      </h3>
      <p style={{ fontSize: 14, color: "var(--muted)", margin: "0 0 24px" }}>{copy.appScreensSub}</p>

      <PhoneGrid images={appScreensRow1} />
      <PhoneGrid images={appScreensRow2} />
      <PhoneGrid images={appScreensRow3} />
      <PhoneGrid images={appScreensRow4} />
      <PhoneGrid images={appScreensRow5} />
      <PhoneGrid images={appScreensRow6} />

      {/* Rules sheet */}
      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "56px 0 16px", fontWeight: 500 }}>
        {copy.rulesTitle}
      </h3>
      <img src="uploads/81b07456-e457-4f17-b161-560be6366c65_rw_1200.png"
      alt="Rules sheet" style={{ width: "100%", borderRadius: 6, display: "block" }} />

      {/* Category icons */}
      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "48px 0 16px", fontWeight: 500 }}>
        {copy.categoriesTitle}
      </h3>
      <p style={{ fontSize: 14, color: "var(--muted)", margin: "0 0 16px" }}>{copy.categoriesSub}</p>
      <img src="uploads/d4a638f4-73f9-46e1-a79a-dfafaa1b7e99_rw_1200.png"
      alt="Category cards" style={{ width: "80%", display: "block" }} />

      {/* Outcome */}
      <div style={{ marginTop: 48, padding: "28px 32px", background: "#BFE8C7",
        color: "rgba(0,0,0,0.85)", borderRadius: 6 }}>
        <span style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", opacity: 0.65 }}>{t.outcome_label}</span>
        <p style={{ fontFamily: "var(--serif)", fontSize: 28, lineHeight: 1.2, margin: "8px 0 0" }}>
          {lang === "nl" ? "Succesvolle presentatie aan Urban Guides en een 8.5 als eindcijfer." : "Successful presentation to Urban Guides and an 8.5 final grade."}
        </p>
      </div>

      <div style={{ height: 80 }} />
    </div>);

}

function CaseSection({ num, title, text }) {
  return (
    <section className="va-case-section" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 32, padding: "24px 0", borderTop: "1px solid var(--line)" }}>
      <h3 style={{ fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", margin: 0, fontWeight: 500 }}>
        {num} {title}
      </h3>
      <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0 }}>{text}</p>
    </section>);

}

function PhoneGrid({ images }) {
  return (
    <div className="va-phone-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 12 }}>
      {images.map((src, i) =>
      <div key={i} style={{ borderRadius: 8, overflow: "hidden", background: "#f0f0f0", aspectRatio: "9/16" }}>
          <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      )}
    </div>);

}

Object.assign(window, { FlippedOutCase, CaseSection, PhoneGrid });