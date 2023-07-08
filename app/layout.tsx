import { Nunito } from "next/font/google";
import Header from "./components/molecules/Header/Header";
import "./globals.scss";

const nunito = Nunito({
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
      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
