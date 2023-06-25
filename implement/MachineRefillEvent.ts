import { IEvent  } from '../interface/IEvent';

export class MachineRefillEvent implements IEvent  {
  private _type: string = "refill";
  private readonly _refill;
  private readonly _machineId;

  constructor(_refill: number, _machineId: string) {
    this._refill = _refill;
    this._machineId = _machineId;
  }

  getRefillQuantity(): number {
    return this._refill;
  }

  machineId(): string {
    return this._machineId;
  }

  type(): string {
    return this._type;
  }
}