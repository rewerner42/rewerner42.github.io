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
import { translations } from './translations.js';
const portrait = '/werner-francis-reineke.jpg';
const manualLanguageStorageKey = 'site-language-manual';
const legacyLanguageStorageKey = 'site-language';

const detectInitialLanguage = () => {
  if (typeof window === 'undefined') return 'de';
  return window.location.pathname.toLowerCase().startsWith('/en') ? 'en' : 'de';
};

export default function WernerFrancisReinekeOnePager({ initialLanguage } = {}) {

  const roleIcons = [Shield, Mic2, Briefcase];
  const focusIcons = [ScanSearch, Landmark, Cpu];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(legacyLanguageStorageKey);
    }
  }, []);

  const [language] = useState(() => initialLanguage ?? detectInitialLanguage());
  const t = useMemo(() => translations[language], [language]);

  const toggleLanguage = () => {
    if (typeof window === 'undefined') return;
    const next = language === 'de' ? 'en' : 'de';
    window.localStorage.setItem(manualLanguageStorageKey, next);
    const path = next === 'en' ? '/en/' : '/';
    window.location.href = path + (window.location.hash || '');
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
                      fetchpriority="high"
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
