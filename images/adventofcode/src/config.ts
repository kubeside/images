export type Config = {
  year: number;
  apiBase: string,
  highlightDuration: number;
};

export async function getConfig(): Promise<Config> {
  const response = await fetch("/config.json");
  return await response.json();
}
