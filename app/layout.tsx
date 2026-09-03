import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import { ConsentProvider } from "@/lib/consent";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "foorgun.ai — AI & Automation Consultancy",
  description:
    "Furkan Cetin turns manual work into automated systems. Operations, marketing, content — smarter workflows for growing teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${dmMono.variable} antialiased`}
      >
        <ConsentProvider>
          <LangProvider>
            {children}
            <CookieBanner />
          </LangProvider>
        </ConsentProvider>
      </body>
    </html>
  );
}
