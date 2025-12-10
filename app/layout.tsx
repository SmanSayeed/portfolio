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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://saadman-portfolio.vercel.app"),
  title: "Saadman Sayeed | Full Stack Developer & Tech Founder",
  description: "Portfolio of Saadman Sayeed, a Lead Software Engineer and Founder of DigiWinners. Specializing in Next.js, AI Integrations, and Scalable Web Solutions.",
  keywords: ["Full Stack Developer", "Next.js", "React", "AI Integration", "Software Engineer", "Bangladesh", "DigiWinners"],
  authors: [{ name: "Saadman Sayeed", url: "https://sman.dev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sman.dev",
    title: "Saadman Sayeed | Full Stack Developer & Tech Founder",
    description: "Building scalable applications and leading tech teams. Explore my projects and expertise.",
    siteName: "Saadman Sayeed Portfolio",
    images: [
      {
        url: "/images/thumbnail/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Saadman Sayeed Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saadman Sayeed | Full Stack Developer & Tech Founder",
    description: "Building scalable applications and leading tech teams.",
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
