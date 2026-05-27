import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

type LandingMetadataOptions = {
  path: string;
  title: string;
  description: string;
};

export function createLandingMetadata({
  path,
  title,
  description,
}: LandingMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${title}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
