import { describe, it, expect } from "vitest";
import { getChannels, send } from "../src/router.js";

describe("getChannels", () => {
  it("returns at least terminal channel", () => {
    const channels = getChannels();
    expect(channels.length).toBeGreaterThanOrEqual(1);
    const terminal = channels.find((c) => c.name === "terminal");
    expect(terminal).toBeDefined();
    expect(terminal!.available).toBe(true);
  });

  it("includes macos channel on darwin", () => {
    const channels = getChannels();
    if (process.platform === "darwin") {
      const macos = channels.find((c) => c.name === "macos");
      expect(macos).toBeDefined();
      expect(macos!.available).toBe(true);
    }
  });
});

describe("send", () => {
  it("sends to terminal channel on low priority", () => {
    const results = send("test message", { priority: "low", channel: "terminal" });
    expect(results).toHaveLength(1);
    expect(results[0].channel).toBe("terminal");
    expect(results[0].success).toBe(true);
  });

  it("returns error for unknown channel", () => {
    const results = send("test", { channel: "nonexistent" });
    expect(results).toHaveLength(1);
    expect(results[0].success).toBe(false);
    expect(results[0].error).toBe("channel not found");
  });
});
