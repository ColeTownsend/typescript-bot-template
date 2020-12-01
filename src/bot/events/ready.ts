import Event from '../struct/Event';

abstract class ReadyEvent extends Event {
  constructor() {
    super({
      name: 'ready',
    });
  }

  exec() {
    console.log('Ready!');
  }
}

export default ReadyEvent;