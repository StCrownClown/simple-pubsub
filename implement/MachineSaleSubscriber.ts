// interfaces
import { ISubscriber } from '../interface/ISubscriber';
import { IPublishSubscribeService } from '../interface/IPublishSubscribeService';

// implementations
import { MachineSaleEvent } from '../implement/MachineSaleEvent';
import { LowStockWarningEvent } from '../implement/LowStockWarningEvent';
import { PubSubService } from '../implement/PubSubService';

// objects
import { Machine } from '../model/Machine';

export class MachineSaleSubscriber implements ISubscriber {
  private _machines;
  private _pubSubService: IPublishSubscribeService;
  
  constructor(_machines: Machine[], _pubSubService: IPublishSubscribeService) {
    this._machines = _machines;
    this._pubSubService = _pubSubService;
  }

  handle(event: MachineSaleEvent): void {
    const machine = this._machines.find(m => m.id === event.machineId());
    console.log(event)
    if (machine && event.type() === "sale") {
      machine.stockLevel = machine.stockLevel - event.getSoldQuantity();
      if (machine.stockLevel < 3) {
        machine.isLowStock = true
        this._pubSubService.publish(new LowStockWarningEvent(machine.id))
      }
    }
  }
}