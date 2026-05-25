"use client";

export function MobileAdFooter() {
  return (
    <div className="flex md:hidden items-center justify-center bg-[#080808] border-t border-[#1a1a1a] shrink-0" style={{ height: "50px" }}>
      {/* 320×50 Smart Anchor Ad placeholder */}
      <div
        className="flex items-center justify-center border border-dashed border-[#1e1e1e] rounded-lg bg-[#0a0a0a] text-center"
        style={{ width: "320px", height: "50px" }}
      >
        <span className="text-[9px] text-[#2a2a2a] uppercase tracking-widest">
          Sponsored · 320×50
        </span>
      </div>
    </div>
  );
}
