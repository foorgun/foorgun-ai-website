import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — foorgun.ai",
  description:
    "Legal notice and contact details for Furkan Cetin IT Beratung, Ulm, Germany.",
};

export default function ImpressumLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
