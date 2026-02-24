import type { Priority, Channel, NotifyResult } from "./types.js";
import { sendMacOS, isAvailable as macosAvailable } from "./channels/macos.js";
import { sendTerminal, isAvailable as terminalAvailable } from "./channels/terminal.js";

const PRIORITY_RANK: Record<Priority, number> = {
  low: 0,
  medium: 1,
  high: 2,
  critical: 3,
};

export function getChannels(): Channel[] {
  const channels: Channel[] = [];

  if (macosAvailable()) {
    channels.push({ name: "macos", type: "desktop", available: true, minPriority: "medium" });
  }

  if (terminalAvailable()) {
    channels.push({ name: "terminal", type: "stdout", available: true, minPriority: "low" });
  }

  return channels;
}

export function send(
  message: string,
  options: { title?: string; priority?: Priority; channel?: string } = {}
): NotifyResult[] {
  const title = options.title ?? "MeshVibe";
  const priority = options.priority ?? "medium";
  const priorityRank = PRIORITY_RANK[priority];
  const results: NotifyResult[] = [];

  const channels = getChannels();

  if (options.channel) {
    const ch = channels.find((c) => c.name === options.channel);
    if (!ch) {
      return [{ channel: options.channel, success: false, error: "channel not found" }];
    }
    results.push(dispatch(ch.name, title, message));
    return results;
  }

  // Route based on priority
  for (const ch of channels) {
    if (priorityRank >= PRIORITY_RANK[ch.minPriority]) {
      results.push(dispatch(ch.name, title, message));
    }
  }

  return results;
}

function dispatch(channel: string, title: string, message: string): NotifyResult {
  switch (channel) {
    case "macos":
      return sendMacOS(title, message);
    case "terminal":
      return sendTerminal(title, message);
    default:
      return { channel, success: false, error: "unknown channel" };
  }
}
