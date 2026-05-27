"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackNavClick } from "@/lib/analytics";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  label: string;
  location: string;
};

export function TrackedLink({
  href,
  label,
  location,
  onClick,
  ...props
}: TrackedLinkProps) {
  const hrefString = typeof href === "string" ? href : href.pathname ?? "";

  return (
    <Link
      href={href}
      {...props}
      onClick={(event) => {
        if (hrefString.startsWith("/")) {
          trackNavClick(hrefString, label, location);
        }
        onClick?.(event);
      }}
    />
  );
}
