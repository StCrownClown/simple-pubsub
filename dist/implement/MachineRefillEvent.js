"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineRefillEvent = void 0;
class MachineRefillEvent {
    constructor(_refill, _machineId) {
        this._type = "refill";
        this._refill = _refill;
        this._machineId = _machineId;
    }
    getRefillQuantity() {
        return this._refill;
    }
    machineId() {
        return this._machineId;
    }
    type() {
        return this._type;
    }
}
exports.MachineRefillEvent = MachineRefillEvent;
