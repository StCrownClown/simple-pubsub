"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockLevelOkEvent = void 0;
class StockLevelOkEvent {
    constructor(_machineId) {
        this._machineId = _machineId;
        this._type = "ok";
        this._machineId = _machineId;
    }
    machineId() {
        return this._machineId;
    }
    type() {
        return this._type;
    }
}
exports.StockLevelOkEvent = StockLevelOkEvent;
