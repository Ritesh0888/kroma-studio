import type { ProductTabIcon } from "@/lib/landing/home";

const iconClass = "h-4 w-4 shrink-0";

export function HomeProductTabIcon({ name }: { name: ProductTabIcon }) {
  switch (name) {
    case "code":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "browser":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path strokeLinecap="round" d="M3 8h18" />
        </svg>
      );
    case "content":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path strokeLinecap="round" d="M7 9h6M7 13h4" />
        </svg>
      );
    case "animated":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 9.5v5l4.5-2.5L10 9.5z" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}
