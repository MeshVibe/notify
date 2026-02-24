import { execFileSync } from "node:child_process";
export function sendMacOS(title, message) {
    try {
        const script = `display notification "${escapeAppleScript(message)}" with title "${escapeAppleScript(title)}"`;
        execFileSync("/usr/bin/osascript", ["-e", script], {
            timeout: 5_000,
        });
        return { channel: "macos", success: true };
    }
    catch (err) {
        return { channel: "macos", success: false, error: err.message };
    }
}
export function isAvailable() {
    return process.platform === "darwin";
}
function escapeAppleScript(str) {
    return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
//# sourceMappingURL=macos.js.map