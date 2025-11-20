import { logger } from "@appneural/cli-shared";

export async function addUiComponent(name: string): Promise<void> {
  logger.info(`APPNEURAL UI component placeholder for ${name}`);
}

export async function addUiLayout(name: string): Promise<void> {
  logger.info(`APPNEURAL UI layout placeholder for ${name}`);
}

export async function setUiTheme(name: string): Promise<void> {
  logger.info(`APPNEURAL UI theme placeholder for ${name}`);
}
