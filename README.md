# Methodica Landing Skeleton

Starter Next.js 14 App Router project prepared for bilingual (EN/HE) landing experiences with RTL-ready layouts, reusable components, and lazy-loaded sections.

## Project Features
- Next.js 14 App Router with a locale segment (`app/[locale]`) and shared chrome
- Custom middleware that injects the default locale for bare paths (`/` → `/he`) while preserving deep links
- Direction-aware layout wrapper so Hebrew renders with `dir="rtl"`
- Placeholder landing components (Navbar, Hero, FeatureSection, Footer, LanguageSwitcher) wired with props
- CSS Modules for every component plus a minimal global reset
- Lazy-loaded FeatureSection using `next/dynamic`
- Translation dictionaries served from `public/locales/{locale}/common.json`

## Quick Start
```bash
npm install
npm run dev
```
The dev server defaults to <http://localhost:3000>. Hit `/` to be redirected to the default locale (`/he`) or navigate directly to `/en` and `/he`.

## Project Structure
```
project/
├─ next.config.js          # base Next config (strict mode)
├─ middleware.js           # locale injector + root redirect
├─ package.json            # scripts and dependencies
├─ README.md               # this guide
├─ lib/
│  └─ i18n-config.js       # shared locale list + defaults
├─ app/
│  ├─ layout.js            # root HTML + globals
│  ├─ page.js              # redirects / → /{defaultLocale}
│  ├─ globals.css          # reset + RTL helper
│  ├─ i18n.js              # locale helpers
│  └─ [locale]/
│     ├─ layout.js         # locale-aware shell
│     ├─ page.js           # landing skeleton
│     └─ (pages)/placeholder/.keep  # reserved segment
├─ components/             # reusable UI blocks + CSS Modules
├─ public/locales/en/      # English translations
└─ public/locales/he/      # Hebrew translations
```

## Request / Routing Flow
1. **Incoming request** hits `middleware.js`. If the pathname lacks a supported locale prefix, the middleware clones the URL and injects `/${defaultLocale}` (configured in `lib/i18n-config.js`).
2. **`app/page.js` fallback** calls `redirect('/${defaultLocale}')` so even SSR paths that skip middleware continue to land on the correct locale.
3. **`app/[locale]/layout.js`** renders the shared chrome (Navbar + Footer), sets the `lang`/`dir` attributes, and passes locale lists into the `LanguageSwitcher`.
4. **`app/[locale]/page.js`** loads the right dictionary via `getDictionary(locale)` and renders Hero + lazy FeatureSection.
5. **`LanguageSwitcher.jsx`** runs on the client, reading `usePathname()` to rebuild the current route for each locale link.

Hebrew pages automatically render with `dir="rtl"` through the locale layout wrapper, and global styles cover RTL basics.

## Components & Styling
Each component has:
- A dedicated `.module.css` file with lightweight structural rules only.
- Prop-driven placeholders so future content can swap in without structural changes.
- Centralized exports via `components/index.js` (currently a placeholder for future barrel exports).

Included components:
- `Navbar` – brand placeholder, nav links derived from translations, and an embedded `LanguageSwitcher`.
- `Hero` – title/subtitle/CTA placeholder region.
- `FeatureSection` – simple grid of placeholder feature cards, lazy-loaded with `next/dynamic`.
- `Footer` – footer text placeholder plus locale indicator.
- `LanguageSwitcher` – client component that inspects `usePathname` to build locale-safe links.

## Lazy Loading
`app/[locale]/page.js` contains:
```js
const FeatureSection = dynamic(() => import("../../components/FeatureSection"));
```
This ensures the FeatureSection bundle loads only when needed, illustrating how to defer lower-priority content.

## Working with the Skeleton
### Add a New Page
1. Create a folder under `app/[locale]/(pages)/your-page`.
2. Add `page.js` (and optional layout) that consumes `getDictionary(locale)` for strings.
3. Update `navLinks` translations to expose navigation entries.

### Add a New Language
1. Append the locale code to `lib/i18n-config.js` (this drives middleware, layouts, and switcher options).
2. Create `public/locales/<code>/common.json` with the required keys.
3. `app/i18n.js` automatically exposes the updated list; `Navbar` and the middleware will use it with no extra wiring.

### Add a New Component
1. Create `components/MyComponent.jsx` plus `components/MyComponent.module.css`.
2. Keep the component prop-driven and export it via `components/index.js` when ready for reuse.
3. Import the component into the relevant page or layout.

### Add or Update Translations
1. Edit the locale JSON inside `public/locales/{locale}/common.json`.
2. Ensure each file maintains the same shape (e.g., `title`, `subtitle`, `cta`, `features`, `footer`, `navLinks`).
3. Restart the dev server if new keys are introduced to guarantee they propagate.

## File-by-File Notes
- `next.config.js` – Next.js base config (strict mode on).
- `package.json` – wires `next dev/build/start/lint` scripts with React 18 + Next 14 dependencies.
- `app/layout.js` – bootstraps HTML shell and global styles.
- `middleware.js` – injects missing locale prefixes and handles `/` → `/${defaultLocale}`.
- `app/page.js` – fallback redirect (rarely hit thanks to middleware, but maintains explicit intent).
- `lib/i18n-config.js` – single source of truth for supported locales.
- `app/globals.css` – minimal reset and RTL helper selectors.
- `app/i18n.js` – locale registry and dictionary resolver.
- `app/[locale]/layout.js` – locale-aware chrome, direction handling, and shared components.
- `app/[locale]/page.js` – landing skeleton combining Hero + lazy FeatureSection.
- `components/*` – reusable UI primitives with matching CSS Modules.
- `public/locales/*/common.json` – source of truth for placeholder copy per language.

With this scaffold you can immediately iterate on structure, styling, and content without reworking routing, RTL support, or component composition.
