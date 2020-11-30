import Command from '../struct/Command';
import { Message } from 'discord.js';

class PingCommand extends Command {
  constructor() {
    super('ping');
  }

  exec(message: Message, args: string[]) {
    return message.reply('Pong!');
  }
}

export default PingCommand;