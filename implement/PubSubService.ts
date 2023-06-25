// interfaces
import { IEvent } from "../interface/IEvent";
import { ISubscriber } from "../interface/ISubscriber";
import { IPublishSubscribeService } from "../interface/IPublishSubscribeService";

export class PubSubService implements IPublishSubscribeService {
  private subscribers: { [type: string]: ISubscriber[] } = {};

  constructor() {
    this.subscribers = {};
  }

  subscribe(type: string, subscriber: ISubscriber): void {
    if (!this.subscribers[type]) {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(subscriber);
  }

  publish(event: IEvent): void {
    const type = event.type();
    if (!this.subscribers[type]) return;

    this.subscribers[type].forEach((subscriber) => {
      subscriber.handle(event);
    });
  }

  unsubscribe(type: string, subscriber: ISubscriber): void {
    const subscribers = this.subscribers[type];
    if (!subscribers) return;

    this.subscribers[type] = subscribers.filter((s) => s !== subscriber);
  }
}
