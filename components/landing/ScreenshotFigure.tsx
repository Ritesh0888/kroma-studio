import Image from "next/image";

type ScreenshotFigureProps = {
  src: string;
  alt: string;
};

export function ScreenshotFigure({ src, alt }: ScreenshotFigureProps) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="h-auto w-full object-cover"
      />
    </figure>
  );
}
