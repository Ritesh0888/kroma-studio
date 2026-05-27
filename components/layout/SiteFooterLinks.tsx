import { TrackedLink } from "@/components/ui/TrackedLink";

const LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooterLinks() {
  return (
    <nav className="flex flex-wrap justify-center gap-x-3 gap-y-1 px-4 py-3 border-t border-surface-2 shrink-0">
      {LINKS.map((link) => (
        <TrackedLink
          key={link.href}
          href={link.href}
          label={link.label}
          location="studio_footer"
          className="text-[10px] text-text-muted transition-colors hover:text-white"
        >
          {link.label}
        </TrackedLink>
      ))}
    </nav>
  );
}
