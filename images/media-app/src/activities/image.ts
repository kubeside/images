import { ActivityNotLoadedError, BaseActivity } from "./index.ts";

export type ImageActivityConfig = {
  type: "image";
  source: string;
  duration: number;
};

export class ImageActivity extends BaseActivity {
  private config: ImageActivityConfig;
  private imageElement?: HTMLImageElement;
  public completed: Promise<void>;
  constructor(config: ImageActivityConfig) {
    super();
    this.config = config;
    this.completed = Promise.reject(new ActivityNotLoadedError());
  }
  public load(parentElement: HTMLElement): void {
    this.imageElement = document.createElement("img");
    parentElement.appendChild(this.imageElement);
    this.imageElement.classList.add("activity", "image-activity");
    this.imageElement.setAttribute("hidden", "");
    this.imageElement.src = this.config.source;
  }

  public show(): void {
    console.log("show called");
    if (this.imageElement === undefined) {
      throw new ActivityNotLoadedError();
    }
    this.imageElement.removeAttribute("hidden");
    console.log("overrode completed");
    this.completed = new Promise<void>((resolve) => {
      setTimeout(resolve, this.config.duration);
    });
  }
  public dispose(): void {
    if (this.imageElement === undefined) {
      return;
    }
    this.imageElement.remove();
  }
}
