import { HomePillarIcon } from "@/components/landing/home/HomePillarIcon";
import { PILLARS } from "@/lib/landing/home";
import { landingBody, landingCard, landingH3 } from "@/lib/landing-ui";

export function HomePillarGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {PILLARS.map((pillar) => (
        <article key={pillar.id} className={landingCard}>
          <HomePillarIcon name={pillar.icon} />
          <h3 className={`${landingH3} text-sm`}>{pillar.title}</h3>
          <p className={`${landingBody} text-xs`}>{pillar.description}</p>
        </article>
      ))}
    </div>
  );
}
