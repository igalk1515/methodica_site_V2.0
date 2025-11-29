import Link from 'next/link';
import styles from './Footer.module.css';
import { FALLBACK_FOOTER, getFallback } from '../lib/fallback-content';

function mergeFooterContent(dictionaryFooter = {}, fallback = {}) {
  return {
    ...fallback,
    ...dictionaryFooter,
    paragraphs:
      Array.isArray(dictionaryFooter.paragraphs) &&
      dictionaryFooter.paragraphs.length
        ? dictionaryFooter.paragraphs
        : fallback.paragraphs || [],
    socialLinks:
      Array.isArray(dictionaryFooter.socialLinks) &&
      dictionaryFooter.socialLinks.length
        ? dictionaryFooter.socialLinks
        : fallback.socialLinks || [],
    solutions:
      Array.isArray(dictionaryFooter.solutions) &&
      dictionaryFooter.solutions.length
        ? dictionaryFooter.solutions
        : fallback.solutions || [],
    resources:
      Array.isArray(dictionaryFooter.resources) &&
      dictionaryFooter.resources.length
        ? dictionaryFooter.resources
        : fallback.resources || [],
    about:
      Array.isArray(dictionaryFooter.about) && dictionaryFooter.about.length
        ? dictionaryFooter.about
        : fallback.about || [],
    policies:
      Array.isArray(dictionaryFooter.policies) &&
      dictionaryFooter.policies.length
        ? dictionaryFooter.policies
        : fallback.policies || [],
  };
}

export default function Footer({ dictionary = {}, locale = 'he' }) {
  const fallback = getFallback(locale, FALLBACK_FOOTER);
  const footerContent = mergeFooterContent(dictionary.footer, fallback);
  const isRtl = locale === 'he';

  return (
    <footer
      className={`${styles.footer}${isRtl ? ` ${styles.rtl}` : ''}`}
      id="site-footer"
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={`${styles.column} ${styles.columnWide}`}>
            <h3 className={styles.heading}>{footerContent.followTitle}</h3>
            <div className={styles.paragraphs}>
              {footerContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className={styles.socialRow}>
              {footerContent.socialLinks.map((link) => (
                <Link key={link.label} href={link.href || '#'}>
                  <span className={styles.socialBadge} aria-hidden="true">
                    {link.short || link.label.charAt(0)}
                  </span>
                  <span className={styles.visuallyHidden}>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>{footerContent.solutionsTitle}</h3>
            <ul className={styles.linkList}>
              {footerContent.solutions.map((item) => (
                <li key={item.label}>
                  <Link href={item.href || '#'}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>{footerContent.resourcesTitle}</h3>
            <ul className={styles.linkList}>
              {footerContent.resources.map((item) => (
                <li key={item.label}>
                  <Link href={item.href || '#'}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>{footerContent.aboutTitle}</h3>
            <ul className={styles.linkList}>
              {footerContent.about.map((item) => (
                <li key={item.label}>
                  <Link href={item.href || '#'}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottomRow}>
          <div className={styles.bottomRights}>{footerContent.rights}</div>
          <div className={styles.bottomLinks}>
            {footerContent.policies.map((item) => (
              <Link key={item.label} href={item.href || '#'}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
