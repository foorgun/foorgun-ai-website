import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz — foorgun.ai",
  description:
    "Privacy policy for foorgun.ai — how personal data is handled on this website.",
};

export default function DatenschutzLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
