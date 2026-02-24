export function sendTerminal(title, message) {
    try {
        console.log(`\n  [${title}] ${message}\n`);
        return { channel: "terminal", success: true };
    }
    catch (err) {
        return { channel: "terminal", success: false, error: err.message };
    }
}
export function isAvailable() {
    return true;
}
//# sourceMappingURL=terminal.js.map