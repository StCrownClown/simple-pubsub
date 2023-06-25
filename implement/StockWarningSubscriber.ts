// interfaces
import { ISubscriber } from '../interface/ISubscriber';
import { IPublishSubscribeService } from '../interface/IPublishSubscribeService';
import { IEvent } from '../interface/IEvent';

// implementations
import { PubSubService } from '../implement/PubSubService';

// objects
import { Machine } from '../model/Machine';

export class StockWarningSubscriber implements ISubscriber {
  private _machines;
  private _pubSubService: IPublishSubscribeService;
  
  constructor(_machines: Machine[]) {
    this._machines = _machines;
    this._pubSubService = new PubSubService();
  }
  
  handle(event: IEvent): void {
    console.log(event)
    if (event.type() === 'low') {
      console.log("LowStockWarningEvent");
    } else {
      console.log("StockLevelOkEvent");
    }
  }
}