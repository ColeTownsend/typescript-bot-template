import Bot from '../../client/Client';
import Command from '../../struct/Command';
import { sync } from 'glob';
import { resolve } from 'path';

const registerCommands: Function = (client: Bot) => {
  const commandFiles = sync(resolve('src/bot/commands/**/*'));
  commandFiles.forEach((file) => {
    const command: Command = new (require(file).default);
    command.client = client;
    client.commands.set(command.name, command);
  });
}

export default registerCommands;