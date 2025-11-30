'use client';

import { useEffect, useRef, useState } from 'react';

const TEXT_SCALE_OPTIONS = [
  {
    id: 'standard',
    labels: {
      en: { label: 'Default', description: 'Standard text size' },
      he: { label: 'ברירת מחדל', description: 'גודל טקסט רגיל' },
    },
  },
  {
    id: 'large',
    labels: {
      en: { label: 'Large', description: 'Increase text by 12%' },
      he: { label: 'גדול', description: 'הגדלה של כ-12%' },
    },
  },
  {
    id: 'xlarge',
    labels: {
      en: { label: 'Extra large', description: 'Increase text by 20%' },
      he: { label: 'ענק', description: 'הגדלה של כ-20%' },
    },
  },
];

const CONTRAST_OPTIONS = [
  {
    id: 'standard',
    labels: {
      en: { label: 'Standard', description: 'Brand color theme' },
      he: { label: 'רגיל', description: 'ערכת צבעי המותג' },
    },
  },
  {
    id: 'high',
    labels: {
      en: {
        label: 'High contrast',
        description: 'Dark background with bold, high-visibility accents',
      },
      he: {
        label: 'ניגודיות גבוהה',
        description: 'רקע כהה עם הדגשות בולטות לקריאות מושלמת',
      },
    },
  },
];

const LABELS = {
  en: {
    fabLabel: 'Accessibility options',
    panelTitle: 'Accessibility',
    textSizeTitle: 'Text size',
    contrastTitle: 'Contrast',
    closeLabel: 'Close panel',
    decreaseText: 'Decrease text size',
    increaseText: 'Increase text size',
    textSizeStatus: 'Current text size',
  },
  he: {
    fabLabel: 'אפשרויות נגישות',
    panelTitle: 'נגישות',
    textSizeTitle: 'גודל טקסט',
    contrastTitle: 'ניגודיות',
    closeLabel: 'סגור חלון',
    decreaseText: 'הקטנת גודל הטקסט',
    increaseText: 'הגדלת גודל הטקסט',
    textSizeStatus: 'גודל הטקסט הנוכחי',
  },
};

const STORAGE_KEY = 'accessibility-preferences';

function getLocalizedLabels(locale) {
  if (LABELS[locale]) {
    return LABELS[locale];
  }
  return LABELS.en;
}

function applyPreferences(textScale, contrastMode) {
  if (typeof document === 'undefined') {
    return;
  }

  const root = document.documentElement;

  root.dataset.textScale = textScale;
  root.dataset.contrast = contrastMode;
}

function loadPreferences() {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed === 'object' &&
      typeof parsed.textScale === 'string' &&
      typeof parsed.contrastMode === 'string'
    ) {
      return {
        textScale: parsed.textScale,
        contrastMode: parsed.contrastMode,
      };
    }
  } catch (error) {
    console.warn('Failed to read accessibility preferences', error);
  }
  return null;
}

function storePreferences(textScale, contrastMode) {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    const payload = JSON.stringify({ textScale, contrastMode });
    window.localStorage.setItem(STORAGE_KEY, payload);
  } catch (error) {
    console.warn('Failed to store accessibility preferences', error);
  }
}

function resolveOptionCopy(option, locale) {
  if (option.labels?.[locale]) {
    return option.labels[locale];
  }
  if (option.labels?.en) {
    return option.labels.en;
  }
  return { label: option.id, description: '' };
}

export default function AccessibilityControls({ locale = 'en' }) {
  const labels = getLocalizedLabels(locale);
  const [isOpen, setIsOpen] = useState(false);
  const [textScale, setTextScale] = useState(TEXT_SCALE_OPTIONS[0].id);
  const [contrastMode, setContrastMode] = useState(CONTRAST_OPTIONS[0].id);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);
  const panelId = 'accessibility-controls-panel';
  const currentScaleIndex = TEXT_SCALE_OPTIONS.findIndex(
    (option) => option.id === textScale
  );
  const currentScaleOption =
    TEXT_SCALE_OPTIONS[currentScaleIndex] || TEXT_SCALE_OPTIONS[0];
  const currentScaleCopy = resolveOptionCopy(currentScaleOption, locale);
  const hasSmallerScale = currentScaleIndex > 0;
  const hasLargerScale = currentScaleIndex < TEXT_SCALE_OPTIONS.length - 1;

  useEffect(() => {
    const stored = loadPreferences();
    if (stored) {
      setTextScale(stored.textScale);
      setContrastMode(stored.contrastMode);
      applyPreferences(stored.textScale, stored.contrastMode);
    } else {
      applyPreferences(textScale, contrastMode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    applyPreferences(textScale, contrastMode);
    storePreferences(textScale, contrastMode);
  }, [textScale, contrastMode]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleClick(event) {
      if (!panelRef.current || !triggerRef.current) {
        return;
      }
      if (
        panelRef.current.contains(event.target) ||
        triggerRef.current.contains(event.target)
      ) {
        return;
      }
      setIsOpen(false);
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        if (triggerRef.current) {
          triggerRef.current.focus();
        }
      }
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const changeTextScale = (direction) => {
    if (direction === 0) {
      return;
    }
    let nextIndex = currentScaleIndex + direction;
    if (nextIndex < 0) {
      nextIndex = 0;
    }
    if (nextIndex > TEXT_SCALE_OPTIONS.length - 1) {
      nextIndex = TEXT_SCALE_OPTIONS.length - 1;
    }
    const nextOption = TEXT_SCALE_OPTIONS[nextIndex];
    if (nextOption) {
      setTextScale(nextOption.id);
    }
  };

  const selectContrast = (value) => {
    setContrastMode(value);
  };

  return (
    <>
      <button
        type="button"
        ref={triggerRef}
        className="accessibilityFab"
        aria-label={labels.fabLabel}
        aria-controls={panelId}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        onClick={handleToggle}
      >
        <span aria-hidden="true" className="accessibilityFabIcon">
          A
        </span>
      </button>
      <div
        ref={panelRef}
        id={panelId}
        role="dialog"
        aria-modal="false"
        aria-labelledby={`${panelId}-title`}
        className={`accessibilityPanel${isOpen ? ' open' : ''}`}
      >
        <div className="accessibilityPanelHeader">
          <h2 id={`${panelId}-title`} className="accessibilityPanelTitle">
            {labels.panelTitle}
          </h2>
          <button
            type="button"
            className="accessibilityCloseButton"
            onClick={() => setIsOpen(false)}
            aria-label={labels.closeLabel}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 4l12 12m0-12L4 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="accessibilitySections">
          <section className="accessibilitySection" aria-label={labels.textSizeTitle}>
            <h3 className="accessibilitySectionTitle">{labels.textSizeTitle}</h3>
            <div className="accessibilityStepper" role="group" aria-label={labels.textSizeTitle}>
              <button
                type="button"
                className="accessibilityStepperButton"
                onClick={() => changeTextScale(-1)}
                aria-label={labels.decreaseText}
                disabled={!hasSmallerScale}
              >
                <span aria-hidden="true">−</span>
              </button>
              <div className="accessibilityStepperValue" aria-live="polite">
                <span className="accessibilityStepperLabel">
                  {labels.textSizeStatus}: {currentScaleCopy.label}
                </span>
                <span className="accessibilityStepperDescription">
                  {currentScaleCopy.description}
                </span>
              </div>
              <button
                type="button"
                className="accessibilityStepperButton"
                onClick={() => changeTextScale(1)}
                aria-label={labels.increaseText}
                disabled={!hasLargerScale}
              >
                <span aria-hidden="true">+</span>
              </button>
            </div>
          </section>

          <section className="accessibilitySection" aria-label={labels.contrastTitle}>
            <h3 className="accessibilitySectionTitle">{labels.contrastTitle}</h3>
            <div className="accessibilityOptionGroup">
              {CONTRAST_OPTIONS.map((option) => {
                const copy = resolveOptionCopy(option, locale);
                return (
                  <button
                    type="button"
                    key={option.id}
                    className="accessibilityOption"
                    onClick={() => selectContrast(option.id)}
                    aria-pressed={contrastMode === option.id}
                  >
                    <span className="accessibilityOptionLabel">{copy.label}</span>
                    <span className="accessibilityOptionDescription">
                      {copy.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
