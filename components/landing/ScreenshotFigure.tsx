import Image from "next/image";
import { landingMediaFrame } from "@/lib/landing-ui";

type ScreenshotFigureProps = {
  src: string;
  alt: string;
};

export function ScreenshotFigure({ src, alt }: ScreenshotFigureProps) {
  return (
    <figure className={landingMediaFrame}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="landing-screenshot-img"
      />
    </figure>
  );
}
