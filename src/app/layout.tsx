import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hiro Tanaka | Senior Full-Stack Engineer",
  description:
    "Senior Full-Stack Engineer with 8+ years of experience designing, building, and scaling production web applications. Expertise in React, Next.js, Node.js, and cloud-native architectures.",
  keywords: [
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Software Engineer",
    "Hokkaido",
    "Japan",
  ],
  authors: [{ name: "Hiro Tanaka" }],
  openGraph: {
    title: "Hiro Tanaka | Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer with 8+ years of experience building and scaling production web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
