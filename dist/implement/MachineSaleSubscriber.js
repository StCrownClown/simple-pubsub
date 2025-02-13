"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineSaleSubscriber = void 0;
const LowStockWarningEvent_1 = require("../implement/LowStockWarningEvent");
class MachineSaleSubscriber {
    constructor(_machines, _pubSubService) {
        this._machines = _machines;
        this._pubSubService = _pubSubService;
    }
    handle(event) {
        const machine = this._machines.find(m => m.id === event.machineId());
        console.log(event);
        if (machine) {
            machine.stockLevel = machine.stockLevel - event.getSoldQuantity();
            if (machine.stockLevel < 3 && machine.isLowStock) {
                machine.isLowStock = true;
                this._pubSubService.publish(new LowStockWarningEvent_1.LowStockWarningEvent(machine.id));
            }
        }
    }
}
exports.MachineSaleSubscriber = MachineSaleSubscriber;
