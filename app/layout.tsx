import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdullah Khan - Software Engineer & Data Analyst",
  description: "7+ years building enterprise e-commerce platforms and marketplace integrations. Specialized in Laravel, Node.js, Docker, and API integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rubik.variable}>
      <body className={`${rubik.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
