import type { NotifyResult } from "../types.js";

export function sendTerminal(title: string, message: string): NotifyResult {
  try {
    console.log(`\n  [${title}] ${message}\n`);
    return { channel: "terminal", success: true };
  } catch (err) {
    return { channel: "terminal", success: false, error: (err as Error).message };
  }
}

export function isAvailable(): boolean {
  return true;
}
