"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Machine = void 0;
// objects
class Machine {
    constructor(id) {
        this.stockLevel = 10;
        this.isLowStock = false;
        this.id = id;
    }
}
exports.Machine = Machine;
