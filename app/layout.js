import "./globals.css";
import { Heebo } from "next/font/google";

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "700", "900"],
  display: "swap"
});

export const metadata = {
  title: "Methodica Skeleton",
  description: "Multilingual landing starter"
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
