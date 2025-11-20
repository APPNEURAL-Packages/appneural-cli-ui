import { logger } from "@appneural/cli-shared";
import { withTelemetry } from "@appneural/cli-shared";
import { withSpinner } from "@appneural/cli-shared";
import { ValidationError } from "@appneural/cli-shared";
import { addUiComponent, addUiLayout, setUiTheme } from "../services/ui.service.js";
export function registerUiCommands(program) {
    const ui = program.command("ui").description("APPNEURAL UI workflows");
    ui
        .command("add <component>")
        .description("Add an APPNEURAL UI component")
        .action((component) => withTelemetry("ui:add", async () => {
        if (!component) {
            throw new ValidationError("APPNEURAL component name required");
        }
        await withSpinner("Generating APPNEURAL UI component", async () => addUiComponent(component));
        logger.success(`APPNEURAL UI component '${component}' created`);
    }));
    ui
        .command("layout <name>")
        .description("Create an APPNEURAL UI layout")
        .action((name) => withTelemetry("ui:layout", async () => {
        if (!name) {
            throw new ValidationError("APPNEURAL layout name required");
        }
        await withSpinner("Scaffolding APPNEURAL UI layout", async () => addUiLayout(name));
        logger.success(`APPNEURAL layout '${name}' ready`);
    }));
    ui
        .command("theme <name>")
        .description("Create or update an APPNEURAL theme")
        .action((name) => withTelemetry("ui:theme", async () => {
        if (!name) {
            throw new ValidationError("APPNEURAL theme name required");
        }
        await withSpinner("Building APPNEURAL theme", async () => setUiTheme(name));
        logger.success(`APPNEURAL theme '${name}' configured`);
    }));
}
//# sourceMappingURL=ui.js.map