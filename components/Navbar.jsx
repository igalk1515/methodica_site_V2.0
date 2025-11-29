'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Navbar.module.css';
import { FALLBACK_NAVBAR, getFallback } from '../lib/fallback-content';

function resolveLocalizedString(value, locale, fallbackValue) {
  if (typeof value === 'string' && value.trim()) {
    return value;
  }

  if (value && typeof value === 'object') {
    if (typeof value[locale] === 'string' && value[locale].trim()) {
      return value[locale];
    }
    if (typeof value.en === 'string' && value.en.trim()) {
      return value.en;
    }
  }

  return fallbackValue;
}

function resolveDropdownItems(dictionary, links, fallbackItems) {
  if (Array.isArray(dictionary?.navDropdown) && dictionary.navDropdown.length) {
    return dictionary.navDropdown;
  }

  if (Array.isArray(links) && links.length) {
    return links.map((link) => ({
      label: link.label,
      href: link.href || '#',
    }));
  }

  return fallbackItems;
}

export default function Navbar({
  locale = 'en',
  links = [],
  brandLabel = 'Methodica',
  localesList = [],
  dictionary = {},
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const fallback = getFallback(locale, FALLBACK_NAVBAR);
  const servicesLabel = resolveLocalizedString(
    dictionary.navServices,
    locale,
    fallback.navServices
  );
  const blogLabel = resolveLocalizedString(
    dictionary.navBlog,
    locale,
    fallback.navBlog
  );
  const aboutLabel = resolveLocalizedString(
    dictionary.navAbout,
    locale,
    fallback.navAbout
  );
  const contactLabel = resolveLocalizedString(
    dictionary.navContact,
    locale,
    fallback.navContact
  );
  const dropdownItems = resolveDropdownItems(
    dictionary,
    links,
    fallback.navDropdown
  );
  const blogHref = dictionary.navBlogHref || fallback.navBlogHref;
  const aboutHref = dictionary.navAboutHref || fallback.navAboutHref;
  const headerClassName = isScrolled
    ? `${styles.header} ${styles.scrolled}`
    : styles.header;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={headerClassName}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="https://kdpnvubujvilzhspxsru.supabase.co/storage/v1/object/public/images/methodica_logo.png"
            alt={brandLabel || 'Methodica'}
          />
        </div>
        <nav className={styles.nav} aria-label="Primary navigation">
          <div className={styles.dropdown}>
            <button type="button" className={styles.navButton}>
              <span>{servicesLabel}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.icon}
                aria-hidden="true"
                focusable="false"
              >
                <path d="m18 9-6 6-6-6" />
              </svg>
            </button>
            <div className={styles.dropdownMenu}>
              {dropdownItems.map((item) => (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={item.href || '#'}
                  className={styles.dropdownItem}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href={blogHref} className={styles.navLink}>
            {blogLabel}
          </Link>
          <Link href={aboutHref} className={styles.navLink}>
            {aboutLabel}
          </Link>
        </nav>
        <div className={styles.actions}>
          {localesList.length > 1 && (
            <div className={styles.language}>
              <LanguageSwitcher currentLocale={locale} locales={localesList} />
            </div>
          )}
          <Link href="#contact" className={styles.contactButton}>
            {contactLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
