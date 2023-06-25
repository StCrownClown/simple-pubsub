// interfaces
import { ISubscriber } from '../interface/ISubscriber';

// implementations
import { MachineRefillEvent } from '../implement/MachineRefillEvent';
import { StockLevelOkEvent } from '../implement/StockLevelOkEvent';
import { IPublishSubscribeService } from '../interface/IPublishSubscribeService';

// objects
import { Machine } from '../model/Machine';

export class MachineRefillSubscriber implements ISubscriber {
  constructor(private _machines: Machine[], private _pubSubService: IPublishSubscribeService) {
    this._machines = _machines;
    this._pubSubService = _pubSubService;
  }

  handle(event: MachineRefillEvent): void {
    const machine = this._machines.find(m => m.id === event.machineId());
    if (machine) {
      machine.stockLevel = machine.stockLevel + event.getRefillQuantity();
      if (machine.stockLevel >= 3) {
        machine.isLowStock = false
        this._pubSubService.publish(new StockLevelOkEvent(machine.id))
      }
    }
  }
}