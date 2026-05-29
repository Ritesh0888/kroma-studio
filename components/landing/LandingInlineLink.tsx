"use client";

import { TrackedLink } from "@/components/ui/TrackedLink";

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
  return (
    <TrackedLink
      href={href}
      label={label}
      location={location}
      className="font-medium text-neon-purple underline-offset-2 hover:text-white hover:underline"
    >
      {children}
    </TrackedLink>
  );
}

export const inlineLinkClassName =
  "font-medium text-neon-purple underline-offset-2 hover:text-white hover:underline";
