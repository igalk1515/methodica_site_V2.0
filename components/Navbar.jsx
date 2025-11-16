import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./Navbar.module.css";

export default function Navbar({ locale, links = [], brandLabel = "Placeholder", localesList = [] }) {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>{brandLabel}</div>
      <nav>
        <ul className={styles.navList}>
          {links.map((link) => (
            <li className={styles.navItem} key={`${link.href}-${link.label}`}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <LanguageSwitcher currentLocale={locale} locales={localesList} />
    </header>
  );
}
