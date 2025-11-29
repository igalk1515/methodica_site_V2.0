import HomeContent from '../../components/HomeContent';
import { getDictionary } from '../i18n';

export const dynamic = 'force-dynamic';

export default function LocaleHomePage({ params }) {
  const { locale } = params;
  const dictionary = getDictionary(locale);

  return <HomeContent dictionary={dictionary} locale={locale} />;
}
