// interfaces
import { ISubscriber } from '../interface/ISubscriber';

// implementations
import { MachineSaleEvent } from '../implement/MachineSaleEvent';
import { IPublishSubscribeService } from '../interface/IPublishSubscribeService';

// objects
import { Machine } from '../model/Machine';

export class MachineSaleSubscriber implements ISubscriber {
  constructor(private _machines: Machine[], private _pubSubService: IPublishSubscribeService) {
    this._machines = _machines;
    this._pubSubService = _pubSubService;
  }

  handle(event: MachineSaleEvent): void {
    this._machines[2].stockLevel -= event.getSoldQuantity();
  }
}