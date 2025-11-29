import Link from 'next/link';
import styles from './HomeContent.module.css';
import {
  ASSET_BASE,
  FALLBACK_HOME,
  getFallback,
} from '../lib/fallback-content';

function resolveSectionData(target, fallbackSection) {
  return {
    ...fallbackSection,
    ...(target || {}),
  };
}

function resolveArray(target, fallbackArray) {
  return Array.isArray(target) && target.length ? target : fallbackArray;
}

export default function HomeContent({ dictionary = {}, locale = 'he' }) {
  const fallback = getFallback(locale, FALLBACK_HOME);
  const home = dictionary.home || {};

  const hero = resolveSectionData(home.hero, fallback.hero);
  const partners = {
    ...resolveSectionData(home.partners, fallback.partners),
    logos: resolveArray(home.partners?.logos, fallback.partners.logos),
  };
  const products = {
    ...resolveSectionData(home.products, fallback.products),
    cards: resolveArray(home.products?.cards, fallback.products.cards),
  };
  const aiBanner = {
    ...resolveSectionData(home.aiBanner, fallback.aiBanner),
    avatars: resolveArray(home.aiBanner?.avatars, fallback.aiBanner.avatars),
  };
  const heroMedia = resolveSectionData(home.heroMedia, fallback.heroMedia);
  const showcase = resolveSectionData(home.showcase, fallback.showcase);
  const contact = {
    ...resolveSectionData(home.contact, fallback.contact),
    form: resolveSectionData(home.contact?.form, fallback.contact.form),
    customCta: resolveSectionData(
      home.contact?.customCta,
      fallback.contact.customCta
    ),
  };

  const isRtl = locale === 'he';

  return (
    <div className={`${styles.root}${isRtl ? ` ${styles.rtl}` : ''}`}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleSegment}>{hero.titlePrefix}</span>
            <span className={styles.heroTitleHighlight}>
              {hero.titleHighlight}
            </span>
            <span className={styles.heroTitleSegment}>{hero.titleSuffix}</span>
          </h1>
          <p className={styles.heroDescription}>{hero.description}</p>
          <form className={styles.heroForm}>
            <input
              type="tel"
              className={styles.heroInput}
              placeholder={hero.inputPlaceholder}
              aria-label={hero.inputPlaceholder}
            />
            <button type="submit" className={styles.heroButton}>
              {hero.primaryCta}
            </button>
          </form>
        </div>
        <div className={styles.heroMedia}>
          <img
            src={`${ASSET_BASE}${heroMedia.image}`}
            alt={heroMedia.imageAlt}
            className={styles.heroImage}
          />
        </div>
      </section>

      <section className={styles.partners}>
        <p className={styles.partnersTagline}>{partners.tagline}</p>
        <div className={styles.partnerLogos}>
          {partners.logos.map((logo) => (
            <img
              key={`${logo.src}-${logo.alt}`}
              src={`${ASSET_BASE}${logo.src}`}
              alt={logo.alt || 'Partner logo'}
              className={styles.partnerLogo}
            />
          ))}
        </div>
      </section>

      <section className={styles.products} id="products">
        <div className={styles.productsHeadingRow}>
          <h2 className={styles.productsTitle}>{products.heading}</h2>
          <Link href="#contact" className={styles.productsCta}>
            <span>{contact.customCta.label}</span>
            <strong>{contact.customCta.highlight}</strong>
          </Link>
        </div>
        <div className={styles.productGrid}>
          {products.cards.map((card) => (
            <article
              key={card.id || card.title}
              id={card.id || undefined}
              className={styles.productCard}
            >
              <div className={styles.productIconWrapper}>
                <img
                  src={`${ASSET_BASE}${card.icon}`}
                  alt=""
                  className={styles.productIcon}
                />
              </div>
              <h3 className={styles.productTitle}>{card.title}</h3>
              <h4 className={styles.productSubtitle}>{card.subtitle}</h4>
              <p className={styles.productDescription}>{card.description}</p>
              <Link href={card.linkHref || '#'} className={styles.productLink}>
                {card.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.aiBanner}>
        <div className={styles.aiAvatars}>
          {aiBanner.avatars.map((avatar) => (
            <span key={avatar.src} className={styles.aiAvatar}>
              <img
                src={`${ASSET_BASE}${avatar.src}`}
                alt={avatar.alt || 'Avatar'}
              />
            </span>
          ))}
        </div>
        <div className={styles.aiText}>
          <div className={styles.aiReady}>{aiBanner.ready}</div>
          <div className={styles.aiTitle}>
            <span>{aiBanner.titlePrefix} </span>
            <strong>{aiBanner.titleHighlight}</strong>
            <span> {aiBanner.titleSuffix}</span>
          </div>
        </div>
        <div className={styles.aiCta}>
          <Link href="#contact" className={styles.aiCtaLink}>
            {aiBanner.ctaLabel}
          </Link>
        </div>
      </section>

      <section className={styles.showcase}>
        <div className={styles.showcaseImageWrapper}>
          <img
            src={`${ASSET_BASE}${showcase.image}`}
            alt={showcase.imageAlt}
            className={styles.showcaseImage}
          />
        </div>
      </section>

      <section className={styles.contactSection} id="contact">
        <div className={styles.contactContainer}>
          <aside className={styles.contactSidebar}>
            <h3 className={styles.contactHeading}>{contact.heading}</h3>
            <p className={styles.contactLead}>{contact.lead}</p>
            <p className={styles.contactPromise}>{contact.promise}</p>
            <div className={styles.contactGuarantee}>{contact.guarantee}</div>
          </aside>
          <form className={styles.contactForm}>
            <div className={styles.formGrid}>
              <label className={styles.formField}>
                <span className={styles.formLabel}>
                  {contact.form.nameLabel}
                </span>
                <input
                  type="text"
                  name="full-name"
                  placeholder={contact.form.namePlaceholder}
                  className={styles.formInput}
                  required
                />
              </label>
              <label className={styles.formField}>
                <span className={styles.formLabel}>
                  {contact.form.phoneLabel}
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder={contact.form.phonePlaceholder}
                  className={styles.formInput}
                  required
                />
              </label>
              <label className={styles.formField}>
                <span className={styles.formLabel}>
                  {contact.form.emailLabel}
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder={contact.form.emailPlaceholder}
                  className={styles.formInput}
                  required
                />
              </label>
              <label className={`${styles.formField} ${styles.selectField}`}>
                <span className={styles.formLabel}>
                  {contact.form.interestLabel}
                </span>
                <div className={styles.selectWrapper}>
                  <select
                    name="interest"
                    className={`${styles.formInput} ${styles.formSelect}`}
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {contact.form.interestPlaceholder}
                    </option>
                    {contact.form.interestOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <span className={styles.selectIcon} aria-hidden="true" />
                </div>
              </label>
              <label className={`${styles.formField} ${styles.fullWidth}`}>
                <textarea
                  name="needs"
                  rows={3}
                  placeholder={contact.form.messagePlaceholder}
                  className={`${styles.formInput} ${styles.formTextArea}`}
                />
              </label>
            </div>
            <label className={styles.consentRow}>
              <input type="checkbox" name="consent" required defaultChecked />
              <span>{contact.form.consentLabel}</span>
            </label>
            <button type="submit" className={styles.submitButton}>
              {contact.form.submitLabel}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
