import localFont from "next/font/local";
import "./globals.css";

import Nav from "@/components/Nav";
import FooterComp from "@/components/FooterComp";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Alanah",
  description: "Alanah Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Nav/>
        {children}
        <Toaster />
        <FooterComp/>
      </body>
    </html>
  );
}
