// interfaces
import { ISubscriber } from '../interface/ISubscriber';

// implementations
import { MachineSaleEvent } from '../implement/MachineSaleEvent';

// objects
import { Machine } from '../model/Machine';

export class MachineSaleSubscriber implements ISubscriber {
  public machines: Machine[];

  constructor (machines: Machine[]) {
    this.machines = machines; 
  }

  handle(event: MachineSaleEvent): void {
    this.machines[2].stockLevel -= event.getSoldQuantity();
  }
}