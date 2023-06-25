// interfaces
import { IEvent } from '../interface/IEvent';
import { ISubscriber } from '../interface/ISubscriber';

export interface IPublishSubscribeService {
  publish(event: IEvent): void;
  subscribe(type: string, handler: ISubscriber): void;
  // unsubscribe ( /* Question 2 - build this feature */ );
  unsubscribe(type: string, handler: ISubscriber): void;
}
