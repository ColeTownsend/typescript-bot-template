import Event from '../struct/Event';
import { Message } from 'discord.js';

abstract class MessageEvent extends Event {
  constructor() {
    super({
      name: 'message',
    });
  }

  exec(message: Message) {
    if (!message.content.startsWith(this.client.prefix) || message.author.bot) return;
    const args: string[] = message.content.split(/ +/);
    const commandName: string = args[0].slice(this.client.prefix.length);
    const command: any = this.client.commands.get(commandName);
    if (command) {
      try {
        command.exec(message, args);
      }
      catch (error) {
        console.log(error);
        message.reply('there was an error running this command.')
      }
    }
  }
}

export default MessageEvent;