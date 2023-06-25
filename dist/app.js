"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// implementations
const MachineRefillEvent_1 = require("./implement/MachineRefillEvent");
const MachineRefillSubscriber_1 = require("./implement/MachineRefillSubscriber");
const MachineSaleEvent_1 = require("./implement/MachineSaleEvent");
const MachineSaleSubscriber_1 = require("./implement/MachineSaleSubscriber");
const PubSubService_1 = require("./implement/PubSubService");
const StockWarningSubscriber_1 = require("./implement/StockWarningSubscriber");
// objects
const Machine_1 = require("./model/Machine");
// helpers
const randomMachine = () => {
    const random = Math.random() * 3;
    if (random < 1) {
        return '001';
    }
    else if (random < 2) {
        return '002';
    }
    return '003';
};
const eventGenerator = () => {
    const random = Math.random();
    if (random < 0.5) {
        const saleQty = Math.random() < 0.5 ? 1 : 2; // 1 or 2
        return new MachineSaleEvent_1.MachineSaleEvent(saleQty, randomMachine());
    }
    const refillQty = Math.random() < 0.5 ? 3 : 5; // 3 or 5
    return new MachineRefillEvent_1.MachineRefillEvent(refillQty, randomMachine());
};
// program
(() => __awaiter(void 0, void 0, void 0, function* () {
    // create 3 machines with a quantity of 10 stock
    const machines = [new Machine_1.Machine('001'), new Machine_1.Machine('002'), new Machine_1.Machine('003')];
    // const pubSubService: IPublishSubscribeService = null as unknown as IPublishSubscribeService; // implement and fix this
    // create a machine sale event subscriber. inject the machines (all subscribers should do this)
    const saleSubscriber = new MachineSaleSubscriber_1.MachineSaleSubscriber(machines);
    const refillSubscriber = new MachineRefillSubscriber_1.MachineRefillSubscriber(machines);
    const stockWarningSubscriber = new StockWarningSubscriber_1.StockWarningSubscriber(machines);
    // const pubSubService: IPublishSubscribeService = null as unknown as IPublishSubscribeService; // implement and fix this
    const pubSubService = new PubSubService_1.PubSubService();
    pubSubService.subscribe('sale', saleSubscriber);
    pubSubService.subscribe('refill', refillSubscriber);
    pubSubService.subscribe('low', stockWarningSubscriber);
    pubSubService.subscribe('ok', stockWarningSubscriber);
    // create 5 random events
    const events = [1, 2, 3, 4, 5].map(i => eventGenerator());
    // publish the events
    events.forEach(event => pubSubService.publish(event));
}))();
