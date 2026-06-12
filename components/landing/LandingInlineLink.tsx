"use client";

import { TrackedExternalLink } from "@/components/ui/TrackedExternalLink";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { landingInlineLink } from "@/lib/landing-ui";

type LandingInlineLinkProps = {
  href: string;
  label: string;
  location: string;
  children: React.ReactNode;
};

export function LandingInlineLink({
  href,
  label,
  location,
  children,
}: LandingInlineLinkProps) {
  if (href.startsWith("http")) {
    return (
      <TrackedExternalLink
        href={href}
        label={label}
        location={location}
        className={landingInlineLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </TrackedExternalLink>
    );
  }

  return (
    <TrackedLink href={href} label={label} location={location} className={landingInlineLink}>
      {children}
    </TrackedLink>
  );
}

export const inlineLinkClassName = landingInlineLink;
