import { EventOptions } from '../types/Options';
import Bot from '../client/Client'

abstract class Event {
  public name: string;

  public once: boolean;

  public abstract client: Bot;

  constructor(options: EventOptions) {
    this.name = options.name;

    this.once = options.type ?? false;
  }

  public abstract exec(...args: any[]): unknown | Promise<unknown>;
}

export default Event;