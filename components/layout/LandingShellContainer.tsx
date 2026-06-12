import { getShellContainer } from "@/lib/landing-ui";

type LandingShellContainerProps = {
  width?: "article" | "wide";
  children: React.ReactNode;
  className?: string;
};

export function LandingShellContainer({
  width = "article",
  children,
  className = "",
}: LandingShellContainerProps) {
  return (
    <div className={`${getShellContainer(width)} ${className}`.trim()}>
      {children}
    </div>
  );
}
