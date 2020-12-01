import Bot from '../../client/Client';
import Event from '../Event';
import { sync } from 'glob';
import { resolve } from 'path';

const registerEvents: Function = (client: Bot) => {
  const eventFiles = sync(resolve('src/bot/events/**/*'));
  eventFiles.forEach(file => {
    const File = require(file).default;
    const event: Event = new File();
    event.client = client;
    client.events.set(event.name, event);
    client.on(event.name, (...args) => event.exec(...args));
  });
}

export default registerEvents;