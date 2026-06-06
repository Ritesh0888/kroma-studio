"use client";

import { TrackedExternalLink } from "@/components/ui/TrackedExternalLink";
import { TrackedLink } from "@/components/ui/TrackedLink";

type LandingInlineLinkProps = {
  href: string;
  label: string;
  location: string;
  children: React.ReactNode;
};

const linkClassName =
  "font-medium text-neon-purple underline-offset-2 hover:text-white hover:underline";

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
        className={linkClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </TrackedExternalLink>
    );
  }

  return (
    <TrackedLink href={href} label={label} location={location} className={linkClassName}>
      {children}
    </TrackedLink>
  );
}

export const inlineLinkClassName = linkClassName;
