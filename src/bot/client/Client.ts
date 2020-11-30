import { Client, Collection, Message } from 'discord.js';
import { CommandRegistry } from '../struct/registries/export/RegistryIndex';
import { CommandOptions } from '../types/Options';
import 'dotenv/config';

class Bot extends Client {
  public prefix: string;

  public commands: Collection<string, object>;

  public constructor() {
    super({
      /* Discord JS Client Options */
      disableMentions: 'everyone',
    });

    this.prefix = process.env.prefix ?? '!';

    this.commands = new Collection();

    this.on('ready', () => {
      console.log('Ready!');
    });

    this.on('message', (message: Message) => {
      if (!message.content.startsWith(this.prefix) || message.author.bot) return;
      const args: string[] = message.content.split(/ +/);
      const commandName: string = args[0].slice(this.prefix.length);
      const command: any = this.commands.get(commandName);
      if (command) {
        try {
          command.exec(message, args);
        }
        catch (error) {
          console.log(error);
          message.reply('there was an error running this command.')
        }
      }
    });
  }

  public start() {
    super.login(process.env.BOT_TOKEN);
    CommandRegistry(this);
  }
}

export default Bot;