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

export default function WernerFrancisReinekeOnePager() {
  const translations = {
    de: {
      siteTitle: 'Werner Francis Reineke | Cybersecurity, KI-Automatisierung & Reineke Technik',
      siteDescription:
        'Offizielle Website von Werner Reineke und Werner Francis Reineke. Cybersecurity, IT-Sicherheitsstrategie, KI-Automatisierung und Unternehmenspraxis aus dem Umfeld der Reineke Technik GmbH.',
      navAbout: 'Profil',
      navCv: 'Lebenslauf',
      navServices: 'Kompetenzen',
      navInsights: 'Impulse',
      navContact: 'Kontakt',
      langDesktop: 'DE / EN',
      mobileMenu: 'Menü',
      heroTitle1: 'Werner Reineke',
      heroTitle2: 'Cybersecurity, Strategie und Umsetzung.',
      heroTitle3: '',
      slogan: 'REINEKE REGELT',
      heroText:
        'Werner Reineke begleitet Unternehmen an der Schnittstelle von Cybersecurity, Automatisierung und operativer Umsetzung. Auf dieser Website finden Interessenten einen kompakten Überblick über das Profil von Werner Francis Reineke, seine fachlichen Schwerpunkte und die Verbindung zur Reineke Technik GmbH.',
      heroPrimary: 'Kontakt aufnehmen',
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
      aboutTitle: 'Werner Reineke als Ansprechpartner für IT-Sicherheit, Resilienz und digitale Weiterentwicklung',
      aboutText:
        'Die persönliche Website von Werner Francis Reineke positioniert ihn als unternehmerisch denkenden Ansprechpartner für Unternehmen, die ihre IT-Sicherheit professionalisieren, Risiken beherrschbar machen und moderne Technologien sinnvoll in bestehende Abläufe integrieren möchten. Im Fokus stehen belastbare Sicherheitsstrukturen, technische Klarheit und Lösungen, die nicht nur konzipiert, sondern auch umgesetzt werden.',
      cvEyebrow: 'Lebenslauf',
      cvTitle: 'Lebenslauf von Werner Reineke und Werner Francis Reineke',
      cvText:
        'Der Lebenslaufbereich stärkt die Suchrelevanz für Werner Reineke und Werner Francis Reineke und zeigt den fachlichen Weg von Führung, Cybersecurity, Softwareentwicklung und Ausbildung klar und nachvollziehbar.',
      cvCareerTitle: 'Beruflicher Werdegang',
      cvEducationTitle: 'Ausbildung',
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
      socialsEyebrow: 'Social Media',
      socialsTitle: 'Direkte Profile und Kanäle',
      socialPersonalTitle: 'Persönlich',
      socialCompanyTitle: 'Reineke Technik',
      faqEyebrow: 'FAQ',
      faqTitle: 'Häufig gesuchte Fragen zu Werner Reineke',
      contactBoxTitle: 'Kontakt',
      contactAddressLine1: 'Reineke Technik GmbH',
      contactAddressLine2: 'Geseker Straße 26',
      contactAddressLine3: '33154 Salzkotten',
      contactEmail: 'info@reineke-technik.de',
      contactPhone: '+49 (0) 5258 987-282',
      personalLinkedinLabel: 'Werner Reineke auf LinkedIn',
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
          question: 'Wer ist Werner Reineke?',
          answer: 'Werner Reineke ist die verkürzte Namensform von Werner Francis Reineke. Auf dieser Website finden sich Profil, Werdegang, Kompetenzen, Fachbeiträge und Kontaktmöglichkeiten.',
        },
        {
          question: 'Wer ist Werner Francis Reineke?',
          answer: 'Werner Francis Reineke ist Geschäftsführer der Reineke Technik GmbH und im Umfeld von Cybersecurity, IT-Sicherheitsstrategie, Automatisierung und unternehmerischer Umsetzung aktiv.',
        },
        {
          question: 'Warum gibt es einen Lebenslauf auf dieser Website?',
          answer: 'Der Lebenslauf bündelt berufliche Stationen, Ausbildung und Fachschwerpunkte an einem Ort und hilft Interessenten wie Suchmaschinen, Werner Reineke eindeutig zuzuordnen.',
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
      siteTitle: 'Werner Francis Reineke | Cybersecurity, AI Automation & Reineke Technik',
      siteDescription:
        'Official website of Werner Reineke and Werner Francis Reineke. Cybersecurity, IT security strategy, AI automation, and business-focused technology leadership connected to Reineke Technik GmbH.',
      navAbout: 'Profile',
      navCv: 'Resume',
      navServices: 'Expertise',
      navInsights: 'Insights',
      navContact: 'Contact',
      langDesktop: 'EN / DE',
      mobileMenu: 'Menu',
      heroTitle1: 'Werner Reineke',
      heroTitle2: 'Cybersecurity, strategy and execution.',
      heroTitle3: '',
      slogan: 'REINEKE REGELT',
      heroText:
        'Werner Reineke supports companies at the intersection of cybersecurity, automation, and practical execution. This website gives visitors a focused overview of Werner Francis Reineke, his core competencies, and the connection to Reineke Technik GmbH.',
      heroPrimary: 'Get in touch',
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
      aboutTitle: 'Werner Reineke as a contact for IT security, resilience, and digital progress',
      aboutText:
        'This personal website positions Werner Francis Reineke as a business-minded contact for companies that want to professionalize IT security, reduce risk, and integrate modern technologies into real operations. The emphasis is on reliable security structures, technical clarity, and solutions that move beyond concepts into execution.',
      cvEyebrow: 'Resume',
      cvTitle: 'Resume of Werner Reineke and Werner Francis Reineke',
      cvText:
        'This resume section strengthens search relevance for Werner Reineke and Werner Francis Reineke while presenting a clear path across leadership, cybersecurity, software development, and education.',
      cvCareerTitle: 'Career history',
      cvEducationTitle: 'Education',
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
      socialsEyebrow: 'Social Media',
      socialsTitle: 'Direct profiles and channels',
      socialPersonalTitle: 'Personal',
      socialCompanyTitle: 'Reineke Technik',
      faqEyebrow: 'FAQ',
      faqTitle: 'Frequently searched questions about Werner Reineke',
      contactBoxTitle: 'Contact',
      contactAddressLine1: 'Reineke Technik GmbH',
      contactAddressLine2: 'Geseker Straße 26',
      contactAddressLine3: '33154 Salzkotten',
      contactEmail: 'info@reineke-technik.de',
      contactPhone: '+49 (0) 5258 987-282',
      personalLinkedinLabel: 'Werner Reineke on LinkedIn',
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
          question: 'Who is Werner Reineke?',
          answer: 'Werner Reineke is the short form of the full name Werner Francis Reineke. This website bundles profile, career history, competencies, publications, and contact details.',
        },
        {
          question: 'Who is Werner Francis Reineke?',
          answer: 'Werner Francis Reineke is Managing Director of Reineke Technik GmbH and works in cybersecurity, IT security strategy, automation, and business-focused execution.',
        },
        {
          question: 'Why is there a resume section on this website?',
          answer: 'The resume brings together career stations, education, and key focus areas in one place and helps both visitors and search engines identify Werner Reineke clearly.',
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
      image: [`${canonicalUrl}werner-francis-reineke.jpg`, `${canonicalUrl}wfr_logo/og-image.png`],
      logo: `${canonicalUrl}wfr_logo/logo-wfr-master.png`,
      worksFor: {
        '@type': 'Organization',
        name: 'Reineke Technik GmbH',
        url: 'https://www.reineke-technik.de/',
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
          name: 'Managing Director',
          occupationLocation: {
            '@type': 'City',
            name: 'Salzkotten',
          },
        },
        {
          '@type': 'Occupation',
          name: 'Cybersecurity Advisor',
        },
      ],
      award: ['Foerderpreis der Wirtschaft 2009'],
      jobTitle: language === 'de' ? 'Ansprechpartner fur Cybersecurity und Automatisierung' : 'Cybersecurity and automation advisor',
      sameAs: [
        'https://www.reineke-technik.de/',
        'https://www.reineke-technik.de/unternehmen/',
        'https://www.linkedin.com/in/werner-reineke/',
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
                <span className="mb-4 block text-3xl font-semibold uppercase tracking-[0.34em] text-[#b91c1c] sm:text-4xl lg:text-5xl" style={{ fontFamily: '"Avenir Next Condensed", "Arial Narrow", "Avenir Next", sans-serif' }}>
                  {t.slogan}
                </span>
                <span className="block text-neutral-950">{t.heroTitle1}</span>
              </h1>
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
                <a href="#services" className="inline-flex items-center justify-center rounded-full border border-[#b91c1c]/20 bg-white px-5 py-3 text-sm font-medium text-[#b91c1c] transition hover:bg-[#b91c1c]/5">
                  {t.heroSecondary}
                </a>
              </div>

              <div className="mt-7 grid max-w-xl grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#b91c1c]/12 bg-white p-4 text-center shadow-sm">
                  <div className="text-2xl font-semibold text-[#b91c1c]">{t.stat1Title}</div>
                  <div className="mt-1 text-sm text-neutral-500">{t.stat1Text}</div>
                </div>
                <div className="rounded-2xl border border-[#b91c1c]/12 bg-white p-4 text-center shadow-sm">
                  <div className="text-2xl font-semibold text-[#b91c1c]">{t.stat2Title}</div>
                  <div className="mt-1 text-sm text-neutral-500">{t.stat2Text}</div>
                </div>
                <div className="col-span-2 rounded-2xl border border-[#b91c1c]/12 bg-white p-4 text-center shadow-sm sm:col-span-1">
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
                      src={portrait}
                      alt={t.portraitAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-end p-6 sm:p-8">
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
