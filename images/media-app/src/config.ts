import type { ActivityConfig } from "./activities/index.ts";

export type Config = {
  activities: ActivityConfig[];
};

export async function getConfig(): Promise<Config> {
  const response = await fetch("/config.json");
  return await response.json();
}
