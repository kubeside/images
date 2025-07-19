import { ActivityNotLoadedError, BaseActivity } from "./index.ts";

export type WebActivityConfig = {
  type: "web";
  source: string;
  duration: number;
};

export class WebActivity extends BaseActivity {
  private config: WebActivityConfig;
  private iframeElement?: HTMLIFrameElement;
  public completed: Promise<void>;
  constructor(config: WebActivityConfig) {
    super();
    this.config = config;
    this.completed = Promise.reject(new ActivityNotLoadedError());
  }
  public load(parentElement: HTMLElement): void {
    this.iframeElement = document.createElement("iframe");
    parentElement.appendChild(this.iframeElement);
    this.iframeElement.classList.add("activity", "web-activity");
    this.iframeElement.setAttribute("hidden", "");
    this.iframeElement.src = this.config.source;
  }

  public show(): void {
    console.log("show called");
    if (this.iframeElement === undefined) {
      throw new ActivityNotLoadedError();
    }
    this.iframeElement.removeAttribute("hidden");
    console.log("overrode completed");
    this.completed = new Promise<void>((resolve) => {
      setTimeout(resolve, this.config.duration);
    });
  }
  public dispose(): void {
    if (this.iframeElement === undefined) {
      return;
    }
    this.iframeElement.remove();
  }
}
