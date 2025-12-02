import './globals.css';
import { Heebo } from 'next/font/google';

const heebo = Heebo({
  subsets: ['latin', 'hebrew'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

export const metadata = {
  title: 'Methodica AI',
  description: 'Methodica AI — Your AI Partner for Growth',
  icons: {
    icon: 'https://kdpnvubujvilzhspxsru.supabase.co/storage/v1/object/public/images/methodica_logo.png',
  },
  openGraph: {
    title: 'Methodica AI',
    description: 'Methodica AI — Your AI Partner for Growth',
    url: 'https://methodica.ai',
    siteName: 'Methodica AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Methodica AI',
    description: 'Methodica AI — Your AI Partner for Growth',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" suppressHydrationWarning>
      <body className={`${heebo.className} light`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
