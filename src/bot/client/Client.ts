import { Client, Message } from 'discord.js';
import 'dotenv/config';

class Bot extends Client {
  public prefix: string | undefined;

  public constructor() {
    super({
      /* Discord JS Client Options */
      disableMentions: 'everyone',
    });

    this.prefix = process.env.prefix;

    this.on('ready', () => {
      console.log('Ready!');
    });

    this.on('message', (message: Message) => {
      if (message.content === this.prefix + 'ping') {
        message.reply('Pong!')
      }
    });
  }

  public start() {
    super.login(process.env.BOT_TOKEN);
  }
}

export default Bot;