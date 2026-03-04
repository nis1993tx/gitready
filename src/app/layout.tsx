import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GitReady - Make Your GitHub Job-Ready",
  description:
    "Free guides, templates, and tools to help students and job seekers build a GitHub profile that gets them hired.",
  keywords: [
    "GitHub profile",
    "README template",
    "job seekers",
    "developer portfolio",
    "GitHub tips",
  ],
  openGraph: {
    title: "GitReady - Make Your GitHub Job-Ready",
    description:
      "Free guides, templates, and tools to help students and job seekers build a GitHub profile that gets them hired.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
