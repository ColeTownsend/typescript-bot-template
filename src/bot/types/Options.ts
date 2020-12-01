import { PermissionString } from 'discord.js';

export interface CommandOptions {
  name: string,
  aliases?: string[],
  description: any,
  ownerOnly?: boolean,
  userPermissions?: PermissionString[],
  clientPermissions?: PermissionString[],
};

export interface EventOptions {
  name: string,
  type?: boolean,
};