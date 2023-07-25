import { Nunito, Radio_Canada } from "next/font/google";
import Header from "./components/molecules/Header/Header";
import "./globals.scss";
import { ThemeProvider } from "./theme-provider";

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

export const metadata = {
  title: "Meet Saadman",
  description: "Personal Portfolio Website of Saadman Sayeed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={radio_canada.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
