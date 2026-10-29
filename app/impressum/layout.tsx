import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — foorgun.ai",
  description:
    "Legal notice and contact details for Furkan Cetin IT Beratung.",
};

export default function ImpressumLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
