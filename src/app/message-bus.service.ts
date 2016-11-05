import { Injectable, EventEmitter } from '@angular/core';


export enum Events {
  UserRegistered = 1,
  HttpError = 2,
}

export interface IMessage {
  eventId: Events;
  data: any;
}

@Injectable()
export class MessageBusService {

  events: EventEmitter<IMessage>;

  constructor() {
    this.events = new EventEmitter<IMessage>(true);
  }
}
