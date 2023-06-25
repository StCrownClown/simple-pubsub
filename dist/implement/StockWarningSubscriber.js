"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockWarningSubscriber = void 0;
const PubSubService_1 = require("../implement/PubSubService");
class StockWarningSubscriber {
    constructor(_machines) {
        this._machines = _machines;
        this._pubSubService = new PubSubService_1.PubSubService();
    }
    handle(event) {
        console.log(event);
        if (event.type() === 'low') {
            console.log("LowStockWarningEvent");
        }
        else {
            console.log("StockLevelOkEvent");
        }
    }
}
exports.StockWarningSubscriber = StockWarningSubscriber;
