import { execFileSync } from "node:child_process";
import type { NotifyResult } from "../types.js";

export function sendMacOS(title: string, message: string): NotifyResult {
  try {
    const script = `display notification "${escapeAppleScript(message)}" with title "${escapeAppleScript(title)}"`;
    execFileSync("/usr/bin/osascript", ["-e", script], {
      timeout: 5_000,
    });
    return { channel: "macos", success: true };
  } catch (err) {
    return { channel: "macos", success: false, error: (err as Error).message };
  }
}

export function isAvailable(): boolean {
  return process.platform === "darwin";
}

function escapeAppleScript(str: string): string {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
