import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';
import { translations } from './src/translations.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, 'dist');
const ssrDir = resolve(distDir, 'ssr');
const templatePath = resolve(distDir, 'index.html');
const ssrEntryPath = resolve(ssrDir, 'entry-server.js');

if (!existsSync(templatePath)) {
  console.error('dist/index.html missing — run `vite build` before prerender.');
  process.exit(1);
}
if (!existsSync(ssrEntryPath)) {
  console.error('dist/ssr/entry-server.js missing — run the SSR build before prerender.');
  process.exit(1);
}

const SITE_ORIGIN = 'https://wernerfrancisreineke.com';
const URLS = { de: `${SITE_ORIGIN}/`, en: `${SITE_ORIGIN}/en/` };
const HTML_LANG = { de: 'de-DE', en: 'en-US' };
const OG_LOCALE = { de: 'de_DE', en: 'en_US' };
const PERSON_DESCRIPTION = {
  de: 'Geschäftsführer der Reineke Technik GmbH, Speaker und Ansprechpartner für Cybersecurity, IT-Sicherheitsstrategie und NIS-2.',
  en: 'Managing Director of Reineke Technik GmbH, speaker, and contact for cybersecurity, IT security strategy, and NIS-2.',
};
const JOB_TITLE = {
  de: 'Geschäftsführer der Reineke Technik GmbH',
  en: 'Managing Director of Reineke Technik GmbH',
};
const OCCUPATION_NAME = { de: 'Geschäftsführer', en: 'Managing Director' };

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const ORG_ID = 'https://www.reineke-technik.de/#organization';
const ORG_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Geseker Straße 26',
  postalCode: '33154',
  addressLocality: 'Salzkotten',
  addressRegion: 'NRW',
  addressCountry: 'DE',
};
const ORG_SAME_AS = [
  'https://www.linkedin.com/company/reineke-technik/',
  'https://www.instagram.com/reineketechnik/',
  'https://x.com/ReinekeTechnik',
];
const BREADCRUMB_HOME_NAME = { de: 'Startseite', en: 'Home' };
const BREADCRUMB_PROFILE_NAME = { de: 'Profil', en: 'Profile' };

function buildSchemas(language, t) {
  const url = URLS[language];
  const personId = `${SITE_ORIGIN}/#person`;
  const websiteId = `${SITE_ORIGIN}/#website`;

  return [
    {
      id: 'website-schema',
      data: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_ORIGIN + '/',
        name: 'Werner Francis Reineke',
        inLanguage: HTML_LANG[language],
        description: t.siteDescription,
        publisher: { '@id': personId },
      },
    },
    {
      id: 'profile-page-schema',
      data: {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': `${url}#profile`,
        url,
        name: 'Werner Francis Reineke',
        description: t.siteDescription,
        inLanguage: HTML_LANG[language],
        mainEntity: { '@id': personId },
        isPartOf: { '@id': websiteId },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
    },
    {
      id: 'breadcrumb-schema',
      data: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: BREADCRUMB_HOME_NAME[language],
            item: url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: BREADCRUMB_PROFILE_NAME[language],
          },
        ],
      },
    },
    {
      id: 'organization-schema',
      data: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'Reineke Technik GmbH',
        legalName: 'Reineke Technik GmbH',
        url: 'https://www.reineke-technik.de/',
        logo: `${SITE_ORIGIN}/wfr_logo/logo-wfr-master.png`,
        image: `${SITE_ORIGIN}/wfr_logo/logo-wfr-master.png`,
        email: 'info@reineke-technik.de',
        telephone: '+49 5258 987282',
        address: ORG_ADDRESS,
        sameAs: ORG_SAME_AS,
        founder: { '@id': personId },
      },
    },
    {
      id: 'person-schema',
      data: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': personId,
        name: 'Werner Francis Reineke',
        givenName: 'Werner Francis',
        familyName: 'Reineke',
        alternateName: ['Werner Reineke'],
        description: PERSON_DESCRIPTION[language],
        url: SITE_ORIGIN + '/',
        mainEntityOfPage: SITE_ORIGIN + '/',
        image: [
          `${SITE_ORIGIN}/werner-francis-reineke.jpg`,
          `${SITE_ORIGIN}/wfr_logo/og-image.png`,
        ],
        worksFor: { '@id': ORG_ID },
        workLocation: {
          '@type': 'Place',
          name: 'Salzkotten',
          address: ORG_ADDRESS,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'business',
          email: 'info@reineke-technik.de',
          telephone: '+49 5258 987282',
          availableLanguage: ['de', 'en'],
          areaServed: 'DE',
        },
        alumniOf: [
          { '@type': 'CollegeOrUniversity', name: 'DePaul University Jarvis College of Computing and Digital Media' },
          { '@type': 'CollegeOrUniversity', name: 'ETH Zurich' },
        ],
        hasOccupation: [
          {
            '@type': 'Occupation',
            name: OCCUPATION_NAME[language],
            occupationLocation: { '@type': 'City', name: 'Salzkotten' },
          },
          { '@type': 'Occupation', name: 'Cybersecurity Speaker' },
        ],
        jobTitle: JOB_TITLE[language],
        nationality: { '@type': 'Country', name: 'Germany' },
        knowsLanguage: ['de', 'en'],
        sameAs: [
          'https://www.linkedin.com/in/werner-reineke/',
          'https://www.reineke-technik.de/unternehmen/team/',
        ],
        knowsAbout: ['Cybersecurity', 'IT-Sicherheitsstrategie', 'NIS-2'],
        subjectOf: t.articles.map((article) => ({
          '@type': 'Article',
          headline: article.title,
          url: article.href,
        })),
      },
    },
    {
      id: 'faq-schema',
      data: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: HTML_LANG[language],
        mainEntity: t.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    },
  ];
}

function buildSeoHead(language) {
  const t = translations[language];
  const url = URLS[language];
  const title = escapeHtml(t.siteTitle);
  const description = escapeHtml(t.siteDescription);
  const portrait = `${SITE_ORIGIN}/werner-francis-reineke.jpg`;
  const portraitAlt = escapeHtml(t.portraitAlt);

  const meta = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="author" content="Werner Francis Reineke" />`,
    `<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Werner Francis Reineke" />`,
    `<meta property="og:locale" content="${OG_LOCALE[language]}" />`,
    `<meta property="og:locale:alternate" content="${OG_LOCALE[language === 'de' ? 'en' : 'de']}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${portrait}" />`,
    `<meta property="og:image:alt" content="${portraitAlt}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${portrait}" />`,
    `<meta name="twitter:image:alt" content="${portraitAlt}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="de" href="${URLS.de}" />`,
    `<link rel="alternate" hreflang="en" href="${URLS.en}" />`,
    `<link rel="alternate" hreflang="x-default" href="${URLS.de}" />`,
  ];

  const schemas = buildSchemas(language, t)
    .map(({ id, data }) => `<script id="${id}" type="application/ld+json">${JSON.stringify(data)}</script>`)
    .join('\n    ');

  return [...meta, schemas].join('\n    ');
}

const { render } = await import(pathToFileURL(ssrEntryPath).href);
const template = readFileSync(templatePath, 'utf-8');

function prerender(language, outPath) {
  const head = buildSeoHead(language);
  const body = render(language);
  let html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${language}">`)
    .replace('<!--seo-head-->', head)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  writeFileSync(outPath, html, 'utf-8');
  console.log(`Prerendered ${outPath} (${body.length} chars body, lang=${language})`);
}

prerender('de', resolve(distDir, 'index.html'));

const enDir = resolve(distDir, 'en');
mkdirSync(enDir, { recursive: true });
prerender('en', resolve(enDir, 'index.html'));

rmSync(ssrDir, { recursive: true, force: true });
