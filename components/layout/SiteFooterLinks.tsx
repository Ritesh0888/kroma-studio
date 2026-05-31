import { ProductHuntBadge } from "@/components/layout/ProductHuntBadge";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { SITE_COPYRIGHT } from "@/lib/site";

const PRIMARY_LINKS = [
  { href: "/how-it-works", label: "How It Works", location: "studio_footer_how_it_works" },
  { href: "/ray-so-alternative", label: "vs Ray.so", location: "studio_footer_vs_ray_so" },
  { href: "/carbon-alternative", label: "vs Carbon", location: "studio_footer_vs_carbon" },
] as const;

const SECONDARY_LINKS = [
  { href: "/privacy", label: "Privacy", location: "studio_footer_privacy" },
  { href: "/terms", label: "Terms", location: "studio_footer_terms" },
  { href: "/github-kroma-studio", label: "GitHub", location: "studio_footer_github" },
] as const;

const linkClassName =
  "text-[10px] text-text-muted transition-colors hover:text-white";

export function SiteFooterLinks() {
  return (
    <footer className="shrink-0 border-t border-surface-2">
      <nav className="flex flex-wrap justify-center gap-x-3 gap-y-1.5 px-4 pt-3">
        {PRIMARY_LINKS.map((link) => (
          <TrackedLink
            key={link.href}
            href={link.href}
            label={link.label}
            location={link.location}
            className={linkClassName}
          >
            {link.label}
          </TrackedLink>
        ))}
      </nav>
      <nav className="flex flex-wrap justify-center gap-x-3 gap-y-1.5 px-4 pb-2 pt-1">
        {SECONDARY_LINKS.map((link) => (
          <TrackedLink
            key={link.href}
            href={link.href}
            label={link.label}
            location={link.location}
            className={linkClassName}
          >
            {link.label}
          </TrackedLink>
        ))}
      </nav>
      <ProductHuntBadge />
      <p className="pb-3 text-center text-[10px] text-border">{SITE_COPYRIGHT}</p>
    </footer>
  );
}
