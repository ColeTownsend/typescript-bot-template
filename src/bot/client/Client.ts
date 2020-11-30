import { Client } from 'discord.js';
import 'dotenv/config';

class Bot extends Client {
  public constructor() {
    super({
      /* Discord JS Client Options */
      disableMentions: 'everyone',
    });

    this.on('ready', () => {
      console.log('Ready!');
    });
  }

  public start() {
    super.login(process.env.BOT_TOKEN);
  }
}

export default Bot;