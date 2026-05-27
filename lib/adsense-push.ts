declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const AD_SCRIPT_SRC_FRAGMENT = "adsbygoogle.js";

export function waitForAdsenseScript(maxMs = 8_000): Promise<boolean> {
  if (typeof window === "undefined") return Promise.resolve(false);

  const scriptPresent = () =>
    Boolean(
      document.querySelector(`script[src*="${AD_SCRIPT_SRC_FRAGMENT}"]`) &&
        window.adsbygoogle,
    );

  if (scriptPresent()) return Promise.resolve(true);

  return new Promise((resolve) => {
    const started = Date.now();

    const tick = () => {
      if (scriptPresent()) {
        resolve(true);
        return;
      }
      if (Date.now() - started >= maxMs) {
        resolve(false);
        return;
      }
      window.setTimeout(tick, 50);
    };

    tick();
  });
}

export function pushAdsenseSlot(ins: HTMLElement): void {
  if (ins.dataset.adsenseInitialized === "true") return;

  window.adsbygoogle = window.adsbygoogle || [];
  window.adsbygoogle.push({});
  ins.dataset.adsenseInitialized = "true";
}

export function isAdZoneVisible(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  if (rect.width < 1 || rect.height < 1) return false;

  const style = window.getComputedStyle(el);
  if (style.display === "none" || style.visibility === "hidden") return false;

  return true;
}

/** localhost / unapproved domains — AdSense throws but layout testing still works */
export function isExpectedDevAdsenseError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  return (
    process.env.NEXT_PUBLIC_ADSENSE_DEV === "true" ||
    /localhost|127\.0\.0\.1|unfilled|no slot|not available|TagError/i.test(message)
  );
}
