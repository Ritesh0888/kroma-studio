"use client";

import React from "react";
import { track } from "@/lib/analytics";

interface State {
  hasError: boolean;
  message: string;
}

export class CanvasErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[CanvasErrorBoundary]", error, info.componentStack);
    track("canvas_error", { message: error.message });
  }

  handleReset = () => {
    track("canvas_error_retry_click");
    this.setState({ hasError: false, message: "" });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 text-center px-6">
          <div className="w-12 h-12 rounded-xl bg-[#1a0010] border border-neon-pink/20 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-neon-pink/60"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-1">Canvas crashed</p>
            <p className="text-xs text-[#4a4a4a] max-w-xs">
              Something went wrong rendering the canvas. Try refreshing or resetting.
            </p>
          </div>
          <button
            onClick={this.handleReset}
            className="px-4 py-2 rounded-lg border border-border text-xs font-medium text-text-muted hover:border-neon-purple/30 hover:text-white transition-all"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
