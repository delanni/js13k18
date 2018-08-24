import World from "./world";
import { fetchConfig, readConfigFromLocalStorage } from "./Config";
import { version } from "./version";

export default class Game {
  isRunning: boolean = false;
  readonly world: World;
  readonly options: any = {};

  constructor(inCodeOptions: Object = {}) {
    const localConfigOptions = fetchConfig("/config.json");
    const localSettings = readConfigFromLocalStorage(version);
    const remoteConfigOptions = {}; // fetchConfig('my/config/site/config.json')
    this.options = Object.assign(
      {},
      inCodeOptions,
      localConfigOptions,
      localSettings,
      remoteConfigOptions
    );
    this.world = new World(this.options["world"]);
  }

  private renderFrame(
    gameTime: number,
    frameRenderTime: number,
    absoluteTime: number
  ) {
    window.requestAnimationFrame(() => {
      const now = Date.now();
      const frameRenderTime = now - absoluteTime;
      if (this.isRunning) {
        this.renderFrame(gameTime + frameRenderTime, frameRenderTime, now);
      } else {
      }
    });

    this.world.setTime(gameTime);

    this.world.animate(frameRenderTime);
    this.world.draw(frameRenderTime);
  }

  run() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.renderFrame(0, 0, Date.now());
    }
  }

  stop() {
    this.isRunning = false;
  }
}
