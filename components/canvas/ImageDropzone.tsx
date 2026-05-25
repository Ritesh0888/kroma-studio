"use client";

import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useStudioStore } from "@/store/useStudioStore";

export function ImageDropzone() {
  const uploadedImage = useStudioStore((s) => s.uploadedImage);
  const setUploadedImage = useStudioStore((s) => s.setUploadedImage);

  const loadFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setUploadedImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    },
    [setUploadedImage]
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles[0]) loadFile(acceptedFiles[0]);
    },
    [loadFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
    noClick: !!uploadedImage,
  });

  // Clipboard paste support
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const item of Array.from(items)) {
        if (item.type.startsWith("image/")) {
          const file = item.getAsFile();
          if (file) loadFile(file);
          break;
        }
      }
    };
    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, [loadFile]);

  if (uploadedImage) {
    return (
      <div className="relative w-full h-full group">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={uploadedImage}
          alt="Uploaded content"
          className="w-full h-full object-contain"
          draggable={false}
        />
        <button
          onClick={() => setUploadedImage(null)}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 hover:bg-black/90 text-white text-xs px-2 py-1 rounded-md border border-white/10"
        >
          Replace
        </button>
      </div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={`w-full h-full flex flex-col items-center justify-center cursor-pointer transition-colors select-none ${
        isDragActive
          ? "bg-[#a855f7]/10 border-2 border-dashed border-[#a855f7]"
          : "bg-[#1c1c1e] hover:bg-[#242424]"
      }`}
    >
      <input {...getInputProps()} />

      <div className="flex flex-col items-center gap-3 text-center px-6">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
            isDragActive ? "bg-[#a855f7]/20" : "bg-[#2a2a2a]"
          }`}
        >
          <svg
            className={`w-7 h-7 transition-colors ${
              isDragActive ? "text-[#a855f7]" : "text-[#6b6b6b]"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
        </div>

        {isDragActive ? (
          <p className="text-sm font-medium text-[#a855f7]">Drop to place</p>
        ) : (
          <>
            <div>
              <p className="text-sm font-medium text-[#e0e0e0]">
                Drop image here
              </p>
              <p className="text-xs text-[#6b6b6b] mt-1">
                or click to browse · paste from clipboard
              </p>
            </div>
            <p className="text-[10px] text-[#4a4a4a]">
              PNG, JPG, WebP, GIF supported
            </p>
          </>
        )}
      </div>
    </div>
  );
}
