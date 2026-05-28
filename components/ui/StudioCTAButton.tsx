"use client";

import { useRouter } from "next/navigation";
import { useStudioStore, type StudioMode } from "@/store/useStudioStore";
import { trackNavClick } from "@/lib/analytics";

type Props = {
  mode: StudioMode;
  label: string;
  location: string;
  className?: string;
  children: React.ReactNode;
};

export function StudioCTAButton({ mode, label, location, className, children }: Props) {
  const router = useRouter();
  const setMode = useStudioStore((s) => s.setMode);

  function handleClick() {
    trackNavClick("/", label, location);
    setMode(mode);
    router.push("/");
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
