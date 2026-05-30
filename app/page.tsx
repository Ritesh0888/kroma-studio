import { HomePage } from "@/components/home/HomePage";
import { getHomepageJsonLd } from "@/lib/json-ld";

const homepageJsonLd = getHomepageJsonLd();

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      <HomePage />
    </>
  );
}
