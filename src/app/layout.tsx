import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

// Note: this should be TT Norms Pro
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Health quiz",
  description: "Find out if you're eligible for our treatment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-gb" className={`${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
