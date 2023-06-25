// interfaces
import { IEvent } from '../interface/IEvent';

export interface ISubscriber {
  handle(event: IEvent): void;
}
