// interfaces
import { ISubscriber } from '../interface/ISubscriber';
import { IPublishSubscribeService } from '../interface/IPublishSubscribeService';

// implementations
import { MachineRefillEvent } from '../implement/MachineRefillEvent';
import { StockLevelOkEvent } from '../implement/StockLevelOkEvent';
import { PubSubService } from '../implement/PubSubService';

// objects
import { Machine } from '../model/Machine';

export class MachineRefillSubscriber implements ISubscriber {
  private _machines;
  private _pubSubService: IPublishSubscribeService;
  
  constructor(_machines: Machine[], ) {
    this._machines = _machines;
    this._pubSubService = new PubSubService();
  }

  handle(event: MachineRefillEvent): void {
    const machine = this._machines.find(m => m.id === event.machineId());
    console.log(event)
    if (machine && event.type() === "refill") {
      machine.stockLevel = machine.stockLevel + event.getRefillQuantity();
      if (machine.stockLevel >= 3) {
        machine.isLowStock = false
        this._pubSubService.publish(new StockLevelOkEvent(machine.id))
      }
    }
  }
}