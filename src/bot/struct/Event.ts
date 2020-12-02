import { EventOptions } from '../types/Options';
import Bot from '../client/Client'

abstract class Event {
  public name: string;

  public type: boolean;

  public emitter: string;

  public abstract client: Bot;

  constructor(options: EventOptions) {
    this.name = options.name;

    this.type = options.once ?? false;

    this.emitter = options.emitter ?? '';
  }

  public abstract exec(...args: any[]): unknown | Promise<unknown>;
}

export default Event;