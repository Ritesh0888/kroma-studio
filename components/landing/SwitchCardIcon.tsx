type SwitchCardIconName =
  | "browser"
  | "social"
  | "animated"
  | "workflow"
  | "privacy";

const iconClass = "h-5 w-5 shrink-0";

export function SwitchCardIcon({ name }: { name: SwitchCardIconName }) {
  switch (name) {
    case "browser":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path strokeLinecap="round" d="M3 8h18" />
          <circle cx="6.5" cy="6" r="0.75" fill="currentColor" stroke="none" />
          <circle cx="9" cy="6" r="0.75" fill="currentColor" stroke="none" />
        </svg>
      );
    case "social":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path strokeLinecap="round" d="M7 9h6M7 13h4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l3-3-3-3" />
        </svg>
      );
    case "animated":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 9.5v5l4.5-2.5L10 9.5z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "workflow":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="3" width="8" height="8" rx="1.5" />
          <rect x="13" y="3" width="8" height="8" rx="1.5" />
          <rect x="8" y="13" width="8" height="8" rx="1.5" />
        </svg>
      );
    case "privacy":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7l8-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        </svg>
      );
  }
}

export type { SwitchCardIconName };
