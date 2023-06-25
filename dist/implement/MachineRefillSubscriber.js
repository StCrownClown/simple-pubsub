"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineRefillSubscriber = void 0;
const StockLevelOkEvent_1 = require("../implement/StockLevelOkEvent");
const PubSubService_1 = require("../implement/PubSubService");
class MachineRefillSubscriber {
    constructor(_machines) {
        this._machines = _machines;
        this._pubSubService = new PubSubService_1.PubSubService();
    }
    handle(event) {
        const machine = this._machines.find(m => m.id === event.machineId());
        console.log(event);
        if (machine && event.type() === "refill") {
            machine.stockLevel = machine.stockLevel + event.getRefillQuantity();
            if (machine.stockLevel >= 3) {
                machine.isLowStock = false;
                this._pubSubService.publish(new StockLevelOkEvent_1.StockLevelOkEvent(machine.id));
            }
        }
    }
}
exports.MachineRefillSubscriber = MachineRefillSubscriber;
