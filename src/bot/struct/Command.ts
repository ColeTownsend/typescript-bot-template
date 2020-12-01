import { CommandOptions } from '../types/Options';
import { Message } from 'discord.js';
import Bot from '../client/Client';

abstract class Command {
  public name: string;

  public description: any;

  public abstract client: Bot;

  constructor(options: CommandOptions) {
    this.name = options.name;

    this.description = options?.description;
  }

  public abstract exec(msg: Message, args: string[]): void;
}

export default Command;