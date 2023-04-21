/* eslint-disable @typescript-eslint/ban-types */
export class Timer {
  private interval: number;
  private listFunction: Function[];
  private intervalObject: any = 0;
  private isRuning: boolean;

  constructor(interval: number) {
    this.interval = interval;
    this.listFunction = [];
    this.isRuning = false;
  }

  private async exeFunction() {
    if (this.isRuning) return;

    try {
      this.isRuning = true;
      for (const func of this.listFunction) {
        await func();
      }
    } catch (e: any) {
      // nothing
    } finally {
      this.isRuning = false;
    }
  }

  public addFunction(func: Function) {
    this.listFunction.push(func);
  }

  public start() {
    if (this.intervalObject) return;

    this.intervalObject = setInterval(() => {
      this.exeFunction();
    }, this.interval);
  }

  public async exeAndStart() {
    if (this.intervalObject) return;

    await this.exeFunction();

    this.intervalObject = setInterval(() => {
      this.exeFunction();
    }, this.interval);
  }

  public pause() {
    if (this.intervalObject) {
      clearInterval(this.intervalObject);
      this.intervalObject = 0;
    }
  }

  public restart() {
    this.pause();
    this.start();
  }

  public async exeAndRestart() {
    this.pause();
    this.isRuning = false;
    await this.exeFunction();
    this.start();
  }
}
