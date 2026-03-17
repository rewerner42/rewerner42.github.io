import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Briefcase,
  Mic2,
  ChevronRight,
  Menu,
  ArrowRight,
  ScanSearch,
  Landmark,
  Mail,
  Phone,
  MapPin,
  Cpu,
} from 'lucide-react';

export default function WernerFrancisReinekeOnePager() {
  const translations = {
    de: {
      brandSub: 'Von Reineke Technik inspiriert',
      navAbout: 'Über mich',
      navServices: 'Leistungen',
      navReferences: 'Schwerpunkte',
      navInsights: 'Wissen',
      navContact: 'Kontakt',
      langDesktop: 'DE / EN',
      mobileMenu: 'Menü',
      heroBadge: 'Cybersecurity · KI-gestützte Automatisierung · Gründergeführt',
      heroTitle1: 'Cybersicherheit mit',
      heroTitle2: 'klarer Kante.',
      heroTitle3: 'Praktisch. Strategisch. Umsetzungsstark.',
      heroText:
        'Werner Francis Reineke ist Geschäftsführer der Reineke Technik GmbH und positioniert sich als technischer Sparringspartner für Unternehmen, die IT-Sicherheit, Prozesse und Resilienz professionalisieren wollen. Die Seite ist zweisprachig, mobil optimiert und orientiert sich sichtbar am Reineke-Technik-Look.',
      heroPrimary: 'Kontakt aufnehmen',
      heroSecondary: 'Leistungen ansehen',
      stat1Title: 'Inhaber',
      stat1Text: 'geführt',
      stat2Title: 'Cyber',
      stat2Text: 'Strategie & Technik',
      stat3Title: 'KMU',
      stat3Text: 'praxisnah begleitet',
      portraitPlaceholder: 'Porträt von Werner Francis Reineke',
      portraitSub: 'Hier sollte ein professionelles Foto im Reineke-Technik-Stil platziert werden',
      aboutEyebrow: 'Über mich',
      aboutTitle: 'Technischer Sparringspartner für Cybersicherheit und Umsetzung',
      aboutText:
        'Auf Basis der öffentlichen Informationen von Reineke Technik lässt sich Werner Francis Reineke klar als Geschäftsführer mit technischem Profil positionieren. Auf der Teamseite wird er als Unternehmer beschrieben, der Informatik mit Schwerpunkt Cybersecurity in Chicago sowie Maschinenbau in Zürich studiert hat und Unternehmen bei IT-Sicherheit und Prozessprofessionalisierung begleitet.',
      servicesEyebrow: 'Leistungen',
      servicesTitle: 'Öffentlich sichtbare Schwerpunkte von Reineke Technik',
      servicesText:
        'Die Seite von Reineke Technik zeigt heute eine starke Ausrichtung auf Cybersicherheit, IT-Sicherheitsanalyse, IT-Sicherheitslösungen sowie KI-gestützte Automatisierung. Daraus lässt sich für die persönliche Seite eine klare Leistungsstruktur ableiten.',
      referencesTitle: 'Fokusfelder & Themen',
      referencesText:
        'Statt leerer Platzhalter zeigt dieser Bereich bereits die Themen, die auf der Reineke-Technik-Website öffentlich sichtbar sind und sich ideal als Schwerpunkte für die persönliche Markenpräsenz eignen.',
      insightsEyebrow: 'Wissen & Auftritte',
      insightsTitle: 'Artikel, Vorträge und öffentliche Impulse',
      insightsText:
        'Auch der Wissensbereich kann bereits mit öffentlich sichtbaren Themen gefüllt werden. Dadurch wirkt die Seite deutlich echter, ohne dass dafür interne Inhalte nötig sind.',
      readMore: 'Mehr erfahren',
      ctaEyebrow: 'Sie haben ein Projekt?',
      ctaTitle: 'Lassen Sie uns sprechen.',
      ctaText:
        'Die Kontaktinformationen können auf Basis der öffentlichen Unternehmensangaben bereits vorausgefüllt werden. Für die finale persönliche Website fehlen dann vor allem noch Bildmaterial, eine bevorzugte persönliche E-Mail oder ein Terminlink sowie echte Referenzen.',
      contactBoxTitle: 'Kontakt',
      contactAddressLine1: 'Reineke Technik GmbH',
      contactAddressLine2: 'Geseker Straße 26',
      contactAddressLine3: '33154 Salzkotten',
      contactEmail: '[email protected]',
      contactPhone: '+49 (0) 5258 987-282',
      roles: [
        {
          title: 'Cybersecurity Consultant',
          text: 'Unterstützung bei Sicherheitslücken, Priorisierung von Risiken und Aufbau von belastbarer Cybersicherheit.',
        },
        {
          title: 'Speaker & Advisor',
          text: 'Technische Themen werden verständlich für Führungskräfte, Entscheider und mittelständische Unternehmen übersetzt.',
        },
        {
          title: 'Builder & Operator',
          text: 'Hands-on bei Analysen, Pentests, Sicherheitskonzepten, Notfallplänen und Umsetzungsprojekten.',
        },
      ],
      focusTopics: [
        {
          title: 'IT-Sicherheitsanalyse & Cybersecurity-Report',
          text: 'Von Quick Check bis umfangreichem Cybersecurity-Report mit priorisierten Handlungsempfehlungen.',
        },
        {
          title: 'NIS-2, ISO 27001, ISMS & Externer CISO / ISB',
          text: 'Management und Governance für Unternehmen, die Sicherheit strukturiert und nachvollziehbar aufbauen wollen.',
        },
        {
          title: 'Firewall, Netzwerksicherheit, E-Mail Security, Backup & Endpoint-Schutz',
          text: 'Praxisnahe Sicherheitslösungen zur Absicherung von Infrastruktur, Kommunikation und Endgeräten.',
        },
      ],
      companyLogos: [
        'Cybersicherheit',
        'Prävention',
        'Netzwerksicherheit',
        'Automatisierung',
        'Künstliche Intelligenz',
        'TISAX',
        'Forensik',
        'Pentest',
      ],
      articles: [
        {
          title: 'Warum eine Backup-Strategie heute unverzichtbar ist',
          category: 'Wissen',
        },
        {
          title: 'NIS-2-Richtlinie: Was Unternehmen jetzt tun müssen & wie ein ISMS nach ISO 27001 hilft',
          category: 'Wissen',
        },
        {
          title: 'Cybersecurity im Mittelstand: Rückblick auf den Security-Abend bei GARANTIUM',
          category: 'Vortrag',
        },
      ],
      footerHint:
        'Für die finale Version fehlen jetzt vor allem: professionelles Porträt, bevorzugte Kontaktperson / Direktkontakt, echte Referenzen oder Logos, LinkedIn-URL, gewünschte Call-to-Action und optional ein Terminbuchungslink.',
    },
    en: {
      brandSub: 'Inspired by Reineke Technik',
      navAbout: 'About',
      navServices: 'Services',
      navReferences: 'Focus',
      navInsights: 'Knowledge',
      navContact: 'Contact',
      langDesktop: 'EN / DE',
      mobileMenu: 'Menu',
      heroBadge: 'Cybersecurity · AI-driven automation · Founder-led',
      heroTitle1: 'Cybersecurity with a',
      heroTitle2: 'clear edge.',
      heroTitle3: 'Practical. Strategic. Execution-focused.',
      heroText:
        'Werner Francis Reineke is Managing Director of Reineke Technik GmbH and can be positioned as a technical sparring partner for companies that want to professionalize IT security, processes, and resilience. The site is bilingual, mobile-optimized, and visually aligned with the Reineke Technik identity.',
      heroPrimary: 'Get in touch',
      heroSecondary: 'View services',
      stat1Title: 'Owner',
      stat1Text: 'led',
      stat2Title: 'Cyber',
      stat2Text: 'strategy & tech',
      stat3Title: 'SME',
      stat3Text: 'practical support',
      portraitPlaceholder: 'Portrait of Werner Francis Reineke',
      portraitSub: 'A professional portrait in the Reineke Technik visual style should be placed here',
      aboutEyebrow: 'About',
      aboutTitle: 'Technical sparring partner for cybersecurity and implementation',
      aboutText:
        'Based on the public Reineke Technik information, Werner Francis Reineke can clearly be positioned as a managing director with a technical profile. The team page describes him as an entrepreneur who studied computer science with a focus on cybersecurity in Chicago and mechanical engineering in Zurich, and who supports companies in professionalizing security and processes.',
      servicesEyebrow: 'Services',
      servicesTitle: 'Publicly visible focus areas of Reineke Technik',
      servicesText:
        'The Reineke Technik website currently presents a strong focus on cybersecurity, security assessments, security solutions, and AI-supported automation. That makes it possible to build a convincing structure for the personal site already.',
      referencesTitle: 'Focus fields & topics',
      referencesText:
        'Instead of empty placeholders, this section already shows the topics publicly visible on the Reineke Technik site and ideal for Werner’s personal positioning.',
      insightsEyebrow: 'Knowledge & appearances',
      insightsTitle: 'Articles, talks, and public impulses',
      insightsText:
        'The knowledge section can already be filled with visible public topics. That gives the site a much more real feel without needing internal material yet.',
      readMore: 'Learn more',
      ctaEyebrow: 'Do you have a project?',
      ctaTitle: 'Let’s talk.',
      ctaText:
        'The contact section can already be prefilled using public company details. For the final personal website, the main missing pieces are portrait photography, a preferred direct contact method or booking link, and real references.',
      contactBoxTitle: 'Contact',
      contactAddressLine1: 'Reineke Technik GmbH',
      contactAddressLine2: 'Geseker Straße 26',
      contactAddressLine3: '33154 Salzkotten',
      contactEmail: '[email protected]',
      contactPhone: '+49 (0) 5258 987-282',
      roles: [
        {
          title: 'Cybersecurity Consultant',
          text: 'Support with security gaps, risk prioritization, and building resilient cybersecurity structures.',
        },
        {
          title: 'Speaker & Advisor',
          text: 'Complex technical topics translated into practical guidance for leaders, decision-makers, and SMEs.',
        },
        {
          title: 'Builder & Operator',
          text: 'Hands-on with assessments, pentests, security concepts, emergency plans, and implementation projects.',
        },
      ],
      focusTopics: [
        {
          title: 'Security Assessments & Cybersecurity Report',
          text: 'From quick checks to comprehensive cybersecurity reports with prioritized recommendations.',
        },
        {
          title: 'NIS-2, ISO 27001, ISMS & External CISO / ISO',
          text: 'Management and governance for companies that want a structured and understandable security approach.',
        },
        {
          title: 'Firewall, Network Security, Email Security, Backup & Endpoint Protection',
          text: 'Practical security solutions to protect infrastructure, communication, and endpoints.',
        },
      ],
      companyLogos: [
        'Cybersecurity',
        'Prevention',
        'Network Security',
        'Automation',
        'Artificial Intelligence',
        'TISAX',
        'Forensics',
        'Pentest',
      ],
      articles: [
        {
          title: 'Why a backup strategy is indispensable today',
          category: 'Knowledge',
        },
        {
          title: 'NIS-2 Directive: What companies need to do now & how ISO 27001 ISMS helps',
          category: 'Knowledge',
        },
        {
          title: 'Cybersecurity for SMEs: recap of the security evening at GARANTIUM',
          category: 'Talk',
        },
      ],
      footerHint:
        'For the final version, the main missing pieces are: professional portrait, preferred direct contact, real references or logos, LinkedIn URL, preferred call to action, and optionally a booking link.',
    },
  };

  const roleIcons = [Shield, Mic2, Briefcase];
  const focusIcons = [ScanSearch, Landmark, Cpu];

  const detectLanguage = () => {
    if (typeof window === 'undefined') return 'de';
    const saved = window.localStorage.getItem('site-language');
    if (saved === 'de' || saved === 'en') return saved;
    const browserLang = (navigator.language || '').toLowerCase();
    return browserLang.startsWith('de') ? 'de' : 'en';
  };

  const [language, setLanguage] = useState('de');

  useEffect(() => {
    setLanguage(detectLanguage());
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('site-language', language);
      document.documentElement.lang = language;
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'de' ? 'en' : 'de'));
  };

  const t = useMemo(() => translations[language], [language]);

  const fadeUp = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.45 },
  };

  return (
    <div className="min-h-screen bg-white text-neutral-950 selection:bg-[#D80820] selection:text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[36rem] bg-[radial-gradient(circle_at_top_right,rgba(216,8,32,0.16),transparent_32%),radial-gradient(circle_at_top_left,rgba(216,8,32,0.07),transparent_26%)]" />

      <header className="sticky top-0 z-50 border-b border-[#D80820]/10 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="min-w-0">
            <div className="truncate text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D80820] sm:text-xs">
              Werner Francis Reineke
            </div>
            <div className="hidden text-[11px] text-neutral-500 sm:block">{t.brandSub}</div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
            <a href="#about" className="transition hover:text-[#D80820]">{t.navAbout}</a>
            <a href="#services" className="transition hover:text-[#D80820]">{t.navServices}</a>
            <a href="#portfolio" className="transition hover:text-[#D80820]">{t.navReferences}</a>
            <a href="#articles" className="transition hover:text-[#D80820]">{t.navInsights}</a>
            <button
              onClick={toggleLanguage}
              className="rounded-full border border-[#D80820]/15 px-3 py-2 text-xs font-semibold text-[#D80820] transition hover:bg-[#D80820]/5"
            >
              {t.langDesktop}
            </button>
            <a href="#contact" className="rounded-full bg-[#D80820] px-4 py-2 text-white shadow-lg shadow-[#D80820]/20 transition hover:translate-y-[-1px] hover:opacity-95">{t.navContact}</a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="rounded-full border border-[#D80820]/15 bg-white px-3 py-2 text-[11px] font-semibold text-[#D80820]"
            >
              {language.toUpperCase()}
            </button>
            <a href="#contact" className="rounded-full bg-[#D80820] px-3 py-2 text-xs font-medium text-white shadow-lg shadow-[#D80820]/20">
              {t.navContact}
            </a>
            <div className="rounded-full border border-[#D80820]/15 bg-white p-2 text-[#D80820]" aria-label={t.mobileMenu}>
              <Menu className="h-4 w-4" />
            </div>
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pt-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <motion.div {...fadeUp}>
              <div className="mb-4 inline-flex items-center rounded-full border border-[#D80820]/15 bg-[#D80820]/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D80820] sm:text-xs">
                {t.heroBadge}
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                {t.heroTitle1}
                <span className="mt-2 block text-[#D80820]">{t.heroTitle2}</span>
                <span className="mt-2 block text-neutral-950">{t.heroTitle3}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-neutral-600 sm:mt-6 sm:text-lg sm:leading-8">
                {t.heroText}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D80820] px-5 py-3 text-sm font-medium text-white shadow-xl shadow-[#D80820]/20 transition hover:translate-y-[-1px] hover:opacity-95">
                  {t.heroPrimary} <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#services" className="inline-flex items-center justify-center rounded-full border border-[#D80820]/20 bg-white px-5 py-3 text-sm font-medium text-[#D80820] transition hover:bg-[#D80820]/5">
                  {t.heroSecondary}
                </a>
              </div>

              <div className="mt-7 grid max-w-xl grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#D80820]/12 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold text-[#D80820]">{t.stat1Title}</div>
                  <div className="mt-1 text-sm text-neutral-500">{t.stat1Text}</div>
                </div>
                <div className="rounded-2xl border border-[#D80820]/12 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold text-[#D80820]">{t.stat2Title}</div>
                  <div className="mt-1 text-sm text-neutral-500">{t.stat2Text}</div>
                </div>
                <div className="col-span-2 rounded-2xl border border-[#D80820]/12 bg-white p-4 shadow-sm sm:col-span-1">
                  <div className="text-2xl font-semibold text-[#D80820]">{t.stat3Title}</div>
                  <div className="mt-1 text-sm text-neutral-500">{t.stat3Text}</div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-[2rem] border border-[#D80820]/12 bg-white shadow-[0_20px_80px_-30px_rgba(216,8,32,0.35)]">
                <div className="aspect-[4/5] w-full bg-[linear-gradient(180deg,#fff5f6_0%,#ffffff_38%,#f8f8f8_100%)] p-4 sm:p-6 lg:p-8">
                  <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[1.5rem] border border-[#D80820]/15 bg-white text-center text-sm leading-6 text-neutral-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,8,32,0.14),transparent_28%)]" />
                    <div className="relative z-10 px-6">
                      <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-[#D80820]/10" />
                      <div className="font-medium text-neutral-700">{t.portraitPlaceholder}</div>
                      <div className="mt-2 text-sm">{t.portraitSub}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div {...fadeUp} className="max-w-3xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D80820] sm:text-xs">{t.aboutEyebrow}</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{t.aboutTitle}</h2>
              <p className="mt-4 text-[15px] leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                {t.aboutText}
              </p>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
              {t.roles.map((role, index) => {
                const Icon = roleIcons[index];
                return (
                  <motion.div
                    key={role.title}
                    {...fadeUp}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="group rounded-[1.5rem] border border-[#D80820]/12 bg-white p-5 shadow-sm transition hover:border-[#D80820]/25 hover:shadow-[0_18px_40px_-24px_rgba(216,8,32,0.45)] sm:rounded-[1.75rem] sm:p-6"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D80820]/8 text-[#D80820] transition group-hover:bg-[#D80820] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold sm:text-xl">{role.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">{role.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#D80820]/10 bg-[linear-gradient(180deg,#fff8f8_0%,#ffffff_100%)] p-6 sm:p-8 lg:p-10">
            <motion.div {...fadeUp} className="max-w-3xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D80820] sm:text-xs">{t.servicesEyebrow}</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{t.servicesTitle}</h2>
              <p className="mt-4 text-[15px] leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                {t.servicesText}
              </p>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3 sm:gap-6">
              {t.focusTopics.map((topic, index) => {
                const Icon = focusIcons[index];
                return (
                  <motion.div
                    key={topic.title}
                    {...fadeUp}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="rounded-[1.5rem] border border-[#D80820]/10 bg-white p-5 shadow-sm sm:rounded-[1.75rem] sm:p-6"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D80820]/10 text-[#D80820]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold leading-snug sm:text-xl">{topic.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">{topic.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="portfolio" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div {...fadeUp} className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t.referencesTitle}</h2>
              <p className="mt-4 text-[15px] leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                {t.referencesText}
              </p>
            </motion.div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {t.companyLogos.map((item, index) => (
                <motion.div
                  key={`${item}-${index}`}
                  {...fadeUp}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  className="group flex min-h-[96px] items-center justify-center rounded-[1.25rem] border border-[#D80820]/12 bg-white p-4 text-center text-sm text-neutral-600 shadow-sm transition hover:-translate-y-0.5 hover:border-[#D80820]/25 hover:text-[#D80820] hover:shadow-[0_18px_40px_-30px_rgba(216,8,32,0.45)] sm:min-h-[120px] sm:rounded-[1.5rem]"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="articles" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div {...fadeUp} className="max-w-3xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D80820] sm:text-xs">{t.insightsEyebrow}</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{t.insightsTitle}</h2>
              <p className="mt-4 text-[15px] leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                {t.insightsText}
              </p>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3 sm:gap-6">
              {t.articles.map((article, index) => (
                <motion.article
                  key={article.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-[1.5rem] border border-[#D80820]/12 bg-white p-5 shadow-sm sm:rounded-[1.75rem] sm:p-6"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D80820] sm:text-xs">{article.category}</div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug sm:text-xl">{article.title}</h3>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#D80820]">
                    {t.readMore} <ChevronRight className="h-4 w-4" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 pb-20 pt-4 sm:px-6 sm:pb-24 lg:px-8">
          <motion.div
            {...fadeUp}
            className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-[#D80820]/15 bg-[#D80820] px-5 py-8 text-white shadow-[0_30px_80px_-35px_rgba(216,8,32,0.55)] sm:rounded-[2rem] sm:px-8 sm:py-12"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 sm:text-xs">{t.ctaEyebrow}</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.ctaTitle}</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/80 sm:text-lg sm:leading-8">
                  {t.ctaText}
                </p>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75">
                  {t.footerHint}
                </p>
              </div>
              <div className="rounded-[1.25rem] border border-white/15 bg-white/10 p-5 text-sm leading-7 text-white/90 backdrop-blur sm:rounded-[1.5rem]">
                <div className="mb-3 font-semibold">{t.contactBoxTitle}</div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0" />
                  <div>
                    {t.contactAddressLine1}<br />
                    {t.contactAddressLine2}<br />
                    {t.contactAddressLine3}
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>{t.contactPhone}</span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>{t.contactEmail}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
