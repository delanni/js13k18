export default class World {
  private time: number;

  constructor(options: Object = {}) {
    this.time = 0;
  }

  animate(frameTime: number) {
    this.site.animate(frameTime);
  }

  draw(frameTime: number) {
    this.site.draw(frameTime);
  }

  setTime(time: number) {
    this.time = time;
  }
}
