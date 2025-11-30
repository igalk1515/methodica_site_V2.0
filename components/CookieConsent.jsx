'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'methodica_cookie_consent';

export default function CookieConsent({ locale = 'he' }) {
  const messages = useMemo(() => {
    if (locale === 'he') {
      return {
        title: 'אנחנו משתמשים בעוגיות',
        body: "אנחנו משתמשים בעוגיות (Cookies) כדי לשפר את חוויית הגלישה, לבצע מדידה סטטיסטית ולהציע תכנים מותאמים. לחיצה על 'מאשר' מהווה הסכמה לשימוש זה.",
        accept: 'מאשר',
        dismiss: 'דחה לא חיוני',
      };
    }

    return {
      title: 'We use cookies',
      body: "We rely on cookies to improve your browsing experience, analyse traffic, and deliver personalised content. Selecting 'Allow' gives your consent to this use.",
      accept: 'Allow',
      dismiss: 'Reject non-essential',
    };
  }, [locale]);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleAccept = useCallback(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ status: 'accepted', timestamp: Date.now(), locale })
      );
    } catch (error) {
      console.warn('Failed to persist cookie consent', error);
    }

    setVisible(false);
  }, [locale]);

  const handleDismiss = useCallback(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ status: 'dismissed', timestamp: Date.now(), locale })
      );
    } catch (error) {
      console.warn('Failed to store dismissal state', error);
    }

    setVisible(false);
  }, [locale]);

  if (!visible) {
    return null;
  }

  return (
    <aside
      className="cookieBanner"
      data-rtl={locale === 'he'}
      role="region"
      aria-live="polite"
    >
      <div className="cookieText" role="heading" aria-level={2}>
        <strong>{messages.title}</strong>
      </div>
      <div className="cookieText">{messages.body}</div>
      <div className="cookieActions">
        <button type="button" className="cookieButton" onClick={handleAccept}>
          {messages.accept}
        </button>
        <button
          type="button"
          className="cookieButton cookieButtonSecondary"
          onClick={handleDismiss}
        >
          {messages.dismiss}
        </button>
      </div>
    </aside>
  );
}
