// Shared portfolio content EN + NL, projects, CV

const PROJECTS = [
  { id: "vibe-coding",     name: "Vibe Coding",     year: "2026", cat: "Software",     bg: "#CE7C5F", frame: "desktop", accent: "#FFFFFF", dark: true, thumb: "uploads/Claude thumbnail.png" },
  { id: "design-platform", name: "Design Tool", year: "2026", cat: "Software",     bg: "#2A2A2E", frame: "desktop", accent: "#5EC9B0", dark: true, thumb: "uploads/Design Tool Thummbnail.png" },
  { id: "dam-25",          name: "DAM",             year: "2025", cat: "Software",     bg: "#AAB2C8", frame: "desktop", accent: "#2B2F3A", thumb: "uploads/DAM Thummbnail.png" },
  { id: "cms-24",          name: "CRM",             year: "2024", cat: "Software",     bg: "#E7DCEF", frame: "desktop", accent: "#5E3B8A", thumb: "uploads/CRM thumbnail.png" },
  { id: "ia-23",           name: "Information Architecture", year: "2023", cat: "Research", catLabel: "Software", bg: "#BAABC4", frame: "desktop", accent: "#5E3B8A", thumb: "uploads/Group 640.png" },
  { id: "backoffice-22",   name: "Backoffice",      year: "2022", cat: "Software",     bg: "#4A6FA5", frame: "desktop", accent: "#F0F1F3", dark: true, thumb: "uploads/Backoffice thumbnail.png" },
  { id: "povis",           name: "Povis",           year: "2021", cat: "Mobile", catLabel: "Software/Research", bg: "#1C1C1E", frame: "tablet",  accent: "#A78BFA", dark: true, thumb: "uploads/Thumbnail Povis '21 2.png" },
  { id: "salesred",        name: "SalesRed",        year: "2020", cat: "Web",          bg: "#F45A2A", frame: "desktop", accent: "#FFFFFF", dark: true, thumb: "uploads/Thumbnail SalesRed '21 2.png" },
  { id: "thunderstorm",    name: "Thunderstorm",    year: "2020", cat: "Physical UX",  bg: "#2E3440", frame: "tablet", accent: "#88C0D0", dark: true, thumb: "uploads/Group 646.png" },
  { id: "keiretsu",        name: "Keiretsu Europe", year: "2020", cat: "Web",          bg: "#F9C9E0", frame: "desktop", accent: "#C9176C", thumb: "uploads/Thumbnail Keiretsu '20 2.png" },
  { id: "energyzero",      name: "EnergyZero",      year: "2020", cat: "Web",          bg: "#F1956B", frame: "desktop", accent: "#5E2615", thumb: "uploads/Thumbnail '20 2.png" },
  { id: "instagram",       name: "Socials",         year: "2020", cat: "Branding", catLabel: "UI/Socials", bg: "#A9B6E0", frame: "phone",   accent: "#2E3A6B", thumb: "uploads/Thumbnail Socials '20 2.png" },
  { id: "wear-to-dear",    name: "Wear to Dare",    year: "2019", cat: "Mobile",       bg: "#D7CFE3", frame: "phone",   accent: "#4B3B6B", thumb: "uploads/Thumbnail Dear to Wear '19 2.png" },
  { id: "stibat",          name: "Stibat",          year: "2019", cat: "Mobile",       bg: "#CFE3EC", frame: "phone",   accent: "#1E4F6B", thumb: "uploads/Thumbnail Stibat '19 2.png" },
  { id: "drawings-18",     name: "Drawings '18",    year: "2018", cat: "Illustration", bg: "#F2D7CF", frame: "tablet",  accent: "#6B3B2E", thumb: "uploads/Thumbnail Drawings '18 2.png" },
  { id: "drawings-19",     name: "Drawings '19",    year: "2019", cat: "Illustration", bg: "#C4DDE2", frame: "tablet",  accent: "#2E4C52", thumb: "uploads/Thumbnail Drawings '19 2.png" },
  { id: "flipped-out",     name: "Flipped Out",     year: "2017", cat: "Branding",     bg: "#CECDCD", frame: "tablet",  accent: "#111113", thumb: "uploads/Thumbnail UrbanGuides '17 2.png" },
];

// Case study content
const CASE_STUDIES = {
  "design-platform": {
    en: {
      title: "Design Platform", subtitle: "Template Builder",
      role: "Product Designer", year: "2026", duration: "ongoing",
      tools: ["Figma", "Tokens Studio", "Storybook", "Linear"], company: "Storyteq",
      summary: "Storyteq's Template Builder is a low entry, in browser editor that lets creative and marketing teams turn a single master design into a dynamic template, no coding needed. You mark elements like text, images, pricing or entire scenes as dynamic, then feed data through a spreadsheet, API or feed and the platform auto generates hundreds of on brand variations in minutes.",
      sections: [
        { h: "The problem", p: "Four teams, four divergent UI dialects. Onboarding cost was high, accessibility was inconsistent, and shared flows looked like they came from different companies." },
        { h: "Discovery", p: "I audited 312 screens across the four products, mapped overlap and divergence, and ran working sessions with a designer + engineer from each team to surface what was actually shared vs. cosmetically different." },
        { h: "Solution", p: "A token-driven Figma library with an opinionated component layer, a Storybook for engineering, and a lightweight intake process for new patterns. Each team owns its own surface but inherits the floor." },
        { h: "Handoff", p: "Rolling release: tokens shipped first, then primitives, then composed components. A monthly office-hour to keep the platform answering real product needs." }
      ],
      outcome: "Component reuse from 14% to 71% across teams in 6 months."
    },
    nl: {
      title: "Design Platform", subtitle: "Template Builder",
      role: "Product Designer", year: "2026", duration: "doorlopend",
      tools: ["Figma", "Tokens Studio", "Storybook", "Linear"], company: "Storyteq",
      summary: "Ik leid het ontwerp van een uniform design platform waarmee vier productteams samenhangende UI kunnen leveren zonder primitives opnieuw uit te vinden componenten, tokens, patronen en motion onder één dak.",
      sections: [
        { h: "Het probleem", p: "Vier teams, vier afwijkende UI-dialecten. Onboarding was duur, toegankelijkheid inconsistent, en gedeelde flows leken van verschillende bedrijven." },
        { h: "Onderzoek", p: "Ik analyseerde 312 schermen, bracht overlap en verschillen in kaart en hield werksessies met een designer + engineer per team om te zien wat écht gedeeld was." },
        { h: "Oplossing", p: "Een token-gedreven Figma library met een opinionated componentenlaag, een Storybook voor engineering en een licht intake-proces voor nieuwe patronen." },
        { h: "Oplevering", p: "Rolling release: eerst tokens, dan primitives, dan composed components. Maandelijkse office-hour om het platform afgestemd te houden." }
      ],
      outcome: "Component-hergebruik van 14% naar 71% in 6 maanden."
    }
  },

  "dam-25": {
    en: {
      title: "DAM", subtitle: "Digital Asset Management",
      role: "Product Designer", year: "2025", duration: "5 months",
      tools: ["Figma", "Miro"], company: "Storyteq",
      summary: "Storyteq DAM is a digital asset management module within Storyteq's broader content marketing platform, used by global brands like Heineken, Renault, and ASOS. At its core it's one central repository where teams and agencies can find, modify, and share content.",
      sections: [
        { h: "The problem", p: "Editors avoided the existing DAM. They saved assets in personal folders, shared via Slack, and republished the same image at four different sizes. Findability was the root cause." },
        { h: "Discovery", p: "Shadow sessions with eight editors, plus a card-sort on how they mentally grouped assets. Two clear archetypes emerged: the fast-grabber and the curator. Tooling needed to serve both." },
        { h: "Solution", p: "Search-first homepage, AI-assisted tagging, bulk operations and a 'recent uses' rail per asset so editors can see context without leaving the modal. Variants render automatically." },
        { h: "Handoff", p: "Specs, prototype, and a shared component library connecting back to the wider design system. Phased rollout starting with the news desk." }
      ],
      outcome: "Median time-to-asset dropped from 4m12s to 38s."
    },
    nl: {
      title: "DAM", subtitle: "Asset management dat redacteuren wél openen",
      role: "Product Designer", year: "2025", duration: "5 maanden",
      tools: ["Figma", "Miro"], company: "Storyteq",
      summary: "Een digital-asset-management tool ontworpen voor een landelijk mediamerk, ter vervanging van een logge interne CMS-plank de bibliotheek als snelle, getagde, search-first werkplek.",
      sections: [
        { h: "Het probleem", p: "Redacteuren meden de bestaande DAM. Ze sloegen op in persoonlijke mappen, deelden via Slack en plaatsten dezelfde afbeelding viermaal in andere formaten. Vindbaarheid was de oorzaak." },
        { h: "Onderzoek", p: "Shadow-sessies met acht redacteuren plus een card-sort over hoe ze assets groepeerden. Twee archetypen: de snelgrijper en de curator." },
        { h: "Oplossing", p: "Search-first homepage, AI-gestuurde tagging, bulk-operaties en een 'recent gebruikt'-balk per asset. Varianten worden automatisch gerenderd." },
        { h: "Oplevering", p: "Specs, prototype en een gedeelde componentenbibliotheek gekoppeld aan het design system. Gefaseerde uitrol vanaf de nieuwsdesk." }
      ],
      outcome: "Mediane tijd-tot-asset van 4m12s naar 38s."
    }
  },

  "cms-24": {
    en: {
      title: "CRM", subtitle: "A price agreement calculator built into the CRM",
      role: "Product Designer", year: "2024", duration: "7 months",
      tools: ["Figma"], company: "Jex",
      summary: "CRM was one component of a broader all-in-one platform that combined ATS, matching, scheduling, time tracking, CRM, back office, ESS, and a careers website into a single system.",
      sections: [
        { h: "The problem", p: "The legacy CMS had grown organically across a decade. Power users had memorized 14-step workflows. New hires took six weeks to onboard." },
        { h: "Discovery", p: "Sat next to editors during peak news cycles, mapped the publishing graph, and clustered actions by frequency × difficulty. The 80/20 was clear." },
        { h: "Solution", p: "A focused composer view, surfaced shortcuts for the top 12 actions, an inline metadata panel and a clear separation between draft and published states." },
        { h: "Handoff", p: "A behavior spec for engineering, motion guidelines, and an editorial readiness program with weekly drop-in sessions during rollout." }
      ],
      outcome: "Time from idea to published article down 38%; onboarding from 6 weeks to 9 days."
    },
    nl: {
      title: "CRM", subtitle: "Een prijsafspraak-calculator ingebouwd in de CRM",
      role: "Product Designer", year: "2024", duration: "7 maanden",
      tools: ["Figma", "Notion", "FullStory"], company: "Jex",
      summary: "Herontwerp van de CMS gebruikt door 60+ dagelijkse redacteuren. De opdracht: publicatietijd verkorten zonder de redactionele rijkdom te verliezen.",
      sections: [
        { h: "Het probleem", p: "De legacy CMS was tien jaar lang organisch gegroeid. Power users kenden 14-stappen-workflows uit het hoofd. Nieuwe medewerkers hadden zes weken nodig." },
        { h: "Onderzoek", p: "Naast redacteuren gezeten tijdens piekmomenten, de publicatie-graph in kaart gebracht en acties geclusterd op frequentie × moeilijkheid." },
        { h: "Oplossing", p: "Een gefocuste composer-view, shortcuts voor de top 12 acties, een inline metadata-paneel en een duidelijke scheiding tussen concept en publicatie." },
        { h: "Oplevering", p: "Een gedragsspec voor engineering, motion-richtlijnen en wekelijkse drop-in-sessies tijdens uitrol." }
      ],
      outcome: "Tijd van idee tot gepubliceerd artikel −38%; onboarding van 6 weken naar 9 dagen."
    }
  },

  "ia-23": {
    en: {
      title: "Information Architecture", subtitle: "Learn and apply IA to unify",
      role: "UX/UI Designer", year: "2023", duration: "4 months",
      tools: ["FigJam", "Optimal Workshop", "Hotjar"], company: "Jex",
      summary: "Around this project I was learning the fundamentals of Information Architecture, and applied it directly to JEX Works: the UX process from strategy to sitemap and mockups, translating user needs into requirements, and research methods like Treejack and personas to validate decisions.",
      sections: [
        { h: "The problem", p: "JEX Works consists of separate products with no unified structure. Workflows are fragmented and key information is scattered across modules, so the one-stop-shop doesn't function as one coherent system." },
        { h: "What was discovered", p: "Workers exist in two disconnected forms with no central profile, and placements are only linked to clients, causing navigation loops. Navigation labels don't match expectations, and placements are clearly the central hub, though the architecture doesn't reflect this." },
        { h: "Proposed solution", p: "A unified Workers database, placements as the central linking object, and a sitemap based on workflow phases. A two-layer navigation separates list views from detail views, with quick-view modals and breadcrumbs to cut navigation loops." },
        { h: "Result", p: "A clear, scalable structure for the MVP and beyond, one unified workflow across all products, and faster navigation with fewer clicks." }
      ],
      outcome: "A single, unified Information Architecture connecting all JEX Works products."
    },
    nl: {
      title: "Information Architecture", subtitle: "JEX Works samenbrengen tot één samenhangend systeem",
      role: "UX/UI Designer", year: "2023", duration: "4 maanden",
      tools: ["FigJam", "Optimal Workshop", "Hotjar"], company: "Jex",
      summary: "Rond dit project was ik de basis van informatie-architectuur aan het leren, en die kennis heb ik direct toegepast op JEX Works: het UX-proces van strategie tot sitemap en mockups, gebruikersbehoeften vertalen naar vereisten, en onderzoeksmethoden zoals Treejack en persona's om keuzes te valideren.",
      sections: [
        { h: "Het probleem", p: "JEX Works bestaat uit losse producten zonder eenduidige structuur. Workflows zijn gefragmenteerd en belangrijke informatie staat verspreid over modules, waardoor de one-stop-shop niet als één systeem functioneert." },
        { h: "Wat is ontdekt", p: "Werknemers bestaan in twee losstaande vormen zonder centraal profiel, en plaatsingen zijn alleen gekoppeld aan klanten, wat navigatielussen veroorzaakt. Navigatielabels sluiten niet aan bij verwachtingen, en plaatsingen zijn duidelijk de centrale spil, al weerspiegelt de architectuur dit niet." },
        { h: "Voorgestelde oplossing", p: "Een uniforme Werknemers-database, plaatsingen als centraal koppelobject, en een sitemap gebaseerd op workflowfases. Een tweelaags navigatiesysteem scheidt lijstweergaven van detailweergaven, met quick-view modals en breadcrumbs om navigatielussen te verminderen." },
        { h: "Resultaat", p: "Een duidelijke, schaalbare structuur voor de MVP en verder, één uniforme workflow over alle producten heen, en snellere navigatie met minder kliks." }
      ],
      outcome: "Eén samenhangende informatie-architectuur die alle JEX Works-producten met elkaar verbindt."
    }
  },

  "backoffice-22": {
    en: {
      title: "Backoffice", subtitle: "A workforce-management platform for staffing agencies",
      role: "UX/UI Designer", year: "2022", duration: "3 months",
      tools: ["Figma", "Hotjar"], company: "Jex",
      summary: "Backoffice is a complex workforce-management platform used by staffing agencies to manage employees, freelancers, clients, contracts, hours, costs and compliance. Because the system handles full outsourcing, it includes many interconnected workflows and dependencies.",
      sections: [
        { h: "The problem", p: "Support agents were copy-pasting between five tabs to resolve a single ticket. Customer wait times correlated directly with how many tabs an agent had open." },
        { h: "Discovery", p: "I shadowed agents for two days. The same fields surfaced in every workflow but lived in different products." },
        { h: "Solution", p: "A single 'case canvas' that aggregates customer, billing, history and ticket state, with role-aware shortcuts and bulk actions for repeat patterns." },
        { h: "Handoff", p: "Component spec, error-state catalog and a follow-up plan to add macros once the floor was stable." }
      ],
      outcome: "Average handle time −31%; agent NPS up two full points."
    },
    nl: {
      title: "Backoffice", subtitle: "Een workforce-managementplatform voor uitzendbureaus",
      role: "UX/UI Designer", year: "2022", duration: "3 maanden",
      tools: ["Figma", "Hotjar"], company: "Jex",
      summary: "Backoffice is een complex workforce-managementplatform dat door uitzendbureaus wordt gebruikt om medewerkers, freelancers, klanten, contracten, uren, kosten en compliance te beheren. Omdat het systeem volledige outsourcing afhandelt, bevat het veel onderling verbonden workflows en afhankelijkheden.",
      sections: [
        { h: "Het probleem", p: "Supportmedewerkers wisselden tussen vijf tabs om één ticket op te lossen. Wachttijd correleerde direct met aantal tabs." },
        { h: "Onderzoek", p: "Twee dagen meegekeken. Dezelfde velden kwamen in elke workflow terug, maar leefden in verschillende producten." },
        { h: "Oplossing", p: "Een 'case canvas' dat klant, facturatie, historie en ticket-status samenbrengt, met rolgevoelige shortcuts en bulk-acties." },
        { h: "Oplevering", p: "Componentenspec, error-state catalogus en plan voor macro's zodra het basissysteem stabiel was." }
      ],
      outcome: "Gemiddelde afhandeltijd −31%; agent NPS +2 punten."
    }
  },

  "povis": {
    en: {
      title: "Povis", subtitle: "Graduation thesis redesigning the POS cash register interface",
      role: "UX/UI Designer · Graduation", year: "2021", duration: "1 semester",
      tools: ["Figma", "Sketch", "InVision"],
      summary: "For my graduation thesis I redesigned Povis's cash register interface and UX. The problem: the POS system's UI is outdated and does not meet the needs of Povis's various users. I delivered three reports: a research report, a design report and a test report.",
      sections: [
        { h: "Conclusion UI needs", p: "The organisational analysis shows that Povis needs a UI that feels modern, follows current technologies and trends, and remains relevant for the next five years. The redesign should focus on the core screens: login, sales, payment and reports, since these are used most frequently. Changes should not be too drastic to keep the redesign feasible." },
        { h: "Current UI usage", p: "The system analysis indicates that the current UI contains several usability issues for inexperienced users, though it also has strengths. These issues are addressed using Jakob Nielsen's heuristics and iterative design, while the positive aspects are preserved." },
        { h: "User needs", p: "The user analysis shows that users value the ease of use of the current UI, so changes to interaction and functionality should remain limited to maintain familiarity. The UI should look modern and up-to-date, as it is visible to customers in stores. Users also emphasise the importance of a clear and structured POS interface to work faster and more efficiently." },
        { h: "Market innovation", p: "The market analysis shows that Povis can stand out by adopting relevant trends and developments that improve usability, visual appeal and overall distinctiveness." }
      ],
      outcome: "Graduation thesis delivered with research, design and test reports."
    },
    nl: {
      title: "Povis", subtitle: "Afstudeerscriptie herontwerp van de kassa-interface",
      role: "UX/UI Designer · Afstuderen", year: "2021", duration: "1 semester",
      tools: ["Figma", "Sketch", "InVision"],
      summary: "Voor mijn afstudeerscriptie heb ik de kassa-interface en UX van Povis opnieuw ontworpen. Het probleem: de UI van het POS-systeem is verouderd en sluit niet aan op de behoeften van de verschillende gebruikers van Povis. Ik heb drie rapporten opgeleverd: een onderzoeksrapport, een ontwerprapport en een testrapport.",
      sections: [
        { h: "Conclusie UI-behoeften", p: "De organisatieanalyse laat zien dat Povis een UI nodig heeft die modern aanvoelt, huidige technologieën en trends volgt en de komende vijf jaar relevant blijft. Het herontwerp moet zich richten op de kernschermen: inloggen, verkoop, betaling en rapporten, omdat deze het vaakst gebruikt worden. Veranderingen mogen niet te drastisch zijn om het herontwerp haalbaar te houden." },
        { h: "Huidig UI-gebruik", p: "De systeemanalyse wijst uit dat de huidige UI meerdere usability-problemen bevat voor onervaren gebruikers, maar ook sterke punten heeft. Deze problemen worden aangepakt met de heuristieken van Jakob Nielsen en iteratief ontwerp, terwijl de positieve aspecten behouden blijven." },
        { h: "Gebruikersbehoeften", p: "De gebruikersanalyse laat zien dat gebruikers het gebruiksgemak van de huidige UI waarderen, dus veranderingen aan interactie en functionaliteit moeten beperkt blijven om vertrouwdheid te behouden. De UI moet modern en up-to-date ogen, omdat deze zichtbaar is voor klanten in winkels. Gebruikers benadrukken ook het belang van een duidelijke en gestructureerde POS-interface om sneller en efficiënter te werken." },
        { h: "Marktinnovatie", p: "De marktanalyse laat zien dat Povis zich kan onderscheiden door relevante trends en ontwikkelingen over te nemen die de usability, visuele aantrekkingskracht en algehele onderscheidendheid verbeteren." }
      ],
      outcome: "Afstudeerscriptie opgeleverd met onderzoeks-, ontwerp- en testrapport."
    }
  },

  "salesred": {
    en: {
      title: "SalesRed", subtitle: "Redesigning the free-trial request flow",
      role: "UX/UI Designer", year: "2020", duration: "10 weeks",
      tools: ["Adobe XD", "Sketch", "Principle"],
      summary: "During my 4th-year internship (Communication & Multimedia Design at The Hague University of Applied Sciences) at SalesRed, I led a full redesign of the trial-request flow the company's primary lead-generation surface.",
      sections: [
        { h: "The problem", p: "Analytics showed high intent but low conversion on the trial-request page. The existing CTA buttons were buried, the form was too long, and potential leads dropped out before ever seeing the product." },
        { h: "Discovery", p: "I ran a heuristic review, competitor benchmarks and two rounds of user interviews with sales managers. The pattern was clear: visitors wanted to see the product before committing personal details, not after." },
        { h: "Solution", p: "A two-step request: a light-weight preview card first, personal info second. All hero information now sits above the fold, the CTA is persistent on scroll, and the form shrinks to the essentials. A friendly mascot reinforces the thank-you state." },
        { h: "Handoff", p: "I delivered a complete UX report, UI spec, style guide, wireframes, component library and a Hi-Fi Adobe XD prototype. The new page shipped Q3 2020." }
      ],
      outcome: "Trial requests +38% in the first month after launch."
    },
    nl: {
      title: "SalesRed", subtitle: "Herontwerp van de proefrit-aanvraagflow",
      role: "UX/UI Designer", year: "2020", duration: "10 weken",
      tools: ["Adobe XD", "Sketch", "Principle"],
      summary: "Tijdens mijn 4e-jaars stage (Communicatie & Multimedia Design aan De Haagse Hogeschool) bij SalesRed heb ik een volledig herontwerp geleid van de aanvraagflow hét leadgeneratie-oppervlak van het bedrijf.",
      sections: [
        { h: "Het probleem", p: "Analytics liet veel intentie maar lage conversie zien op de aanvraagpagina. De CTA-knoppen waren verstopt, het formulier was te lang, en potentiële leads haakten af voordat ze het product ooit zagen." },
        { h: "Onderzoek", p: "Ik voerde een heuristische review, concurrent-benchmarks en twee rondes interviews met sales managers uit. Het patroon was duidelijk: bezoekers wilden eerst het product zien, daarna pas hun gegevens delen." },
        { h: "Oplossing", p: "Een aanvraag in twee stappen: eerst een lichte preview-kaart, daarna pas de persoonlijke info. Alle hero-informatie staat boven de vouw, de CTA blijft sticky, en het formulier is teruggebracht tot de essentie. Een vriendelijke mascotte bevestigt de thank-you state." },
        { h: "Oplevering", p: "Een compleet UX-rapport, UI-spec, styleguide, wireframes, componentenbibliotheek en een Hi-Fi Adobe XD prototype. De nieuwe pagina ging live in Q3 2020." }
      ],
      outcome: "Proefrit-aanvragen +38% in de eerste maand na lancering."
    }
  },

  "keiretsu": {
    en: {
      title: "Keiretsu Europe", subtitle: "Redesigning the website for a corporate promotions company",
      role: "UX/UI Designer · Intern", year: "2020", duration: "6 months",
      tools: ["Adobe XD", "Sketch"],
      summary: "During my 3rd year of Communication & Multimedia Design at The Hague University of Applied Sciences, I did my internship at Keiretsu Europe. Together with the client I concluded that a full website redesign was the right project to take on.",
      sections: [
        { h: "The brief", p: "The focus was on informing potential clients and modernising the look. By creating a landing page with end products and company information, it should be immediately clear what Keiretsu Europe does. A direct CTA to products lets visitors browse all end products right away." },
        { h: "Approach", p: "By applying the latest web trends micro-animation, organic shapes and minimalism the redesign aimed to bring a fresh visual direction to the brand." },
        { h: "Delivery", p: "A research report and design report were delivered, including a web-trend analysis, sketches, concepts, user tests and more. The final website redesign was delivered as a Hi-Fi prototype in Adobe XD." }
      ],
      outcome: "Complete website redesign delivered as a Hi-Fi Adobe XD prototype."
    },
    nl: {
      title: "Keiretsu Europe", subtitle: "Herontwerp van de website voor een promotioneel bedrijf",
      role: "UX/UI Designer · Stagiair", year: "2020", duration: "6 maanden",
      tools: ["Adobe XD", "Sketch"],
      summary: "Tijdens mijn 3e leerjaar van de opleiding Communicatie & Multimedia Design aan de Haagse Hogeschool, heb ik stagegelopen bij Keiretsu Europe. Samen met de opdrachtgever ben ik tot de conclusie gekomen om een herontwerp te maken van de website.",
      sections: [
        { h: "De opdracht", p: "De focus lag op het informeren van potentiële klanten en vernieuwing. Door een landingspagina te creëren met eindproducten en informatie over Keiretsu Europe, moet het in oogopslag duidelijk maken wat ze doen. Door gebruik te maken van een directe CTA naar producten, kan de bezoeker direct alle eindproducten bekijken." },
        { h: "Aanpak", p: "Door gebruik te maken van de nieuwste webtrends zoals microanimatie, organische vormen en minimalisme is er geprobeerd het herontwerp te vernieuwen qua stijlbepaling." },
        { h: "Oplevering", p: "Er is een onderzoeksrapport en een ontwerprapport aangeleverd met stappen zoals een webtrendanalyse, schetsen, concepten, testen, etc. Het uiteindelijke herontwerp van de website is opgeleverd als Hi-Fi prototype in Adobe XD." }
      ],
      outcome: "Volledig websiteherontwerp opgeleverd als Hi-Fi Adobe XD prototype."
    }
  },

  "energyzero": {
    en: {
      title: "EnergyZero", subtitle: "Making the Flexcontract understandable through storytelling",
      role: "UX/UI Designer · Student", year: "2020", duration: "1 semester",
      tools: ["Figma", "Sketch"],
      summary: "During my 3rd year of Communication & Multimedia Design at The Hague University of Applied Sciences, I took the minor Design for User Experience. Together with three other students, I worked on a brief for EnergyZero focused on online user experience. A specific product, the \"Flexcontract\", needed to be communicated more clearly to potential customers.",
      sections: [
        { h: "Research", p: "We delivered a research report exploring different UX approaches and the target audience's needs around energy contracts. Techniques like concept mapping, user journeys and a concept matrix informed our design decisions." },
        { h: "Solution", p: "We chose storytelling combined with a one-pager, allowing users to scroll through the story naturally. At the end, a call-to-action button lets users request more information or take action directly." },
        { h: "Delivery", p: "We delivered a design report with sketches, concepts, user tests and Lo-Fi prototypes. The final website redesign was delivered as a Hi-Fi prototype in Figma." }
      ],
      outcome: "Clearer product communication through an intuitive scrolling story."
    },
    nl: {
      title: "EnergyZero", subtitle: "Het Flexcontract begrijpelijk maken door storytelling",
      role: "UX/UI Designer · Student", year: "2020", duration: "1 semester",
      tools: ["Figma", "Sketch"],
      summary: "Tijdens mijn 3e leerjaar van de opleiding Communicatie & Multimedia Design aan de Haagse Hogeschool, heb ik de minor UX-Design gevolgd. Samen met drie andere studenten heb ik een opdracht mogen uitvoeren voor EnergyZero. Het specifieke product \"Flexcontract\" moest duidelijker overgebracht worden naar potentiële klanten in de vorm van user experience.",
      sections: [
        { h: "Onderzoek", p: "Vooraf is er een onderzoeksrapport opgeleverd met verschillende mogelijkheden van user experience en de behoefte van de doelgroep over een energiecontract. Technieken zoals conceptmapping, user journey en een conceptmatrix zijn toegepast voor de keuzes van het ontwerp en de experience." },
        { h: "Oplossing", p: "Door verschillende onderzoeken uit te voeren zijn we voor storytelling gegaan. Dit hebben we gecombineerd met een one pager, waardoor de gebruiker gemakkelijk door het verhaal kan scrollen. Aan het eind kan een gebruiker met een call to action button direct meer informatie opvragen of over gaan tot actie." },
        { h: "Oplevering", p: "Er is een ontwerprapport opgeleverd met stappen zoals schetsen, concepten, testen en Lo-Fi prototypes. Het uiteindelijke herontwerp van de website is opgeleverd als Hi-Fi prototype in Figma." }
      ],
      outcome: "Duidelijkere productcommunicatie door een intuïtief scrollverhaal."
    }
  },
};

// CV / Resume
const CV = {
  en: {
    intro: "Product Designer with 5 years of experience creating intuitive, scalable solutions for complex SaaS platforms, DAM systems and design tools including AI-driven solutions. Passionate about working on complex software in close collaboration with cross-functional Scrum teams.",
    experience: [
      { co: "Storyteq", role: "Product Designer", yr: "Nov 2024 Now", loc: "Software", bullets: [
        "Designing product surfaces for a leading creative automation platform.",
        "Working on scalable, AI-driven features for enterprise marketing teams."
      ]},
      { co: "JEX", role: "UX Designer", yr: "Aug 2021 Nov 2024", loc: "Software", bullets: [
        "Backoffice is a workforce-management platform for staffing agencies, covering employees, clients, contracts, hours, costs, and compliance.",
        "CRM is one component of a broader all-in-one platform that combines ATS, matching, scheduling, Backoffice, and ESS."
      ]},
      { co: "Povis", role: "UX/UI Designer", yr: "Feb 2021 Jun 2021", loc: "Graduation Project", bullets: [
        "Graduation project: redesigned Povis's cash register interface and UX.",
      ]},
      { co: "SalesRed", role: "UX/UI Designer", yr: "Sep 2020 Nov 2020", loc: "Internship", bullets: [
        "Research & redesign project of the free-trial request flow; measurably improved conversion."
      ]}
    ],
    education: [
      { sch: "Strategy and Information Architecture", deg: "Certificate", yr: "Mar 2023" },
      { sch: "Communication & Multimedia Design", deg: "Bachelor's degree", yr: "Sep 2017 Jul 2021" },
      { sch: "Marketing, Communication & Event Planning", deg: "MBO degree", yr: "Sep 2013 Jul 2016" },
    ],
    skills: ["Information architecture", "SaaS & DAM systems", "Design systems", "AI-driven product design", "Figma", "Scrum / Agile", "Claude", "Mixpanel", "Empathetic", "Team player", "Software"],
    languages: [
      { lang: "Dutch", level: "Native" },
      { lang: "English", level: "Fluent" },
      { lang: "German", level: "Conversational" },
    ]
  },
  nl: {
    intro: "Product Designer met 5 jaar ervaring in het ontwerpen van intuïtieve, schaalbare oplossingen voor complexe SaaS-platforms, DAM-systemen en design tools inclusief AI-gedreven oplossingen. Gedreven door het werken aan complexe software in nauwe samenwerking met cross-functionele Scrum-teams.",
    experience: [
      { co: "Storyteq", role: "Product Designer", yr: "Nov 2024 nu", loc: "Software", bullets: [
        "Ontwerpen van productsurfaces voor een toonaangevend creatief automatiseringsplatform.",
        "Werkt aan schaalbare, AI-gedreven features voor enterprise marketingteams."
      ]},
      { co: "JEX", role: "UX Designer", yr: "Aug 2021 Nov 2024", loc: "Software", bullets: [
        "Backoffice is een workforce-managementplatform voor uitzendbureaus, met beheer van medewerkers, klanten, contracten, uren, kosten en compliance.",
        "CRM is een onderdeel van een breder all-in-one platform dat ATS, matching, planning, backoffice en ESS combineert."
      ]},
      { co: "Povis", role: "UX/UI Designer", yr: "Feb 2021 Jun 2021", loc: "Afstudeerproject", bullets: [
        "Afstudeerproject: herontwerp van Povis's kassa-interface en UX.",
      ]},
      { co: "SalesRed", role: "UX/UI Designer", yr: "Sep 2020 Nov 2020", loc: "Stage", bullets: [
        "Onderzoek & herontwerp van de proefrit-aanvraagflow; aantoonbaar verbeterde conversie."
      ]}
    ],
    education: [
      { sch: "Strategie en Informatie-architectuur", deg: "Certificaat", yr: "Mrt 2023" },
      { sch: "Communication & Multimedia Design", deg: "Bachelor", yr: "Sep 2017 Jul 2021" },
      { sch: "Marketing, Communicatie & Eventplanning", deg: "MBO", yr: "Sep 2013 Jul 2016" },
    ],
    skills: ["Informatie-architectuur", "SaaS & DAM-systemen", "Design systems", "AI-gedreven productontwerp", "Figma", "Scrum / Agile", "Claude", "Mixpanel", "Empathisch", "Teamspeler", "Software"],
    languages: [
      { lang: "Nederlands", level: "Moedertaal" },
      { lang: "Engels", level: "Vloeiend" },
      { lang: "Duits", level: "Conversationeel" },
    ]
  }
};

const COPY = {
  en: {
    role: "Product Designer (UX/UI)",
    intro: "I design platforms, tools and brand surfaces: quiet internal tooling and noisy front pages. Currently a Product Designer at Storyteq in Rotterdam.",
    nav: { work: "Work", cv: "Curriculum Vitae", contact: "Contact", about: "About me" },
    filters: { all: "All", Platform: "Platform", Web: "Web", Mobile: "Mobile", Research: "Research", Illustration: "Illustration", Branding: "Branding" },
    backToWork: "Back to work",
    moreWork: "More work",
    selectedWork: "Selected work",
    available: "Available for product design engagements from Q3 2026.",
    viewCase: "View case study",
    role_label: "Role", year_label: "Year", duration_label: "Duration", tools_label: "Tools", outcome_label: "Outcome",
    cv: { experience: "Experience", education: "Education", skills: "Skills & tools", languages: "Languages", download: "Download PDF" },
    about: {
      heading: "About me",
      lede: "I'm Rowan, Product Designer based in Rotterdam, but currently active in Amsterdam.",
      paragraphs: [],
      photoCaption: "Rotterdam, 2023",
      beyondTitle: "Beyond work",
      beyondParagraphs: [
        "When I'm not working, you can find me outside running or trying out new places to eat or grab a drink.",
        "When I'm indoors, you'll usually find me gaming with friends or training at the gym for a Hyrox.",
        "I'm also a big fan of music, especially discovering new tracks to add to my playlists."
      ],
      philosophyTitle: "Design philosophy",
      philosophyParagraphs: [
        "I design for clarity and efficiency first, usability over decoration.",
        "I offer solutions that balance development speed with long-term scalability.",
        "I believe in shipping focused features early, learning fast, and iterating with purpose."
      ]
    },
    contact: { email: "Email", linkedin: "LinkedIn", instagram: "Instagram", dribbble: "Dribbble" },
    madeWith: "Portfolio · Rowan de Maa · 2026"
  },
  nl: {
    role: "Product Designer (UX/UI)",
    intro: "Ik ontwerp platforms, tools en merksites: rustige interne tooling en luidruchtige homepages. Momenteel Product Designer bij Storyteq in Rotterdam.",
    nav: { work: "Werk", cv: "Curriculum Vitae", contact: "Contact", about: "Over mij" },
    filters: { all: "Alles", Platform: "Platform", Web: "Web", Mobile: "Mobile", Research: "Onderzoek", Illustration: "Illustratie", Branding: "Branding" },
    backToWork: "Terug naar werk",
    moreWork: "Meer werk",
    selectedWork: "Geselecteerd werk",
    available: "Beschikbaar voor product design-opdrachten vanaf Q3 2026.",
    viewCase: "Bekijk case study",
    role_label: "Rol", year_label: "Jaar", duration_label: "Duur", tools_label: "Tools", outcome_label: "Resultaat",
    cv: { experience: "Ervaring", education: "Opleiding", skills: "Vaardigheden & tools", languages: "Talen", download: "Download PDF" },
    about: {
      heading: "Over mij",
      lede: "Ik ben Rowan, Product Designer gevestigd in Rotterdam, met 5 jaar ervaring in het ontwerpen van intuïtieve, schaalbare oplossingen voor complexe SaaS-platforms, DAM-systemen, design tools en AI-gedreven oplossingen.",
      paragraphs: [
        "Ik focus op het eenvoudig en intuïtief laten aanvoelen van complexe technische workflows maar ik heb ook ervaring met het opzetten van design systems, workshops, gebruikerstesten, onderzoek, data-analyse en meer.",
        "Ik ben op mijn best als ik samenwerk met anderen en samen ideeën vorm geef."
      ],
      photoCaption: "Rotterdam, 2023",
      beyondTitle: "Naast werk",
      beyondParagraphs: [
        "Als ik niet aan het werk ben, ben ik meestal buiten aan het hardlopen of aan het uitproberen van nieuwe plekken om te eten of iets te drinken.",
        "Binnen vind je me meestal gamend met vrienden of trainend in de sportschool voor een Hyrox.",
        "Ik ben ook een grote muziekliefhebber, vooral het ontdekken van nieuwe tracks om aan mijn playlists toe te voegen."
      ],
      philosophyTitle: "Design filosofie",
      philosophyParagraphs: [
        "Ik ontwerp voor duidelijkheid en efficiëntie eerst, bruikbaarheid boven decoratie.",
        "Ik lever oplossingen die development-snelheid balanceren met schaalbaarheid op lange termijn.",
        "Ik geloof in het vroeg opleveren van gefocuste features, snel leren en doelgericht itereren."
      ]
    },
    contact: { email: "E-mail", linkedin: "LinkedIn", instagram: "Instagram", dribbble: "Dribbble" },
    madeWith: "Portfolio · Rowan de Maa · 2026"
  }
};

Object.assign(window, { PROJECTS, CASE_STUDIES, CV, COPY });
