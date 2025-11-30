import Link from 'next/link';
import styles from './page.module.css';

const contentByLocale = {
  he: {
    heroTitle: 'אודות Methodica',
    heroLead:
      'אנחנו Methodica AI – צוות של מומחי בינה מלאכותית ואוטומציות מתקדמות עם מטרה אחת ברורה: להפוך את הכוח של AI לזמין לכל עסק. אנחנו בונים סוכנים חכמים שמגדילים הכנסות, חוסכים זמן ומשאבים ומשדרגים כל חוויית לקוח.',
    stats: [
      { value: '300+', label: 'סוכני AI שכבר עובדים אצל לקוחותינו' },
      { value: '95%', label: 'שביעות רצון מפתרונות אוטומציה מותאמים' },
      { value: '24/7', label: 'ליווי, ניטור ושיפור מתמשך בכל הפרויקטים' },
    ],
    storyTitle: 'הסיפור שלנו',
    storyParagraphs: [
      'Methodica הוקמה בשנת 2025 על ידי ארבעת השותפים – אור, אביאל, דביר ויגאל – אחרי שנים של ניסיון מצטבר בעולמות הטכנולוגיה, השיווק והניהול העסקי.',
      'ראינו מקרוב איך חברות גדולות נהנות מיכולות מתקדמות של AI בזמן שעסקים קטנים ובינוניים נשארים מאחור בגלל מחסור בזמן, ידע או תקציב.',
      'החלטנו לאחד כוחות ולהקים פלטפורמה שמסוגלת לסגור את הפער הזה: סוכני AI מותאמים אישית שמנהלים תהליכים, מטפלים בלידים ומספקים תובנות עסקיות בזמן אמת.',
    ],
    howTitle: 'איך אנחנו עושים את זה?',
    howPoints: [
      'סוכני מכירות ושירות שפועלים 24/7, מנהלים שיחות, מסווגים לידים ומבצעים פולואפים חכמים.',
      'אוטומציות עסקיות מותאמות אישית שמייעלות תהליכים, חוסכות עלויות ומפנות משאבים לצמיחה.',
      'אינטגרציות מלאות לערוצי WhatsApp, אתרים, מייל ורשתות חברתיות – כדי להיות זמינים בכל מקום.',
      'למידה מתמשכת שמבטיחה שכל פתרון ממשיך להשתפר ונשאר צעד אחד לפני השוק.',
    ],
    missionTitle: 'למה אנחנו כאן',
    missionParagraphs: [
      'אנחנו מאמינים ש-AI הוא לא פריבילגיה של תאגידים אלא הזדמנות אמיתית לכל עסק שרוצה לגדול.',
      'המוטו שלנו פשוט: לעבוד חכם יותר, לא קשה יותר. אם אתם רוצים למכור יותר, לשרת טוב יותר ולחסוך משאבים – אנחנו כאן כדי שזה יקרה.',
      'השותפות שלנו מתחילה בהבנת הצורך העסקי ומסתיימת במדידה מדויקת של התוצאות.',
    ],
    valuesHeaderTitle: 'הערכים שלנו',
    valuesHeaderLead: 'העקרונות שמנחים את כל מה שאנחנו עושים',
    values: [
      {
        icon: '🎯',
        title: 'מונעים ממשימה',
        description:
          'אנחנו מחויבים לדמוקרטיזציה של AI ולהנגשת אוטומציה חכמה לעסקים בכל סדר גודל.',
      },
      {
        icon: '💡',
        title: 'חדשנות במוקד',
        description:
          'אנחנו דוחפים את הגבולות של מה שאפשר עם AI ומחפשים כל הזמן טכנולוגיות ומתודולוגיות חדשות.',
      },
      {
        icon: '🏆',
        title: 'מצוינות באיכות',
        description:
          'כל סוכן AI שאנחנו בונים נבדק בקפידה ומכויל לביצועים יוצאי דופן ולזמינות לשינוי.',
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
        role: 'מנכ״ל ומייסד',
        description: `יזם סדרתי, עו״ד, שמאמין שהצלחה אמיתית מתחילה ביעילות.
ייסד וניהל שלוש חברות מצליחות עם עשרות עובדים, ביניהן חברת שיווק ובניית אתרים, בית תוכנה, וחברת סטארט־אפ ששרתו מאות לקוחות.
לאחר שנים של ניהול עובדים ומאות פרויקטים, מרדף אחרי תזרים, ושחיקה אינסופית – גילה את הכוח המהפכני של אוטומציות ו־AI, והפך זאת לשליחות: לעזור לבעלי עסקים לעצור את המירוץ, לעבוד חכם יותר, ולחיות טוב יותר.

האני מאמין שלו: "ההצלחה שלנו היא ההצלחה של הלקוחות שלנו. אם הם מצליחים – סימן שאנחנו עושים את זה נכון."`,
      },
      {
        name: 'אור',
        role: 'מנכ״ל כספים וצמיחה',
        description: `כלכלן (תואר שני) ואיש מחקר עם זיקה עמוקה לנתונים, פיננסים וייעול תהליכים. בעל ניסיון כבעל משרד לייעוץ משכנתאות, שם גילה ממקור ראשון את הפוטנציאל של בינה מלאכותית ואוטומציות להפוך תהליך מכירה למדויק, יעיל ונמדד – ולפנות זמן יקר לצמיחה אמיתית.

כיום אור מוביל את תחום האפיון וההתאמה האישית של סוכני AI ומודלים עסקיים, עם התמחות בבניית תהליכים חכמים ואוטומטיים וניתוח נתונים לאופטימיזציה מתמשכת. בעיניו, כל עסק – קטן כגדול – חייב לשלב בינה מלאכותית כדי לשרת טוב יותר, להגדיל רווחיות, ולתרום לכלכלה מקומית חזקה.

האני מאמין שלו: "סוכן AI טוב משנה חיים – מייעל את העסק, ממקד בצמיחה, ומשדרג את השירות ללקוחו`,
      },
      {
        name: 'אביאל',
        role: 'סמנכ״ל מחקר ופיתוח',
        description: `מאז ומתמיד סקרן אותי להבין איך מערכות עובדות – ואיך אפשר לגרום להן לעבוד חכם יותר. עוד לפני שנכנסתי לעולם ההנדסה והטכנולוגיה, צברתי ניסיון מגוון במכירות, שירות לקוחות, פרסום ועוד. בכל תחום נתקלתי שוב ושוב באותה בעיה: תהליכים ידניים, בזבוז זמן אינסופי וטעויות שעולות לעסקים כסף ומשאבים רבים.
אלו דברים שניתן למנוע לחלוטין באמצעות אוטומציה ובינה מלאכותית.

אתגרתי את עצמי לבנות פתרונות מהיסוד. בלי גב של מותג מוכר, בלי לקוחות קיימים - רק עם תשוקה לטכנולוגיה ואמונה שאוטומציה ובינה מלאכותית יכולות לשנות מציאות. בעזרת חלוקה לפרויקטים קטנים, למידה מתמדת ושילוב ייחודי של הבנה טכנית עם ראייה עסקית, הצלחתי לפתח מערכות שעבדו חלק כבר מהלקוח הראשון.

כיום, כסמנכ״ל מחקר ופיתוח ב Methodica AI, אני מוביל את פיתוח הפתרונות שמאפשרים ללקוחות שלנו לעבוד חכם יותר: אינטגרציות מורכבות שמחברות מערכות שונות, תהליכי אוטומציה מקצה לקצה, וסוכני AI מתקדמים עם זיכרון מתמשך שיודעים לנהל שיחות מורכבות, להתחבר למערכות קיימות, וללמוד מכל אינטראקציה כדי להביא תוצאות טובות יותר בכל שימוש.

מערכת טובה היא כזו שעובדת בשבילך – ולא להפך`,
      },
      {
        name: 'יגאל',
        role: 'מומחה לפתרונות AI',
        description: `עוד מהצבא, כשהייתי מנהל רשימות עם דף ועט, ידעתי שחייבת להיות דרך טובה יותר. הרצון הזה למצוא פתרונות יעילים ומדויקים מלווה אותי עד היום. אני מאמין שללכת בדרך שלא דרכו בה קודם זו הדרך היחידה לגלות פתרונות אמיתיים – ואת זה אני מיישם בכל פרויקט, בעזרת יצירתיות, חשיבה פתוחה והתמדה.
אני מחבר בין טכנולוגיה לאסטרטגיה עסקית, ומפתח פתרונות AI ואוטומציה מותאמים אישית שמספקים תוצאות מדידות – מאופטימיזציה של תהליכים וצמצום זמני עבודה, ועד הגדלת רווחיות. השילוב בין הבנה עמוקה בתכנות ואוטומציה לבין חשיבה עסקית מאפשר לי לבנות מערכות חכמות בזמן אמת, שמבינות גם את הקוד וגם את הצורך האמיתי של הלקוח.

"סוכן AI טוב הוא לא כלי – הוא שותף לצמיחה, שמאפשר להתמקד במה שבאמת חשוב ולצמוח בעולם שמשתנה בקצב מסחרר."`,
      },
    ],
    ctaTitle: 'מחפשים סוכן AI מותאם אישית?',
    ctaText: 'דברו איתנו ונתכנן ביחד פתרון שמביא תוצאות מדידות מהר.',
    ctaButton: 'קבעו ייעוץ חינם',
  },
  en: {
    heroTitle: 'About Methodica',
    heroLead:
      'Methodica AI is a team of AI and automation specialists focused on making intelligent technology practical for every organisation. We design tailored agents that increase revenue, save time, and elevate each customer interaction.',
    stats: [
      { value: '300+', label: 'AI agents deployed for our clients' },
      { value: '95%', label: 'Client satisfaction with bespoke automations' },
      {
        value: '24/7',
        label: 'Always-on support, monitoring, and optimisation',
      },
    ],
    storyTitle: 'Our Story',
    storyParagraphs: [
      'Methodica was founded in 2025 by four partners—Or, Aviel, Dvir, and Igal—after careers spanning technology, marketing, and business leadership.',
      'We saw enterprises racing ahead with AI while small and midsize businesses struggled because of limited time, expertise, or budget.',
      'We built a platform that closes that gap with tailor-made AI agents that automate workflows, manage leads, surface insights, and deliver measurable outcomes.',
    ],
    howTitle: 'How We Deliver',
    howPoints: [
      '24/7 sales and service agents that converse, qualify, and follow up intelligently.',
      'Custom automations that streamline internal processes, reduce costs, and free teams to grow.',
      'Deep integrations across WhatsApp, email, web properties, and social channels so you are present everywhere.',
      'Continuous learning that keeps every deployment improving and ahead of customer expectations.',
    ],
    missionTitle: 'Why We Are Here',
    missionParagraphs: [
      'We believe AI should empower every ambitious team, not just corporations with massive budgets.',
      'Our motto is simple: work smarter, not harder. When you sell more, serve better, and save resources, we have succeeded together.',
      'Every partnership starts by listening to the real challenge and ends with precise measurement of the impact.',
    ],
    valuesHeaderTitle: 'Our Values',
    valuesHeaderLead: 'Principles that shape each solution we deliver',
    values: [
      {
        icon: '🎯',
        title: 'Mission Driven',
        description:
          'We are committed to democratising AI and putting intelligent automation in every team’s hands.',
      },
      {
        icon: '💡',
        title: 'Inventive by Design',
        description:
          'We constantly explore new methods and technologies that create measurable business value.',
      },
      {
        icon: '🏆',
        title: 'Quality First',
        description:
          'Every AI agent is stress-tested, tuned, and ready to perform in demanding real-world environments.',
      },
      {
        icon: '🤝',
        title: 'Client Success',
        description:
          'Your growth is our north star. We act as long-term partners invested in your outcomes.',
      },
    ],
    teamHeaderTitle: 'Meet the Team',
    teamHeaderLead: 'AI specialists with a passion for business transformation',
    teamMembers: [
      {
        name: 'Dvir',
        role: 'CEO & Founder',
        description:
          'Serial entrepreneur and attorney who built three successful companies across marketing, software, and venture-backed startups. Leads automation strategies that help clients operate smarter and live better.',
        quote:
          'Our success is measured by our clients’ success. When they thrive, we know we are on the right track.',
      },
      {
        name: 'Or',
        role: 'CFO & Growth Lead',
        description:
          'Economist and researcher with a passion for data-driven decisions. Designs bespoke AI agents and operating models that keep teams focused on meaningful growth.',
        quote:
          'A great AI agent transforms a company—streamlining work, focusing teams on growth, and elevating every customer interaction.',
      },
      {
        name: 'Aviel',
        role: 'VP Research & Development',
        description:
          'Builder of end-to-end solutions that combine complex integrations with long-term memory agents. Blends deep technical expertise with pragmatic business insight.',
        quote: 'Technology should work for you—not the other way around.',
      },
      {
        name: 'Igal',
        role: 'AI Solutions Expert',
        description:
          'Connects technology and strategy to deliver measurable AI outcomes in real time. Creates automations that reduce waste, shorten cycles, and increase profitability.',
        quote:
          'An AI agent is a strategic partner that lets you focus on what truly matters.',
      },
    ],
    ctaTitle: 'Ready for a tailored AI agent?',
    ctaText:
      'Let’s design the right solution together and measure the impact on your business.',
    ctaButton: 'Book a free consultation',
  },
};

export default function AboutPage({ params }) {
  const { locale } = params;
  const content = contentByLocale[locale] || contentByLocale.en;
  const isRtl = locale === 'he';
  const contactHref = `/${locale}#contact`;

  const highlightRows = [
    {
      id: 'story',
      title: content.storyTitle,
      type: 'paragraphs',
      body: content.storyParagraphs,
      stat: content.stats[0],
    },
    {
      id: 'how',
      title: content.howTitle,
      type: 'list',
      body: content.howPoints,
      stat: content.stats[1],
    },
    {
      id: 'mission',
      title: content.missionTitle,
      type: 'paragraphs',
      body: content.missionParagraphs,
      stat: content.stats[2],
    },
  ];

  return (
    <div className={`${styles.page}${isRtl ? ` ${styles.rtl}` : ''}`}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>{content.heroTitle}</h1>
        <p className={styles.heroLead}>{content.heroLead}</p>
      </section>

      <div className={styles.highlightStack}>
        {highlightRows.map((row) => {
          const stat = row.stat || { value: '—', label: '' };
          return (
            <section key={row.id} className={styles.dualSection}>
              <div className={styles.dualContent}>
                <h2 className={styles.sectionTitle}>{row.title}</h2>
                {row.type === 'list' ? (
                  <ul className={styles.sectionList}>
                    {row.body.map((point, index) => (
                      <li key={`${row.id}-item-${index}`}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <div className={styles.sectionLead}>
                    {row.body.map((paragraph, index) => (
                      <p key={`${row.id}-p-${index}`}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
              <div className={styles.highlightCard}>
                <div className={styles.highlightValue}>{stat.value}</div>
                <div className={styles.highlightLabel}>{stat.label}</div>
              </div>
            </section>
          );
        })}
      </div>

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
              <article
                key={member.name}
                className={styles.teamCard}
                tabIndex={0}
                aria-label={`${member.name} – ${member.role}`}
              >
                <div className={styles.teamAvatar}>{initials}</div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <div className={styles.teamRole}>{member.role}</div>
                <div className={styles.teamBio}>
                  <p className={styles.teamDescription}>{member.description}</p>
                  {member.quote && (
                    <p className={styles.teamQuote}>{member.quote}</p>
                  )}
                </div>
                <div className={styles.teamFade} aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>{content.ctaTitle}</h2>
          <p className={styles.ctaText}>{content.ctaText}</p>
        </div>
        <Link href={contactHref} className={styles.ctaButton}>
          {content.ctaButton}
        </Link>
      </section>
    </div>
  );
}
