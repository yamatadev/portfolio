import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Renan Paes — Full-Stack Developer",
  description:
    "Full-Stack Developer who built and scaled a digital agency to $20K+/month. Open to remote opportunities worldwide.",
  openGraph: {
    title: "Renan Paes — Full-Stack Developer",
    description:
      "Full-Stack Developer who built and scaled a digital agency to $20K+/month.",
    url: "https://renanpaes.dev",
    siteName: "Renan Paes",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://renanpaes.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-[family-name:var(--font-body)] bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}