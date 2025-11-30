import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import AccessibilityControls from '../../components/AccessibilityControls';
import CookieConsent from '../../components/CookieConsent';
import { getDictionary, locales } from '../i18n';

export default function LocaleLayout({ children, params }) {
  const { locale } = params;
  const dictionary = getDictionary(locale);
  const direction = locale === 'he' ? 'rtl' : 'ltr';
  const skipLinkLabel = locale === 'he' ? 'דלג לתוכן' : 'Skip to content';

  const dropdownSource = Array.isArray(dictionary.navDropdown)
    ? dictionary.navDropdown
    : dictionary.navLinks || [];

  const links = dropdownSource.map((item, index) => {
    const label = typeof item === 'string' ? item : item.label;
    const href =
      typeof item === 'string'
        ? `/${locale}#section-${index + 1}`
        : item.href || `/${locale}#section-${index + 1}`;

    return { label, href };
  });

  return (
    <div lang={locale} dir={direction}>
      <a href="#main-content" className="skipLink">
        {skipLinkLabel}
      </a>
      <Navbar
        locale={locale}
        brandLabel={dictionary.title}
        links={links}
        localesList={locales}
        dictionary={dictionary}
      />
      <main id="main-content">{children}</main>
      <Footer dictionary={dictionary} locale={locale} />
      <WhatsAppButton />
      <AccessibilityControls locale={locale} />
      <CookieConsent locale={locale} />
    </div>
  );
}
