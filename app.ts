// interfaces
import { IEvent } from './interface/IEvent';
import { ISubscriber } from './interface/ISubscriber';
import { IPublishSubscribeService } from './interface/IPublishSubscribeService';

// implementations
import { MachineRefillEvent } from './implement/MachineRefillEvent';
import { MachineRefillSubscriber } from './implement/MachineRefillSubscriber';
import { MachineSaleEvent } from './implement/MachineSaleEvent';
import { MachineSaleSubscriber } from './implement/MachineSaleSubscriber';
import { PubSubService } from './implement/PubSubService';
import { StockWarningSubscriber } from './implement/StockWarningSubscriber';

// objects
import { Machine } from './model/Machine';

// helpers
const randomMachine = (): string => {
  const random = Math.random() * 3;
  if (random < 1) {
    return '001';
  } else if (random < 2) {
    return '002';
  }
  return '003';

}

const eventGenerator = (): IEvent => {
  const random = Math.random();
  if (random < 0.5) {
    const saleQty = Math.random() < 0.5 ? 1 : 2; // 1 or 2
    return new MachineSaleEvent(saleQty, randomMachine());
  } 
  const refillQty = Math.random() < 0.5 ? 3 : 5; // 3 or 5
  return new MachineRefillEvent(refillQty, randomMachine());
}


// program
(async () => {
  // create 3 machines with a quantity of 10 stock
  const machines: Machine[] = [ new Machine('001'), new Machine('002'), new Machine('003') ];

  // const pubSubService: IPublishSubscribeService = null as unknown as IPublishSubscribeService; // implement and fix this

  const pubSubService = new PubSubService();

  // create a machine sale event subscriber. inject the machines (all subscribers should do this)
  const saleSubscriber = new MachineSaleSubscriber(machines, pubSubService);
  const refillSubscriber = new MachineRefillSubscriber(machines, pubSubService);
  const stockWarningSubscriber = new StockWarningSubscriber(machines);

  pubSubService.subscribe('sale', saleSubscriber);
  pubSubService.subscribe('refill', refillSubscriber);
  pubSubService.subscribe('low', stockWarningSubscriber);
  pubSubService.subscribe('ok', stockWarningSubscriber);

  // create 5 random events
  const events = [1,2,3,4,5].map(i => eventGenerator());

  // publish the events
  events.forEach(event => pubSubService.publish(event));
})();
