'use client';

import styles from "./FeatureSection.module.css";

export default function FeatureSection({ items = [] }) {
  return (
    <section className={styles.section}>
      {items.map((item, index) => (
        <div className={styles.item} key={`${item}-${index}`}>
          {item}
        </div>
      ))}
    </section>
  );
}
