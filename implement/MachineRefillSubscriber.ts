// interfaces
import { ISubscriber } from '../interface/ISubscriber';
import { IEvent } from '../interface/IEvent';

export class MachineRefillSubscriber implements ISubscriber {
  handle(event: IEvent): void {
    throw new Error("Method not implemented.");
  }
}