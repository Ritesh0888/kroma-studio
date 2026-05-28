import Image from "next/image";
import { LandingBackground } from "@/components/layout/LandingBackground";
import { TrackedLink } from "@/components/ui/TrackedLink";

type LandingShellProps = {
  children: React.ReactNode;
};

const FOOTER_LINKS = [
  { href: "/", label: "Open Studio" },
  { href: "/code-screenshot-generator", label: "Code Screenshots" },
  { href: "/browser-mockup-generator", label: "Browser Mockups" },
  { href: "/content-post-generator", label: "Content Posts" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

const SHELL_CONTAINER = "mx-auto w-full max-w-3xl px-6";

export function LandingShell({ children }: LandingShellProps) {
  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden bg-black text-white">
      <LandingBackground />

      <header className="relative z-10 shrink-0 border-b border-surface-2 bg-[#080808]/90 backdrop-blur-md">
        <div className={`${SHELL_CONTAINER} flex items-center justify-between py-4`}>
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

      <main className={`relative z-10 ${SHELL_CONTAINER} min-h-0 flex-1 overflow-y-auto py-10`}>
        {children}
      </main>

      <footer className="relative z-10 shrink-0 border-t border-surface-2 bg-[#080808]/90 backdrop-blur-md">
        <div
          className={`${SHELL_CONTAINER} flex h-26 flex-col justify-center gap-3 pb-[env(safe-area-inset-bottom)]`}
        >
          <nav className="hide-scrollbar flex shrink-0 gap-x-4 overflow-x-auto whitespace-nowrap">
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
          <p className="shrink-0 text-center text-[10px] text-border tracking-widest uppercase">
            www.kromastudio.in
          </p>
        </div>
      </footer>
    </div>
  );
}
