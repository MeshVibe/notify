import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";
const SKILL_CONTENT = `---
name: notify
description: Send notifications via available channels. Use when you need to alert the user about something important.
---

# Notify — MeshVibe Notification Router

Notify sends alerts through available channels based on priority.

## CLI commands

- \`notify send <message>\` — send a notification (options: --title, --priority low|medium|high|critical, --channel <name>)
- \`notify channels\` — list available notification channels
- \`notify test\` — send a test notification to all channels

## Priority routing

- **critical** — all channels (macOS + terminal + future push/SMS)
- **high** — macOS notification + terminal
- **medium** — macOS notification + terminal
- **low** — terminal only
`;
export function installSkill() {
    const skillDir = join(homedir(), ".claude", "skills", "notify");
    mkdirSync(skillDir, { recursive: true });
    writeFileSync(join(skillDir, "SKILL.md"), SKILL_CONTENT, "utf-8");
}
//# sourceMappingURL=skill.md.js.map