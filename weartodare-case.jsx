// Wear to Dare case study

function WearToDareCase({ lang, t, onBack, onMore }) {

  const copy = lang === "nl" ? {
    subtitle: "Een context-aware kledingapp voor studenten",
    role: "UX/UI Designer · Student",
    year: "2019",
    duration: "10 weken",
    tools: "Figma, Sketch, Adobe Illustrator",
    intro: "Tijdens mijn 2e leerjaar van de opleiding Communication & Multimedia Design aan de Haagse Hogeschool, heb ik het vak Context aware Design gevolgd. Tijdens dit vak heb ik samen met drie andere studenten een fictieve opdracht mogen uitvoeren met als hoofdonderwerp kleding box.",
    research: "Onderzoek",
    researchText: "De onderzoeksvraag luidt als volgt: \"Hoe kunnen we door middel van Context aware, studenten helpen met het vinden van kleding waarbij ze geld kunnen besparen?\" Deze opdracht stond in de band van Context aware en dat wil zeggen dat de app/toepassing elementen uit de omgeving als input gebruikt om gericht voor de gebruiker te kunnen werken.",
    concept: "Het concept",
    conceptText: "Door verschillende onderzoeken uit te voeren zijn we tot een app gekomen die \"Wear to Dare\" heet. De app helpt studenten om te laten zien hoe erg hun outfit lijkt op outfits van andere studenten en de kledingstijl die ze zoeken te beschrijven door middel van foto's en tweedehands kleding te ruilen voor andere kleding. Dit wordt gedaan met behulp van de camera en GPS.",
    proposition: "De propositie",
    propositionText: "De waarde propositie die de app moet beloven aan de gebruiker is kleding aanbieden die de student van De Haagse Hogeschool leuk vindt. Daarbij hoeven ze er niet veel geld voor te betalen. Een context-aware app die hen helpt bij het vinden van tweedehands winkels en tweedehandskleding zal deze studenten helpen aan hun belangen.",
    delivery: "Oplevering",
    deliveryText: "Vervolgens is er een ontwerprapport opgeleverd met stappen zoals; schetsen, concepten, testen, observeren en Lo-Fi prototypes. Het uiteindelijke ontwerp van de app is opgeleverd als Hi-Fi prototype in Figma.",
    screensTitle: "App schermen",
    styleTitle: "Stijltegel",
    moodTitle: "Moodboard",
    logoTitle: "Logo",
  } : {
    subtitle: "A context-aware clothing app for students",
    role: "UX/UI Designer · Student",
    year: "2019",
    duration: "10 weeks",
    tools: "Figma, Sketch, Adobe Illustrator",
    intro: "During my 2nd year of Communication & Multimedia Design at The Hague University of Applied Sciences, I took the course Context Aware Design. Together with three other students, I worked on a fictional brief centred around a clothing box concept.",
    research: "Research",
    researchText: "The research question: \"How can we use context-awareness to help students find clothing while saving money?\" The app uses environmental inputs camera and GPS to deliver personalised results.",
    concept: "The concept",
    conceptText: "Through research we arrived at an app called \"Wear to Dare\". It helps students see how their outfit compares to others, describe their style through photos, and trade second-hand clothing. All powered by the camera and GPS.",
    proposition: "The proposition",
    propositionText: "The value proposition: offer affordable clothing that students actually like. A context-aware app that helps them find nearby thrift shops and second-hand items matching their taste.",
    delivery: "Delivery",
    deliveryText: "We delivered a design report with sketches, concepts, user tests, observations and Lo-Fi prototypes. The final app design was delivered as a Hi-Fi prototype in Figma.",
    screensTitle: "App screens",
    styleTitle: "Style tile",
    moodTitle: "Moodboard",
    logoTitle: "Logo",
  };

  return (
    <div style={{ maxWidth: 920, margin: "0 auto" }}>
      <BackBtn onClick={onBack} onMore={onMore} t={t} />

      <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(48px, 6.4vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.025em", fontWeight: 400, margin: "20px 0 12px" }}>
        Wear to Dare
      </h2>
      <p style={{ fontStyle: "italic", color: "var(--muted)", margin: 0, fontSize: 22, fontFamily: "var(--serif)" }}>
        {copy.subtitle}
      </p>

      {/* Meta */}
      <CaseThumb id="wear-to-dear" />

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
      <CaseSection num="01" title={copy.research} text={copy.researchText} />
      <CaseSection num="02" title={copy.concept} text={copy.conceptText} />
      <CaseSection num="03" title={copy.proposition} text={copy.propositionText} />
      <CaseSection num="04" title={copy.delivery} text={copy.deliveryText} />

      {/* App screens Lo-Fi row moved from style tile */}
      <img src="uploads/b9d1afaa-300b-4b5a-8c7a-17207e0b42ec_rw_1920.png" alt="App screens row 2"
        style={{ width: "100%", display: "block", borderRadius: 6, marginTop: 56 }}/>

      {/* App screens rows of screenshots */}
      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "56px 0 16px", fontWeight: 500 }}>
        {copy.screensTitle}
      </h3>
      <img src="uploads/271e5780-4f7d-4ba7-b920-87140d79fb3f_rw_1920.png" alt="App screens row 1"
        style={{ width: "100%", display: "block", borderRadius: 6, marginBottom: 12 }}/>
      <img src="uploads/ce9266cb-4327-4a89-8f52-7cae98cf2543_rw_1920.png" alt="Style tile"
        style={{ width: "100%", display: "block", borderRadius: 6, marginBottom: 12 }}/>
      <img src="uploads/98762bc3-f11d-48bd-9dae-3f5737f5570a_rw_1920.png" alt="App screens row 3"
        style={{ width: "100%", display: "block", borderRadius: 6, marginBottom: 12 }}/>
      <img src="uploads/8979ac9d-e0b3-4f40-bc9e-da4ba704fc79_rw_1920.png" alt="App screens row 4"
        style={{ width: "100%", display: "block", borderRadius: 6, marginBottom: 12 }}/>

      {/* Moodboard */}
      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "56px 0 16px", fontWeight: 500 }}>
        {copy.moodTitle}
      </h3>
      <img src="uploads/cb57a9e9-3aee-4382-a30e-9e06f9afa01e_rw_1920.png" alt="Moodboard"
        style={{ width: "100%", display: "block", borderRadius: 6, marginBottom: 12 }}/>
      <img src="uploads/211fd152-60dd-46b0-9282-3e0f41c4b77d_rw_1920.png" alt="Moodboard 2"
        style={{ width: "100%", display: "block", borderRadius: 6 }}/>

      {/* Logo */}
      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "56px 0 16px", fontWeight: 500 }}>
        {copy.logoTitle}
      </h3>
      <div className="va-photo-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <img src="uploads/1fdb74fe-9e53-4eed-bfed-4c666bf76f52_rw_1200.png" alt="WD logo"
          style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/ca941908-d33e-4b2d-8616-bb3ba48b8115_rw_1920.png" alt="Wear to Dare wordmark"
          style={{ width: "100%", display: "block", borderRadius: 6 }}/>
      </div>

      {/* Outcome */}
      <div style={{ marginTop: 48, padding: "28px 32px", background: "#D7CFE3",
        color: "rgba(0,0,0,0.85)", borderRadius: 6 }}>
        <span style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", opacity: 0.65 }}>{t.outcome_label}</span>
        <p style={{ fontFamily: "var(--serif)", fontSize: 28, lineHeight: 1.2, margin: "8px 0 0" }}>
          {lang === "nl" ? "Hi-Fi prototype opgeleverd in Figma met ontwerprapport en gebruikerstesten." : "Hi-Fi prototype delivered in Figma with design report and user tests."}
        </p>
      </div>

      <div style={{ height: 80 }}/>
    </div>
  );
}

Object.assign(window, { WearToDareCase });
