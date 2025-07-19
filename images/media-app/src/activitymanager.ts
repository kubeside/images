import { getConfig } from "./config.ts";
import type { ActivityConfig, BaseActivity } from "./activities/index.ts";
import { ImageActivity } from "./activities/image.ts";
import { WebActivity } from "./activities/web.ts";

const ACTIVITY_BUFFER: number = 1;

export class ActivityManager {
  private loadedActivities: BaseActivity[];
  private activityQueue: BaseActivity[];
  private parentElement: HTMLElement;
  private shownActivity?: BaseActivity;
  constructor(parentElement: HTMLElement) {
    this.loadedActivities = [];
    this.activityQueue = [];
    this.parentElement = parentElement;
  }
  async showNextActivity(): Promise<void> {
    await this.maybeLoadActivity();
    if (this.shownActivity !== undefined) {
      this.shownActivity.dispose();
      this.shownActivity = undefined;
    }
    const activityToShow = this.loadedActivities.shift()!;
    activityToShow.show();
    this.shownActivity = activityToShow;
    console.log("before awaiting completed");
    console.log(activityToShow.completed);
    await this.maybeLoadActivity();
    await activityToShow.completed;
  }
  private async maybeLoadActivity(): Promise<void> {
    console.log(this.loadedActivities.length);
    while (this.loadedActivities.length < ACTIVITY_BUFFER) {
      const activityToLoad = this.activityQueue.shift();
      if (activityToLoad === undefined) {
        this.activityQueue = await this.loadRoundOfActivities();
        continue;
      }
      activityToLoad.load(this.parentElement);
      this.loadedActivities.push(activityToLoad);
    }
  }

  private createActivityInstance(config: ActivityConfig): BaseActivity {
    if (config.type === "image") {
      return new ImageActivity(config);
    }
     if (config.type === "web") {
      return new WebActivity(config);
    }
    throw new Error("unsupported activity");
  }

  private async loadRoundOfActivities(): Promise<BaseActivity[]> {
    const config = await getConfig();
    return config.activities.map(this.createActivityInstance);
  }
}
