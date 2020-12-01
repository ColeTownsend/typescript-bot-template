import Command from '../struct/Command';
import { Message } from 'discord.js';

abstract class PingCommand extends Command {
  constructor() {
    super({
      name: 'ping',
      description: 'Pong!',
    });
  }

  exec(message: Message, args: string[]) {
    return message.reply('Pong!');
  }
}

export default PingCommand;