import Link from 'next/link';
import styles from './page.module.css';

const contentByLocale = {
  he: {
    heroTitle: 'אודות Methodica',
    heroLead:
      'אנחנו Methodica AI, צוות של מומחי בינה מלאכותית ואוטומציות שמנגישים פתרונות חכמים לעסקים בכל גודל. המטרה שלנו פשוטה: להפוך טכנולוגיה מורכבת לכלי יומיומי שמייצר יותר הכנסות, חוסך משאבים ומשפר חוויית לקוח.',
    stats: [
      { value: '300+', label: 'סוכני AI שכבר עובדים אצל לקוחותינו' },
      { value: '95%', label: 'שביעות רצון מפתרונות אוטומציה מותאמים' },
      { value: '24/7', label: 'ליווי, ניטור ושיפור מתמשך בכל הפרויקטים' },
    ],
    storyTitle: 'הסיפור שלנו',
    storyParagraphs: [
      'Methodica הוקמה בשנת 2025 על ידי ארבעה יזמים עם ניסיון מצטבר בעולמות הטכנולוגיה, הפיתוח העסקי והשירות. ראינו כיצד ארגונים גדולים נהנים מהיכולות של AI בעוד שעסקים קטנים ובינוניים נשארים מאחור בגלל חוסר בזמן, ידע או משאבים.',
      'התוצאה היא פלטפורמה שמחברת בין טכנולוגיה מתקדמת להבנה עסקית עמוקה. אנחנו בונים סוכני AI ואוטומציות בתהליך מובנה שמתחיל באפיון צרכים אמיתי ומסתיים במדידה מתמשכת של תוצאות.',
    ],
    storyHighlight: { value: '4', label: 'שותפים שהקימו את Methodica AI' },
    howTitle: 'איך אנחנו עושים את זה?',
    howPoints: [
      'סוכני מכירות ושירות שפועלים 24/7, מנהלים שיחות, מסווגים לידים ומבצעים פולואפים חכמים.',
      'אוטומציות עסקיות מותאמות אישית שמייעלות תהליכים וחוסכות בעלויות.',
      'אינטגרציה מלאה לערוצים דיגיטליים כמו WhatsApp, אתרים, מייל ורשתות חברתיות.',
      'למידה מתמשכת שמבטיחה שכל פתרון נשאר צעד אחד לפני השוק.',
    ],
    missionTitle: 'למה אנחנו כאן',
    missionParagraphs: [
      'אנחנו מאמינים ש-AI הוא לא פריבילגיה של תאגידים, אלא הזדמנות זמינה לכל בעל עסק שמעוניין לצמוח.',
      'המוטו שלנו פשוט: לעבוד חכם יותר, לא קשה יותר. אם אתם רוצים עסק שמוכר יותר, משרת טוב יותר וחוסך משאבים – אנחנו כאן כדי שזה יקרה.',
    ],
    missionHighlight: { value: '2025', label: 'השנה שבה יצאנו לדרך' },
    valuesHeaderTitle: 'הערכים שלנו',
    valuesHeaderLead: 'העקרונות שמנחים כל פתרון שאנחנו בונים',
    values: [
      {
        icon: '🎯',
        title: 'מונעים ממשימה',
        description:
          'אנחנו כאן כדי לדמוקרטיזציה את תחום ה-AI ולהנגיש אוטומציה חכמה לעסקים מכל סדר גודל.',
      },
      {
        icon: '💡',
        title: 'חדשנות מתמדת',
        description:
          'צוות המחקר שלנו מחפש כל הזמן טכנולוגיות ושיטות חדשות שמחזירות ערך אמיתי ללקוחות.',
      },
      {
        icon: '🏆',
        title: 'מצוינות באיכות',
        description:
          'כל סוכן AI עובר בדיקות קפדניות ומכויל לביצועים יוצאי דופן ולמוכנות לשינוי.',
      },
      {
        icon: '🤝',
        title: 'הצלחת הלקוח',
        description:
          'ההצלחה שלכם היא ההצלחה שלנו. אנחנו שותפים מלאים בדרך ליצירת ערך עסקי מדיד.',
      },
    ],
    teamHeaderTitle: 'הכירו את הצוות שלנו',
    teamHeaderLead: 'מומחי AI עם תשוקה לטרנספורמציה עסקית',
    teamMembers: [
      {
        name: 'דביר',
        role: 'מנכ"ל ומייסד',
        description:
          'יזם סדרתי ועו"ד שמוביל ארגונים להצלחה באמצעות אוטומציה.\nייסד שלוש חברות ומאות פרויקטים, והפך את הידע הזה לשליחות: לעזור לעסקים לעבוד חכם יותר ולחיות טוב יותר.',
        quote:
          'ההצלחה שלנו היא ההצלחה של הלקוחות שלנו. אם הם מצליחים – סימן שאנחנו עושים את זה נכון.',
      },
      {
        name: 'אור',
        role: 'מנכ"ל כספים וצמיחה',
        description:
          'כלכלן וחוקר נתונים שמוביל אפיון אישי של סוכני AI ותהליכים אוטומטיים.\nמתמחה בבניית מודלים עסקיים יעילים שמפנים זמן לצמיחה אמיתית.',
        quote:
          'סוכן AI טוב משנה חיים – הוא מייעל את העסק, ממקד בצמיחה ומשדרג את השירות ללקוחות.',
      },
      {
        name: 'אביאל',
        role: 'סמנכ"ל מחקר ופיתוח',
        description:
          'בונה פתרונות מקצה לקצה שמשלבים אינטגרציות מורכבות וסוכני AI עם זיכרון מתמשך.\nמביא שילוב ייחודי של הבנה טכנית עם ראייה עסקית.',
        quote: 'מערכת טובה היא כזו שעובדת בשבילך – ולא להפך.',
      },
      {
        name: 'יגאל',
        role: 'מומחה לפתרונות AI',
        description:
          'מחבר בין טכנולוגיה לאסטרטגיה עסקית ומפתח פתרונות מדידים בזמן אמת.\nמיישם חשיבה יצירתית ואוטומציות מתקדמות כדי להגדיל רווחיות.',
        quote: 'סוכן AI טוב הוא שותף לצמיחה שמאפשר להתמקד במה שבאמת חשוב.',
      },
    ],
    ctaTitle: 'מחפשים סוכן AI שמתאים לעסק שלכם?',
    ctaText: 'דברו איתנו ונתכנן ביחד פתרון מדויק עם שיפור נמדד בתוצאות.',
    ctaButton: 'קבעו ייעוץ חינם',
  },
  en: {
    heroTitle: 'About Methodica',
    heroLead:
      'Methodica AI is a team of automation and artificial intelligence specialists focused on making advanced technology practical for every organisation. Our goal is to deliver tailor-made agents that increase revenue, save time, and elevate the customer experience.',
    stats: [
      { value: '300+', label: 'AI agents deployed across industries' },
      { value: '95%', label: 'Client satisfaction with custom automation' },
      { value: '24/7', label: 'Support, monitoring, and optimisation' },
    ],
    storyTitle: 'Our Story',
    storyParagraphs: [
      'Methodica was founded in 2025 by four entrepreneurs with deep experience in technology, product, and business growth. We witnessed how enterprise organisations leverage AI while small and midsized businesses struggle to keep pace.',
      'We created a framework that unites advanced technology with commercial insight. Every engagement starts with discovering the real challenge and ends with a measurable improvement in results.',
    ],
    storyHighlight: { value: '4', label: 'Founders behind Methodica AI' },
    howTitle: 'How We Deliver',
    howPoints: [
      '24/7 sales and service agents that converse, qualify, and follow up intelligently.',
      'Tailor-made automations that streamline internal processes and reduce operating costs.',
      'Seamless channel integrations across WhatsApp, web properties, email, and social networks.',
      'Continuous learning that keeps every deployment ahead of customer expectations.',
    ],
    missionTitle: 'Why We Are Here',
    missionParagraphs: [
      'We believe AI should empower every ambitious business, not just corporations with deep budgets.',
      'Our motto is simple: work smarter, not harder. When your company sells more, serves better, and saves resources, we know we have succeeded together.',
    ],
    missionHighlight: { value: '2025', label: 'The year our journey began' },
    valuesHeaderTitle: 'Our Values',
    valuesHeaderLead: 'Principles that shape every solution we build',
    values: [
      {
        icon: '🎯',
        title: 'Mission Driven',
        description:
          'We are committed to democratising AI and bringing intelligent automation to teams of every size.',
      },
      {
        icon: '💡',
        title: 'Inventive by Design',
        description:
          'Our researchers constantly explore new technologies and methods that generate measurable value.',
      },
      {
        icon: '🏆',
        title: 'Quality First',
        description:
          'Each AI agent is stress-tested, tuned, and ready to perform in demanding, real-world environments.',
      },
      {
        icon: '🤝',
        title: 'Client Success',
        description:
          'Your growth is our benchmark. We operate as long-term partners invested in your outcomes.',
      },
    ],
    teamHeaderTitle: 'Meet the Team',
    teamHeaderLead: 'AI specialists with a passion for business transformation',
    teamMembers: [
      {
        name: 'Dvir',
        role: 'CEO & Founder',
        description:
          'Serial entrepreneur and attorney guiding organisations to success through automation. Led hundreds of projects and now helps businesses operate smarter and live better.',
        quote:
          'Our success is measured by our clients’ success. When they thrive, we know we are on the right path.',
      },
      {
        name: 'Or',
        role: 'CFO & Growth Lead',
        description:
          'Economist and data researcher responsible for scoping AI agents and automated journeys. Designs business models that free teams to focus on meaningful growth.',
        quote:
          'A great AI agent transforms companies—streamlining operations, focusing energy on growth, and elevating customer care.',
      },
      {
        name: 'Aviel',
        role: 'VP Research & Development',
        description:
          'Builds end-to-end solutions that combine complex integrations with long-term memory agents. Brings together deep technical insight and pragmatic business thinking.',
        quote: 'Technology should work for you—not the other way around.',
      },
      {
        name: 'Igal',
        role: 'AI Solutions Expert',
        description:
          'Bridges technology and strategy to deliver measurable results in real time. Applies creative thinking and advanced automation to strengthen profitability.',
        quote:
          'An AI agent is a strategic partner that lets you stay focused on what matters most.',
      },
    ],
    ctaTitle: 'Ready for a tailored AI agent?',
    ctaText:
      'Let’s design a solution together and measure the impact on your business.',
    ctaButton: 'Book a free consultation',
  },
};

export default function AboutPage({ params }) {
  const { locale } = params;
  const content = contentByLocale[locale] || contentByLocale.en;
  const isRtl = locale === 'he';
  const contactHref = `/${locale}#contact`;

  return (
    <div className={`${styles.page}${isRtl ? ` ${styles.rtl}` : ''}`}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>{content.heroTitle}</h1>
        <p className={styles.heroLead}>{content.heroLead}</p>
        <div className={styles.statsGrid}>
          {content.stats.map((stat) => (
            <div
              key={`${stat.value}-${stat.label}`}
              className={styles.statCard}
            >
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{content.storyTitle}</h2>
        <div className={styles.storyContent}>
          <div className={styles.sectionLead}>
            {content.storyParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.storyHighlight}>
            <div className={styles.storyHighlightValue}>
              {content.storyHighlight.value}
            </div>
            <div className={styles.statLabel}>
              {content.storyHighlight.label}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{content.howTitle}</h2>
        <ul className={styles.storyList}>
          {content.howPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{content.missionTitle}</h2>
        <div className={styles.storyContent}>
          <div className={styles.sectionLead}>
            {content.missionParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.storyHighlight}>
            <div className={styles.storyHighlightValue}>
              {content.missionHighlight.value}
            </div>
            <div className={styles.statLabel}>
              {content.missionHighlight.label}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesWrapper}>
        <div className={styles.valuesHeader}>
          <h2 className={styles.sectionTitle}>{content.valuesHeaderTitle}</h2>
          <p className={styles.sectionLead}>{content.valuesHeaderLead}</p>
        </div>
        <div className={styles.valuesGrid}>
          {content.values.map((value) => (
            <article key={value.title} className={styles.valueCard}>
              <div className={styles.valueIcon} aria-hidden="true">
                {value.icon}
              </div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.teamWrapper}>
        <div className={styles.teamHeader}>
          <h2 className={styles.sectionTitle}>{content.teamHeaderTitle}</h2>
          <p className={styles.sectionLead}>{content.teamHeaderLead}</p>
        </div>
        <div className={styles.teamGrid}>
          {content.teamMembers.map((member) => {
            const initials = member.name
              .split(' ')
              .map((part) => part.charAt(0))
              .join('');

            return (
              <article key={member.name} className={styles.teamCard}>
                <div className={styles.teamAvatar}>{initials}</div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <div className={styles.teamRole}>{member.role}</div>
                <p className={styles.teamDescription}>{member.description}</p>
                {member.quote && (
                  <p className={styles.teamQuote}>{member.quote}</p>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>{content.ctaTitle}</h2>
        <p className={styles.ctaText}>{content.ctaText}</p>
        <Link href={contactHref} className={styles.ctaButton}>
          {content.ctaButton}
        </Link>
      </section>
    </div>
  );
}
