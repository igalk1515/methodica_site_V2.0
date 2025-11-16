import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getDictionary, locales } from "../i18n";

export default function LocaleLayout({ children, params }) {
  const { locale } = params;
  const dictionary = getDictionary(locale);
  const direction = locale === "he" ? "rtl" : "ltr";

  const links = (dictionary.navLinks || []).map((label, index) => ({
    label,
    href: `/${locale}#section-${index + 1}`
  }));

  return (
    <div lang={locale} dir={direction}>
      <Navbar
        locale={locale}
        brandLabel={dictionary.title}
        links={links}
        localesList={locales}
      />
      <main>{children}</main>
      <Footer text={dictionary.footer} locale={locale} />
    </div>
  );
}
