import Image from "next/image";
import { LandingBackground } from "@/components/layout/LandingBackground";
import { ProductHuntBadge } from "@/components/layout/ProductHuntBadge";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { SITE_COPYRIGHT } from "@/lib/site";

type LandingShellProps = {
  children: React.ReactNode;
};

const FOOTER_PRIMARY_LINKS = [
  { href: "/", label: "Open Studio", location: "landing_footer_open_studio" },
  { href: "/code-screenshot-generator", label: "Code Screenshots", location: "landing_footer_code" },
  { href: "/browser-mockup-generator", label: "Browser Mockups", location: "landing_footer_mockup" },
  { href: "/content-post-generator", label: "Content Posts", location: "landing_footer_content" },
  { href: "/how-it-works", label: "How It Works", location: "landing_footer_how_it_works" },
] as const;

const FOOTER_SECONDARY_LINKS = [
  { href: "/ray-so-alternative", label: "vs Ray.so", location: "landing_footer_vs_ray_so" },
  { href: "/carbon-alternative", label: "vs Carbon", location: "landing_footer_vs_carbon" },
  { href: "/privacy", label: "Privacy", location: "landing_footer_privacy" },
  { href: "/terms", label: "Terms", location: "landing_footer_terms" },
  { href: "/github-kroma-studio", label: "GitHub", location: "landing_footer_github" },
] as const;

const SHELL_CONTAINER = "mx-auto w-full max-w-3xl px-6";

const footerLinkClassName =
  "text-xs text-text-muted transition-colors hover:text-white";

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
          className={`${SHELL_CONTAINER} flex flex-col gap-2 py-3 pb-[env(safe-area-inset-bottom)]`}
        >
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {FOOTER_PRIMARY_LINKS.map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                label={link.label}
                location={link.location}
                className={footerLinkClassName}
              >
                {link.label}
              </TrackedLink>
            ))}
          </nav>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {FOOTER_SECONDARY_LINKS.map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                label={link.label}
                location={link.location}
                className={footerLinkClassName}
              >
                {link.label}
              </TrackedLink>
            ))}
          </nav>
          <ProductHuntBadge />
          <p className="text-center text-[10px] text-border">
            <span>{SITE_COPYRIGHT}</span>
            <span className="tracking-widest uppercase"> · www.kromastudio.in</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
