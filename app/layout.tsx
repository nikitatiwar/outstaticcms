import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { Outstatic  } from "outstatic";
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
  title: "Total Cert",
  icons: "/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: 0;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="./assets/images/favicon.svg" type="image/png" />
    </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >   
      {/* <Outstatic>{children}</Outstatic> */}
        {children}
      </body>
    </html>
  );
}
