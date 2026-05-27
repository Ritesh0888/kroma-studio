import Image from "next/image";
import { TrackedLink } from "@/components/ui/TrackedLink";

type LandingShellProps = {
  children: React.ReactNode;
};

const FOOTER_LINKS = [
  { href: "/", label: "Open Studio" },
  { href: "/code-screenshot-generator", label: "Code Screenshots" },
  { href: "/browser-mockup-generator", label: "Browser Mockups" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function LandingShell({ children }: LandingShellProps) {
  return (
    <div className="fixed inset-0 overflow-y-auto bg-black text-white">
      <header className="border-b border-surface-2 bg-[#080808]">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <TrackedLink
            href="/"
            label="KromaStudio"
            location="landing_header_logo"
            className="flex items-center gap-2"
          >
            <Image
              src="/logo.png"
              alt="KromaStudio Logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-md object-cover"
            />
            <span className="text-sm font-bold tracking-tight">
              Kroma
              <span className="bg-linear-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                Studio
              </span>
            </span>
          </TrackedLink>
          <TrackedLink
            href="/"
            label="Open Studio"
            location="landing_header_cta"
            className="rounded-lg bg-linear-to-r from-neon-purple to-neon-pink px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          >
            Open Studio
          </TrackedLink>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10">{children}</main>

      <footer className="border-t border-surface-2 bg-[#080808]">
        <nav className="mx-auto flex max-w-3xl flex-wrap gap-x-4 gap-y-2 px-6 py-6">
          {FOOTER_LINKS.map((link) => (
            <TrackedLink
              key={link.href}
              href={link.href}
              label={link.label}
              location="landing_footer"
              className="text-xs text-text-muted transition-colors hover:text-white"
            >
              {link.label}
            </TrackedLink>
          ))}
        </nav>
        <p className="pb-6 text-center text-[10px] text-border tracking-widest uppercase">
          www.kromastudio.in
        </p>
      </footer>
    </div>
  );
}
