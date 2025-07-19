import { ActivityManager } from "./activitymanager.ts";

async function main(): Promise<void> {
  const activityContainerElement = document.getElementById(
    "activities-container"
  )!;
  const activityManager = new ActivityManager(activityContainerElement);

  while (true) {
    await activityManager.showNextActivity();
  }
}
main();
