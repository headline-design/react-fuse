import { clsx, type ClassValue } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }

  export function constructMetadata({
    title = "React Fuse",
    description = "The Next.js SPA.",
    image = "/fuse-og.png",
    icons = "/favicon.ico",
    noIndex = false,
  }: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
  } = {}): Metadata {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [
          {
            url: image,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
        creator: "@headline_crypto",
      },
      icons,
      metadataBase: new URL("https://react-fuse-iota.vercel.app"),
      ...(noIndex && {
        robots: {
          index: false,
          follow: false,
        },
      }),
    };
  }
