import { Roboto } from "next/font/google";
import Header from "./components/molecules/Header/Header";
import "./globals.scss";

const inter = Roboto({
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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
