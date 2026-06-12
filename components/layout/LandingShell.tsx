import { LandingBackground } from "@/components/layout/LandingBackground";
import { LandingFooter } from "@/components/layout/LandingFooter";
import { LandingHeader } from "@/components/layout/LandingHeader";
import { LandingShellContainer } from "@/components/layout/LandingShellContainer";

type LandingShellProps = {
  children: React.ReactNode;
  width?: "article" | "wide";
};

export function LandingShell({ children, width = "article" }: LandingShellProps) {
  return (
    <div className="landing-theme fixed inset-0 overflow-hidden">
      <LandingBackground />
      <div id="landing-scroll-root" className="relative z-10 h-full overflow-y-auto overflow-x-hidden">
        <LandingHeader width={width} />
        <LandingShellContainer width={width} className="py-10 md:py-14">
          <main>{children}</main>
        </LandingShellContainer>
        <LandingFooter width={width} />
      </div>
    </div>
  );
}
