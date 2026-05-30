"use client";

import type { ComponentProps } from "react";
import { trackNavClick } from "@/lib/analytics";

type TrackedExternalLinkProps = ComponentProps<"a"> & {
  href: string;
  label: string;
  location: string;
};

export function TrackedExternalLink({
  href,
  label,
  location,
  onClick,
  ...props
}: TrackedExternalLinkProps) {
  return (
    <a
      href={href}
      {...props}
      onClick={(event) => {
        trackNavClick(href, label, location);
        onClick?.(event);
      }}
    />
  );
}
