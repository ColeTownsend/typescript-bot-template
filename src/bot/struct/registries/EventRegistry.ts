import Bot from '../../client/Client';
import Event from '../Event';
import { sync } from 'glob';
import { resolve } from 'path';

const registerEvents: Function = (client: Bot) => {
  const eventFiles = sync(resolve('src/bot/events/**/*'));
  eventFiles.forEach(file => {
    const event: Event = new (require(file).default);
    event.client = client;
    client.events.set(event.name, event);
    client[event.type ? 'once' : 'on'](event.name, (...args: any[]) => event.exec(...args));
  });
}

export default registerEvents;