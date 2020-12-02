import { CommandType } from '../types/Options';
import { Message, PermissionString } from 'discord.js';
import Bot from '../client/Client';

abstract class Command {
  public name: string;

  public aliases: string[];

  public description: string;

  public ownerOnly: boolean;

  public guildOnly: boolean;

  public userPermissions: PermissionString[];

  public clientPermissions: PermissionString[];

  public abstract client: Bot;

  constructor(options: CommandType) {
    this.name = options.name;

    this.aliases = options.aliases ?? [];

    this.description = options.description;

    this.ownerOnly = options.ownerOnly ?? false;

    this.guildOnly = options.guildOnly ?? false;

    this.userPermissions = options.userPermissions ?? [];

    this.clientPermissions = options.clientPermissions ?? [];
  }

  public abstract exec(msg: Message, args: string[]): unknown | Promise<unknown>;
}

export default Command;