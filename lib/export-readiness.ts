import { DEFAULT_CODE, type StudioMode } from "@/store/useStudioStore";

export function isDefaultCodeContent(code: string): boolean {
  return code.trim() === DEFAULT_CODE.trim();
}

export function canExportPng(params: {
  mode: StudioMode;
  uploadedImage: string | null;
  codeContent: string;
}): boolean {
  if (params.mode === "mockup") {
    return Boolean(params.uploadedImage);
  }
  if (params.mode === "code") {
    return params.codeContent.trim().length > 0 && !isDefaultCodeContent(params.codeContent);
  }
  return true;
}

export function exportBlockedReason(params: {
  mode: StudioMode;
  uploadedImage: string | null;
  codeContent: string;
}): string | null {
  if (canExportPng(params)) return null;
  if (params.mode === "mockup") {
    return "Drop a screenshot in the frame before exporting.";
  }
  if (params.mode === "code") {
    return "Paste your code snippet before exporting.";
  }
  return null;
}
