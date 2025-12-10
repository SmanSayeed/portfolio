import { Nunito, Radio_Canada } from "next/font/google";
import Header from "./components/molecules/Header/Header";
import "./globals.scss";
import { ThemeProvider } from "./theme-provider";
import type { Metadata } from "next";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const radio_canada = Radio_Canada({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Metadata base is required for resolving relative OG image paths in Next.js 14+
export const metadata: Metadata = {
  metadataBase: new URL("https://sman.dev"),
  title: "Saadman Sayeed | Full Stack Developer & Tech Founder",
  description: "Senior Full Stack Engineer & Founder of DigiWinners. Building scalable web apps with Next.js & AWS. Leading a 50k+ dev community.",
  keywords: ["Full Stack Developer", "Next.js", "React", "AI Integration", "Software Engineer", "Bangladesh", "DigiWinners", "Saadman Sayeed", "Web Developer"],
  authors: [{ name: "Saadman Sayeed", url: "https://sman.dev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sman.dev",
    title: "Saadman Sayeed | Full Stack Developer & Tech Founder",
    description: "Senior Full Stack Engineer & Founder of DigiWinners. Building scalable web apps with Next.js & AWS. Leading a 50k+ dev community.",
    siteName: "Saadman Sayeed Portfolio",
    images: [
      {
        url: "/images/thumbnail/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Saadman Sayeed - Senior Full Stack Engineer & Tech Founder",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saadman Sayeed | Full Stack Developer & Tech Founder",
    description: "Senior Full Stack Engineer & Founder of DigiWinners. Building scalable web apps with Next.js & AWS. Leading a 50k+ dev community.",
    images: ["/images/thumbnail/thumbnail.png"],
    creator: "@smansayeed",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" style={{ scrollBehavior: 'smooth' }} suppressHydrationWarning>
      <body className={radio_canada.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
