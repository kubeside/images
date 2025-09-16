export type Config = {
  year: number;
  sessionToken: string;
  leaderboardId: number;
  highlightDuration: number;
};

export async function getConfig(): Promise<Config> {
  const response = await fetch("/config.json");
  return await response.json();
}
