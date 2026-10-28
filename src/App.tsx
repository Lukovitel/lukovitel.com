import { ContactFab } from './ContactFab.tsx'
import { copy, linkedinUrl, mailHref, partners, salesEmail } from './copy.ts'
import { LogoMark } from './Logo.tsx'
import { localeFromPath, pageFromPath, pathFor, type Locale } from './paths.ts'

const localeLabels: Record<Locale, string> = { en: 'EN', ru: 'RU' }

export default function App() {
  const pathname = window.location.pathname
  const locale = localeFromPath(pathname)
  const page = pageFromPath(pathname)
  const text = copy[locale]
  const home = pathFor(locale)
  const mail = mailHref(text.mailSubject)

  return (
    <div className="page">
      <header className="mast">
        <a className="logo" href={home}>
          <LogoMark />
          <span className="wordmark">Lukovitel</span>
        </a>
        <div className="mast-tools">
          <p className="mast-meta">{text.mast}</p>
          <nav className="langs" aria-label={text.langLabel}>
            {(['en', 'ru'] as const).map((item) => {
              const href = pathFor(item, page)
              const current = item === locale
              return (
                <a
                  key={item}
                  href={href}
                  hrefLang={item}
                  lang={item}
                  aria-current={current ? 'page' : undefined}
                >
                  {localeLabels[item]}
                </a>
              )
            })}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div>
            <p className="kicker">{text.kicker}</p>
            <h1>{text.h1}</h1>
          </div>
          <div className="hero-side">
            <p className="lede">{text.lede}</p>
            <a className="cta" href={mail}>
              {text.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="services" aria-label={text.servicesLabel}>
          {text.services.map((item) => (
            <article className="service" key={item.index}>
              <p className="index">{item.index}</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="network" aria-label={text.networkLabel}>
          <p className="index">{text.networkLabel}</p>
          {text.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="places" aria-label={text.placesLabel}>
          {text.places.map((place) => (
            <article key={place.city}>
              <p className="index">{place.city}</p>
              <h2>{place.country}</h2>
              <p>{place.text}</p>
            </article>
          ))}
        </section>

        <section className="partners" aria-label={text.partnersLabel}>
          <p className="index">{text.partnersLabel}</p>
          <p className="partners-intro">{text.partnersIntro}</p>
          <ul className="partner-list">
            {partners.map((partner) => (
              <li key={partner.href}>
                <a href={partner.href} rel="noopener noreferrer" target="_blank">
                  {partner[locale]}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="team" aria-label={text.teamLabel}>
          <p className="index">{text.teamLabel}</p>
          <div className="person">
            <img
              src="/team/andrew-lujansky.png"
              alt={text.personName}
              width="200"
              height="200"
            />
            <div>
              <h2>{text.personName}</h2>
              <p className="role">{text.personRole}</p>
              <p>{text.personText}</p>
              <p className="person-links">
                <a href={linkedinUrl} rel="noopener noreferrer" target="_blank">
                  {text.linkedin}
                </a>
                <a href={mail}>{salesEmail}</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>Lukovitel</p>
        <p>{text.footerNote}</p>
        <a href={mail}>{salesEmail}</a>
      </footer>

      <ContactFab copy={text} />
    </div>
  )
}
