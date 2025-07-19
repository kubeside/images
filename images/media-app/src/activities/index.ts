import { ImageActivityConfig } from "./image.ts";
import { VideoActivityConfig } from "./video.ts";
import { WebActivityConfig } from "./web.ts";

export type ActivityConfig =
  | VideoActivityConfig
  | ImageActivityConfig
  | WebActivityConfig;

export abstract class BaseActivity {
  abstract load(parentElement: HTMLElement): void;
  abstract show(): void;
  abstract dispose(): void;
  abstract completed: Promise<void>;
}

export class ActivityNotLoadedError extends Error {
  constructor() {
    super("the activity has not loaded yet");
  }
}
