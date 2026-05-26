"use client";

import { motion } from "framer-motion";
import { useStudioStore, type AnimationPreset } from "@/store/useStudioStore";

interface AnimatedFrameProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function FloatFrame({ children, className, style }: AnimatedFrameProps) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function TiltFrame({ children, className, style }: AnimatedFrameProps) {
  return (
    <motion.div
      className={className}
      style={{
        ...style,
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: [0, 4, 0, -4, 0],
        rotateY: [0, 6, 0, -6, 0],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

// Scroll animation lives inside CodeDisplay — animating the outer BrowserFrame
// wrapper would move the entire frame (including chrome) out of the canvas bounds.
// This component is intentionally a static passthrough.
function ScrollFrame({ children, className, style }: AnimatedFrameProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export function AnimatedFrame({ children, className, style }: AnimatedFrameProps) {
  const preset = useStudioStore((s) => s.animationPreset);

  if (preset === "float") {
    return <FloatFrame className={className} style={style}>{children}</FloatFrame>;
  }
  if (preset === "tilt") {
    return <TiltFrame className={className} style={style}>{children}</TiltFrame>;
  }
  if (preset === "scroll") {
    return <ScrollFrame className={className} style={style}>{children}</ScrollFrame>;
  }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export type { AnimationPreset };
