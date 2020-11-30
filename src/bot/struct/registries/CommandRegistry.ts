import Bot from '../../client/Client';
import Command from '../../struct/Command';
import { sync } from 'glob';
import { resolve } from 'path';

const registerCommands: Function = (client: Bot) => {
  const commandFiles = sync(resolve('src/bot/commands/**/*'));
  commandFiles.forEach(file => {
    const commandDefault: { default: any } = require(file);
    const command: Command = new commandDefault.default();
    client.commands.set(command.name, command);
  });
}

export default registerCommands;