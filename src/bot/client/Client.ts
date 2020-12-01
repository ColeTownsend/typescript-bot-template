import { Client, Collection, Message } from 'discord.js';
import { CommandRegistry, EventRegistry } from '../struct/registries/export/RegistryIndex';
import 'dotenv/config';

class Bot extends Client {
  public prefix: string;

  public commands: Collection<string, object>;

  public events: Collection<string, object>;

  public constructor() {
    super({
      /* Discord JS Client Options */
      disableMentions: 'everyone',
    });

    this.prefix = process.env.prefix ?? '!';

    this.commands = new Collection();

    this.events = new Collection();

    this.on('ready', () => {
      console.log('Ready!');
    });
  }

  public start() {
    super.login(process.env.BOT_TOKEN);
    CommandRegistry(this);
    EventRegistry(this);
  }
}

export default Bot;