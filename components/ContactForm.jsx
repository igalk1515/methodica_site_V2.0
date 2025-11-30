'use client';

import { useMemo, useState } from 'react';
import styles from './HomeContent.module.css';

export default function ContactForm({ contact, locale = 'he' }) {
  const messages = useMemo(() => {
    if (locale === 'he') {
      return {
        sending: 'שולח...',
        success: 'הטופס נשלח בהצלחה! נחזור אליך בהקדם.',
        error: 'אירעה שגיאה בעת שליחת הטופס. נסו שוב.',
      };
    }

    return {
      sending: 'Sending...',
      success: 'Thanks! We will contact you shortly.',
      error: 'Something went wrong. Please try again.',
    };
  }, [locale]);

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/demo-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          locale,
          payload,
          consent: formData.get('consent') === 'on',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus({ loading: false, success: true, error: null });
      event.currentTarget.reset();
    } catch (error) {
      setStatus({ loading: false, success: false, error: messages.error });
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.formGrid}>
        <label className={styles.formField}>
          <span className={styles.formLabel}>{contact.form.nameLabel}</span>
          <input
            type="text"
            name="full-name"
            placeholder={contact.form.namePlaceholder}
            className={styles.formInput}
            required
            disabled={status.loading}
          />
        </label>
        <label className={styles.formField}>
          <span className={styles.formLabel}>{contact.form.phoneLabel}</span>
          <input
            type="tel"
            name="phone"
            placeholder={contact.form.phonePlaceholder}
            className={styles.formInput}
            required
            disabled={status.loading}
          />
        </label>
        <label className={styles.formField}>
          <span className={styles.formLabel}>{contact.form.emailLabel}</span>
          <input
            type="email"
            name="email"
            placeholder={contact.form.emailPlaceholder}
            className={styles.formInput}
            required
            disabled={status.loading}
          />
        </label>
        <label className={`${styles.formField} ${styles.selectField}`}>
          <span className={styles.formLabel}>{contact.form.interestLabel}</span>
          <div className={styles.selectWrapper}>
            <select
              name="interest"
              className={`${styles.formInput} ${styles.formSelect}`}
              required
              defaultValue=""
              disabled={status.loading}
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
            disabled={status.loading}
          />
        </label>
      </div>
      <label className={styles.consentRow}>
        <input
          type="checkbox"
          name="consent"
          required
          disabled={status.loading}
        />
        <span>{contact.form.consentLabel}</span>
      </label>
      <button
        type="submit"
        className={styles.submitButton}
        disabled={status.loading}
      >
        {status.loading ? messages.sending : contact.form.submitLabel}
      </button>
      {status.success && (
        <p className={styles.formSuccess}>{messages.success}</p>
      )}
      {status.error && <p className={styles.formError}>{status.error}</p>}
    </form>
  );
}
