"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineSaleEvent = void 0;
class MachineSaleEvent {
    constructor(_sold, _machineId) {
        this._type = "sale";
        this._sold = _sold;
        this._machineId = _machineId;
    }
    machineId() {
        return this._machineId;
    }
    getSoldQuantity() {
        return this._sold;
    }
    type() {
        return this._type;
    }
}
exports.MachineSaleEvent = MachineSaleEvent;
