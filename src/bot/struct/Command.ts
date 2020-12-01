import { CommandOptions } from '../types/Options';
import { Message, PermissionString } from 'discord.js';
import Bot from '../client/Client';

abstract class Command {
  public name: string;

  public aliases: string[];

  public description: any;

  public ownerOnly: boolean;

  public userPermissions: PermissionString[];

  public abstract client: Bot;

  constructor(options: CommandOptions) {
    this.name = options.name;

    this.aliases = options.aliases ?? [];

    this.description = options?.description;

    this.ownerOnly = options.ownerOnly ?? false;

    this.userPermissions = options.userPermissions ?? [];
  }

  public abstract exec(msg: Message, args: string[]): void;
}

export default Command;