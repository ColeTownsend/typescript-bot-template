import { CommandOptions } from '../types/Options';
import { Message } from 'discord.js';

abstract class Command {
  public name: string;

  public description: any;

  constructor(name: string, options?: CommandOptions) {
    this.name = name;

    this.description = options?.description;
  }

  public abstract exec(msg: Message, args: string[]): Promise<any>;
}

export default Command;