import Image from "next/image";
import { LandingMobileNav } from "@/components/layout/LandingMobileNav";
import { LandingShellContainer } from "@/components/layout/LandingShellContainer";
import { TrackedExternalLink } from "@/components/ui/TrackedExternalLink";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { LANDING_HEADER_NAV } from "@/lib/landing-nav";
import { landingBrandCta, landingBrandWordmark, landingNavLink } from "@/lib/landing-ui";
import { VSCODE_MARKETPLACE_URL } from "@/lib/site";

type LandingHeaderProps = {
  width?: "article" | "wide";
};

export function LandingHeader({ width = "article" }: LandingHeaderProps) {
  return (
    <header className="landing-chrome sticky top-0 z-50 shrink-0 border-b">
      <LandingShellContainer
        width={width}
        className="relative grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-3 py-4"
      >
        <TrackedLink
          href="/home"
          label="KromaStudio"
          location="landing_header_logo"
          className="flex shrink-0 items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="KromaStudio Logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-md object-cover"
          />
          <span className={landingBrandWordmark}>
            Kroma<span>Studio</span>
          </span>
        </TrackedLink>

        <nav className="hidden min-w-0 items-center justify-center gap-x-4 gap-y-1 lg:flex xl:gap-x-5">
          {LANDING_HEADER_NAV.map((link) => (
            <TrackedLink
              key={link.href}
              href={link.href}
              label={link.label}
              location={link.location}
              className={landingNavLink}
            >
              {link.label}
            </TrackedLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-2">
          <TrackedExternalLink
            href={VSCODE_MARKETPLACE_URL}
            label="VS Code Extension"
            location="landing_header_vscode"
            className={`${landingNavLink} hidden sm:inline`}
            target="_blank"
            rel="noopener noreferrer"
          >
            VS Code
          </TrackedExternalLink>
          <TrackedLink
            href="/"
            label="Open Studio"
            location="landing_header_cta"
            className={landingBrandCta}
          >
            Open Studio
          </TrackedLink>
          <LandingMobileNav width={width} />
        </div>
      </LandingShellContainer>
    </header>
  );
}
