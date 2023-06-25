import { IEvent } from '../interface/IEvent';

export class MachineRefillEvent implements IEvent {
  private _type: string = "refill";
  
  constructor(private readonly _refill: number, private readonly _machineId: string) {
    this._refill = _refill;
    this._machineId = _machineId;
  }

  getRefill(): number {
    return this._refill;
  }

  machineId(): string {
    return this._machineId;
  }

  type(): string {
    return this._type;
  }
}