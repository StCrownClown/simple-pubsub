"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowStockWarningEvent = void 0;
class LowStockWarningEvent {
    constructor(_machineId) {
        this._type = "low";
        this._machineId = _machineId;
    }
    machineId() {
        return this._machineId;
    }
    type() {
        return this._type;
    }
}
exports.LowStockWarningEvent = LowStockWarningEvent;
