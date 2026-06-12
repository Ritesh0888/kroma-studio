import { LandingShellContainer } from "@/components/layout/LandingShellContainer";
import { ProductHuntBadge } from "@/components/layout/ProductHuntBadge";
import { TrackedExternalLink } from "@/components/ui/TrackedExternalLink";
import { TrackedLink } from "@/components/ui/TrackedLink";
import {
  FOOTER_COMPARE_LINKS,
  FOOTER_LEGAL_LINKS,
  FOOTER_PRODUCT_LINKS,
} from "@/lib/landing-nav";
import { landingFooterLink } from "@/lib/landing-ui";
import { SITE_COPYRIGHT, VSCODE_MARKETPLACE_URL } from "@/lib/site";

type LandingFooterProps = {
  width?: "article" | "wide";
};

export function LandingFooter({ width = "article" }: LandingFooterProps) {
  return (
    <footer className="landing-chrome relative z-10 shrink-0 border-t">
      <LandingShellContainer
        width={width}
        className="flex flex-col gap-6 py-8 pb-[env(safe-area-inset-bottom)]"
      >
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-widest text-[#202124]">
              Product
            </p>
            <nav className="flex flex-col gap-2">
              {FOOTER_PRODUCT_LINKS.map((link) => (
                <TrackedLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  location={link.location}
                  className={landingFooterLink}
                >
                  {link.label}
                </TrackedLink>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-widest text-[#202124]">
              Compare
            </p>
            <nav className="flex flex-col gap-2">
              {FOOTER_COMPARE_LINKS.map((link) => (
                <TrackedLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  location={link.location}
                  className={landingFooterLink}
                >
                  {link.label}
                </TrackedLink>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-widest text-[#202124]">
              Resources
            </p>
            <nav className="flex flex-col gap-2">
              <TrackedExternalLink
                href={VSCODE_MARKETPLACE_URL}
                label="Install VS Code Extension"
                location="landing_footer_vscode"
                className={landingFooterLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Install VS Code Extension
              </TrackedExternalLink>
              {FOOTER_LEGAL_LINKS.map((link) => (
                <TrackedLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  location={link.location}
                  className={landingFooterLink}
                >
                  {link.label}
                </TrackedLink>
              ))}
            </nav>
          </div>
        </div>

        <ProductHuntBadge location="landing_footer_product_hunt" />
        <p className="text-center text-[10px] text-text-muted">
          <span>{SITE_COPYRIGHT}</span>
          <span className="tracking-widest uppercase"> · www.kromastudio.in</span>
        </p>
      </LandingShellContainer>
    </footer>
  );
}
