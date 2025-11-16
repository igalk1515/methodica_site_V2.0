'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher({ currentLocale, locales = [] }) {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length && locales.includes(segments[0])) {
    segments.shift();
  }

  const trailingPath = segments.join("/");

  return (
    <div className={styles.switcher}>
      {locales.map((locale) => {
        const href = `/${locale}${trailingPath ? `/${trailingPath}` : ""}`;
        const isActive = locale === currentLocale;
        const className = `${styles.option}${isActive ? ` ${styles.active}` : ""}`;

        return (
          <Link key={locale} href={href} className={className}>
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
