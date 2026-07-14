// Thunderstorm case study, HCI Lab Weeks, "Playful Interface"

function ThunderstormCase({ lang, t, onBack, onMore }) {
  const p = PROJECTS.find(x => x.id === "thunderstorm");

  const copy = lang === "nl" ? {
    subtitle: "Lab weken · een fysieke installatie rond 'Playful Interface'",
    role: "UX/UI Designer · Student", year: "2020", duration: "2 weken (3 t/m 14 juni)",
    tools: "Arduino, Makey Makey, LED strips, Sketch",
    intro: "Tijdens de HCI lab weken heb ik samen met mijn groepje een fysiek product gemaakt rond het thema 'Playful Interface'. We mochten het onderwerp zelf verzinnen, maar het moest af zijn voor de expo op de laatste dag.",
    days: [
      { h: "Dag 1 · Kick-off & concept", p: "Na kick-off en kennismaking deden we research naar 'playful interface'. Via brainstormen en de 6-3-5 methode kwamen we op een concept rond het mengen van kleuren door elkaar aan te raken." },
      { h: "Dag 2 · Makey Makey & Processing", p: "Met een Makey Makey testten we aanraking als input: het kabeltje vasthouden terwijl iemand anders je huid raakt stuurde een kleurverandering aan in Processing." },
      { h: "Dag 3 · Concept omgeslagen", p: "Na tegenslag met de Arduino-lichtproef herdefinieerden we het concept naar een 'weerkamer': wolken met LED-bliksem en een donkere ruimte met regen via LED-strips." },
      { h: "Dag 4 · Materialen & prototype", p: "Ik schreef een bliksem-loop in Arduino. Karton als wolkskelet werkte niet, dus bestelden we lampionnen en maakten een digitaal prototype van de ruimte." },
      { h: "Dag 5 · Wolken beplakken", p: "We plakten watten op de lampionnen om ze op wolken te laten lijken. Na te hete lampjes vonden we een oplossing via een LED en LDR-sensor." },
      { h: "Dag 6 · Licht werkt & nieuw plan", p: "De licht-constructie werkte eindelijk goed; we bouwden er drie en testten ze op een powerbank. We besloten alle wolken samen te voegen met een regen-paraplu." },
      { h: "Dag 7 · Ophangen met visdraad", p: "In plaats van een zware plaat gebruikten we visdraad om wolk en paraplu op te hangen. Solenoids op de paraplu moesten het 'getik' van regen simuleren." },
      { h: "Dag 8 · Extra licht & solenoids", p: "Een extra LED-strip gaf de wolk net genoeg licht. De wolk verhuisde naar de expo-ruimte en de solenoids op de paraplu gaven na wat feedback een realistisch getik." },
      { h: "Dag 9 · Expo", p: "De laatste LED-strips werden gesoldeerd en geprogrammeerd. Bezoekers waren onder de indruk zodra ze de paraplu vasthielden en de 'regen' voelden en hoorden." }
    ],
    product: "Product",
    productText: "Het doel was bezoekers een storm-experience te geven, binnen. Een levensgrote wolk met LED-bliksem, een paraplu met LED-regen en tikkende solenoids, en stormgeluid maakten de ervaring compleet.",
    reflection: "Reflectie",
    reflectionText: "Dit waren de leukste twee weken van het jaar. Ik was verantwoordelijk voor de LED's in de wolk en de Arduino-code, en heb veel tijd gestoken in de constructie en bedrading van de paraplu.",
  } : {
    subtitle: "Lab weeks · a physical installation around 'Playful Interface'",
    role: "UX/UI Designer · Student", year: "2020", duration: "2 weeks",
    tools: "Arduino, Makey Makey, LED strips, Sketch",
    intro: "During the HCI lab weeks I worked with my group to create a physical product around the theme 'Playful Interface'. We could choose our own subject, but it had to be finished in time for the expo on the last day.",
    days: [
      { h: "Day 1 · Kick-off & concept", p: "After kick-off and introductions we researched 'playful interface'. Brainstorming and the 6-3-5 method led to a concept around blending colors through touch." },
      { h: "Day 2 · Makey Makey & Processing", p: "With a Makey Makey we tested touch as input: holding the wire while someone else touched your skin triggered a color change in Processing." },
      { h: "Day 3 · The concept shifts", p: "After trouble with the Arduino light test, we redefined the concept into a 'weather room': LED-lit clouds with lightning, and rain via LED strips in a dark room." },
      { h: "Day 4 · Materials & prototype", p: "I coded a lightning loop in Arduino. Cardboard as a cloud skeleton failed, so we ordered paper lanterns and built a digital prototype of the space." },
      { h: "Day 5 · Building the clouds", p: "We covered the lanterns in cotton to turn them into clouds. After the first lights ran too hot, we found a fix using an LED and LDR sensor." },
      { h: "Day 6 · Lights working, new plan", p: "The light construction finally worked well; we built three and tested them on a powerbank. We decided to merge the clouds and add a rain umbrella." },
      { h: "Day 7 · Hanging with fishing line", p: "Instead of a heavy board we used fishing line to hang the cloud and umbrella. Solenoids on the umbrella were meant to simulate the tap of rain." },
      { h: "Day 8 · Extra light & solenoids", p: "An extra LED strip gave the cloud just enough light. The cloud moved to the expo room, and the solenoids gave a realistic tap after some tweaks." },
      { h: "Day 9 · Expo", p: "The final LED strips were soldered and programmed. Visitors were amazed once they held the umbrella and felt and heard the 'rain'." }
    ],
    product: "Product",
    productText: "The goal was to give visitors an indoor storm experience. A life-size cloud with LED lightning, an umbrella with LED rain and tapping solenoids, and storm sound completed the experience.",
    reflection: "Reflection",
    reflectionText: "These were the best two weeks of the year. I was responsible for the LEDs in the cloud and their Arduino code, and spent a lot of time on the umbrella's construction and wiring.",
  };

  return (
    <div style={{ maxWidth: 820, margin: "0 auto" }}>
      <BackBtn onClick={onBack} onMore={onMore} t={t} />

      <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(48px, 6.4vw, 84px)", lineHeight: 0.95, letterSpacing: "-0.025em", fontWeight: 400, margin: "20px 0 12px" }}>
        Thunderstorm
      </h2>
      <p style={{ fontStyle: "italic", color: "var(--muted)", margin: 0, fontSize: 22, fontFamily: "var(--serif)" }}>
        {copy.subtitle}
      </p>

      <CaseThumb id="thunderstorm" />

      <dl className="va-case-meta" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
        borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
        margin: "40px 0", padding: "20px 0", fontSize: 13 }}>
        <Meta label={t.role_label}     val={copy.role}/>
        <Meta label={t.year_label}     val={copy.year}/>
        <Meta label={t.duration_label} val={copy.duration}/>
        <Meta label={t.tools_label}    val={copy.tools}/>
      </dl>

      <p style={{ fontFamily: "var(--serif)", fontSize: 26, lineHeight: 1.4, color: "var(--fg)", margin: "0 0 48px" }}>
        {copy.intro}
      </p>

      <CaseSection num="01" title={copy.days[0].h} text={copy.days[0].p}/>
      {copy.days.slice(1).map((d, i) => (
        <CaseSection key={i} num={String(i + 2).padStart(2, "0")} title={d.h} text={d.p}/>
      ))}
      <CaseSection num={String(copy.days.length + 1).padStart(2, "0")} title={copy.product} text={copy.productText}/>
      <CaseSection num={String(copy.days.length + 2).padStart(2, "0")} title={copy.reflection} text={copy.reflectionText}/>

      {/* Process gallery */}
      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "56px 0 16px", fontWeight: 500 }}>
        {lang === "nl" ? "Brainstorm & schetsen" : "Brainstorm & sketches"}
      </h3>
      <div className="va-phone-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 32 }}>
        <img src="uploads/pasted-1783677657354-0.png" alt="Playful interaction brainstorm sheet" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677661689-0.png" alt="Sticky note clustering" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677667888-0.png" alt="Concept notes 1-3" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677672670-0.png" alt="Interaction concept notes" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
      </div>

      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 16px", fontWeight: 500 }}>
        {lang === "nl" ? "Prototyping electronica" : "Prototyping electronics"}
      </h3>
      <div className="va-phone-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }}>
        <img src="uploads/pasted-1783677687006-0.png" alt="To do, doing, done board" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677682673-0.png" alt="Arduino breadboard setup" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677690935-0.png" alt="Arduino with speaker" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677823767-0.png" alt="LED breadboard" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677986121-0.png" alt="Electronics wired into umbrella" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677972544-0.png" alt="Wiring LED strip control" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
      </div>

      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 16px", fontWeight: 500 }}>
        {lang === "nl" ? "3D concept" : "3D concept"}
      </h3>
      <div className="va-photo-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
        <img src="uploads/pasted-1783677835518-0.png" alt="Working on the SketchUp model" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677841358-0.png" alt="SketchUp model of the umbrella and clouds" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677847812-0.png" alt="3D render of the installation" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677853028-0.png" alt="Top-down view of the installation" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
      </div>

      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 16px", fontWeight: 500 }}>
        {lang === "nl" ? "De wolken bouwen" : "Building the clouds"}
      </h3>
      <div className="va-phone-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }}>
        <img src="uploads/pasted-1783677858230-0.png" alt="Cutting cardboard" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677868868-0.png" alt="Stuffing the clouds with cotton" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677877944-0.png" alt="Paper lantern base for a cloud" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677883741-0.png" alt="LED light and battery pack" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677893450-0.png" alt="Finished cotton clouds" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677917711-0.png" alt="Cloud carried through the studio" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
      </div>

      <h3 style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 16px", fontWeight: 500 }}>
        {lang === "nl" ? "Installatie & expo" : "Installation & expo"}
      </h3>
      <div className="va-phone-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 12 }}>
        <img src="uploads/pasted-1783677924793-0.png" alt="The workshop floor during build week" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677936218-0.png" alt="Cloud mounted on the wall" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677965612-0.png" alt="Blue LEDs lit in the dark" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677979377-0.png" alt="Cloud lit from within" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783677995350-0.png" alt="Mounting the umbrella on the stairs" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
        <img src="uploads/pasted-1783678001761-0.png" alt="The umbrella lit with blue LEDs" style={{ width: "100%", display: "block", borderRadius: 6 }}/>
      </div>
      <img src="uploads/pasted-1783678007963-0.png" alt="Visitors experiencing the installation at the expo"
        style={{ width: "100%", display: "block", borderRadius: 6 }}/>

      <div style={{ height: 80 }}/>
    </div>
  );
}

Object.assign(window, { ThunderstormCase });
