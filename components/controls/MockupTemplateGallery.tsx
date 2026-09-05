"use client";

import { useStudioStore } from "@/store/useStudioStore";
import { MOCKUP_TEMPLATES } from "@/lib/mockup-templates";
import { track, trackFirstEdit } from "@/lib/analytics";

export function MockupTemplateGallery() {
  const store = useStudioStore();

  function applyTemplate(tpl: (typeof MOCKUP_TEMPLATES)[0]) {
    track("template_apply", { template: tpl.id });
    trackFirstEdit("template_apply", { template: tpl.id });
    store.setBackgroundId(tpl.backgroundId);
    store.setBackgroundImage(null);
    store.setChromeStyle(tpl.chromeStyle);
    store.setDeviceFrame(tpl.deviceFrame);
    store.setPadding(tpl.padding);
    store.setShadowDepth(tpl.shadowDepth);
    store.setBorderRadius(tpl.borderRadius);
    store.setAspectRatio(tpl.aspectRatio);
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-[#a0a0a0] uppercase tracking-wider">
        Templates
      </label>
      <div className="grid grid-cols-2 gap-2">
        {MOCKUP_TEMPLATES.map((tpl) => (
          <button
            key={tpl.id}
            onClick={() => applyTemplate(tpl)}
            className="group flex flex-col overflow-hidden rounded-xl border border-[#2a2a2a] hover:border-[#a855f7]/60 transition-all text-left"
          >
            {/* Thumbnail */}
            <div
              className="w-full aspect-video relative overflow-hidden"
              style={{ background: tpl.thumbCss }}
            >
              {/* Tiny browser/device hint in thumbnail */}
              <div className="absolute inset-x-3 inset-y-2 rounded bg-black/30 flex flex-col overflow-hidden">
                {tpl.deviceFrame === "none" ? (
                  <>
                    <div className="h-2 flex items-center px-1 gap-0.5 bg-black/20 shrink-0">
                      <div className="w-1 h-1 rounded-full bg-white/30" />
                      <div className="w-1 h-1 rounded-full bg-white/30" />
                      <div className="w-1 h-1 rounded-full bg-white/30" />
                    </div>
                    <div className="flex-1 bg-black/10" />
                  </>
                ) : tpl.deviceFrame === "pixel3" ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="rounded border border-white/30 bg-black/40" style={{ width: 8, height: 18 }}>
                      <div className="mx-auto mt-0.5 bg-white/25 rounded-full" style={{ width: 4, height: 1 }} />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="bg-black/40 rounded" style={{ width: 20, height: 14 }} />
                  </div>
                )}
              </div>
            </div>

            {/* Label */}
            <div className="px-2.5 py-2 bg-[#0d0d0d] group-hover:bg-[#111]">
              <p className="text-[11px] font-semibold text-[#e0e0e0] leading-none">{tpl.name}</p>
              <p className="text-[9px] text-[#4a4a4a] mt-1 leading-tight">{tpl.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
