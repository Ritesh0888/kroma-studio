import * as vscode from "vscode";
import {
  getActiveEditorOrWarn,
  getExtensionConfig,
  getSelectionText,
  handoffCode,
  openHandoffUrl,
} from "./handoff";

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand("kromaStudio.captureSelection", async () => {
      const editor = getActiveEditorOrWarn();
      if (!editor) {
        return;
      }

      const code = getSelectionText(editor);
      const fileName = editor.document.fileName.split(/[/\\]/).pop();
      await handoffCode(code, editor.document.languageId, fileName);
    }),

    vscode.commands.registerCommand("kromaStudio.captureFile", async () => {
      const editor = getActiveEditorOrWarn();
      if (!editor) {
        return;
      }

      const code = editor.document.getText();
      const fileName = editor.document.fileName.split(/[/\\]/).pop();
      await handoffCode(code, editor.document.languageId, fileName);
    }),

    vscode.commands.registerCommand("kromaStudio.openStudio", async () => {
      const { studioUrl, openMode } = getExtensionConfig();
      const url = studioUrl.replace(/\/$/, "") + "/";
      await openHandoffUrl(url, openMode);
    }),
  );
}

export function deactivate(): void {}
