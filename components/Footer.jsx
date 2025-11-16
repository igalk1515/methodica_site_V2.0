import styles from "./Footer.module.css";

export default function Footer({ text = "Placeholder footer", locale }) {
  return (
    <footer className={styles.footer}>
      <small>{text}</small>
      {locale && <div>Locale: {locale}</div>}
    </footer>
  );
}
