import { ActivityNotLoadedError, BaseActivity } from ".";

export type VideoActivityConfig = {
  type: "video";
  path: string;
};

export class VideoActivity extends BaseActivity {
  private config: VideoActivityConfig;
  private videoElement?: HTMLVideoElement;
  public completed: Promise<void>;
  constructor(config: VideoActivityConfig) {
    super();
    this.config = config;
    this.completed = Promise.reject(new ActivityNotLoadedError());
  }
  public load(parentElement: HTMLElement): void {
    this.videoElement = document.createElement("video");
    parentElement.appendChild(this.videoElement);
    this.videoElement.classList.add("activity", "video-activity");
    this.videoElement.setAttribute("hidden", "");
    this.videoElement.src = this.config.path;
  }

  public show(): void {
    console.log("show called");
    if (this.videoElement === undefined) {
      throw new ActivityNotLoadedError();
    }
    this.videoElement.removeAttribute("hidden");
    console.log("overrode completed");
    this.videoElement.play();
    this.completed = new Promise<void>((resolve) => {
      this.videoElement?.addEventListener("ended", () => resolve())
    });
  }
  public dispose(): void {
    if (this.videoElement === undefined) {
      return;
    }
    this.videoElement.remove();
  }
}