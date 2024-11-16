import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import { inter } from "@/lib/fonts";
import "./globals.css";
import MainNavbar from "@/components/MainNavbar";
import Script from "next/script";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mondayproapps.com"),
  title: {
    default: "monday apps and automation",
    template: "%s | monday apps",
  },
  description: "monday apps and automation",
  openGraph: {
    title: "monday apps and automation",
    description: "Monday apps and automation",
    url: "https://mondayproapps.com",
    siteName: "mondayproapps.com",
    images: [
      {
        url: "https://mondayproapps.com/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "monday automation - ",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "bd2llY4PHreAhf5vAKZD9zGPAO3FjH-DJsZZ4B1E_-I",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LMEMSW4PXG"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LMEMSW4PXG');
        `}
      </Script>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <div className="w-100 h-75 text-light">
              <div className="w-100 h-100">
                <MainNavbar />
                <div className="mb-auto">{children}</div>
                <Toaster />
                {/* <Footer /> */}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
