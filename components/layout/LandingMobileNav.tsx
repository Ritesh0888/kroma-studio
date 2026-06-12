"use client";

import { useEffect, useState } from "react";
import { LandingShellContainer } from "@/components/layout/LandingShellContainer";
import { TrackedExternalLink } from "@/components/ui/TrackedExternalLink";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { LANDING_HEADER_NAV } from "@/lib/landing-nav";
import { landingFooterLink } from "@/lib/landing-ui";
import { VSCODE_MARKETPLACE_URL } from "@/lib/site";

type LandingMobileNavProps = {
  width?: "article" | "wide";
};

export function LandingMobileNav({ width = "article" }: LandingMobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const scrollRoot = document.getElementById("landing-scroll-root");
    const previousOverflow = scrollRoot?.style.overflow;
    if (scrollRoot) scrollRoot.style.overflow = "hidden";
    return () => {
      if (scrollRoot) scrollRoot.style.overflow = previousOverflow ?? "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
        className="landing-icon-btn !h-9 !w-9"
      >
        {open ? (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-x-0 bottom-0 top-16 z-30 bg-black/25 lg:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-x-0 top-16 z-40 border-b border-border bg-white shadow-lg lg:hidden">
            <LandingShellContainer width={width} className="flex flex-col gap-1 py-4">
              {LANDING_HEADER_NAV.map((link) => (
                <TrackedLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  location={link.location}
                  className={`${landingFooterLink} py-2.5 text-sm`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </TrackedLink>
              ))}
              <TrackedExternalLink
                href={VSCODE_MARKETPLACE_URL}
                label="VS Code Extension"
                location="landing_header_vscode_mobile"
                className={`${landingFooterLink} py-2.5 text-sm`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                VS Code Extension
              </TrackedExternalLink>
            </LandingShellContainer>
          </div>
        </>
      ) : null}
    </div>
  );
}
