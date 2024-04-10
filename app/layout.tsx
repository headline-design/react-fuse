import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import App from "./app";
import ClientBoundary from "@/fuse-app/lib/client-boundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Fuse",
  description: "The Next.js SPA.",
  icons: "/favicon.ico",
  openGraph: {
    title: "React Fuse",
    description: "The Next.js SPA.",
    images: [
      {
        url: "/fuse-og.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Fuse",
    description: "The Next.js SPA.",
    images: ["/fuse-og.png"],
    creator: "@headline_crypto",
  },
  metadataBase: new URL("https://react-fuse-iota.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientBoundary>
          <App />
        </ClientBoundary>
      </body>
    </html>
  );
}
