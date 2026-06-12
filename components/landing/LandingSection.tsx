import { landingEyebrow, landingH2, landingSection } from "@/lib/landing-ui";

type LandingSectionProps = {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function LandingSection({
  eyebrow,
  title,
  children,
  className = "",
}: LandingSectionProps) {
  return (
    <section className={`${landingSection} ${className}`}>
      {eyebrow ? <p className={landingEyebrow}>{eyebrow}</p> : null}
      {title ? <h2 className={landingH2}>{title}</h2> : null}
      {children}
    </section>
  );
}
