import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Background from "./components/shared/Background";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autify App",
  description:
    "Platform modern untuk belajar, bermain, dan meningkatkan produktivitas digital.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body className={`${poppins.className} overflow-x-hidden`}>
          <Navbar />
          <Background />
          <main className="relative z-10 pt-16 md:pt-7">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
