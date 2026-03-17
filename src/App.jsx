import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  Building2,
  ChevronRight,
  Cpu,
  Globe,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Mic2,
  Phone,
  ScanSearch,
  Shield,
} from 'lucide-react';
import logo from '../Logo.png';

const portraitFileName = '/werner-francis-reineke-portrait.jpg';
const canonicalUrl = 'https://wernerfrancisreineke.com/';

export default function WernerFrancisReinekeOnePager() {
  const translations = {
    de: {
      siteTitle: 'Werner Francis Reineke | Cybersecurity, KI-Automatisierung & Reineke Technik',
      siteDescription:
        'Offizielle Website von Werner Reineke und Werner Francis Reineke. Cybersecurity, IT-Sicherheitsstrategie, KI-Automatisierung und Unternehmenspraxis aus dem Umfeld der Reineke Technik GmbH.',
      brandSub: 'Persönliche Website von Werner Reineke',
      navAbout: 'Profil',
      navServices: 'Kompetenzen',
      navReferences: 'Schwerpunkte',
      navInsights: 'Impulse',
      navContact: 'Kontakt',
      langDesktop: 'DE / EN',
      mobileMenu: 'Menü',
      heroBadge: 'Werner Reineke · Cybersecurity · KI-Automatisierung · Mittelstand',
      heroTitle1: 'Werner Francis Reineke',
      heroTitle2: 'steht für moderne',
      heroTitle3: 'IT-Sicherheit mit unternehmerischem Blick.',
      heroText:
        'Werner Reineke begleitet Unternehmen an der Schnittstelle von Cybersecurity, Automatisierung und operativer Umsetzung. Auf dieser Website finden Interessenten einen kompakten Überblick über das Profil von Werner Francis Reineke, seine fachlichen Schwerpunkte und die Verbindung zur Reineke Technik GmbH.',
      heroPrimary: 'Kontakt aufnehmen',
      heroSecondary: 'Kompetenzen ansehen',
      stat1Title: 'Cybersecurity',
      stat1Text: 'strategisch und operativ',
      stat2Title: 'KI & Prozesse',
      stat2Text: 'praxisnah automatisieren',
      stat3Title: 'Reineke Technik',
      stat3Text: 'stark vernetzt',
      portraitAlt: 'Portrait von Werner Francis Reineke',
      portraitKicker: 'Persönliches Profil',
      portraitCaption:
        'Werner Francis Reineke verbindet technische Tiefe mit unternehmerischer Verantwortung und klarer Umsetzung im Mittelstand.',
      portraitFallback:
        'Für die finale Live-Version kann das zugesandte Portrait einfach als /werner-francis-reineke-portrait.jpg im Projekt abgelegt werden.',
      aboutEyebrow: 'Profil',
      aboutTitle: 'Werner Reineke als Ansprechpartner für IT-Sicherheit, Resilienz und digitale Weiterentwicklung',
      aboutText:
        'Die persönliche Website von Werner Francis Reineke positioniert ihn als unternehmerisch denkenden Ansprechpartner für Unternehmen, die ihre IT-Sicherheit professionalisieren, Risiken beherrschbar machen und moderne Technologien sinnvoll in bestehende Abläufe integrieren möchten. Im Fokus stehen belastbare Sicherheitsstrukturen, technische Klarheit und Lösungen, die nicht nur konzipiert, sondern auch umgesetzt werden.',
      servicesEyebrow: 'Kompetenzen',
      servicesTitle: 'Leistungsfelder mit klarem Nutzen für Unternehmen',
      servicesText:
        'Die inhaltlichen Schwerpunkte von Werner Francis Reineke reichen von Sicherheitsanalysen und Governance über Schutzmaßnahmen in der Infrastruktur bis hin zu KI-gestützter Automatisierung. Das Ziel ist immer derselbe: Unternehmen sicherer, effizienter und widerstandsfähiger machen.',
      referencesTitle: 'Fokusthemen von Werner Francis Reineke',
      referencesText:
        'Diese Themen bilden den inhaltlichen Kern der Website und sorgen zugleich für eine klare SEO-Ausrichtung auf Werner Reineke, Werner Francis Reineke, Cybersecurity und Reineke Technik.',
      insightsEyebrow: 'Impulse',
      insightsTitle: 'Themen, die Werner Reineke öffentlich prägen',
      insightsText:
        'Die Seite stellt die fachlichen Perspektiven in den Vordergrund, mit denen Werner Francis Reineke bei Sicherheitsfragen, Technologieentscheidungen und unternehmerischen Transformationsprojekten wahrgenommen werden soll.',
      readMore: 'Mehr dazu',
      ctaEyebrow: 'Direkter Draht',
      ctaTitle: 'Kontakt zu Werner Francis Reineke und Reineke Technik',
      ctaText:
        'Wer ein Gespräch zu Cybersecurity, IT-Sicherheitsstrategie, NIS-2, ISO 27001, Automatisierung oder zur Zusammenarbeit mit Reineke Technik sucht, findet hier den passenden Einstieg.',
      contactBoxTitle: 'Kontakt',
      contactAddressLine1: 'Reineke Technik GmbH',
      contactAddressLine2: 'Geseker Straße 26',
      contactAddressLine3: '33154 Salzkotten',
      contactEmail: 'info@reineke-technik.de',
      contactPhone: '+49 (0) 5258 987-282',
      websiteLabel: 'Website von Reineke Technik',
      websiteUrl: 'https://www.reineke-technik.de/',
      teamLabel: 'Unternehmensprofil von Reineke Technik',
      teamUrl: 'https://www.reineke-technik.de/unternehmen/',
      imprintLabel: 'Impressum von Reineke Technik',
      imprintUrl: 'https://www.reineke-technik.de/impressum/',
      roles: [
        {
          title: 'Cybersecurity & Risiko',
          text: 'Bewertung von Sicherheitslagen, Priorisierung von Risiken und Entwicklung realistischer Schutzstrategien fur Unternehmen und Organisationen.',
        },
        {
          title: 'Sparringspartner fur Entscheider',
          text: 'Komplexe technische Themen werden so ubersetzt, dass Geschaftsfuhrung, IT und operative Verantwortliche gemeinsam handlungsfahig bleiben.',
        },
        {
          title: 'Umsetzung mit Substanz',
          text: 'Von der Analyse uber Governance bis zur technischen Einfuhrung steht die praktische Wirksamkeit klar vor bloSen Folien oder Schlagworten.',
        },
      ],
      focusTopics: [
        {
          title: 'IT-Sicherheitsanalysen, Cybersecurity-Reports und Priorisierung',
          text: 'Klare Bestandsaufnahmen und belastbare Entscheidungsgrundlagen fur Unternehmen, die ihre Sicherheitslage transparent bewerten wollen.',
        },
        {
          title: 'NIS-2, ISO 27001, ISMS und Sicherheitsorganisation',
          text: 'Strukturen, Verantwortlichkeiten und Managementsysteme fur nachhaltige IT-Sicherheit und Compliance in wachstumsorientierten Unternehmen.',
        },
        {
          title: 'Netzwerkschutz, E-Mail-Sicherheit, Backup, Endpoint und Automatisierung',
          text: 'Technische MaSnahmen, die Sicherheitsniveau und betriebliche Effizienz gemeinsam verbessern.',
        },
      ],
      companyLogos: [
        'Werner Reineke',
        'Werner Francis Reineke',
        'Cybersecurity',
        'KI-Automatisierung',
        'NIS-2',
        'ISO 27001',
        'Reineke Technik',
        'IT-Sicherheitsstrategie',
      ],
      articles: [
        {
          title: 'Wie Unternehmen IT-Sicherheit strategisch und trotzdem pragmatisch aufbauen',
          category: 'Cybersecurity',
        },
        {
          title: 'Warum KI-Automatisierung erst mit klaren Prozessen echten Nutzen schafft',
          category: 'Automatisierung',
        },
        {
          title: 'Welche Rolle unternehmerische Verantwortung in modernen Sicherheitsprojekten spielt',
          category: 'Management',
        },
      ],
      footerHint:
        'Diese Website ist als personliche, suchmaschinenoptimierte Prasenz fur Werner Reineke und Werner Francis Reineke aufgebaut und verweist gezielt auf das Umfeld von Reineke Technik.',
    },
    en: {
      siteTitle: 'Werner Francis Reineke | Cybersecurity, AI Automation & Reineke Technik',
      siteDescription:
        'Official website of Werner Reineke and Werner Francis Reineke. Cybersecurity, IT security strategy, AI automation, and business-focused technology leadership connected to Reineke Technik GmbH.',
      brandSub: 'Personal website of Werner Reineke',
      navAbout: 'Profile',
      navServices: 'Expertise',
      navReferences: 'Focus',
      navInsights: 'Insights',
      navContact: 'Contact',
      langDesktop: 'EN / DE',
      mobileMenu: 'Menu',
      heroBadge: 'Werner Reineke · Cybersecurity · AI automation · SME focus',
      heroTitle1: 'Werner Francis Reineke',
      heroTitle2: 'stands for modern',
      heroTitle3: 'IT security with business clarity.',
      heroText:
        'Werner Reineke supports companies at the intersection of cybersecurity, automation, and practical execution. This website gives visitors a focused overview of Werner Francis Reineke, his core competencies, and the connection to Reineke Technik GmbH.',
      heroPrimary: 'Get in touch',
      heroSecondary: 'View expertise',
      stat1Title: 'Cybersecurity',
      stat1Text: 'strategic and operational',
      stat2Title: 'AI & Processes',
      stat2Text: 'automation with practical value',
      stat3Title: 'Reineke Technik',
      stat3Text: 'closely connected',
      portraitAlt: 'Portrait of Werner Francis Reineke',
      portraitKicker: 'Personal profile',
      portraitCaption:
        'Werner Francis Reineke combines technical depth, entrepreneurial responsibility, and practical execution for modern businesses.',
      portraitFallback:
        'For the final live version, the provided portrait can simply be stored in the project as /werner-francis-reineke-portrait.jpg.',
      aboutEyebrow: 'Profile',
      aboutTitle: 'Werner Reineke as a contact for IT security, resilience, and digital progress',
      aboutText:
        'This personal website positions Werner Francis Reineke as a business-minded contact for companies that want to professionalize IT security, reduce risk, and integrate modern technologies into real operations. The emphasis is on reliable security structures, technical clarity, and solutions that move beyond concepts into execution.',
      servicesEyebrow: 'Expertise',
      servicesTitle: 'Capability areas with clear business value',
      servicesText:
        'Werner Francis Reineke focuses on security assessments, governance, protective infrastructure measures, and AI-driven automation. The underlying goal remains the same: helping companies become more secure, efficient, and resilient.',
      referencesTitle: 'Core focus topics of Werner Francis Reineke',
      referencesText:
        'These topics shape the content architecture of the website while strengthening SEO visibility for Werner Reineke, Werner Francis Reineke, cybersecurity, and Reineke Technik.',
      insightsEyebrow: 'Insights',
      insightsTitle: 'Topics that define Werner Reineke in public-facing communication',
      insightsText:
        'The site highlights the perspectives through which Werner Francis Reineke should be perceived in security discussions, technology decisions, and business transformation initiatives.',
      readMore: 'Learn more',
      ctaEyebrow: 'Direct contact',
      ctaTitle: 'Contact Werner Francis Reineke and Reineke Technik',
      ctaText:
        'If you are looking for an exchange on cybersecurity, IT security strategy, NIS-2, ISO 27001, automation, or collaboration with Reineke Technik, this is the right starting point.',
      contactBoxTitle: 'Contact',
      contactAddressLine1: 'Reineke Technik GmbH',
      contactAddressLine2: 'Geseker Straße 26',
      contactAddressLine3: '33154 Salzkotten',
      contactEmail: 'info@reineke-technik.de',
      contactPhone: '+49 (0) 5258 987-282',
      websiteLabel: 'Reineke Technik website',
      websiteUrl: 'https://www.reineke-technik.de/',
      teamLabel: 'Reineke Technik company profile',
      teamUrl: 'https://www.reineke-technik.de/unternehmen/',
      imprintLabel: 'Reineke Technik imprint',
      imprintUrl: 'https://www.reineke-technik.de/impressum/',
      roles: [
        {
          title: 'Cybersecurity & Risk',
          text: 'Assessment of security posture, prioritization of risks, and realistic protection strategies for companies and organizations.',
        },
        {
          title: 'Sparring Partner for Leaders',
          text: 'Complex technical issues are translated into actionable guidance for management, IT, and operational stakeholders.',
        },
        {
          title: 'Execution with Substance',
          text: 'From assessment and governance to technical rollout, the focus stays on real effectiveness rather than buzzwords.',
        },
      ],
      focusTopics: [
        {
          title: 'Security assessments, cybersecurity reports, and prioritization',
          text: 'Clear situational analysis and reliable decision support for companies that want transparency in their security posture.',
        },
        {
          title: 'NIS-2, ISO 27001, ISMS, and security organization',
          text: 'Structures, responsibilities, and management systems for sustainable IT security and compliance.',
        },
        {
          title: 'Network protection, email security, backup, endpoint, and automation',
          text: 'Technical measures that improve both security and day-to-day operational performance.',
        },
      ],
      companyLogos: [
        'Werner Reineke',
        'Werner Francis Reineke',
        'Cybersecurity',
        'AI Automation',
        'NIS-2',
        'ISO 27001',
        'Reineke Technik',
        'IT Security Strategy',
      ],
      articles: [
        {
          title: 'How companies can build IT security strategically without losing pragmatism',
          category: 'Cybersecurity',
        },
        {
          title: 'Why AI automation only creates value when processes are clearly defined',
          category: 'Automation',
        },
        {
          title: 'Why entrepreneurial responsibility matters in modern security programs',
          category: 'Management',
        },
      ],
      footerHint:
        'This website is built as a personal, search-optimized presence for Werner Reineke and Werner Francis Reineke with deliberate references to the Reineke Technik ecosystem.',
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
  const [portraitSrc, setPortraitSrc] = useState(portraitFileName);

  useEffect(() => {
    setLanguage(detectLanguage());
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('site-language', language);
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = useMemo(() => translations[language], [language]);

  useEffect(() => {
    document.title = t.siteTitle;

    const ensureMeta = (key, value, attr = 'name') => {
      let element = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    ensureMeta('description', t.siteDescription);
    ensureMeta('keywords', 'Werner Reineke, Werner Francis Reineke, Reineke Technik, Cybersecurity, IT-Sicherheit, KI-Automatisierung');
    ensureMeta('og:title', t.siteTitle, 'property');
    ensureMeta('og:description', t.siteDescription, 'property');
    ensureMeta('og:type', 'website', 'property');
    ensureMeta('og:url', canonicalUrl, 'property');
    ensureMeta('og:locale', language === 'de' ? 'de_DE' : 'en_US', 'property');

    let schema = document.getElementById('person-schema');
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'person-schema';
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Werner Francis Reineke',
      alternateName: ['Werner Reineke'],
      url: canonicalUrl,
      image: `${canonicalUrl}werner-francis-reineke-portrait.jpg`,
      worksFor: {
        '@type': 'Organization',
        name: 'Reineke Technik GmbH',
        url: 'https://www.reineke-technik.de/',
      },
      jobTitle: language === 'de' ? 'Ansprechpartner fur Cybersecurity und Automatisierung' : 'Cybersecurity and automation advisor',
      sameAs: [
        'https://www.reineke-technik.de/',
        'https://www.reineke-technik.de/unternehmen/',
      ],
      knowsAbout: [
        'Cybersecurity',
        'IT-Sicherheitsstrategie',
        'KI-Automatisierung',
        'NIS-2',
        'ISO 27001',
      ],
    });
  }, [language, t]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'de' ? 'en' : 'de'));
  };

  const fadeUp = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.45 },
  };

  return (
    <div className="min-h-screen bg-[#faf8f6] text-neutral-950 selection:bg-[#b91c1c] selection:text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[36rem] bg-[radial-gradient(circle_at_top_left,rgba(185,28,28,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_30%)]" />

      <header className="sticky top-0 z-50 border-b border-[#b91c1c]/10 bg-[#faf8f6]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="min-w-0">
            <div className="truncate text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b91c1c] sm:text-xs">
              Werner Francis Reineke
            </div>
            <div className="hidden text-[11px] text-neutral-500 sm:block">{t.brandSub}</div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
            <a href="#about" className="transition hover:text-[#b91c1c]">{t.navAbout}</a>
            <a href="#services" className="transition hover:text-[#b91c1c]">{t.navServices}</a>
            <a href="#portfolio" className="transition hover:text-[#b91c1c]">{t.navReferences}</a>
            <a href="#articles" className="transition hover:text-[#b91c1c]">{t.navInsights}</a>
            <button
              onClick={toggleLanguage}
              className="rounded-full border border-[#b91c1c]/15 px-3 py-2 text-xs font-semibold text-[#b91c1c] transition hover:bg-[#b91c1c]/5"
            >
              {t.langDesktop}
            </button>
            <a href="#contact" className="rounded-full bg-[#b91c1c] px-4 py-2 text-white shadow-lg shadow-[#b91c1c]/20 transition hover:translate-y-[-1px] hover:opacity-95">{t.navContact}</a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="rounded-full border border-[#b91c1c]/15 bg-white px-3 py-2 text-[11px] font-semibold text-[#b91c1c]"
            >
              {language.toUpperCase()}
            </button>
            <a href="#contact" className="rounded-full bg-[#b91c1c] px-3 py-2 text-xs font-medium text-white shadow-lg shadow-[#b91c1c]/20">
              {t.navContact}
            </a>
            <div className="rounded-full border border-[#b91c1c]/15 bg-white p-2 text-[#b91c1c]" aria-label={t.mobileMenu}>
              <Menu className="h-4 w-4" />
            </div>
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pt-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <motion.div {...fadeUp}>
              <div className="mb-4 inline-flex items-center rounded-full border border-[#b91c1c]/15 bg-[#b91c1c]/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b91c1c] sm:text-xs">
                {t.heroBadge}
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                {t.heroTitle1}
                <span className="mt-2 block text-[#b91c1c]">{t.heroTitle2}</span>
                <span className="mt-2 block text-neutral-950">{t.heroTitle3}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-neutral-600 sm:mt-6 sm:text-lg sm:leading-8">
                {t.heroText}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b91c1c] px-5 py-3 text-sm font-medium text-white shadow-xl shadow-[#b91c1c]/20 transition hover:translate-y-[-1px] hover:opacity-95">
                  {t.heroPrimary} <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#services" className="inline-flex items-center justify-center rounded-full border border-[#b91c1c]/20 bg-white px-5 py-3 text-sm font-medium text-[#b91c1c] transition hover:bg-[#b91c1c]/5">
                  {t.heroSecondary}
                </a>
              </div>

              <div className="mt-7 grid max-w-xl grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#b91c1c]/12 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold text-[#b91c1c]">{t.stat1Title}</div>
                  <div className="mt-1 text-sm text-neutral-500">{t.stat1Text}</div>
                </div>
                <div className="rounded-2xl border border-[#b91c1c]/12 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold text-[#b91c1c]">{t.stat2Title}</div>
                  <div className="mt-1 text-sm text-neutral-500">{t.stat2Text}</div>
                </div>
                <div className="col-span-2 rounded-2xl border border-[#b91c1c]/12 bg-white p-4 shadow-sm sm:col-span-1">
                  <div className="text-2xl font-semibold text-[#b91c1c]">{t.stat3Title}</div>
                  <div className="mt-1 text-sm text-neutral-500">{t.stat3Text}</div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-[2rem] border border-[#b91c1c]/12 bg-white shadow-[0_20px_80px_-30px_rgba(185,28,28,0.35)]">
                <div className="grid gap-0 lg:grid-cols-[1fr_0.92fr]">
                  <div className="aspect-[4/5] min-h-[420px] bg-[linear-gradient(180deg,#fff6f4_0%,#ffffff_38%,#f3f4f6_100%)]">
                    <img
                      src={portraitSrc}
                      alt={t.portraitAlt}
                      className="h-full w-full object-cover"
                      onError={() => setPortraitSrc(logo)}
                    />
                  </div>
                  <div className="flex flex-col justify-end p-6 sm:p-8">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b91c1c]">{t.portraitKicker}</div>
                    <p className="mt-4 text-lg font-semibold leading-8 text-neutral-900">
                      {t.portraitCaption}
                    </p>
                    {portraitSrc === logo ? (
                      <p className="mt-4 text-sm leading-6 text-neutral-500">{t.portraitFallback}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div {...fadeUp} className="max-w-3xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b91c1c] sm:text-xs">{t.aboutEyebrow}</div>
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
                    className="group rounded-[1.5rem] border border-[#b91c1c]/12 bg-white p-5 shadow-sm transition hover:border-[#b91c1c]/25 hover:shadow-[0_18px_40px_-24px_rgba(185,28,28,0.45)] sm:rounded-[1.75rem] sm:p-6"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#b91c1c]/8 text-[#b91c1c] transition group-hover:bg-[#b91c1c] group-hover:text-white">
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
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#b91c1c]/10 bg-[linear-gradient(180deg,#fff7f5_0%,#ffffff_100%)] p-6 sm:p-8 lg:p-10">
            <motion.div {...fadeUp} className="max-w-3xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b91c1c] sm:text-xs">{t.servicesEyebrow}</div>
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
                    className="rounded-[1.5rem] border border-[#b91c1c]/10 bg-white p-5 shadow-sm sm:rounded-[1.75rem] sm:p-6"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#b91c1c]/10 text-[#b91c1c]">
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
                  className="group flex min-h-[96px] items-center justify-center rounded-[1.25rem] border border-[#b91c1c]/12 bg-white p-4 text-center text-sm text-neutral-600 shadow-sm transition hover:-translate-y-0.5 hover:border-[#b91c1c]/25 hover:text-[#b91c1c] hover:shadow-[0_18px_40px_-30px_rgba(185,28,28,0.45)] sm:min-h-[120px] sm:rounded-[1.5rem]"
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
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b91c1c] sm:text-xs">{t.insightsEyebrow}</div>
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
                  className="rounded-[1.5rem] border border-[#b91c1c]/12 bg-white p-5 shadow-sm sm:rounded-[1.75rem] sm:p-6"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b91c1c] sm:text-xs">{article.category}</div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug sm:text-xl">{article.title}</h3>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#b91c1c]">
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
            className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-[#b91c1c]/15 bg-[#b91c1c] px-5 py-8 text-white shadow-[0_30px_80px_-35px_rgba(185,28,28,0.55)] sm:rounded-[2rem] sm:px-8 sm:py-12"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 sm:text-xs">{t.ctaEyebrow}</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.ctaTitle}</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/80 sm:text-lg sm:leading-8">
                  {t.ctaText}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={t.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
                  >
                    <Globe className="h-4 w-4" />
                    {t.websiteLabel}
                  </a>
                  <a
                    href={t.teamUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
                  >
                    <Building2 className="h-4 w-4" />
                    {t.teamLabel}
                  </a>
                  <a
                    href={t.imprintUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
                  >
                    <Landmark className="h-4 w-4" />
                    {t.imprintLabel}
                  </a>
                </div>
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
                  <a href={`tel:${t.contactPhone.replace(/[^+\d]/g, '')}`} className="transition hover:text-white">
                    {t.contactPhone}
                  </a>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href={`mailto:${t.contactEmail}`} className="transition hover:text-white">
                    {t.contactEmail}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
