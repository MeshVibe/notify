# Notify

Unified notification routing for the MeshVibe ecosystem. Routes alerts to the best available channel based on priority — macOS notifications, push via RemoteCompanion, SMS, and email.

## Installation

```bash
npm install
npm run build
npm link
```

## CLI Commands

### `notify send <message>`

Send a notification through the best available channel.

```bash
notify send "Build completed successfully"
notify send "Server is down!" --priority critical
notify send "Weekly report ready" --channel email
```

**Options:**

- `--priority <level>` — Priority level: `low`, `medium`, `high`, `critical` (default: `medium`)
- `--channel <name>` — Force a specific channel instead of auto-routing

### `notify channels`

List all available notification channels and their status.

```bash
notify channels
```

### `notify test`

Send a test notification to all configured channels.

```bash
notify test
```

### `notify init`

Install the Claude Code skill for Notify.

```bash
notify init
```

## License

MIT
