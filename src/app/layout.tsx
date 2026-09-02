import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hiago Felipe — Engenharia de Computação",
  description: "Portfólio de Hiago Felipe, estudante de Engenharia de Computação no INATEL. Foco em Cibersegurança e Desenvolvimento Web.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="font-mono min-h-full flex flex-col">{children}</body>
    </html>
  );
}
