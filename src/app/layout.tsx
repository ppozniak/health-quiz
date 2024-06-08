import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en-gb">





      <body>{children}</body>

      
    </html>
  );
}
