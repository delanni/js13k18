import { thing } from "../proxies";

export default class Site {
  feed: any;
  toastNotificationBar: any;
  topMenuBar: any;
  bottomMenuBar: any;
  popup: any;
  keyboard: any;

  animate(time: number) {
    this.parts.forEach(thing.animate(time));
  }

  draw(time: number) {}
}
