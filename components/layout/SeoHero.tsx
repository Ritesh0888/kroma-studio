import Image from "next/image";

export function SeoHero() {
  return (
    <header className="hidden md:flex shrink-0 items-center gap-2 border-b border-surface-2 bg-[#080808] px-3 py-1.5 md:gap-3 md:px-4 md:py-2">
      <Image
        src="/logo.png"
        alt="KromaStudio Logo"
        width={24}
        height={24}
        className="h-6 w-6 shrink-0 rounded-md object-cover"
      />
      <h1 className="truncate text-[10px] font-medium text-text-muted md:text-xs">
        Stop Posting Boring Screenshots. Make Code &amp; Mockups Aesthetic.
      </h1>
    </header>
  );
}
