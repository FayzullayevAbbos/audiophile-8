"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./redax/store";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className={inter.className}>
        <Header />
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
