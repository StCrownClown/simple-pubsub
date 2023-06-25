import { ISubscriber } from '../interface/ISubscriber';
import { IEvent } from '../interface/IEvent';
import { IPublishSubscribeService } from '../interface/IPublishSubscribeService';
import { Machine } from '../model/Machine';

export class MachineRefillSubscriber implements ISubscriber {
  constructor(private _machines: Machine[], private _pubSubService: IPublishSubscribeService) {
    this._machines = _machines;
    this._pubSubService = _pubSubService;
  }

  handle(event: IEvent): void {
    throw new Error("Method not implemented.");
  }
}