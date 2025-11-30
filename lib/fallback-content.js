const ASSET_BASE =
  'https://kdpnvubujvilzhspxsru.supabase.co/storage/v1/object/public/images/';

export const FALLBACK_NAVBAR = {
  he: {
    navServices: 'השירותים שלנו',
    navBlog: 'בלוג',
    navAbout: 'אודות',
    navContact: 'יצירת קשר',
    navBlogHref: '#products',
    navAboutHref: '/he/about',
    navDropdown: [
      { label: 'סוכן מכירות', href: '#product-sales' },
      { label: 'סוכן שירות לקוחות', href: '#product-support' },
      { label: 'סוכן בהתאמה אישית', href: '#product-custom' },
    ],
  },
  en: {
    navServices: 'Our Services',
    navBlog: 'Blog',
    navAbout: 'About',
    navContact: 'Contact',
    navBlogHref: '#products',
    navAboutHref: '/en/about',
    navDropdown: [
      { label: 'Sales Agent', href: '#product-sales' },
      { label: 'Customer Support Agent', href: '#product-support' },
      { label: 'Custom AI Agent', href: '#product-custom' },
    ],
  },
};

export const FALLBACK_HOME = {
  he: {
    hero: {
      titlePrefix: 'בנו סוכני',
      titleHighlight: 'בינה מלאכותית',
      titleSuffix: 'שישנו את העסק שלכם',
      description:
        'מאיצים צמיחה וחוסכים בעלויות עם סוכני AI חכמים הפועלים 24/7 למען ההצלחה שלך',
      inputPlaceholder: 'הכניסו מספר טלפון',
      primaryCta: 'נסו עכשיו',
    },
    partners: {
      tagline: 'מתודיקה אחת, עם אינספור שותפים להצלחה',
      logos: [
        { src: 'meta_logo.png', alt: 'Meta' },
        { src: 'claude_logo.png', alt: 'Claude' },
        { src: 'google_logo.png', alt: 'Google' },
        { src: 'salesforce_logo.png', alt: 'Salesforce' },
        { src: 'monday_logo.png', alt: 'Monday' },
      ],
    },
    products: {
      heading: 'המוצרים שלנו',
      ctaPrefix: 'לאפיון והתאמה עבורך',
      ctaHighlight: 'לחץ כאן',
      cards: [
        {
          id: 'product-sales',
          icon: 'smart_ai_icon.png',
          title: 'סוכן מכירות AI',
          subtitle: 'אוטומציה חכמה למכירות',
          description:
            'סוכן AI שמבצע שיחות, מזהה לידים ומבצע סגירות אוטומטיות 24/7',
          linkLabel: 'למידע נוסף',
          linkHref: '#',
        },
        {
          id: 'product-support',
          icon: 'chatbot_icon.png',
          title: 'סוכן שירות לקוחות',
          subtitle: 'תמיכה מיידית ורב-ערוצית',
          description:
            'מענה בוואטסאפ, צ\'אט, דוא"ל וטלפון – עם זיכרון הקשר מלא',
          linkLabel: 'למידע נוסף',
          linkHref: '#',
        },
        {
          id: 'product-custom',
          icon: 'idea_icon.png',
          title: 'סוכן בהתאמה אישית',
          subtitle: 'פתרון מותאם לעסק שלך',
          description:
            'בניית סוכן AI ייעודי לפי תהליכים, ידע פנימי ומטרות העסק',
          linkLabel: 'למידע נוסף',
          linkHref: '#',
        },
      ],
    },
    aiBanner: {
      ready: 'מוכנים לעתיד של אינטליגנציה מלאכותית?',
      titlePrefix: 'גלו איך סוכני ה-AI של',
      titleHighlight: 'מתודיקה',
      titleSuffix: 'יכולים לעבוד בשבילכם',
      ctaLabel: 'קדימה, בואו נתחיל',
      avatars: [
        { src: 'plus_icon.png', alt: 'סוכן 1' },
        { src: 'comp_icon.png', alt: 'סוכן 2' },
        { src: 'hand_icon.png', alt: 'סוכן 3' },
      ],
    },
    showcase: {
      image: 'dark_agent2.png',
      imageAlt: 'מתודיקה AI agents',
    },
    heroMedia: {
      image: 'screen.gif',
      imageAlt: 'תצוגת מסך של סוכן AI',
    },
    contact: {
      heading: 'נשמח לשמוע ממך',
      lead: 'מתודיקה — סוכנים חכמים, צמיחה מהירה.',
      promise: 'ייעוץ חינם תוך 24 שעות',
      guarantee: 'AI מאובטח. תוצאות מובטחות.',
      customCta: {
        label: 'לאפיון והתאמה עבורך',
        highlight: 'לחץ כאן',
      },
      form: {
        nameLabel: 'שם מלא',
        namePlaceholder: 'יוסי כהן',
        phoneLabel: 'טלפון',
        phonePlaceholder: '05X-XXXXXXX',
        emailLabel: 'אימייל',
        emailPlaceholder: 'yossi@business.co.il',
        interestLabel: 'פתרון מבוקש',
        interestPlaceholder: 'בחרו...',
        interestOptions: ['סוכן מכירות', 'שירות לקוחות', 'סוכן מותאם אישית'],
        messagePlaceholder: 'מה האתגר שלכם? (אופציונלי)',
        consentLabel: 'מאשר קבלת עדכונים',
        submitLabel: 'שגר בקשה',
      },
    },
  },
  en: {
    hero: {
      titlePrefix: 'Build',
      titleHighlight: 'AI Agents',
      titleSuffix: 'that transform your business',
      description:
        'Accelerate growth and cut costs with smart AI agents working 24/7 for your success.',
      inputPlaceholder: 'Enter phone number',
      primaryCta: 'Try now',
    },
    partners: {
      tagline: 'One Methodica, countless partners in success',
      logos: [
        { src: 'meta_logo.png', alt: 'Meta' },
        { src: 'claude_logo.png', alt: 'Claude' },
        { src: 'google_logo.png', alt: 'Google' },
        { src: 'salesforce_logo.png', alt: 'Salesforce' },
        { src: 'monday_logo.png', alt: 'Monday' },
      ],
    },
    products: {
      heading: 'Our Products',
      ctaPrefix: 'Need a tailored solution?',
      ctaHighlight: 'Start here',
      cards: [
        {
          id: 'product-sales',
          icon: 'smart_ai_icon.png',
          title: 'Sales AI Agent',
          subtitle: 'Intelligent sales automation',
          description:
            'An AI agent that calls leads, qualifies prospects, and closes deals around the clock.',
          linkLabel: 'Learn more',
          linkHref: '#',
        },
        {
          id: 'product-support',
          icon: 'chatbot_icon.png',
          title: 'Customer Support Agent',
          subtitle: 'Instant, multi-channel care',
          description:
            'Serve customers over WhatsApp, chat, email, and phone with full context memory.',
          linkLabel: 'Learn more',
          linkHref: '#',
        },
        {
          id: 'product-custom',
          icon: 'idea_icon.png',
          title: 'Custom AI Agent',
          subtitle: 'Tailored to your business',
          description:
            'Design a bespoke AI agent around your processes, internal knowledge, and goals.',
          linkLabel: 'Learn more',
          linkHref: '#',
        },
      ],
    },
    aiBanner: {
      ready: 'Ready for the future of intelligence?',
      titlePrefix: "See how Methodica's",
      titleHighlight: 'AI agents',
      titleSuffix: 'can work for you',
      ctaLabel: "Let's get started",
      avatars: [
        { src: 'plus_icon.png', alt: 'Agent 1' },
        { src: 'comp_icon.png', alt: 'Agent 2' },
        { src: 'hand_icon.png', alt: 'Agent 3' },
      ],
    },
    showcase: {
      image: 'dark_agent2.png',
      imageAlt: 'Methodica AI agents',
    },
    heroMedia: {
      image: 'screen.gif',
      imageAlt: 'AI agent screen',
    },
    contact: {
      heading: "We'd love to hear from you",
      lead: 'Methodica — smart agents, faster growth.',
      promise: 'Free consultation within 24 hours',
      guarantee: 'Secure AI. Guaranteed outcomes.',
      customCta: {
        label: 'Need a tailored scoping?',
        highlight: 'Click here',
      },
      form: {
        nameLabel: 'Full name',
        namePlaceholder: 'Alex Cohen',
        phoneLabel: 'Phone',
        phonePlaceholder: '+1 (555) 123-4567',
        emailLabel: 'Email',
        emailPlaceholder: 'alex@business.com',
        interestLabel: 'Solution of interest',
        interestPlaceholder: 'Choose...',
        interestOptions: ['Sales Agent', 'Customer Support', 'Custom Agent'],
        messagePlaceholder: 'Tell us about your challenge (optional)',
        consentLabel: 'I agree to receive updates',
        submitLabel: 'Send request',
      },
    },
  },
};

export const FALLBACK_FOOTER = {
  he: {
    followTitle: 'עקבו אחרינו',
    paragraphs: [
      'הצטרפו לקהילה שלנו וגלו איך סוכני AI מאובטחים מניעים צמיחה עסקית.',
      'אנחנו המומחים לפיתוח ואבטחת סוכני AI מתקדמים.',
    ],
    socialLinks: [
      { label: 'Facebook', short: 'F', href: '#' },
      { label: 'Instagram', short: 'IG', href: '#' },
      { label: 'YouTube', short: 'YT', href: '#' },
      { label: 'LinkedIn', short: 'IN', href: '#' },
    ],
    solutionsTitle: 'פתרונות AI',
    solutions: [
      { label: 'סוכן מכירות AI', href: '#' },
      { label: 'סוכן שירות לקוחות AI', href: '#' },
      { label: 'סוכן AI בהתאמה אישית', href: '#' },
    ],
    resourcesTitle: 'תכנים',
    resources: [
      { label: 'בלוג ומאמרים', href: '#' },
      { label: 'שאלות נפוצות', href: '#' },
    ],
    aboutTitle: 'עלינו',
    about: [
      { label: 'אודות מתודיקה', href: '#' },
      { label: 'צוות המומחים', href: '#' },
      { label: 'פורטפוליו', href: '#' },
      { label: 'הזדמנויות קריירה', href: '#' },
    ],
    rights: 'All Rights Reserved to Methodica AI 2025',
    policies: [
      { label: 'הסדרי נגישות', href: '#' },
      { label: 'מדיניות פרטיות', href: '#' },
      { label: 'תנאי שימוש', href: '#' },
    ],
  },
  en: {
    followTitle: 'Follow us',
    paragraphs: [
      'Join our community and see how secure AI agents accelerate business growth.',
      'We specialise in building and securing advanced AI agents.',
    ],
    socialLinks: [
      { label: 'Facebook', short: 'F', href: '#' },
      { label: 'Instagram', short: 'IG', href: '#' },
      { label: 'YouTube', short: 'YT', href: '#' },
      { label: 'LinkedIn', short: 'IN', href: '#' },
    ],
    solutionsTitle: 'AI Solutions',
    solutions: [
      { label: 'Sales AI Agent', href: '#' },
      { label: 'Customer Support Agent', href: '#' },
      { label: 'Custom AI Agent', href: '#' },
    ],
    resourcesTitle: 'Resources',
    resources: [
      { label: 'Blog & Articles', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
    aboutTitle: 'About',
    about: [
      { label: 'About Methodica', href: '#' },
      { label: 'Expert Team', href: '#' },
      { label: 'Portfolio', href: '#' },
      { label: 'Careers', href: '#' },
    ],
    rights: 'All Rights Reserved to Methodica AI 2025',
    policies: [
      { label: 'Accessibility', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Use', href: '#' },
    ],
  },
};

export function getFallback(locale, fallbacks) {
  return fallbacks[locale] || fallbacks.en;
}

export { ASSET_BASE };
