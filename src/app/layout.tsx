import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "./components/Sidebar";
import localFont from "@next/font/local";

const inter = Inter({ subsets: ["latin"] });

const dinRound = localFont({
  src: [
    {
      path: "../../public/fonts/DINRoundPro-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/DINRoundPro.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/DINRoundPro-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-din-round",
});

export const metadata: Metadata = {
  title: "Duolingo Interface",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dinRound.variable} font-sans`}>
        <main className="h-screen flex">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
