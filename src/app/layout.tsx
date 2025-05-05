"use client";

import "./globals.css";
import Local from "next/font/local";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./_components/Navbar";

const MiSans = Local({
  src: "../../public/fonts/mi-sans/MiSansLatinVF.ttf",
  variable: "--font-mi-sans",
  weight :"100 200 300 400 500 600 700 800 900",
})

const MiSansThai = Local({
  src: "../../public/fonts/mi-sans-th/MiSansThaiVF.woff2",
  variable: "--font-mi-sans-th",
  weight :"100 200 300 400 500 600 700 800 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${MiSans.variable} ${MiSansThai.variable} antialiased font-misans bg-black h-dvh w-dvw text-zinc-50`}
      >
        <QueryClientProvider client={new QueryClient()}>
          <Navbar />
          <div className="h-[calc(100dvh-65px)] w-full bg-linear-0 from-background to-black overflow-y-auto overflow-x-auto p-6">
            {children}
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
