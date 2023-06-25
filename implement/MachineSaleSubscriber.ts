// interfaces
import { ISubscriber } from '../interface/ISubscriber';

// implementations
import { MachineSaleEvent } from '../implement/MachineSaleEvent';
import { LowStockWarningEvent } from '../implement/LowStockWarningEvent';
import { IPublishSubscribeService } from '../interface/IPublishSubscribeService';

// objects
import { Machine } from '../model/Machine';

export class MachineSaleSubscriber implements ISubscriber {
  constructor(private _machines: Machine[], private _pubSubService: IPublishSubscribeService) {
    this._machines = _machines;
    this._pubSubService = _pubSubService;
  }

  handle(event: MachineSaleEvent): void {
    const machine = this._machines.find(m => m.id === event.machineId());
    if (machine) {
      machine.stockLevel = machine.stockLevel - event.getSoldQuantity();
      if (machine.stockLevel < 3) {
        machine.isLowStock = true
        this._pubSubService.publish(new LowStockWarningEvent(machine.id))
      }
    }
  }
}