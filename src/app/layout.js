import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

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
    description: "Check out the 1st hidden tankless water purifier in Malaysia here. Better than ordinary home water filter as it is also an instant hot water dispenser up to 98°",
    keywords: "keyword1, keyword2, keyword3, keyword4",
    author: "INTRIX One Tap",
    robots: "index, follow", 
    favicon: "https://intrixlifestyle.s3.ap-southeast-1.amazonaws.com/intrixlifestyle.com/wp-content/uploads/2022/07/android-chrome-192x192-1-100x100.png",
    openGraph: {
        title: "INTRIX One Tap - The tap that simplifies your life.",
        description: "Check out the 1st hidden tankless water purifier in Malaysia here. Better than ordinary home water filter as it is also an instant hot water dispenser up to 98°",
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
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Metadata */}
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
                <meta name="author" content={metadata.author} />
                <meta name="theme-color" content={metadata.themeColor} />
                <meta name="robots" content={metadata.robots} />

                {/* Open Graph */}
                <meta property="og:title" content={metadata.openGraph.title} />
                <meta property="og:description" content={metadata.openGraph.description} />
                <meta property="og:url" content={metadata.openGraph.url} />
                <meta property="og:type" content={metadata.openGraph.type} />
                <meta property="og:locale" content={metadata.openGraph.locale} />
                <meta property="og:site_name" content={metadata.openGraph.siteName} />
                {metadata.openGraph.images.map((image, index) => (
                    <meta
                        key={index}
                        property="og:image"
                        content={image.url}
                        data-width={image.width}
                        data-height={image.height}
                        data-alt={image.alt}
                    />
                ))}

                {/* Canonical Link */}
                <link rel="canonical" href={metadata.alternates.canonical} />
                <link rel="icon" href={metadata.favicon} type="image/ico" />

            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {/* <Header /> */}
                {children}
                <Footer />
            </body>
        </html>
    );
}
