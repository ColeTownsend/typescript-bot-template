import { Client, Collection } from 'discord.js';
import { CommandRegistry, EventRegistry } from '../struct/registries/export/RegistryIndex';
import { CommandOptions, EventOptions } from '../types/Options';
import 'dotenv/config';

class Bot extends Client {
  public prefix: string;

  public commands = new Collection<string, CommandOptions>();

  public cooldowns = new Collection<string, number>();

  public events = new Collection<string, EventOptions>();

  public constructor() {
    super({
      /* Discord JS Client Options */
      disableMentions: 'everyone',
    });

    this.prefix = process.env.prefix ?? '!';
  }

  public start() {
    CommandRegistry(this);
    EventRegistry(this);
    super.login(process.env.BOT_TOKEN);
  }
}

export default Bot;