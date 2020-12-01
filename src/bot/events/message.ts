import Event from '../struct/Event';
import { Message } from 'discord.js';
import 'dotenv/config';

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
    const command: any = this.client.commands.get(commandName) 
      ?? this.client.commands.find((cmd: any) => cmd.aliases && cmd.aliases.includes(commandName));
    if (command) {
      if (command.ownerOnly && message.author.id !== process.env.BOT_OWNER_ID) {
        return message.channel.send('This command can only be used by the owner of the bot.');
      }
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