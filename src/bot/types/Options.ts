import { PermissionString, Message } from 'discord.js';

export interface CommandOptions {
  name: string,
  aliases?: string[],
  description: string,
  ownerOnly?: boolean,
  guildOnly?: boolean,
  userPermissions?: PermissionString[],
  clientPermissions?: PermissionString[],
  exec: (msg: Message, args: string[]) => unknown | Promise<unknown>,
};

export type CommandType = Omit<CommandOptions, 'exec'>;

export interface EventOptions {
  name: string,
  type?: boolean,
};