import { ArrowDown, ArrowUpRight, Languages, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { useLanguage } from "@/lib/language";
import { ThemeToggle } from "./ThemeToggle";

const copy = {
  en: {
    nav: ["ABOUT", "EXPERIENCE", "EDUCATION", "CONTACT"],
    greeting: "Hello, I’m",
    role: "Seeking an apprenticeship in business administration (employée de commerce CFC) or retail (gestionnaire du commerce de détail CFC), in Lausanne or Renens.",
    availability: "Available to start immediately.",
    intro: "I’m 17 years old: organized, motivated and active. I enjoy working as part of a team, helping people and learning new things. I speak Spanish, French and English.",
    contact: "Get in touch",
    about: "About me",
    aboutText: "I’m a motivated student looking for an opportunity to learn and grow in commerce or sales. My placements introduced me to customer service, shop-floor work and administrative tasks.",
    languages: "Languages",
    skills: "Skills",
    skillList: ["Organization & responsibility", "Motivation & willingness to learn", "Teamwork", "Customer service", "Multilingual communication", "Administrative support", "Product stocking & organization", "Adaptability", "Punctuality", "Energy & initiative"],
    contributionTitle: "What I can bring",
    contributions: ["A warm, helpful approach to customer service.", "Reliable, organized support for the team.", "Motivation to learn and adapt to new tasks."],
    experience: "Experience",
    jobs: [
      { company: "KM RoBoTa", role: "IT and website development internship", date: "29 September – 9 October 2026", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80", tasks: ["Using GitHub and AI tools to help create my own websites and develop my digital skills.", "Learning to write code and use terminal commands."] },
      { company: "Migros", role: "Food department work placement", date: "13–18 April 2026", image: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?auto=format&fit=crop&w=700&q=80", tasks: ["Restocked products and arranged shelves.", "Helped customers find the products they needed.", "Supported the team in daily tasks."] },
      { company: "Capital Services", role: "Work placement", date: "3–8 November 2025", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=700&q=80", tasks: ["Helped customers purchase bus tickets.", "Assisted with printing documents and other day-to-day tasks.", "Discovered a variety of customer service and administrative duties."] },
      { company: "Fidimmob", role: "Administrative work placement", date: "November 2025", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=80", tasks: ["Sorted and organized invoices.", "Used Excel and helped with administrative tasks."] },
    ],
    education: "Education",
    schools: [
      { school: "École de la Transition (EdT)", place: "Bussigny", date: "September 2025 – June 2026" },
      { school: "Villamont", place: "", date: "August 2020 – June 2025" },
      { school: "Eglantine", place: "", date: "2019 – 2020" },
    ],
    contactTitle: "Motivated to learn, ready to contribute.",
    contactText: "I’m looking for an apprenticeship in one of these fields in Lausanne or Renens and would be happy to hear from you.",
    footer: "All rights reserved.",
  },
  fr: {
    nav: ["À PROPOS", "EXPÉRIENCE", "FORMATION", "CONTACT"],
    greeting: "Bonjour, je m’appelle",
    role: "À la recherche d’un apprentissage d’employée de commerce CFC ou de gestionnaire du commerce de détail CFC, à Lausanne ou à Renens.",
    availability: "Disponible pour commencer immédiatement.",
    intro: "J’ai 17 ans. Organisée, motivée et dynamique, j’aime travailler en équipe, aider les autres et apprendre de nouvelles choses. Je parle espagnol, français et anglais.",
    contact: "Me contacter",
    about: "À propos de moi",
    aboutText: "Je suis une étudiante motivée à la recherche d’une opportunité pour apprendre et évoluer dans le commerce ou la vente. Mes stages m’ont permis de découvrir le service à la clientèle, le travail en magasin et les tâches administratives.",
    languages: "Langues",
    skills: "Compétences",
    skillList: ["Organisation et sens des responsabilités", "Motivation et envie d’apprendre", "Travail en équipe", "Service à la clientèle", "Communication multilingue", "Soutien administratif", "Mise en rayon et rangement", "Adaptabilité", "Ponctualité", "Dynamisme et initiative"],
    contributionTitle: "Ce que je peux apporter",
    contributions: ["Un accueil chaleureux et une aide attentive à la clientèle.", "Un soutien fiable et organisé au sein de l’équipe.", "Une forte motivation à apprendre et à m’adapter à de nouvelles tâches."],
    experience: "Expérience",
    jobs: [
      { company: "KM RoBoTa", role: "Stage en informatique et création de sites web", date: "Du 29 septembre au 9 octobre 2026", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80", tasks: ["Utilisation de GitHub et d’outils d’intelligence artificielle pour m’aider à créer mes propres sites web et à développer mes compétences numériques.", "Apprentissage de l’écriture de code et de l’utilisation de commandes dans le terminal."] },
      { company: "Migros", role: "Stage au rayon alimentaire", date: "13–18 avril 2026", image: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?auto=format&fit=crop&w=700&q=80", tasks: ["Réapprovisionnement et mise en rayon des produits.", "Aide aux clients pour trouver les produits recherchés.", "Soutien à l’équipe dans les tâches quotidiennes."] },
      { company: "Capital Services", role: "Stage de découverte", date: "3–8 novembre 2025", image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=700&q=80", tasks: ["Aide aux clients pour l’achat de billets de bus.", "Aide à l’impression de documents et à différentes tâches quotidiennes.", "Découverte de diverses tâches liées à l’accueil et à l’administration."] },
      { company: "Fidimmob", role: "Stage en administration", date: "Novembre 2025", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=80", tasks: ["Tri et classement de factures.", "Utilisation d’Excel et participation aux tâches administratives."] },
    ],
    education: "Formation",
    schools: [
      { school: "École de la Transition (EdT)", place: "Bussigny", date: "Septembre 2025 – juin 2026" },
      { school: "Villamont", place: "", date: "Août 2020 – juin 2025" },
      { school: "Eglantine", place: "", date: "2019 – 2020" },
    ],
    contactTitle: "Motivée à apprendre, prête à m’investir.",
    contactText: "Je recherche un apprentissage dans l’un de ces domaines à Lausanne ou à Renens et serais ravie d’échanger avec vous.",
    footer: "Tous droits réservés.",
  },
} as const;

export function ArianaPortfolio() {
  const { language, setLanguage } = useLanguage();
  const t = copy[language];
  return (
    <main style={{ background: "var(--page-bg)", color: "var(--page-fg)", overflowX: "clip" }}>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl" style={{ background: "color-mix(in srgb, var(--page-bg) 82%, transparent)", borderColor: "var(--hairline)" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 md:px-10">
          <a href="#top" className="font-black tracking-widest text-sm" aria-label="Daniela — top">DA</a>
          <div className="hidden items-center gap-5 md:flex lg:gap-8">
            {t.nav.map((label, i) => <a key={label} className="text-xs font-semibold tracking-widest transition-opacity hover:opacity-60" href={["#about", "#experience", "#education", "#contact"][i]}>{label}</a>)}
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-xs font-semibold tracking-widest" onClick={() => setLanguage(language === "fr" ? "en" : "fr")} aria-label="Change language"><Languages size={16} /> {language === "fr" ? "EN" : "FR"}</button>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section id="top" className="relative flex min-h-screen flex-col items-center justify-center px-5 pt-24 text-center sm:px-8">
        <div className="absolute inset-0 -z-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 45%, #782838 0%, transparent 56%)" }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80" alt="" className="absolute left-[3%] top-[19%] hidden h-36 w-24 rounded-xl object-cover opacity-55 shadow-xl sm:block md:left-[7%] md:h-44 md:w-32" />
          <img src="https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=600&q=80" alt="" className="absolute bottom-[13%] left-[12%] hidden h-24 w-20 rounded-xl object-cover opacity-50 shadow-xl md:block" />
          <img src="https://images.unsplash.com/photo-1601600576337-c1d8a0d1373c?auto=format&fit=crop&w=600&q=80" alt="" className="absolute right-[4%] top-[17%] hidden h-40 w-28 rounded-xl object-cover opacity-50 shadow-xl sm:block md:right-[8%] md:h-48 md:w-36" />
          <img src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=600&q=80" alt="" className="absolute bottom-[12%] right-[12%] hidden h-24 w-20 rounded-xl object-cover opacity-55 shadow-xl md:block" />
          <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 gap-2 sm:hidden">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80" alt="" className="h-14 w-11 rounded-lg object-cover opacity-60" />
            <img src="https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=400&q=80" alt="" className="h-14 w-11 rounded-lg object-cover opacity-60" />
            <img src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400&q=80" alt="" className="h-14 w-11 rounded-lg object-cover opacity-60" />
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] opacity-60">{t.greeting}</p>
          <h1 className="hero-heading mx-auto max-w-5xl text-balance font-black uppercase leading-[0.95] tracking-tight" style={{ fontSize: "clamp(2.6rem, 9vw, 8.5rem)" }}>Daniela<br className="hidden sm:block" /> Amaya Jaimes</h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed sm:text-xl">{t.role}</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed opacity-65 sm:text-base">{t.intro}</p>
          <p className="mx-auto mt-4 w-fit rounded-full border px-4 py-2 text-xs font-medium tracking-wide opacity-75" style={{ borderColor: "var(--hairline)" }}>{t.availability}</p>
          <a href="#contact" className="mt-9 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition-transform hover:scale-105" style={{ background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)", color: "white" }}>{t.contact}<ArrowUpRight size={16} /></a>
        </div>
        <a href="#about" aria-label="Scroll down" className="absolute bottom-8 animate-bounce opacity-50"><ArrowDown size={20} /></a>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <SectionTitle>{t.about}</SectionTitle>
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed opacity-75">{t.aboutText}</p>
        <div className="mx-auto mt-14 grid max-w-4xl gap-10 md:grid-cols-2">
          <div><h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] opacity-60">{t.languages}</h3><div className="flex flex-wrap gap-3">{(language === "fr" ? ["Espagnol · langue maternelle", "Français · avancé", "Anglais · intermédiaire"] : ["Spanish · native", "French · advanced", "English · intermediate"]).map(item => <Pill key={item}>{item}</Pill>)}</div></div>
          <div><h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] opacity-60">{t.skills}</h3><div className="flex flex-wrap gap-2">{t.skillList.map(item => <Pill key={item}>{item}</Pill>)}</div></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 md:pb-32">
        <SectionTitle>{t.contributionTitle}</SectionTitle>
        <div className="grid gap-4 md:grid-cols-3">
          {t.contributions.map((item, index) => <article key={item} className="rounded-2xl border p-6 sm:p-8" style={{ borderColor: "var(--hairline)", background: "color-mix(in srgb, var(--page-fg) 3%, transparent)" }}><p className="mb-5 text-xs font-semibold tracking-[0.2em] opacity-45">0{index + 1}</p><p className="text-base leading-relaxed opacity-80 sm:text-lg">{item}</p></article>)}
        </div>
      </section>

      <section id="experience" className="mx-3 rounded-[36px] px-5 py-20 sm:mx-6 sm:rounded-[56px] sm:px-8 md:py-28" style={{ background: "var(--page-bg-invert)", color: "var(--page-fg-invert)" }}>
        <div className="mx-auto max-w-5xl"><SectionTitle>{t.experience}</SectionTitle><div>{t.jobs.map(job => <article key={job.company} className="grid gap-4 border-t py-8 sm:py-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[180px_minmax(0,1fr)_220px] lg:gap-10" style={{ borderColor: "color-mix(in srgb, var(--page-fg-invert) 18%, transparent)" }}><p className="text-sm font-semibold opacity-70">{job.date}</p><div><h3 className="text-xl font-semibold sm:text-2xl">{job.role}<span className="ml-2 font-normal opacity-60">· {job.company}</span></h3><ul className="mt-4 space-y-2">{job.tasks.map(task => <li key={task} className="flex gap-3 text-sm leading-relaxed opacity-75 sm:text-base"><span>•</span>{task}</li>)}</ul></div><img src={job.image} alt="" loading="lazy" className="h-36 w-full rounded-xl object-cover opacity-85 md:col-start-2 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:h-40" /></article>)}</div></div>
      </section>

      <section id="education" className="mx-auto max-w-5xl px-5 py-24 sm:px-8 md:py-32">
        <SectionTitle>{t.education}</SectionTitle><div>{t.schools.map(item => <article key={item.school} className="flex flex-col gap-2 border-t py-7 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "var(--hairline)" }}><div className="text-xl font-semibold">{item.school}{item.place && <span className="ml-2 font-normal opacity-60">· {item.place}</span>}</div><div className="text-sm opacity-65">{item.date}</div></article>)}</div>
      </section>

      <section id="contact" className="px-5 py-24 text-center sm:px-8 md:py-36" style={{ background: "var(--page-bg-invert)", color: "var(--page-fg-invert)" }}>
        <div className="mx-auto max-w-4xl"><SectionTitle>{t.contactTitle}</SectionTitle><p className="mx-auto max-w-2xl text-lg leading-relaxed opacity-65">{t.contactText}</p><a href="mailto:danielajaimes161996@gmail.com" className="mt-8 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm transition-opacity hover:opacity-70" style={{ borderColor: "color-mix(in srgb, var(--page-fg-invert) 25%, transparent)" }}><Mail size={16} />danielajaimes161996@gmail.com<ArrowUpRight size={15} /></a><footer className="mt-20 border-t pt-6 text-xs opacity-45" style={{ borderColor: "color-mix(in srgb, var(--page-fg-invert) 18%, transparent)" }}>© {new Date().getFullYear()} Daniela Amaya Jaimes · {t.footer}</footer></div>
      </section>
    </main>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight sm:mb-16" style={{ fontSize: "clamp(2.8rem, 9vw, 7.5rem)" }}>{children}</h2>;
}

function Pill({ children }: { children: ReactNode }) {
  return <span className="rounded-full border px-3.5 py-2 text-xs sm:text-sm" style={{ borderColor: "var(--hairline)", background: "color-mix(in srgb, var(--page-fg) 4%, transparent)" }}>{children}</span>;
}
