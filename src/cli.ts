#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .name("notify")
  .description(
    "Unified notification routing across macOS, push, SMS, and email",
  )
  .version("0.1.0");

program
  .command("send <message>")
  .description("Send a notification through the best available channel")
  .option(
    "--priority <level>",
    "Priority level: low, medium, high, critical",
    "medium",
  )
  .option("--channel <name>", "Force a specific notification channel")
  .action((_message: string, _options: { priority: string; channel?: string }) => {
    console.log("notify send: not yet implemented");
  });

program
  .command("channels")
  .description("List available notification channels")
  .action(() => {
    console.log("notify channels: not yet implemented");
  });

program
  .command("test")
  .description("Send a test notification to all channels")
  .action(() => {
    console.log("notify test: not yet implemented");
  });

program
  .command("init")
  .description("Install Claude Code skill")
  .action(() => {
    console.log("notify init: not yet implemented");
  });

program.parse();
