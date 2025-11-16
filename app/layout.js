import "./globals.css";

export const metadata = {
  title: "Methodica Skeleton",
  description: "Multilingual landing starter"
};

export default function RootLayout({ children }) {
  return (
    <html lang="he">
      <body>{children}</body>
    </html>
  );
}
