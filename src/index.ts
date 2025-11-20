import { Command } from "commander";
import { registerUiCommands } from "./commands/ui.js";

export default function register(program: Command): void {
  registerUiCommands(program);
}
