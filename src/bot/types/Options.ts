export interface CommandOptions {
  name: string,
  description: any,
  ownerOnly?: boolean | false,
};

export interface EventOptions {
  name: string,
  type?: boolean | false,
};