import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/Layout";
import { GoogleAnalytics } from '@next/third-parties/google'

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
  title: "INTRIX One Tap - The tap that simplifies your life.",
  description:
    "Check out the 1st hidden tankless water purifier in Malaysia here. Better than ordinary home water filter as it is also an instant hot water dispenser up to 98°",
  keywords: "keyword1, keyword2, keyword3, keyword4",
  author: "INTRIX One Tap",
  robots: "index, follow",
  favicon:
    "https://intrixlifestyle.com/favicon.ico",
  openGraph: {
    title: "INTRIX One Tap - The tap that simplifies your life.",
    description:
      "Check out the 1st hidden tankless water purifier in Malaysia here. Better than ordinary home water filter as it is also an instant hot water dispenser up to 98°",
    url: "https://intrixlifestyle.com/",
    type: "website",
    locale: "en_US",
    siteName: "INTRIX One Tap - The tap that simplifies your life.",
    images: [
      {
        url: "https://intrixlifestyle.com/appicon.png",
        width: 225,
        height: 225,
        alt: "Logo",
      },
    ],
  },
  alternates: {
    canonical: "https://intrixlifestyle.com/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
   
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full`}
      >
        <Layout>
          
        {children}
        
        </Layout>
          
        <GoogleAnalytics gaId="G-P03YDJ5472" />
      </body>
    </html>
  );
}
