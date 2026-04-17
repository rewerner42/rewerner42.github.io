import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  Cpu,
  ExternalLink,
  Instagram,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Mic2,
  Phone,
  ScanSearch,
  Shield,
  Twitter,
} from 'lucide-react';
import portrait from '../werner-francis-reineke.jpg';

const canonicalUrl = 'https://wernerfrancisreineke.com/';
const manualLanguageStorageKey = 'site-language-manual';
const legacyLanguageStorageKey = 'site-language';

const detectBrowserLanguage = () => {
  if (typeof navigator === 'undefined') return 'de';
  const browserLanguages = Array.isArray(navigator.languages) && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language];
  return browserLanguages.some((entry) => (entry || '').toLowerCase().startsWith('de')) ? 'de' : 'en';
};

export default function WernerFrancisReinekeOnePager() {
  const translations = {
    de: {
      siteTitle: 'Werner Francis Reineke | Offizielle Website, Cybersecurity & Speaker',
      siteDescription:
        'Werner Francis Reineke ist Geschäftsführer der Reineke Technik GmbH und Ansprechpartner für Cybersecurity, IT-Sicherheitsstrategie, NIS-2, Automatisierung und Fachvorträge.',
      navAbout: 'Profil',
      navCv: 'Lebenslauf',
      navServices: 'Kompetenzen',
      navInsights: 'Impulse',
      navContact: 'Kontakt',
      langDesktop: 'DE / EN',
      mobileMenu: 'Menü',
      heroNameTop: 'Werner Francis',
      heroNameBottom: 'Reineke',
      heroTitle2: 'Cybersecurity, Strategie und Umsetzung.',
      heroTitle3: '',
      heroMeta: 'Geschäftsführer Reineke Technik GmbH · Cybersecurity Speaker · M.Sc. Cybersecurity',
      heroText:
        'Werner Francis Reineke hilft Unternehmen dabei, IT-Sicherheitsrisiken früh zu erkennen, praktikable Schutzmaßnahmen umzusetzen und technische Prozesse so aufzustellen, dass Sicherheit, Effizienz und Handlungsfähigkeit im Alltag steigen. Das ist besonders relevant für Geschäftsführung, IT-Verantwortliche und Teams, die Cybersecurity, NIS-2, Automatisierung oder digitale Weiterentwicklung mit klaren Prioritäten voranbringen wollen.',
      heroPrimary: 'Kontakt aufnehmen',
      heroBooking: 'Termin buchen',
      heroSecondary: 'Kompetenzen ansehen',
      stat1Title: 'Cybersec.',
      stat1Text: 'strategisch und operativ',
      stat2Title: 'KI & Prozesse',
      stat2Text: 'praxisnah automatisieren',
      stat3Title: 'Reineke Technik',
      stat3Text: 'stark vernetzt',
      portraitAlt: 'Portrait von Werner Francis Reineke',
      portraitCaption: 'Vertrauen ist gut, Multi-Faktor-Authentifizierung ist besser.',
      aboutEyebrow: 'Profil',
      aboutTitle: 'Werner Francis Reineke als Ansprechpartner für IT-Sicherheit, Resilienz und digitale Weiterentwicklung',
      aboutText:
        'Werner Francis Reineke verbindet unternehmerisches Denken mit technischer Tiefe in Cybersecurity, IT-Sicherheitsstrategie und digitaler Weiterentwicklung. Im Mittelpunkt stehen belastbare Sicherheitsstrukturen, klare Prioritäten und Lösungen, die in der Praxis funktionieren.',
      cvEyebrow: 'Lebenslauf',
      cvTitle: 'Lebenslauf von Werner Francis Reineke',
      cvText:
        'Der Lebenslauf von Werner Francis Reineke zeigt seinen fachlichen Weg von Maschinenbau und Softwareentwicklung über Cybersecurity bis zur unternehmerischen Verantwortung in der Reineke Technik GmbH.',
      cvCareerTitle: 'Beruflicher Werdegang',
      cvEducationTitle: 'Ausbildung',
      servicesEyebrow: 'Kompetenzen',
      servicesTitle: 'Leistungsfelder mit klarem Nutzen für Unternehmen',
      servicesText:
        'Die inhaltlichen Schwerpunkte von Werner Francis Reineke reichen von Sicherheitsanalysen und Governance über Schutzmaßnahmen in der Infrastruktur bis hin zu KI-gestützter Automatisierung. Das Ziel ist immer derselbe: Unternehmen sicherer, effizienter und widerstandsfähiger machen.',
      referencesTitle: 'Fokusthemen von Werner Francis Reineke',
      referencesText:
        'Diese Themen prägen die Arbeit von Werner Francis Reineke in Sicherheitsfragen, Technologieentscheidungen und der praktischen Umsetzung im Unternehmensalltag.',
      insightsEyebrow: 'Impulse',
      insightsTitle: 'Impulse von Werner Francis Reineke',
      insightsText:
        'Hier finden sich ausgewählte Beiträge, Interviews und Fachthemen, die die Arbeit und Perspektive von Werner Francis Reineke kurz einordnen.',
      readMore: 'Mehr dazu',
      ctaEyebrow: 'Direkter Draht',
      ctaTitle: 'Kontakt zu Werner Francis Reineke',
      ctaText:
        'Wer ein Gespräch zu Cybersecurity, IT-Sicherheitsstrategie, NIS-2, ISO 27001, Automatisierung oder zur Zusammenarbeit mit Reineke Technik sucht, findet hier den passenden Einstieg.',
      bookingLabel: 'Termin direkt buchen',
      bookingUrl: 'https://outlook.office.com/bookwithme/user/99dfe8391d044c208563dd3afbc7439f@reineke-technik.de?anonymous&ismsaljsauthenabled&ep=plink',
      socialsEyebrow: 'Social Media',
      socialsTitle: 'Direkte Profile und Kanäle',
      socialPersonalTitle: 'Persönlich',
      socialCompanyTitle: 'Reineke Technik',
      speakerEyebrow: 'Speaker',
      speakerTitle: 'Werner Francis Reineke als Cybersecurity Speaker',
      speakerText:
        'Werner Francis Reineke spricht über Cybersecurity, IT-Sicherheitsstrategie, NIS-2, Automatisierung und die praktische Umsetzung von Sicherheit im Mittelstand. Seine Vorträge verbinden technische Tiefe mit unternehmerischer Verständlichkeit und eignen sich für Veranstaltungen, Fachforen, Unternehmensformate und Entscheider-Runden.',
      speakerPoints: [
        'Vorträge zu Cybersecurity, NIS-2, Resilienz und IT-Sicherheitsstrategie',
        'Praxisnahe Einordnung für Mittelstand, Geschäftsführung und technische Teams',
        'Geeignet für Keynotes, Panels, Fachveranstaltungen und interne Unternehmensformate',
      ],
      faqEyebrow: 'FAQ',
      faqTitle: 'Häufige Fragen zu Werner Francis Reineke',
      contactBoxTitle: 'Kontakt',
      contactAddressLine1: 'Reineke Technik GmbH',
      contactAddressLine2: 'Geseker Straße 26',
      contactAddressLine3: '33154 Salzkotten',
      contactEmail: 'info@reineke-technik.de',
      contactPhone: '+49 (0) 5258 987-282',
      personalLinkedinLabel: 'Werner Francis Reineke auf LinkedIn',
      personalLinkedinUrl: 'https://www.linkedin.com/in/werner-reineke/',
      instagramLabel: 'Reineke Technik auf Instagram',
      instagramUrl: 'https://www.instagram.com/reineketechnik/',
      companyLinkedinLabel: 'Reineke Technik auf LinkedIn',
      companyLinkedinUrl: 'https://www.linkedin.com/company/reineke-technik/',
      xLabel: 'Reineke Technik auf X',
      xUrl: 'https://x.com/ReinekeTechnik',
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
      timeline: [
        {
          period: 'seit 2022',
          title: 'Geschäftsführer, Reineke Technik GmbH',
          text: 'Verantwortung für Unternehmensführung, Cybersecurity und die strategische Weiterentwicklung technischer Leistungen.',
        },
        {
          period: '2021',
          title: 'Software Developer, NetVis, Chicago',
          text: 'Softwareentwicklung im internationalen Umfeld mit engem Bezug zu IT- und Sicherheitsfragen.',
        },
        {
          period: '2020',
          title: 'HPC Software Developer, Eisbach Bio GmbH',
          text: 'Clustering und Softwareentwicklung für forschungsnahe High-Performance-Computing-Anwendungen.',
        },
        {
          period: '2020',
          title: 'Computer Science Teaching Assistant, Jones College Prep',
          text: 'Vermittlung von Informatik- und Cybersecurity-Grundlagen im akademischen Umfeld in Chicago.',
        },
      ],
      education: [
        {
          period: '2021',
          title: 'DePaul University Jarvis College of Computing and Digital Media',
          text: 'Master of Science (M.Sc.) in Cybersecurity mit Schwerpunkt auf Informationssicherheit, Kryptographie und angewandter Sicherheitsanalyse. Die Abschlussarbeit untersuchte die sicherheitskritische Adaption des Signal-Protokolls in WhatsApp mit formaler Modellierung und Verifikation in Tamarin.',
        },
        {
          period: '2017 bis 2020',
          title: 'DePaul University',
          text: 'Cybersecurity-Studium in Chicago mit Schwerpunkt auf Informationssicherheit, Kryptographie und angewandter Sicherheitsanalyse.',
        },
        {
          period: '2012 bis 2016',
          title: 'ETH Zürich',
          text: 'Maschinenbaustudium mit Fokus auf Regelungstechnik, technische Systeme und die Schnittstelle zwischen Ingenieurwesen und IT.',
        },
      ],
      faq: [
        {
          question: 'Für welche Themen steht Werner Francis Reineke?',
          answer: 'Werner Francis Reineke steht für Cybersecurity, IT-Sicherheitsstrategie, NIS-2, Automatisierung und die praktische Umsetzung technischer Lösungen im Unternehmensalltag.',
        },
        {
          question: 'Kann man Werner Francis Reineke für Vorträge oder Fachimpulse anfragen?',
          answer: 'Ja. Werner Francis Reineke kann für Vorträge, Panels, Unternehmensveranstaltungen und Fachformate rund um Cybersecurity, IT-Sicherheit und digitale Transformation angefragt werden.',
        },
        {
          question: 'Wie kann man mit Werner Francis Reineke in Kontakt treten?',
          answer: 'Für ein persönliches Gespräch stehen E-Mail, Telefon, LinkedIn und die direkte Terminbuchung über den Buchungslink auf dieser Website zur Verfügung.',
        },
      ],
      articles: [
        {
          title: 'NIS-2 Compliance im Unternehmen',
          category: 'Cybersecurity',
          href: 'https://www.reineke-technik.de/nis-2-compliance-im-unternehmen/',
        },
        {
          title: 'Warum eine Backup-Strategie heute unverzichtbar ist',
          category: 'Reineke Technik',
          href: 'https://www.reineke-technik.de/warum-eine-backup-strategie-heute-unverzichtbar-ist/',
        },
        {
          title: 'Digitale Sicherheit als Teil moderner Fertigung',
          category: 'MK Lasertechnik',
          href: 'https://www.mk-lasertechnik.de/digitale-sicherheit-als-teil-moderner-fertigung/',
        },
        {
          title: 'Video: Die hackersichere Bäckerei – Interview mit Werner Francis Reineke',
          category: 'Bäckerwelt',
          href: 'https://baeckerwelt.de/news/video-die-hackersichere-baeckerei-interview-mit-werner-francis-reineke/',
        },
        {
          title: 'Werner Francis Reineke – Spezialist für Cybersecurity mit Praxiserfahrung',
          category: 'Mentor Consulting',
          href: 'https://www.mentor-consulting.de/news/2025/06/25/werner-francis-reineke-spezialist-fuer-cybersecurity/',
        },
      ],
    },
    en: {
      siteTitle: 'Werner Francis Reineke | Official Website, Cybersecurity & Speaker',
      siteDescription:
        'Werner Francis Reineke is Managing Director of Reineke Technik GmbH and a contact for cybersecurity, IT security strategy, NIS-2, automation, and speaking engagements.',
      navAbout: 'Profile',
      navCv: 'Resume',
      navServices: 'Expertise',
      navInsights: 'Insights',
      navContact: 'Contact',
      langDesktop: 'EN / DE',
      mobileMenu: 'Menu',
      heroNameTop: 'Werner Francis',
      heroNameBottom: 'Reineke',
      heroTitle2: 'Cybersecurity, strategy and execution.',
      heroTitle3: '',
      heroMeta: 'Managing Director Reineke Technik GmbH · Cybersecurity Speaker · M.Sc. Cybersecurity',
      heroText:
        'Werner Francis Reineke helps companies identify IT security risks early, implement practical protective measures, and improve technical processes in ways that strengthen security, efficiency, and day-to-day resilience. This is especially valuable for business leaders, IT decision-makers, and teams working on cybersecurity, NIS-2, automation, or digital transformation with clear priorities.',
      heroPrimary: 'Get in touch',
      heroBooking: 'Book a call',
      heroSecondary: 'View expertise',
      stat1Title: 'Cybersec.',
      stat1Text: 'strategic and operational',
      stat2Title: 'AI & Processes',
      stat2Text: 'automation with practical value',
      stat3Title: 'Reineke Technik',
      stat3Text: 'closely connected',
      portraitAlt: 'Portrait of Werner Francis Reineke',
      portraitCaption: 'Trust is good, multi-factor authentication is better.',
      aboutEyebrow: 'Profile',
      aboutTitle: 'Werner Francis Reineke as a contact for IT security, resilience, and digital progress',
      aboutText:
        'Werner Francis Reineke combines business-minded leadership with technical depth in cybersecurity, IT security strategy, and digital transformation. The focus is on resilient security structures, clear priorities, and solutions that work in practice.',
      cvEyebrow: 'Resume',
      cvTitle: 'Resume of Werner Francis Reineke',
      cvText:
        'The resume of Werner Francis Reineke outlines his path from mechanical engineering and software development to cybersecurity and executive responsibility at Reineke Technik GmbH.',
      cvCareerTitle: 'Career history',
      cvEducationTitle: 'Education',
      servicesEyebrow: 'Expertise',
      servicesTitle: 'Capability areas with clear business value',
      servicesText:
        'Werner Francis Reineke focuses on security assessments, governance, protective infrastructure measures, and AI-driven automation. The underlying goal remains the same: helping companies become more secure, efficient, and resilient.',
      referencesTitle: 'Core focus topics of Werner Francis Reineke',
      referencesText:
        'These topics define the work of Werner Francis Reineke in security matters, technology decisions, and practical implementation in day-to-day business.',
      insightsEyebrow: 'Insights',
      insightsTitle: 'Insights from Werner Francis Reineke',
      insightsText:
        'This section highlights selected articles, interviews, and topics that reflect the work and perspective of Werner Francis Reineke.',
      readMore: 'Learn more',
      ctaEyebrow: 'Direct contact',
      ctaTitle: 'Contact Werner Francis Reineke',
      ctaText:
        'If you are looking for an exchange on cybersecurity, IT security strategy, NIS-2, ISO 27001, automation, or collaboration with Reineke Technik, this is the right starting point.',
      bookingLabel: 'Book directly',
      bookingUrl: 'https://outlook.office.com/bookwithme/user/99dfe8391d044c208563dd3afbc7439f@reineke-technik.de?anonymous&ismsaljsauthenabled&ep=plink',
      socialsEyebrow: 'Social Media',
      socialsTitle: 'Direct profiles and channels',
      socialPersonalTitle: 'Personal',
      socialCompanyTitle: 'Reineke Technik',
      speakerEyebrow: 'Speaker',
      speakerTitle: 'Werner Francis Reineke as a Cybersecurity Speaker',
      speakerText:
        'Werner Francis Reineke speaks on cybersecurity, IT security strategy, NIS-2, automation, and the practical implementation of security in mid-sized businesses. His talks combine technical depth with business clarity and fit conferences, expert forums, company events, and leadership formats.',
      speakerPoints: [
        'Talks on cybersecurity, NIS-2, resilience, and IT security strategy',
        'Practical framing for SMEs, executive leadership, and technical teams',
        'Suitable for keynotes, panels, specialist events, and internal company formats',
      ],
      faqEyebrow: 'FAQ',
      faqTitle: 'Frequently asked questions about Werner Francis Reineke',
      contactBoxTitle: 'Contact',
      contactAddressLine1: 'Reineke Technik GmbH',
      contactAddressLine2: 'Geseker Straße 26',
      contactAddressLine3: '33154 Salzkotten',
      contactEmail: 'info@reineke-technik.de',
      contactPhone: '+49 (0) 5258 987-282',
      personalLinkedinLabel: 'Werner Francis Reineke on LinkedIn',
      personalLinkedinUrl: 'https://www.linkedin.com/in/werner-reineke/',
      instagramLabel: 'Reineke Technik on Instagram',
      instagramUrl: 'https://www.instagram.com/reineketechnik/',
      companyLinkedinLabel: 'Reineke Technik on LinkedIn',
      companyLinkedinUrl: 'https://www.linkedin.com/company/reineke-technik/',
      xLabel: 'Reineke Technik on X',
      xUrl: 'https://x.com/ReinekeTechnik',
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
      timeline: [
        {
          period: 'since 2022',
          title: 'Managing Director, Reineke Technik GmbH',
          text: 'Responsible for business leadership, cybersecurity, and the strategic development of technical services.',
        },
        {
          period: '2021',
          title: 'Software Developer, NetVis, Chicago',
          text: 'Software development in an international environment with close ties to IT and security topics.',
        },
        {
          period: '2020',
          title: 'HPC Software Developer, Eisbach Bio GmbH',
          text: 'Clustering and software development for research-oriented high-performance computing applications.',
        },
        {
          period: '2020',
          title: 'Computer Science Teaching Assistant, Jones College Prep',
          text: 'Teaching computer science and cybersecurity fundamentals in an academic environment in Chicago.',
        },
      ],
      education: [
        {
          period: '2021',
          title: 'DePaul University Jarvis College of Computing and Digital Media',
          text: 'Master of Science (M.Sc.) in Cybersecurity with focus areas in information security, cryptography, and applied security analysis. The thesis examined the security-relevant adaptation of the Signal protocol in WhatsApp using formal modelling and verification in Tamarin.',
        },
        {
          period: '2017 to 2020',
          title: 'DePaul University',
          text: 'Cybersecurity studies in Chicago with a focus on information security, cryptography, and applied security analysis.',
        },
        {
          period: '2012 to 2016',
          title: 'ETH Zurich',
          text: 'Mechanical engineering studies with a focus on control engineering, technical systems, and the interface between engineering and IT.',
        },
      ],
      faq: [
        {
          question: 'What topics define Werner Francis Reineke?',
          answer: 'Werner Francis Reineke is closely associated with cybersecurity, IT security strategy, NIS-2, automation, and the practical implementation of technical solutions in business environments.',
        },
        {
          question: 'Can Werner Francis Reineke be booked for talks or expert sessions?',
          answer: 'Yes. Werner Francis Reineke can be requested for talks, panels, company events, and specialist formats focused on cybersecurity, IT security, and digital transformation.',
        },
        {
          question: 'How can people get in touch with Werner Francis Reineke?',
          answer: 'People can reach out via email, phone, LinkedIn, or by using the direct booking link provided on this website.',
        },
      ],
      articles: [
        {
          title: 'NIS-2 Compliance in Business',
          category: 'Cybersecurity',
          href: 'https://www.reineke-technik.de/nis-2-compliance-im-unternehmen/',
        },
        {
          title: 'Why a Backup Strategy Is Essential Today',
          category: 'Reineke Technik',
          href: 'https://www.reineke-technik.de/warum-eine-backup-strategie-heute-unverzichtbar-ist/',
        },
        {
          title: 'Digital Security as Part of Modern Manufacturing',
          category: 'MK Lasertechnik',
          href: 'https://www.mk-lasertechnik.de/digitale-sicherheit-als-teil-moderner-fertigung/',
        },
        {
          title: 'Video: The Hacker-Proof Bakery – Interview with Werner Francis Reineke',
          category: 'Bäckerwelt',
          href: 'https://baeckerwelt.de/news/video-die-hackersichere-baeckerei-interview-mit-werner-francis-reineke/',
        },
        {
          title: 'Werner Francis Reineke – Cybersecurity Specialist with Practical Experience',
          category: 'Mentor Consulting',
          href: 'https://www.mentor-consulting.de/news/2025/06/25/werner-francis-reineke-spezialist-fuer-cybersecurity/',
        },
      ],
    },
  };

  const roleIcons = [Shield, Mic2, Briefcase];
  const focusIcons = [ScanSearch, Landmark, Cpu];

  const detectLanguage = () => {
    if (typeof window === 'undefined') return 'de';
    const params = new URLSearchParams(window.location.search);
    const urlLanguage = params.get('lang');
    if (urlLanguage === 'de' || urlLanguage === 'en') return urlLanguage;

    const saved = window.localStorage.getItem(manualLanguageStorageKey);
    if (saved === 'de' || saved === 'en') return saved;

    return detectBrowserLanguage();
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(legacyLanguageStorageKey);
    }
  }, []);

  const [language, setLanguage] = useState(() => detectLanguage());

  useEffect(() => {
    if (typeof window !== 'undefined') {
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
    ensureMeta(
      'keywords',
      'Werner Francis Reineke, Werner Reineke, Werner Francis Reineke Cybersecurity, Werner Francis Reineke Speaker, Reineke Technik, NIS-2, IT-Sicherheitsstrategie, KI-Automatisierung'
    );
    ensureMeta('author', 'Werner Francis Reineke');
    ensureMeta('robots', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');
    ensureMeta('og:title', t.siteTitle, 'property');
    ensureMeta('og:description', t.siteDescription, 'property');
    ensureMeta('og:type', 'website', 'property');
    ensureMeta('og:url', canonicalUrl, 'property');
    ensureMeta('og:site_name', 'Werner Francis Reineke', 'property');
    ensureMeta('og:locale', language === 'de' ? 'de_DE' : 'en_US', 'property');
    ensureMeta('og:image', `${canonicalUrl}werner-francis-reineke.jpg`, 'property');
    ensureMeta('og:image:alt', 'Portrait von Werner Francis Reineke', 'property');
    ensureMeta('twitter:title', t.siteTitle);
    ensureMeta('twitter:description', t.siteDescription);
    ensureMeta('twitter:image', `${canonicalUrl}werner-francis-reineke.jpg`);
    ensureMeta('twitter:image:alt', 'Portrait von Werner Francis Reineke');

    const ensureSchema = (id) => {
      let schema = document.getElementById(id);
      if (!schema) {
        schema = document.createElement('script');
        schema.id = id;
        schema.type = 'application/ld+json';
        document.head.appendChild(schema);
      }
      return schema;
    };

    const personId = `${canonicalUrl}#person`;
    const personDescription =
      language === 'de'
        ? 'Werner Francis Reineke ist Geschäftsführer der Reineke Technik GmbH und Ansprechpartner für Cybersecurity, IT-Sicherheitsstrategie, NIS-2, Automatisierung und Vorträge.'
        : 'Werner Francis Reineke is Managing Director of Reineke Technik GmbH and a contact for cybersecurity, IT security strategy, NIS-2, automation, and speaking engagements.';

    ensureSchema('website-schema').textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${canonicalUrl}#website`,
      url: canonicalUrl,
      name: 'Werner Francis Reineke',
      inLanguage: language === 'de' ? 'de-DE' : 'en-US',
      description: t.siteDescription,
    });

    ensureSchema('profile-page-schema').textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      '@id': `${canonicalUrl}#profile`,
      url: canonicalUrl,
      name: 'Werner Francis Reineke',
      description: t.siteDescription,
      mainEntity: {
        '@id': personId,
      },
      isPartOf: {
        '@id': `${canonicalUrl}#website`,
      },
    });

    ensureSchema('person-schema').textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': personId,
      name: 'Werner Francis Reineke',
      givenName: 'Werner Francis',
      familyName: 'Reineke',
      alternateName: ['Werner Reineke'],
      description: personDescription,
      url: canonicalUrl,
      mainEntityOfPage: canonicalUrl,
      image: [`${canonicalUrl}werner-francis-reineke.jpg`, `${canonicalUrl}wfr_logo/og-image.png`],
      worksFor: {
        '@type': 'Organization',
        name: 'Reineke Technik GmbH',
        url: 'https://www.reineke-technik.de/',
        logo: `${canonicalUrl}wfr_logo/logo-wfr-master.png`,
      },
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'DePaul University Jarvis College of Computing and Digital Media',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'ETH Zurich',
        },
      ],
      hasOccupation: [
        {
          '@type': 'Occupation',
          name: language === 'de' ? 'Geschäftsführer' : 'Managing Director',
          occupationLocation: {
            '@type': 'City',
            name: 'Salzkotten',
          },
        },
        {
          '@type': 'Occupation',
          name: language === 'de' ? 'Cybersecurity Speaker' : 'Cybersecurity Speaker',
        },
      ],
      jobTitle:
        language === 'de'
          ? 'Geschäftsführer der Reineke Technik GmbH'
          : 'Managing Director of Reineke Technik GmbH',
      knowsLanguage: ['de', 'en'],
      sameAs: [
        'https://www.linkedin.com/in/werner-reineke/',
        'https://www.reineke-technik.de/unternehmen/team/',
      ],
      knowsAbout: [
        'Cybersecurity',
        'IT-Sicherheitsstrategie',
        'KI-Automatisierung',
        'NIS-2',
        'ISO 27001',
      ],
      subjectOf: t.articles.map((article) => ({
        '@type': 'Article',
        headline: article.title,
        url: article.href,
      })),
    });

    ensureSchema('faq-schema').textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }, [language, t]);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === 'de' ? 'en' : 'de';
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(manualLanguageStorageKey, next);
        const url = new URL(window.location.href);
        url.searchParams.set('lang', next);
        window.history.replaceState({}, '', url.toString());
      }
      return next;
    });
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
          </a>

          <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
            <a href="#about" className="transition hover:text-[#b91c1c]">{t.navAbout}</a>
            <a href="#cv" className="transition hover:text-[#b91c1c]">{t.navCv}</a>
            <a href="#services" className="transition hover:text-[#b91c1c]">{t.navServices}</a>
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
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block text-neutral-950 md:whitespace-nowrap">{t.heroNameTop}</span>
                <span className="block text-neutral-950">{t.heroNameBottom}</span>
              </h1>
              <p className="mt-4 max-w-2xl text-[11px] font-semibold uppercase tracking-[0.26em] text-neutral-500 sm:text-xs">
                {t.heroMeta}
              </p>
              <p className="mt-4 max-w-2xl text-lg font-medium leading-8 text-[#b91c1c] sm:text-xl">
                {t.heroTitle2}
              </p>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-neutral-600 sm:mt-6 sm:text-lg sm:leading-8">
                {t.heroText}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b91c1c] px-5 py-3 text-sm font-medium text-white shadow-xl shadow-[#b91c1c]/20 transition hover:translate-y-[-1px] hover:opacity-95">
                  {t.heroPrimary} <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={t.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#b91c1c]/20 bg-white px-5 py-3 text-sm font-medium text-[#b91c1c] transition hover:bg-[#b91c1c]/5"
                >
                  {t.heroBooking}
                </a>
                <a href="#services" className="inline-flex items-center justify-center rounded-full border border-[#b91c1c]/20 bg-white px-5 py-3 text-sm font-medium text-[#b91c1c] transition hover:bg-[#b91c1c]/5">
                  {t.heroSecondary}
                </a>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-[2rem] border border-[#b91c1c]/12 bg-white shadow-[0_20px_80px_-30px_rgba(185,28,28,0.35)]">
                <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="aspect-[4/5] min-h-[420px] bg-[linear-gradient(180deg,#fff6f4_0%,#ffffff_38%,#f3f4f6_100%)]">
                    <img
                      src={portrait}
                      alt={t.portraitAlt}
                      fetchPriority="high"
                      className="h-full w-full object-cover object-[center_18%]"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <p className="text-2xl font-semibold leading-10 text-neutral-900 sm:text-3xl">
                      {t.portraitCaption}
                    </p>
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
                    className="group rounded-[1.5rem] border border-[#b91c1c]/12 bg-white p-5 text-center shadow-sm transition hover:border-[#b91c1c]/25 hover:shadow-[0_18px_40px_-24px_rgba(185,28,28,0.45)] sm:rounded-[1.75rem] sm:p-6"
                  >
                    <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#b91c1c]/8 text-[#b91c1c] transition group-hover:bg-[#b91c1c] group-hover:text-white">
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
                    className="rounded-[1.5rem] border border-[#b91c1c]/10 bg-white p-5 text-center shadow-sm sm:rounded-[1.75rem] sm:p-6"
                  >
                    <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#b91c1c]/10 text-[#b91c1c]">
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
                <motion.a
                  key={article.title}
                  href={article.href}
                  target="_blank"
                  rel="noreferrer"
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="block rounded-[1.5rem] border border-[#b91c1c]/12 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#b91c1c]/25 hover:shadow-[0_18px_40px_-30px_rgba(185,28,28,0.35)] sm:rounded-[1.75rem] sm:p-6"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b91c1c] sm:text-xs">{article.category}</div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug sm:text-xl">{article.title}</h3>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#b91c1c]">
                    {t.readMore} <ChevronRight className="h-4 w-4" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section id="cv" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div {...fadeUp} className="max-w-4xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b91c1c] sm:text-xs">{t.cvEyebrow}</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{t.cvTitle}</h2>
              <p className="mt-4 text-[15px] leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                {t.cvText}
              </p>
            </motion.div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <motion.div
                {...fadeUp}
                className="rounded-[1.75rem] border border-[#b91c1c]/12 bg-white p-6 shadow-sm sm:p-8"
              >
                <h3 className="text-xl font-semibold">{t.cvCareerTitle}</h3>
                <div className="mt-6 space-y-6">
                  {t.timeline.map((item, index) => (
                    <div key={`${item.title}-${index}`} className="border-l-2 border-[#b91c1c]/15 pl-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b91c1c]">{item.period}</div>
                      <div className="mt-2 text-lg font-semibold text-neutral-950">{item.title}</div>
                      <p className="mt-2 text-sm leading-7 text-neutral-600 sm:text-base">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                className="rounded-[1.75rem] border border-[#b91c1c]/12 bg-white p-6 shadow-sm sm:p-8"
              >
                <h3 className="text-xl font-semibold">{t.cvEducationTitle}</h3>
                <div className="mt-6 space-y-6">
                  {t.education.map((item, index) => (
                    <div key={`${item.title}-${index}`} className="border-l-2 border-[#b91c1c]/15 pl-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b91c1c]">{item.period}</div>
                      <div className="mt-2 text-lg font-semibold text-neutral-950">{item.title}</div>
                      <p className="mt-2 text-sm leading-7 text-neutral-600 sm:text-base">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              {...fadeUp}
              className="mb-8 rounded-[1.75rem] border border-[#b91c1c]/12 bg-[linear-gradient(180deg,#fff7f5_0%,#ffffff_100%)] p-6 shadow-sm sm:mb-10 sm:p-8"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b91c1c] sm:text-xs">{t.speakerEyebrow}</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{t.speakerTitle}</h2>
              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                {t.speakerText}
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {t.speakerPoints.map((point) => (
                  <div key={point} className="rounded-[1.25rem] border border-[#b91c1c]/10 bg-white p-5">
                    <p className="text-sm font-medium leading-7 text-neutral-700 sm:text-base">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="rounded-[1.75rem] border border-[#b91c1c]/10 bg-white p-6 shadow-sm sm:p-8">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b91c1c] sm:text-xs">{t.faqEyebrow}</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{t.faqTitle}</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {t.faq.map((item) => (
                  <div key={item.question} className="rounded-[1.25rem] border border-[#b91c1c]/10 bg-[#fffaf8] p-5">
                    <h3 className="text-lg font-semibold">{item.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">{item.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>
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
                <div className="mt-6">
                  <a
                    href={t.bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
                  >
                    {t.bookingLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
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

        <section id="socials" className="px-4 pb-20 pt-2 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div {...fadeUp} className="border-t border-neutral-300/80 pt-8 sm:pt-10">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b91c1c] sm:text-xs">{t.socialsEyebrow}</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{t.socialsTitle}</h2>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div className="rounded-[1.75rem] border border-[#b91c1c]/12 bg-white p-6 shadow-sm sm:p-8">
                  <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b91c1c]">{t.socialPersonalTitle}</div>
                  <div className="mt-6 flex flex-wrap items-center gap-6">
                    <a
                      href={t.personalLinkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-3"
                      aria-label={t.personalLinkedinLabel}
                    >
                      <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[#c81e1e] text-white shadow-[0_18px_40px_-28px_rgba(185,28,28,0.55)] sm:h-20 sm:w-20">
                        <Linkedin className="h-10 w-10 sm:h-11 sm:w-11" />
                      </span>
                      <ExternalLink className="h-7 w-7 text-neutral-900 transition group-hover:text-[#b91c1c]" />
                    </a>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-[#b91c1c]/12 bg-white p-6 shadow-sm sm:p-8">
                  <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b91c1c]">{t.socialCompanyTitle}</div>
                  <div className="mt-6 flex flex-wrap items-center gap-6">
                    <a
                      href={t.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-3"
                      aria-label={t.instagramLabel}
                    >
                      <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[#c81e1e] text-white shadow-[0_18px_40px_-28px_rgba(185,28,28,0.55)] sm:h-20 sm:w-20">
                        <Instagram className="h-10 w-10 sm:h-11 sm:w-11" />
                      </span>
                      <ExternalLink className="h-7 w-7 text-neutral-900 transition group-hover:text-[#b91c1c]" />
                    </a>
                    <a
                      href={t.companyLinkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-3"
                      aria-label={t.companyLinkedinLabel}
                    >
                      <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[#c81e1e] text-white shadow-[0_18px_40px_-28px_rgba(185,28,28,0.55)] sm:h-20 sm:w-20">
                        <Linkedin className="h-10 w-10 sm:h-11 sm:w-11" />
                      </span>
                      <ExternalLink className="h-7 w-7 text-neutral-900 transition group-hover:text-[#b91c1c]" />
                    </a>
                    <a
                      href={t.xUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-3"
                      aria-label={t.xLabel}
                    >
                      <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full text-[#c81e1e] sm:h-20 sm:w-20">
                        <Twitter className="h-14 w-14 stroke-[1.75] sm:h-16 sm:w-16" />
                      </span>
                      <ExternalLink className="h-7 w-7 text-neutral-900 transition group-hover:text-[#b91c1c]" />
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
