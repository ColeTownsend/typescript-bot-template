import Event from '../struct/Event';
import { Message, TextChannel, Guild } from 'discord.js';
import 'dotenv/config';

abstract class MessageEvent extends Event {
  constructor() {
    super({
      name: 'message',
    });
  }

  exec(message: Message) {
    if (!message.content.startsWith(this.client.prefix) || message.author.bot) return;
    const args = message.content.split(/ +/);
    const commandName = args[0].slice(this.client.prefix.length);
    const command = this.client.commands.get(commandName);
    if (command) {
      if (command.ownerOnly && message.author.id !== process.env.BOT_OWNER_ID) {
        return message.channel.send('This command can only be used by the owner of the bot.');
      }
      else if (command.guildOnly && !(message.guild instanceof Guild)) {
        return message.channel.send('This command can only be used in a guild.');
      }
      if (message.channel instanceof TextChannel) {
        const userPermissions = command.userPermissions;
        const clientPermissions = command.clientPermissions;
        const missingPermissions = new Array;
        if (userPermissions?.length) {
          for (let i = 0; i < userPermissions.length; i++) {
            const hasPermission = message.member?.hasPermission(userPermissions[i]);
            if (!hasPermission) {
              missingPermissions.push(userPermissions[i]);
            }
          }
          if (missingPermissions.length) {
            return message.channel.send(`Your missing these required permissions: ${missingPermissions.join(', ')}`);
          }
        }
        if (clientPermissions?.length) {
          for (let i = 0; i < clientPermissions.length; i++) {
            const hasPermission = message.guild?.me?.hasPermission(clientPermissions[i]);
            if (!hasPermission) {
              missingPermissions.push(clientPermissions[i]);
            }
          }
          if (missingPermissions.length) {
            return message.channel.send(`I\'m missing these required permissions: ${missingPermissions.join(', ')}`);
          }
        }
      }
      try {
        return command.exec(message, args);
      }
      catch (error) {
        console.log(error);
        message.reply('there was an error running this command.')
      }
    }
  }
}

export default MessageEvent;