export interface CommandOptions {
  name: string,
  aliases?: string[],
  description: any,
  ownerOnly?: boolean,
};

export interface EventOptions {
  name: string,
  type?: boolean,
};