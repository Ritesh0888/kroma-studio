export function LandingBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden bg-[#030008]">
      {/* Rich base mesh */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 55% at 50% -15%, rgba(168, 85, 247, 0.22), transparent 55%),
            radial-gradient(ellipse 70% 45% at 95% 35%, rgba(236, 72, 153, 0.14), transparent 50%),
            radial-gradient(ellipse 55% 50% at 5% 85%, rgba(124, 58, 237, 0.18), transparent 55%),
            radial-gradient(ellipse 40% 35% at 55% 55%, rgba(190, 24, 93, 0.06), transparent 60%),
            linear-gradient(165deg, #05020f 0%, #0c0620 28%, #06040c 52%, #100818 78%, #030008 100%)
          `,
        }}
      />

      {/* Slow-drifting glow orbs */}
      <div className="landing-orb landing-orb--a absolute left-[-12%] top-[-18%] h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.45)_0%,rgba(124,58,237,0.15)_45%,transparent_70%)] blur-[80px]" />
      <div className="landing-orb landing-orb--b absolute right-[-8%] top-[22%] h-[min(55vw,420px)] w-[min(55vw,420px)] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.35)_0%,rgba(190,24,93,0.12)_50%,transparent_72%)] blur-[70px]" />
      <div className="landing-orb landing-orb--c absolute bottom-[-15%] left-[18%] h-[min(60vw,460px)] w-[min(60vw,460px)] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.28)_0%,rgba(88,28,135,0.1)_48%,transparent_70%)] blur-[90px]" />

      {/* Diagonal aurora streak */}
      <div
        className="landing-aurora absolute left-[-20%] top-[18%] h-[140%] w-[55%] opacity-50 mix-blend-screen"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, rgba(168, 85, 247, 0.08) 35%, rgba(236, 72, 153, 0.12) 50%, rgba(168, 85, 247, 0.06) 65%, transparent 100%)",
          transform: "rotate(-12deg)",
        }}
      />

      {/* Center spotlight — draws eye to content */}
      <div
        className="absolute left-1/2 top-[12%] h-[70vh] w-[min(100%,720px)] -translate-x-1/2 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.07) 0%, transparent 68%)",
        }}
      />

      {/* Subtle dot grid, fades at edges */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(168, 85, 247, 0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 40%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 40%, black 20%, transparent 100%)",
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Edge vignette for readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_45%,transparent_30%,rgba(0,0,0,0.55)_100%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/70" />
    </div>
  );
}
