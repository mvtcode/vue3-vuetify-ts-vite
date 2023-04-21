import type { Timer } from "./timer";

export class TimerManager {
  private mapTimer: { [key: string]: Timer };
  private static instance: TimerManager;

  private constructor() {
    this.mapTimer = {};
  }

  public static getInstance(): TimerManager {
    if (!this.instance) {
      this.instance = new TimerManager();
    }
    return this.instance;
  }

  public setTimer(key: string, timer: Timer) {
    this.mapTimer[key] = timer;
  }

  public getTimer(key: string): Timer | undefined {
    return this.mapTimer[key];
  }
}
